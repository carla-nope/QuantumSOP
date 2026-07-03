# QuantumSOP — quantumsop.com

Marketing and product site for QuantumSOP: AI & post-quantum compliance
documentation for government contractors. Built with Astro, deployed on Vercel.

## Replacing the old repo contents (one time)

This project replaces the previous React/Vite single-page site. Preferred path:

    git clone https://github.com/carla-nope/QuantumSOP.git
    cd QuantumSOP
    git rm -r .            # remove old files (keeps .git)
    # copy everything from this folder in, then:
    git add -A
    git commit -m "Replace SPA with Astro launch site v1.0"
    git push origin main

Web-UI fallback: upload all files via "Add file → Upload files", then delete the
leftovers the old site used: `index.html`, `src/main.jsx`, `src/styles.css`,
`CONTENT_ROADMAP.md`. (The old `vercel.json` and `package.json` are replaced by
upload.) Leftover files won't break the Astro build, but keep the repo clean.

## Deploy (one time, ~10 minutes)

1. Push this repo to GitHub (`main` branch).
2. Go to vercel.com → Add New → Project → import this repo.
   Vercel auto-detects Astro. No settings needed. Deploy.
3. Vercel → Project → Settings → Domains → add `quantumsop.com` and `www.quantumsop.com`.
4. At your registrar, add the DNS records Vercel shows (A record + CNAME).
5. Done — future `git push` deploys automatically.

## Before launch — edit `src/config.ts`

- `BUY_URL` — replace the mailto fallback with your Stripe Payment Link
  (Stripe Dashboard → Payment Links → New → $497 one-time).
- `ROADMAP_FORM_ACTION` — paste your systeme.io form action URL to activate
  the email-capture form on /30-day-roadmap (until then it falls back to email).
- `REVIEWED` — update the review stamp whenever content is re-reviewed.

## Local development

    npm install
    npm run dev

## Structure

    src/config.ts        ← all editable business values
    src/layouts/Base.astro
    src/pages/           ← one file per page
    src/styles/global.css
    public/              ← favicon, robots.txt, sitemap.xml
