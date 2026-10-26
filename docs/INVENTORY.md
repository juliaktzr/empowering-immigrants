# Source site inventory and migration plan

Source: https://www.empoweringimmigrants.com/ (Wix, site revision 281), inspected 2026-10-25.
The Wix sitemap (`/sitemap.xml` → `/pages-sitemap.xml`) lists exactly three pages.

## Pages

| URL | Wix `<title>` | Rebuilt as |
| --- | --- | --- |
| `/` | Home \| EMPOWERING IMMIGRANTS | `src/pages/index.astro` |
| `/empowering-immigrants` | Empowering Immigrants \| EMPOWERING IMMIGRANTS | `src/pages/empowering-immigrants.astro` |
| `/empowering-immigrants-1` | EMPOWERING IMMIGRANTS \| EMPOWERING IMMIGRANTS | `src/pages/empowering-immigrants-1.astro` |

Titles and canonical URLs are kept exactly as they were. Wix had no meta descriptions; new ones were drafted (see OWNER-REVIEW.md).

## Home page sections (in order)

1. **Header**: circular logo mark, "EMPOWERING IMMIGRANTS" wordmark, 3-item menu.
2. **Hero**: full-bleed photo with H1 "EXPERIENCE EMPOWERING IMMIGRANTS".
3. **Our Mission**: classroom photo + text, black background.
4. **The Drive Behind the Organization**: mural photo + 4 paragraphs about Arturo Cambeiro.
5. **Quote**: two student photos flanking the Arturo Cambeiro quote.
6. **Learning English in a Flash** (yellow): LEAF app copy, 7 bullets, link to https://flash-cards-olive.vercel.app/ (new tab), 4 app screenshots (static images; the arrows are part of the screenshots, not a carousel).
7. **Ways We Help**: swing photo background + paragraph.
8. **Featured Media**: KTNV "Positively Las Vegas" video (Wix-hosted MP4) + KTNV logo; YouTube embed `9iRQ6oIAnak` ("Jóvenes ayudan a niños aprender el inglés", Noticias Colorado) + Univision logo.
9. **Contact** (on Wix): blurb, 2 emails, phone, Facebook + LinkedIn; big "EMPOWERING IMMIGRANTS" heading; Wix form (Name*, Email*, Phone, Address, Subject, Message) with "Thanks for submitting!".
10. **Footer**: Facebook + LinkedIn icons, "©2021 by Empower Immigrants. Proudly created with Wix.com".

Inner pages share one Wix template: road photo on the left, yellow H1, centered copy, yellow "Get in Touch" button.

## Interactive features

| Wix feature | Migration |
| --- | --- |
| Menu (with Wix "More" overflow) | Static nav; hamburger toggle under 860px; works without JS |
| Contact form (Wix Forms) | **Replaced** with an email panel ("Email us" mailto button + copy-address button), at the owner's request |
| "Let's Chat!" Wix Chat widget | **Removed**, since it is Wix-only. The email panel replaces it. |
| Wix video player | Native `<video>`, self-hosted MP4, `preload="none"` |
| YouTube embed | `youtube-nocookie.com` iframe, lazy-loaded |
| "Get in Touch" buttons | Link to `/#contact` (see OWNER-REVIEW.md) |

## Links

Internal: `/`, `/empowering-immigrants`, `/empowering-immigrants-1`.
External: LEAF app, two Facebook URLs, one LinkedIn profile, two `mailto:` links. The phone number was plain text on Wix and is now a `tel:` link.

## Plan (as implemented)

1. Astro 7 static site, TypeScript strict, plain CSS. The only runtime dependency is `astro`.
2. Brand tokens from the Wix theme: black `#000`, dark `#191919`, yellow `#FFC03A`, white; Oswald (display) and Raleway (body), self-hosted under the OFL.
3. Original uploads downloaded at full resolution, converted to resized WebP with EXIF/GPS metadata stripped, and served from `/public`.
4. `build.format: 'file'` plus Vercel `cleanUrls` keep the exact URLs with no trailing slash. Redirects cover `/home`, `/index`, `*.html` and trailing slashes.
5. SEO: titles, canonicals, descriptions, Open Graph/Twitter cards, JSON-LD `NGO`, `sitemap.xml`, `robots.txt`, favicons, 404 page.
6. Accessibility: semantic landmarks, one H1 per page, sequential headings, alt text, skip link, visible focus, live-region copy confirmation, AA contrast.
7. Verification: `npm test` (structure, SEO, links, email button), plus browser checks with screenshots, axe-core, nav and copy-button interaction, and CSP (described in README).
