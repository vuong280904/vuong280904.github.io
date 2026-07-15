# Bui Thanh Vuong — Portfolio

A premium single-page portfolio built with React + TypeScript + Vite +
TailwindCSS + Framer Motion, implementing the approved UI/UX design
specification exactly (pink → peach → orange gradient brand, glassmorphism
cards, a cursor-following "aperture" signature element, etc.).

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

```bash
npm run build     # type-checks + production build to /dist
npm run preview   # preview the production build locally
npm run lint       # eslint
```

## Before you ship: placeholders to replace

This scaffold was generated without a CV or Credly links on hand, so the
following are clearly marked placeholders in the code — search for
`PLACEHOLDER` / `[Your ...]` to find them all:

| What | Where | Notes |
|---|---|---|
| Profile photo | `public/assets/images/profile-placeholder.svg` | Swap the file, keep the same path/name or update `src/sections/About.tsx` |
| Logo | `src/components/common/Logo.tsx` | Currently an inline gradient "V" mark — swap in the real logo SVG |
| Project screenshots | `public/assets/images/projects/*.svg` | Swap in real screenshots/GIFs, same filenames |
| Project descriptions | `src/data/projects.ts` | Written from public repo structure on GitHub — refine with real specifics |
| Experience | `src/data/experience.ts` | No CV was supplied — currently one editable placeholder entry |
| Education | `src/data/education.ts` | Institution name/dates unknown — only "final-year IT student" was confirmed |
| Certificates | `src/data/certificates.ts` | Add real Credly badge URLs + images |
| Competitions | `src/data/competitions.ts` | Add real entries |
| Location | `src/data/socials.ts` → `LOCATION` | Currently `[City, Country]` |
| Contact form backend | `src/components/common/ContactForm.tsx` | `handleSubmit` is a stub — wire to a real endpoint (e.g. Formspree) |
| OG image / favicon | `public/og-image.png`, `public/favicon.svg`, `public/apple-touch-icon.png` | Placeholder gradient marks — replace with real brand assets |
| Domain | `index.html`, `public/robots.txt`, `public/sitemap.xml` | Currently set to `vuong280904.github.io` — update if that changes |

## Architecture

```
src/
  assets/        static assets imported directly into components
  components/
    common/       feature components (ProjectCard, Timeline, CursorAperture, ...)
    layout/       Navbar, Footer
    ui/           low-level primitives (Button, GlassCard, SectionHeading)
  constants/      design tokens, section ids, nav config
  data/           all content — swap placeholder data here, not in components
  hooks/          useTheme, useScrollProgress, useTypingEffect, ...
  lib/            cn() className utility
  sections/       one component per page section (Hero, About, Projects, ...)
  styles/         Tailwind entrypoint + CSS variables
  types/          shared TypeScript interfaces
```

Single-page scroll architecture — every section is an anchor target under
one route. No React Router; reintroduce it only if the site grows a real
second page (e.g. individual project case-study pages).
