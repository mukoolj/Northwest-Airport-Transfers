# Northwest Airport Transfers

A fast, static React + Vite + Tailwind CSS site for Northwest Airport Transfers
— fixed-fare airport transfers across North West Sydney. WhatsApp is the
primary conversion channel throughout; there is no backend or database, so
the whole site can be deployed as static files on Vercel's free tier.

## Tech stack

- **React 19 + Vite** — frontend
- **Tailwind CSS v4** — styling (dark navy hero, light body, gold accents)
- **React Router** — Home, Pricing, Contact pages
- **Vercel** — static hosting

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com), **New Project** → import the repo.
   `vercel.json` is already configured (Vite framework preset, SPA rewrites
   for React Router). No environment variables are required.
3. Deploy. Vercel's free tier is sufficient for this project.

## SEO

- Per-page `<title>`, meta description and canonical URL are set by the
  `Seo` component (`src/components/Seo.jsx`) on Home, Pricing and Contact.
- `TaxiService` JSON-LD is injected on every page; `FAQPage` JSON-LD is added
  on the Pricing page (`src/lib/seo.js`).
- `public/sitemap.xml` and `public/robots.txt` reference
  `https://northwestairporttransfers.vercel.app` — update both files if you
  later move to a custom domain.

## Project structure

```
src/
  components/   Shared UI: Navbar, Footer, WhatsApp CTAs, Hero, Fleet, FAQ, etc.
  pages/        Home, Pricing, Contact
  lib/          Business constants (pricing, fleet, FAQs) and SEO helpers
  hooks/        useCountdown (introductory offer timer)
  assets/images/ Hero photo + fleet vehicle photos
public/
  sitemap.xml, robots.txt, favicon.svg
```

## Business details

- Phone / WhatsApp: **0493 002 728** ([wa.me/61493002728](https://wa.me/61493002728))
- Email: northwestairportnsw@gmail.com
- Service area: North West Sydney and surrounds
