# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server with Turbopack
npm run build    # production build
npm run lint     # ESLint via next lint
npm run start    # serve production build locally
```

No test suite exists in this project.

## Architecture

**GrindFactory** is a single-page marketing site for a Buenos Aires digital studio, built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4. Deployed on Vercel.

### Page structure

`app/page.tsx` is a flat composition of section components rendered top-to-bottom:

```
Header → Hero → Portfolio → Services → Process → Results → CTAFinal → References → FAQ → Footer
```

Sections live in `app/components/sections/`. All sections are Server Components unless they require interactivity (`'use client'`).

### Data layer (`app/lib/`)

All content is hardcoded — no CMS, no database reads on the page.

- `grindfactory.ts` — single source of truth for copy: `GF_WHATSAPP` URL, `ownProducts[]`, `clientWork[]`, `stackChips[]`, `faqItems[]`
- `products.ts` — richer `Product` type with `caseStudy` object; used by the `/projects/[slug]` dynamic route
- `clients.ts` — `Client` type with multiple `proposals[]`; used internally, client work currently commented out in `grindfactory.ts`
- `author.ts` — author metadata

When adding or updating portfolio items, edit `grindfactory.ts` for homepage display and `products.ts` for the case study detail page.

### Design system

**No Tailwind utility classes are used in JSX.** Tailwind is imported in `globals.css` for its reset/base, but all styling uses semantic CSS classes defined in `globals.css` (`.btn-primary`, `.service-card`, `.rv`, etc.) applied via `className`.

Brand tokens defined as CSS custom properties:
- `--orange: #F97316` — primary accent
- `--orange-dim: rgba(249,115,22,.12)` — tinted backgrounds
- `--orange-border: rgba(249,115,22,.35)` — bordered elements
- Background: `#0A0A0B`, text: `#e8e6e1`

Fonts loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables: `--font-serif` (Instrument Serif), `--font-sans` (Space Grotesk), `--font-mono` (JetBrains Mono).

### Animations

Two animation systems, both CSS-driven with no animation library:

1. **Hero entrance** — `.hero-animated` class on the hero wrapper triggers `fade-up`, `fade-up-2/3/4` and `hero-word-1/2/3` animations via CSS selectors. The class is present on mount (SSR), so animations play on first paint.

2. **Scroll reveal** — elements with `.rv` class start translated down; `ScrollInit` (`'use client'`, renders null) runs an `IntersectionObserver` that adds `.in` to trigger the CSS transition. Stagger delays via `.d1/.d2/.d3`.

### Client components

Only these components use `'use client'`:
- `ScrollInit` — IntersectionObserver for scroll reveal
- `HeroVideo` — `<video>` that loops at 82% via `timeupdate` to avoid a bad ending frame
- `ScrambledTitle` — text scramble effect
- FAQ section — accordion open/close state
- Contact form — form submission state

### API

`app/api/contact/route.ts` — POST endpoint that sends email via **Resend**. Accepts both `application/json` and `multipart/form-data`. Has a honeypot field (`company`) for bot filtering.

Required environment variables:
```
RESEND_API_KEY=
RESEND_FROM=        # optional, defaults to onboarding@resend.dev
```

### Other routes

- `/projects/[slug]` — case study detail page, data from `products.ts` via `productBySlug()`
- `/licencia-argentina/privacy` — privacy policy for a separate mobile app, unrelated to the main site
- `app/robots.ts` and `app/sitemap.ts` — auto-generated SEO files
