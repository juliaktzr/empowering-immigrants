// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Canonical production origin. Used for canonical URLs, Open Graph and the sitemap.
  site: 'https://www.empoweringimmigrants.com',
  output: 'static',
  // Wix served pages without a trailing slash (/empowering-immigrants). `file` output plus
  // Vercel's `cleanUrls` keeps those exact URLs.
  trailingSlash: 'never',
  build: { format: 'file' },
});
