# Website review: what we need from you

We've rebuilt the Empowering Immigrants website so it no longer depends on Wix. It looks
and reads the same as before. **We copied every word exactly as it was, including spelling
mistakes**, because we didn't want to change anything without your OK.

This page lists the decisions only you can make. It should take about 15 minutes. Just write
your answer under each question (or reply by email with the question numbers).

---

## Part 1: Questions for you

### 1. Your logo
The old site used a ready-made icon from Wix's library, which we're not allowed to take off
Wix. For now there's a look-alike placeholder (a white "V" in a gray circle).

**Do you have the organization's real logo?** If so, please send us the original file
(the highest quality version you have). If not, is the placeholder OK for now?

> Your answer:

### 2. The KTNV news video
The "Positively Las Vegas" news segment is now stored with the website itself. The footage
belongs to KTNV (Channel 13), so we want to make sure that's OK.

**Do you have KTNV's permission to show this video on your site?** If you're not sure, we can
ask KTNV for a link to their own copy instead, or remove the video.

> Your answer:

### 3. Photos of children
Several photos show students' faces (the classroom, the flash-card photos, and the LEAF app
screenshots). We removed hidden location data from all of them.

**Do you have permission from the families or schools to keep showing these photos?**

> Your answer:

### 4. Which Facebook page is the right one?
The site links to two different Facebook pages, and both still work:
- facebook.com/empowerimmigrants (in the contact section)
- facebook.com/Empowering-Immigrants-100953902424549 (at the very bottom of each page)

**Which one should we keep?** (Or keep both?)

> Your answer:

### 5. The LinkedIn link
The LinkedIn icon goes to Jordyn Cambeiro's personal profile, not an organization page.

**Is that what you want?** If the organization has its own LinkedIn page, send us the link.

> Your answer:

### 6. Contact details on the site
The site shows these publicly:
- empoweringimmigrants@gmail.com (the main email)
- Cambeirokatelyn@gmail.com
- 702-217-3540

**Should all three stay public?**

> Your answer:

### 7. Is this still true?
- "Starting from scratch, we are working with an elementary school and expanding to
  others…" **Is this still accurate, or has the program grown?**
- One of your goals is "to post success stories." **Do you have any stories you'd like to
  add?**
- The site says the LEAF app works on Apple and Android. **Is LEAF in the App Store or
  Google Play?** If so, send us the links and we'll add download buttons. If not, we can
  reword that line.
- The bottom of every page says "©2021 by Empower Immigrants." **Should it say "Empowering
  Immigrants" and the current year?**

> Your answers:

### 8. Menu names
The menu has two items that look almost the same, "Empowering Immigrants" and "EMPOWERING
IMMIGRANTS", but they go to different pages. Visitors can't tell them apart.

**Can we rename them?** Our suggestion is **"Our Work"** and **"Purpose & Goals"**.

> Your answer:

### 9. The "Empowering Immigrants" page
This page looks like it still has sample text from the Wix template:
- Under the title it says **"Service Subitle"**, which is placeholder text (with a typo).
- The paragraph "With this initiative, our goal is to promote great opportunities for those
  in need…" also sounds like generic template text.

**Would you like to replace these with your own words, or should we remove them?**

> Your answer:

### 10. Search engine descriptions
When someone finds your site on Google, a short description shows under the link. The old
site didn't have one, so we wrote one per page using your existing wording. For example,
for the home page:

> *"Empowering Immigrants is a 501(c)(3) nonprofit helping predominantly Spanish-speaking
> students become proficient in English through flash cards and LEAF, a free flash-card app."*

**Is this OK?**

> Your answer:

---

## Part 2: Spelling and grammar fixes

These are on the site right now. **Write "yes" next to each fix you'd like us to make,**
or just say "fix them all."

| # | Where | It says now | We suggest |
| --- | --- | --- | --- |
| 1 | Arturo Cambeiro quote | "If you **sacrafice**…" | "If you **sacrifice**…" (the mural in the photo spells it right) |
| 2 | Arturo Cambeiro quote | Ends with a quotation mark (") but never opens one | Remove the extra mark |
| 3 | Contact section | "forget that **their** are others" | "forget that **there** are others" |
| 4 | Our Mission | "driven by a single goal**;** to do our part" | "driven by a single goal**:** to do our part" |
| 5 | Our Mission | "to enhance predominately Spanish speaking students to speak proficient English" | "to help predominantly Spanish-speaking students become proficient in English" |
| 6 | Our Mission and Purpose page | "predominately" | "predominantly" |
| 7 | The Drive Behind the Organization | "501 (c) (3) non profit organization" | "501(c)(3) nonprofit organization" |
| 8 | The Drive Behind the Organization | "help others feel confident, successful in their daily lives" | "help others feel confident **and** successful in their daily lives" |
| 9 | Purpose and Goals page | "the flash cards allowed struggling students gain confidence" | "the flash cards **helped** struggling students gain confidence" |
| 10 | Ways We Help | "allow predominant Spanish speaking students become proficient" | "help predominantly Spanish-speaking students become proficient" |
| 11 | LEAF section | "platforms (Apple and Android) that **allows** schools" | "…that **allow** schools" |

> Your answers:

---

## Part 3: Small changes we already made (just so you know)

We made these because the old versions were broken, no longer true, or hard for some
visitors to use. Nothing about your message changed. Tell us if you'd like any of them undone.

- **Removed "Proudly created with Wix.com"** from the bottom of each page, since the site
  isn't on Wix anymore.
- **Removed the "Let's Chat!" bubble.** It was a Wix feature that doesn't work elsewhere.
- **Replaced the contact form with your email address.** Visitors click "Email us" to write
  to you, or "Copy address" to copy it. There's no form to manage.
- **Fixed the "Get in Touch" buttons.** On the old site, one went nowhere and the other went
  to a page without contact details. Both now jump to your contact information.
- **Made the "Get in Touch" button text black instead of white.** White on yellow was hard to
  read, especially for people with low vision.
- **The phone number can now be tapped to call** on a phone.
- **The home page's top photo** is now your own classroom photo (the same one in "Our Mission").
  The old one was a Wix stock photo that can only be used on Wix sites.

---

## Part 4: Already taken care of (no action needed)

- The road photo and the swing photo come from Unsplash, a free photo site. Anyone can use
  them.
- The fonts are free to use.
- The Facebook and LinkedIn icons were redrawn, so they don't depend on Wix.

---

<details>
<summary>Notes for whoever updates the website (technical)</summary>

- Page text: `src/pages/*.astro`. Menu labels, contact details, social links and the
  copyright line: `src/data/site.ts`.
- Logo (Q1): placeholder in `src/components/Logo.astro` and `public/favicon.svg`; regenerate
  `favicon.ico` and `apple-touch-icon.png` from the real logo.
- KTNV video (Q2): `public/media/ktnv-positively-las-vegas.mp4` (29 MB, no captions; ask KTNV
  for a caption file if it stays).
- Hero photo: `public/images/hero-{960,1600,2400}.webp`.
- Search descriptions (Q10): the `description` prop on `<Base>` in each page.
- Page title for `/empowering-immigrants-1` is "EMPOWERING IMMIGRANTS | EMPOWERING
  IMMIGRANTS"; if the menu is renamed (Q8), consider "Purpose and Goals | Empowering
  Immigrants".
- "Ways We Help" has a double space in "expanding to others to  create" (invisible on the page).
- All-caps headings are typed in normal case and styled as capitals, so screen readers don't
  spell them out letter by letter.
- KTNV and Univision logos are used only to show where you were featured.

</details>
