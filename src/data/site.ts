// Site-wide content kept in one place so the owner's approved edits (see
// docs/OWNER-REVIEW.md) touch a single file.

export const SITE_NAME = 'EMPOWERING IMMIGRANTS';

// Labels are copied verbatim from the Wix menu, including the two near-identical
// entries. Renaming them is an open owner decision.
export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/empowering-immigrants', label: 'Empowering Immigrants' },
  { href: '/empowering-immigrants-1', label: 'EMPOWERING IMMIGRANTS' },
] as const;

export const CONTACT = {
  emails: ['empoweringimmigrants@gmail.com', 'Cambeirokatelyn@gmail.com'],
  phone: { display: '702-217-3540', tel: '+17022173540' },
} as const;

// The Wix site links two different Facebook URLs (one in the contact block, one
// in the footer). Both are kept as published until the owner confirms which is current.
export const SOCIAL = {
  contact: {
    facebook: 'https://www.facebook.com/empowerimmigrants/',
    linkedin: 'https://www.linkedin.com/in/jordyn-cambeiro-0293b123a/',
  },
  footer: {
    facebook: 'https://www.facebook.com/Empowering-Immigrants-100953902424549',
    linkedin: 'https://www.linkedin.com/in/jordyn-cambeiro-0293b123a/',
  },
} as const;

export const LEAF_URL = 'https://flash-cards-olive.vercel.app/';

export const COPYRIGHT = '©2021 by Empower Immigrants.';

/** Public route for the current page: `/empowering-immigrants.html` and `/index.html`
 *  (what Astro reports with `build.format: 'file'`) become `/empowering-immigrants` and `/`. */
export const routePath = (pathname: string) =>
  pathname.replace(/(\/index)?\.html$/, '').replace(/\/$/, '') || '/';
