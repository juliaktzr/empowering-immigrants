# Items for owner approval

Site copy was migrated **verbatim**, typos included. Nothing below has been changed
without approval except the items marked **Changed**, which were necessary for the
site to be honest, functional, or accessible. Reply with approve/reject per item; most
edits are in `src/pages/*.astro` or `src/data/site.ts`.

## A. Assets: rights and replacement files needed

| # | Asset | Where | Status / action needed |
| --- | --- | --- | --- |
| A1 | Hero photo "School Kids" (Wix stock `11062b_…`) | Home hero | **Resolved.** Not migrated, since Wix stock media is licensed only for Wix sites. Decision: the hero uses the organization's own classroom photo, the same one shown in "Our Mission". To change it later, replace `public/images/hero-{960,1600,2400}.webp`. |
| A2 | **Logo "Black and White Star in Circle"** (Wix clip art) | Header | **Not migrated.** Replaced with a similar placeholder SVG (`src/components/Logo.astro`, `public/favicon.svg`). **Provide the organization's real logo** (SVG preferred). |
| A3 | Favicon | Browser tab | Wix used its own default Wix favicon. New favicons come from the placeholder mark; regenerate them when A2 arrives. |
| A4 | KTNV "Positively Las Vegas" video (`public/media/ktnv-positively-las-vegas.mp4`, 29 MB) | Featured Media | Uploaded to Wix by the organization, but the footage belongs to KTNV. **Confirm you have permission to self-host it**, or ask KTNV for a public link to embed instead. It has no captions; ask KTNV for a caption file (WCAG 1.2.2). |
| A5 | KTNV and Univision logos | Featured Media | Third-party trademarks, used only to say "as featured in". This is generally accepted, but confirm you're comfortable with it. |
| A6 | Organization photos (classroom, mural, students with flash cards) and LEAF screenshots | Home | Treated as the organization's own uploads. **Several show identifiable minors. Confirm photo/media consent is on file** for continued publication. Location metadata (EXIF/GPS) was stripped from all files. |
| A7 | Road photo (Frederik Löwer) and swing photo (Myles Tan) | Inner pages / Ways We Help | Unsplash images, free to reuse under the Unsplash License. No action needed. |
| A8 | Oswald and Raleway fonts | Site-wide | SIL Open Font License; license files are in `public/fonts/`. No action needed. |
| A9 | Facebook/LinkedIn icons | Contact, footer | Wix icons replaced with simple inline SVGs. No action needed. |

## B. Content changed (necessary)

| # | Was | Now | Why |
| --- | --- | --- | --- |
| B1 | "©2021 by Empower Immigrants. Proudly created with Wix.com" | "©2021 by Empower Immigrants." | The site is no longer built with Wix, so the claim would be false. See also C11. |
| B2 | "Let's Chat!" Wix Chat bubble | Removed | It only works on Wix. Contact is by form, email, and phone. |
| B3 | "Get in Touch" on `/empowering-immigrants` linked nowhere; on `/empowering-immigrants-1` it linked to `/empowering-immigrants`, which has no contact details | Both go to the contact section (`/#contact`) | Neither button reached a way to get in touch. |
| B4 | "Get in Touch" button: white text on yellow | Black text on yellow | White on `#FFC03A` has a 1.6:1 contrast ratio, which fails WCAG AA (4.5:1 required). |
| B5 | Wix contact form (Name, Email, Phone, Address, Subject, Message) | Email panel: "Email us" button + "Copy address" for empoweringimmigrants@gmail.com; second email, phone and socials listed below it | Requested, so there's no form service to set up or maintain. |
| B6 | Phone number was plain text | Tap-to-call `tel:` link | Usability; the number is unchanged. |
| B7 | All-caps headings and quote typed in capitals | Same appearance, applied with CSS `text-transform` | Screen readers may spell out all-caps text letter by letter. |

## C. Typos and wording: kept as published, awaiting approval

| # | Location | Current text | Suggested |
| --- | --- | --- | --- |
| C1 | Quote | "IF YOU **SACRAFICE**, THIS COUNTRY…" | "sacrifice" (the school mural in the photo spells it correctly) |
| C2 | Quote | Ends with `OPPORTUNITY".` but has no opening quotation mark | Remove the stray `"`, or add an opening one |
| C3 | Contact blurb | "forget that **their** are others" | "there are others" |
| C4 | `/empowering-immigrants` | "**Service Subitle**" | This is unedited Wix template placeholder text with a typo. Replace with a real subtitle or delete it. |
| C5 | `/empowering-immigrants` | Whole paragraph ("With this initiative, our goal is to promote great opportunities…") | Looks like generic Wix template copy. Confirm it or replace it. |
| C6 | Mission | "driven by a single goal**;** to do our part" | Colon instead of semicolon |
| C7 | Mission | "to enhance predominately Spanish speaking students to speak proficient English" | "to help predominantly Spanish-speaking students become proficient in English" |
| C8 | Mission, purpose page | "predominately" / "predominately speaking Spanish students" | "predominantly Spanish-speaking students" |
| C9 | Drive | "501 (c) (3) non profit organization" | "501(c)(3) nonprofit organization" |
| C10 | Drive | "help others feel confident, successful in their daily lives" | "feel confident and successful" |
| C11 | Footer | "©2021 by **Empower** Immigrants" | "© 2021–2026 Empowering Immigrants" (name mismatch; year may be outdated) |
| C12 | Purpose page | "allowed struggling students gain confidence" | "helped struggling students gain confidence" |
| C13 | Ways We Help | "allow predominant Spanish speaking students become proficient" | "help predominantly Spanish-speaking students become proficient" |
| C14 | Ways We Help | "expanding to others to  create" | Double space (invisible in the browser) |
| C15 | LEAF bullets | "supported by many media platforms (Apple and Android) that allows…" | "that allow…". Also see D3. |

## D. Facts to confirm (possibly outdated)

| # | Item |
| --- | --- |
| D1 | "Starting from scratch, we are working with an elementary school and expanding to others": is this still current? |
| D2 | "To be able to post success stories…" is listed as a goal. Are there success stories to add now? |
| D3 | LEAF "supported by… Apple and Android": is the app in the App Store / Google Play? If so, add store links. If not, consider rewording. |
| D4 | Two different Facebook URLs are in use: `facebook.com/empowerimmigrants/` (contact block) and `facebook.com/Empowering-Immigrants-100953902424549` (footer). Both currently load. Which is the official page? |
| D5 | The "LinkedIn" icon links to a personal profile (Jordyn Cambeiro), not an organization page. Is that intended? |
| D6 | A personal email (Cambeirokatelyn@gmail.com) and a phone number are published. Confirm they should remain public. |
| D7 | Nav labels "Empowering Immigrants" and "EMPOWERING IMMIGRANTS" go to different pages but read the same, which confuses visitors and screen readers. Suggested labels: "Our Work" and "Purpose & Goals" (edit `NAV` in `src/data/site.ts`). |
| D8 | Page titles: `/empowering-immigrants-1` is "EMPOWERING IMMIGRANTS \| EMPOWERING IMMIGRANTS". Suggested: "Purpose and Goals \| Empowering Immigrants". |
| D9 | New meta descriptions (not visible on the page; used by search engines and link previews) were drafted from existing copy. They're in each page's `<Base description=…>`. Please approve them. |
