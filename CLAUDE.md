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

## Current State (Feb 1 2026)

### Completed
- Material Symbols Light icons added via `@material-symbols-svg/react/w200` package
- Icons replaced in: site-header.tsx (KeyboardArrowDown, Menu), home-sections.tsx (Add, ArrowForward, AccountBalance, Payments), api-page.tsx (ArrowForward), about-page.tsx (Add, Article, Forum, Campaign, Lightbulb), platform-page.tsx (Dashboard, Automation, SmartToy, Extension, Database), scanning-page.tsx (Language, VerifiedUser, School)
- Fixed navy blue `bg-[rgb(var(--color-grid))]` → `bg-brand` in home-sections.tsx (Learn More buttons + Our Services card)
- Build passes successfully

### Blocked: 126 Figma Asset Images Are 404
- ALL image URLs (`https://www.figma.com/api/mcp/asset/...`) return 404 — they're temporary MCP-generated URLs that expired
- 126 unique URLs across 8 component files (home-sections, platform-page, api-page, about-page, scanning-page, contact-page, bilby-gcc-page, bilby-japan-page)
- No local images in `/public/` — only 3 hero PNGs in project root
- **Next step**: Re-authorize Figma MCP (`claude plugins install @anthropic-ai/claude-code-figma`), then use `get_design_context` per page to get fresh asset URLs, download to `/public/images/`, and update all component references to local paths
- Figma page node IDs: Home=3400:19602, Platform=2960:1629, About=3463:1194

## Learnings
- `@material-symbols-svg/react` uses `/w200` subpath (not `/dist/w200`) — checked via package.json exports field
- `AutoAwesome` icon doesn't exist in w200; use `Automation` instead
- Figma MCP asset URLs are temporary and expire — always download to local `/public/` for production
- `--color-grid: 18 44 95` is navy blue, not brand maroon — avoid using it for primary UI elements
