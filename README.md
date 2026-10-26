# Empowering Immigrants website

Static rebuild of https://www.empoweringimmigrants.com, migrated off Wix. It is built with
[Astro](https://astro.build) (static output, TypeScript, plain CSS) and hosted on Vercel.
There's no database, CMS, or Wix code; all images, fonts, and video are served from this repo.

- `docs/INVENTORY.md`: what was on the Wix site and how each part was migrated
- `docs/OWNER-REVIEW.md`: **typos, outdated facts and image rights that need the owner's decision**

The LEAF app (https://flash-cards-olive.vercel.app/) is a separate project. This site only links to it.

## Project layout

```
src/
  data/site.ts         nav labels, contact details, social links, copyright (edit content here)
  data/images.ts       list of optimized images and their sizes
  layouts/Base.astro   <head> (SEO, Open Graph, favicons, JSON-LD), header, footer
  components/          Header (responsive nav), Footer, EmailContact, Img, Logo, …
  pages/               index, empowering-immigrants, empowering-immigrants-1, 404, sitemap.xml, robots.txt
  styles/global.css    all styles; brand colors are CSS variables at the top
public/
  images/  fonts/  media/  favicon.*  apple-touch-icon.png
scripts/verify-dist.mjs   post-build checks (npm test)
vercel.json               clean URLs, redirects, security headers, caching
```

## Local setup

Requires Node.js 22.23.4 or newer (`.nvmrc` pins 24).

```sh
npm install
npm run dev                 # http://localhost:4321, reloads on save
```

## Build and test

```sh
npm run build               # type-checks (astro check), then writes dist/
npm test                    # checks dist/: pages, titles, canonicals, headings, alt text,
                            # form labels, internal links/anchors, no Wix references,
                            # contact details, LEAF link, email button
npm test -- --external      # also requests every external link
npm run preview             # serve dist/ locally
```

`npm run preview` doesn't apply `vercel.json`, so redirects and headers only take effect on Vercel.

Checks run during the migration (2026-10-25): visual comparison against the Wix site at
1440/1024/390/320 px with no horizontal scrolling; axe-core (WCAG 2.2 AA + best practices)
with zero violations on every page at desktop and mobile; mobile menu and keyboard (Escape)
tests, including with JavaScript disabled; the email button and copy-address button; the production CSP from `vercel.json`, with no violations.

## Deploy: GitHub → Vercel (preview first)

1. Push this repo to GitHub (for example `github.com/<org>/empowering-immigrants`).
2. In Vercel, go to **Add New… → Project**, import the repo, and accept the detected settings
   (Framework: Astro, Build: `npm run build`, Output: `dist`; these are also in `vercel.json`).
3. Deploy. Vercel gives a `*.vercel.app` URL. **Review the site there before touching DNS.**
   Vercel marks preview deployments as non-indexable, so search engines won't index them.
4. After that, every push to `main` deploys to production and every pull request gets its own
   preview URL.

## Contact

The contact section is email-only. There's no form, no third-party service, and nothing
to configure. The "Email us" button opens the visitor's mail app addressed to
empoweringimmigrants@gmail.com. "Copy address" copies the address for visitors who use
webmail and have no mail app set up (it only appears in browsers that support copying).
To change the address, edit `CONTACT.emails` in `src/data/site.ts`; the first entry is the
main one.

## DNS migration (do only after the preview is approved)

Current state (read-only lookup, 2026-10-25): the domain is **registered with Wix**,
DNS is on Wix nameservers (`ns14/ns15.wixdns.net`), `www` is a CNAME to Wix, and there are
**no MX records**. No email is hosted on this domain (the published addresses are Gmail),
so a DNS change won't affect email. Check again right before switching.

1. In Vercel, go to **Project → Settings → Domains** and add `www.empoweringimmigrants.com`
   and `empoweringimmigrants.com`. Set the apex to redirect to `www`, which matches the
   current canonical URLs. Vercel shows the DNS records it expects.
2. In Wix, go to **Domains → empoweringimmigrants.com → Manage DNS records**. Before changing
   anything, **screenshot every existing record** (this is your rollback copy).
3. Change the records to what Vercel shows, which is usually:
   - `A` record for `@` → `76.76.21.21`
   - `CNAME` record for `www` → `cname.vercel-dns.com`

   Use the exact values Vercel displays, not these. Wix may require you to disconnect
   the domain from the Wix site before it lets you edit these records.
4. Wait for Vercel to show both domains as **Valid** and issue HTTPS certificates. This takes
   minutes to a few hours. Then check `/`, `/empowering-immigrants`, `/empowering-immigrants-1`
   and the email button on the real domain.
5. Optional, later: transfer the domain registration away from Wix (to Vercel or another
   registrar). Moving DNS records doesn't move the registration.

**Keep the Wix site and plan active until the new site has run correctly for a few weeks.**
The domain is registered through Wix, so check how a plan change affects domain renewal before
cancelling anything.

## Rollback

- **Bad deploy:** in Vercel, open **Deployments**, find the last good deployment, and click
  **… → Promote to Production** (Instant Rollback). This takes effect in seconds.
- **Bad code change:** `git revert <commit>` and push; Vercel redeploys automatically.
- **Back to Wix entirely:** in Wix DNS, restore the records from the screenshot in step 2
  (the `A` records and the `www` CNAME to Wix), or reconnect the domain to the Wix site in
  Wix's domain settings. The Wix site is unchanged by this migration, so it works again as
  soon as DNS propagates.

## Editing content

- Text: edit `src/pages/*.astro`. Contact details, nav labels, and social links are in `src/data/site.ts`.
- Images: add a resized `.webp` file to `public/images/` named `<name>-<width>.webp` and list it
  in `src/data/images.ts`. Replacing the hero image (see OWNER-REVIEW A1) only means overwriting
  the three `hero-*.webp` files.
- Brand colors and fonts: CSS variables at the top of `src/styles/global.css`.

## Credits and licenses

Fonts: Oswald and Raleway, SIL Open Font License 1.1 (`public/fonts/OFL-*.txt`).
Photos: road by Frederik Löwer and swing by Myles Tan, both under the Unsplash License. All other
photos and screenshots belong to Empowering Immigrants; see `docs/OWNER-REVIEW.md` for the items
that still need confirmation.
