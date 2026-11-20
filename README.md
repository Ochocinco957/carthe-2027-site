# CARTHE 2027 — Landing Page

Next.js (App Router) implementation of the CARTHE 2027 Master Design System, built from the
"Canada Real Estate Event" UX writing deck. One long scrolling page: announcement bar, glass nav,
hero + registration teaser, trust bar, value statement, stats, who-should-attend, what-you-gain,
featured opportunities, speakers, themes, agenda, registration options + working 3-step form,
social proof, venue, FAQ accordion, final CTA, footer.

No external UI libraries — plain CSS using the design tokens from the Master Design System
(colors, type scale, glass, spacing, motion timing) live in `app/globals.css`.

## Before you launch — replace these placeholders

The copy deck says to replace all bracketed placeholders with real event info. In this build,
search for and update:

- **Date / time / venue**: currently "Saturday, 14 March 2027", "10:00 AM EST", "The Carlu,
  Toronto" — in `app/page.js` (announcement bar, hero, venue section, footer).
- **Stats**: "40+ Expert Speakers", "25 Participating Property Professionals", "60+ Curated
  Opportunities" — in the Stats section of `app/page.js`. Only state real numbers.
- **Partner logos**: "Partner 01–05" placeholders in the trust bar — replace with real partner
  names/logos once confirmed.
- **Speaker names/photos and opportunity cards**: currently generic placeholders with gradient
  blocks instead of photography — swap in real names, titles, and images.
- **Testimonial**: the one social-proof quote is the *example* structure from the copy deck, not
  a real quote — replace with a verified testimonial or remove the section until you have one.
- **Registration form submission**: `components/RegistrationForm.js` currently only simulates
  success/waitlist in the browser — it does not send data anywhere. Wire the `submit()` function
  to your real registration backend (API route, CRM, Google Sheet, etc.) before launch.

## Run it locally in VS Code

1. Open this folder in VS Code (`File → Open Folder…`).
2. Open a terminal in VS Code (`` Ctrl/Cmd + ` ``) and run:
   ```bash
   npm install
   npm run dev
   ```
3. Visit `http://localhost:3000` — the page hot-reloads as you edit files in `app/` and
   `components/`.

Recommended VS Code extensions: **ES7+ React/Redux snippets**, **Prettier**, **Tailwind CSS
IntelliSense** is not needed (no Tailwind used here) — plain CSS in `globals.css`.

## Deploy to Vercel

**Option A — GitHub + Vercel dashboard (recommended for ongoing work):**
1. Create a new empty repo on GitHub.
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial CARTHE 2027 landing page"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new), import the GitHub repo, leave the framework
   preset as **Next.js** (auto-detected), and click **Deploy**.
4. Every future `git push` to `main` auto-deploys. Pushes to other branches get their own preview
   URL — handy for sharing drafts before they go live.

**Option B — Vercel CLI (fastest, no GitHub needed to get a live URL today):**
```bash
npm install -g vercel
vercel login
vercel        # deploys a preview URL
vercel --prod # promotes to your production URL
```

Both options work "simultaneously" with VS Code — keep `npm run dev` running locally for instant
feedback, and use `vercel` (or a git push) whenever you want the live version updated.

## Project structure

```
app/
  layout.js       — root layout, loads Inter (SF Pro web fallback) and page metadata
  globals.css      — all design tokens (color, type, spacing, glass, motion) + component styles
  page.js          — the full page, section by section, in the order of the copy deck
components/
  Nav.js           — sticky glass nav, condenses on scroll
  Reveal.js        — scroll-triggered fade-up wrapper (respects prefers-reduced-motion)
  RegistrationForm.js — 3-step registration form (client-side only, see note above)
```
