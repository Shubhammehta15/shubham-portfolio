# Shubham Mehta — Portfolio (v2, "workbench" edition)

A more personal, hand-crafted-feeling take on the portfolio — a "pinned
notebook" aesthetic (tilted photo, washi tape, handwritten annotations,
sticker-style skill chips) instead of a clean corporate template, plus
a built-in rule-based chatbot ("ShubBot") that answers FAQs about you.

## What's different from the first version
- Warmer, more personal visual language: handwritten accents (Caveat
  font), a tilted "polaroid" photo with tape corners, hand-drawn
  underline squiggles under headings, sticker-style project cards
  pinned at slight angles.
- A floating chatbot (bottom-right) that answers questions about your
  skills, projects, experience, education, and how to contact you —
  fully client-side, no backend or API key needed.
- A one-time typing animation in the hero, a custom cursor dot on
  desktop, and hover-triggered motion only (nothing auto-animates on
  scroll, so it stays calm rather than busy).

## Your photo
This version points directly at the photo you already uploaded to your
first portfolio (`https://shubhammehta15.github.io/assets/profile.jpg`),
so it should just work without you doing anything. If you'd rather this
site not depend on that other repo, copy your photo into `assets/profile.jpg`
here and change the `src` in `index.html` (search for `profileImg`) to
`assets/profile.jpg`. If the image ever fails to load, it automatically
falls back to a plain "SM" initials badge — nothing breaks.

## The chatbot
It's intentionally simple: `script.js` has a small list of keyword →
reply rules (see the `responses` array). No external API, no cost, no
network calls. To add more answers, add another `{ keys: [...], reply: "..." }`
entry to that array.

## Run it locally
Just open `index.html` in any browser — no build step, no install.

## Deploy it (GitHub Pages)
Same process as before:
1. Create a new GitHub repository (or reuse your existing
   `shubhammehta15.github.io` repo if you want this to replace your
   current live portfolio — just overwrite `index.html`, `style.css`,
   and `script.js` there).
2. If using a new repo: Settings → Pages → source branch `main`,
   folder `/ (root)` → Save.
3. Live in a minute or two.

## Notes
- The contact form only confirms in-browser for now — connect it to
  Formspree or EmailJS to actually send email.
- All project links are your real GitHub repos and the live gym site
  demo, carried over from your resume.
