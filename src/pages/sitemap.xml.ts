import type { APIRoute } from 'astro';
import { NAV } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const urls = NAV.map(({ href }) => new URL(href, site).href.replace(/\/$/, ''));
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
