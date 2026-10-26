// Post-build checks on dist/ using only Node built-ins.
//   npm test                 -> structural, SEO, accessibility and internal-link checks
//   npm test -- --external   -> also requests every external link
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const checkExternal = process.argv.includes('--external');
const failures = [];
const fail = (msg) => failures.push(msg);

if (!existsSync(DIST)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

// Pages that must keep their Wix URLs, mapped to built files (Vercel cleanUrls).
const REQUIRED = { '/': 'index.html', '/empowering-immigrants': 'empowering-immigrants.html', '/empowering-immigrants-1': 'empowering-immigrants-1.html' };

const resolveInternal = (url) => {
  const path = decodeURIComponent(url.split(/[?#]/)[0]);
  if (path === '/' || path === '') return 'index.html';
  const rel = path.replace(/^\//, '');
  if (existsSync(join(DIST, rel)) && statSync(join(DIST, rel)).isFile()) return rel;
  if (!extname(rel) && existsSync(join(DIST, `${rel}.html`))) return `${rel}.html`;
  return null;
};

const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)(?:="([^"]*)")?/g)].slice(1).map((m) => [m[1], m[2] ?? '']));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map((m) => attrs(m[0]));
const externals = new Set();

const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));
const textFiles = walk(DIST).filter((f) => /\.(html|css|js|xml|txt)$/.test(f));
for (const f of textFiles) {
  if (/wixstatic|parastorage|wix\.com|wixapps/i.test(readFileSync(f, 'utf8'))) fail(`${f.replace(DIST, '')}: references Wix`);
}

for (const [route, file] of Object.entries(REQUIRED)) {
  if (!existsSync(join(DIST, file))) { fail(`${route}: missing ${file}`); continue; }
  const html = readFileSync(join(DIST, file), 'utf8');
  const where = `${route}`;

  if (!/<html lang="en"/.test(html)) fail(`${where}: <html lang> missing`);
  if (!/<title>[^<]+<\/title>/.test(html)) fail(`${where}: <title> missing`);
  if (!/<meta name="description" content="[^"]{50,}"/.test(html)) fail(`${where}: meta description missing/short`);
  const expected = `https://www.empoweringimmigrants.com${route === '/' ? '' : route}`;
  if (!html.includes(`<link rel="canonical" href="${expected}">`)) fail(`${where}: canonical should be ${expected}`);
  if (!html.includes(`<meta property="og:url" content="${expected}">`)) fail(`${where}: og:url should be ${expected}`);
  if (!html.includes(`href="${route}" aria-current="page"`)) fail(`${where}: nav link lacks aria-current`);
  if (!/property="og:image"/.test(html)) fail(`${where}: og:image missing`);
  if (!/rel="icon"/.test(html)) fail(`${where}: favicon missing`);
  const h1s = html.match(/<h1\b/g)?.length ?? 0;
  if (h1s !== 1) fail(`${where}: expected 1 <h1>, found ${h1s}`);

  // Heading levels must not skip (h1 -> h3).
  let prev = 0;
  for (const m of html.matchAll(/<h([1-6])\b/g)) {
    const lvl = Number(m[1]);
    if (prev && lvl > prev + 1) fail(`${where}: heading jumps from h${prev} to h${lvl}`);
    prev = lvl;
  }

  for (const img of tags(html, 'img')) {
    if (!('alt' in img)) fail(`${where}: <img src="${img.src}"> has no alt`);
    if (!img.width || !img.height) fail(`${where}: <img src="${img.src}"> lacks width/height`);
  }
  for (const el of tags(html, 'iframe')) if (!el.title) fail(`${where}: <iframe> has no title`);

  // Every form control needs a label.
  for (const input of [...tags(html, 'input'), ...tags(html, 'textarea')]) {
    if (input.type === 'hidden') continue;
    if (!input.id || !html.includes(`for="${input.id}"`)) fail(`${where}: form control ${input.name} has no <label>`);
  }

  const refs = [
    ...tags(html, 'a').map((a) => a.href),
    ...tags(html, 'img').flatMap((i) => [i.src, ...(i.srcset ?? '').split(',').map((s) => s.trim().split(' ')[0])]),
    ...tags(html, 'source').map((s) => s.src),
    ...tags(html, 'video').map((v) => v.poster),
    ...tags(html, 'link').map((l) => l.href),
    ...tags(html, 'script').map((s) => s.src),
  ].filter(Boolean);
  for (const ref of refs) {
    if (/^https?:\/\//.test(ref)) {
      if (!ref.startsWith('https://www.empoweringimmigrants.com')) externals.add(ref);
    } else if (ref.startsWith('/')) {
      if (!resolveInternal(ref)) fail(`${where}: broken internal reference ${ref}`);
      if (ref.includes('#')) {
        const [page, id] = ref.split('#');
        const target = readFileSync(join(DIST, resolveInternal(page)), 'utf8');
        if (!target.includes(`id="${id}"`)) fail(`${where}: anchor ${ref} has no target`);
      }
    } else if (!/^(mailto:|tel:|#)/.test(ref)) {
      fail(`${where}: unexpected relative reference ${ref}`);
    }
  }

  for (const a of tags(html, 'a').filter((a) => a.target === '_blank')) {
    if (!/noopener/.test(a.rel ?? '')) fail(`${where}: target=_blank without rel=noopener (${a.href})`);
  }
}

// Content that must survive the migration verbatim.
const home = readFileSync(join(DIST, 'index.html'), 'utf8');
for (const needle of [
  'href="https://flash-cards-olive.vercel.app/"',
  'mailto:empoweringimmigrants@gmail.com',
  'mailto:Cambeirokatelyn@gmail.com',
  '702-217-3540',
  'id="contact"',
]) if (!home.includes(needle)) fail(`/: missing ${needle}`);

// Contact is email-only: a mailto call to action and no leftover form.
if (!home.includes('class="button email-card__primary" href="mailto:empoweringimmigrants@gmail.com"')) fail('/: "Email us" button missing');
if (/<form\b/.test(home)) fail('/: unexpected <form> (contact is email-only)');

for (const f of ['sitemap.xml', 'robots.txt', '404.html', 'favicon.ico', 'favicon.svg', 'apple-touch-icon.png']) {
  if (!existsSync(join(DIST, f))) fail(`missing ${f}`);
}

if (checkExternal) {
  console.log(`Checking ${externals.size} external links...`);
  await Promise.all([...externals].map(async (url) => {
    try {
      const res = await fetch(url, { method: 'GET', redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0 (link check)' }, signal: AbortSignal.timeout(15000) });
      // Facebook and LinkedIn often answer bots with 4xx/999; report rather than fail.
      const soft = /facebook\.com|linkedin\.com/.test(url);
      const line = `  ${res.status} ${url}`;
      if (res.ok) console.log(line);
      else if (soft) console.log(`${line}  (social sites block automated checks; verify manually)`);
      else fail(`external link ${url} returned ${res.status}`);
    } catch (e) {
      fail(`external link ${url} failed: ${e.message}`);
    }
  }));
}

if (failures.length) {
  console.error(`\n${failures.length} problem(s):\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
console.log(`All checks passed for ${Object.keys(REQUIRED).length} pages (${externals.size} external links found).`);
