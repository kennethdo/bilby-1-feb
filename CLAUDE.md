# Bilby - Design-to-Frontend Implementation

## Stack
- Next.js (App Router) with TypeScript
- React 19+
- Tailwind CSS v4
- Motion (Framer Motion) for animations
- base-ui/react for UI primitives

## Commands
- Dev: `npm run dev` (localhost:3000)
- Build: `npm run build`
- Lint: `npm run lint`

## Structure
- `app/` — Next.js App Router pages
- `components/` — React components (one per page + shared)
- `lib/utils.ts` — Utility functions (cn helper)
- `public/` — Static assets

## Pages
- `/` — Home (home-sections.tsx)
- `/about` — About page
- `/platform` — Platform page
- `/scanning` — Scanning page
- `/api` — API page
- `/contact` — Contact page
- `/bilby-gcc` — Bilby GCC page
- `/bilby-japan` — Bilby Japan page

## React Best Practices (Enforced)
- Use semantic HTML elements (section, nav, main, article, footer)
- Extract reusable components — no copy-paste duplication
- Props interfaces for all components
- Use `cn()` utility from lib/utils.ts for conditional classes
- Responsive design: mobile-first with Tailwind breakpoints
- Accessibility: alt text on images, aria labels on interactive elements
- Motion animations: use motion-section.tsx wrapper for scroll animations
- No inline styles — Tailwind only
- Keep components under 200 lines — split if larger

## Figma Design Reference
- File: https://www.figma.com/design/JeBNlyIXgrcyQ1rwyfpebB/Bilby?node-id=0-1
- Cross-check every component against Figma for spacing, colors, typography, layout

## Learnings
