# Uchechukwu Emmanuel Chibueze — Developer Portfolio

A production-ready developer portfolio built with Next.js 15, TypeScript,
Tailwind CSS, and Framer Motion. Dark-mode by default, fully responsive, and
built around six real, live client projects.

## Tech Stack

- **Next.js 15** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — page and scroll animations
- **shadcn/ui**-style primitives (`Button`, `Badge`) + **Lucide Icons**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

This repo has been verified to build cleanly with `npm run build` (12 static
routes generated, including one page per project via `generateStaticParams`).

## Project Structure

```
src/
  app/
    layout.tsx        Root layout, fonts, SEO metadata, Schema.org
    page.tsx           Homepage (assembles all sections)
    loading.tsx         Global loading screen
    not-found.tsx        Custom 404
    sitemap.ts            sitemap.xml generator
    robots.ts              robots.txt generator
    projects/[slug]/         Individual project case study pages
    globals.css                Tailwind base + custom utilities
  components/
    nav.tsx, hero.tsx, projects.tsx, project-card.tsx,
    skills.tsx, process.tsx, experience.tsx, about.tsx,
    contact.tsx, footer.tsx, scroll-progress.tsx,
    back-to-top.tsx, macbook-mockup.tsx
    ui/button.tsx, ui/badge.tsx
  lib/
    projects.ts        All project content/case study data
    utils.ts            cn() helper + site config
public/
  projects/            The six project screenshots (cover images)
  robots.txt
```

## Before deploying

1. **Formspree is already connected.** The `/contact` page's form posts to
   `siteConfig.formspreeEndpoint` in `src/lib/utils.ts`, currently set to
   your live endpoint. If you ever need to change it, grab the new URL from
   your Formspree dashboard (looks like `https://formspree.io/f/xxxxabcd`).
1. **Domain is set.** `siteConfig.url` in `src/lib/utils.ts` is now
   `https://44thstudio.my.id` — update it again if you ever change domains.
3. **Swap the OpenGraph/social image** if you want a dedicated share card
   instead of the default metadata.
4. **Replace `/public/about/headshot.png`** if you ever want to update the
   portrait used in the About section.

## Content Notes

Every project case study reflects real, honest scope: this portfolio
represents hands-on coding work — building, customizing, debugging, and
deploying real client sites in HTML, CSS, Tailwind, and JavaScript. Copy
throughout the site reflects that positioning intentionally.
