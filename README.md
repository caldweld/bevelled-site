# Bevelled – Next.js + Tailwind Starter

A modern, fast starter for **bevelled.com.au** — portfolio-first with Home, About, Portfolio and Contact pages.

## Quickstart

```bash
# 1) Install deps
pnpm i   # or: npm i  | yarn

# 2) Run dev server
pnpm dev # http://localhost:3000

# 3) Deploy
# - Create a GitHub repo and push this folder
# - Import into Vercel and set your domain: bevelled.com.au
```

## Tech

- Next.js (App Router)
- TypeScript
- Tailwind CSS (Typography, Forms, Aspect Ratio)
- Minimal UI components (Button, Card)
- JSON-powered portfolio content (`/content/portfolio.json`)

## Customize

- Content strings: `/lib/site.ts`
- Hero banner image: `/components/hero.tsx`
- Portfolio items: `/content/portfolio.json`
- Colors, radii, shadows: `tailwind.config.ts`

## Contact Form

The Contact page uses Formspree as a placeholder action. Replace the `action` URL in `/app/contact/page.tsx` with your preferred email service (Resend, Postmark) or a server action.

## Roadmap

- [ ] Replace JSON content with a CMS (Sanity, Supabase)
- [ ] Add Instagram feed
- [ ] Add image optimization pipeline
- [ ] Add blog (MDX) + sitemap
