# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run biome-write  # Format code with Biome (run before committing)
npm run start        # Start production server
```

Pre-commit hooks run Biome automatically via lint-staged on `.js`, `.jsx`, `.ts`, `.tsx`, and `.json` files.

## Architecture

This is a **Next.js 16 App Router** portfolio site built on the [Once UI](https://once-ui.com) design system (`@once-ui-system/core`).

### Content & Configuration

All site content and behavior is driven by two files in `src/resources/`:

- **`content.tsx`** — Person info, page copy, social links, and feature toggles (e.g., which sections appear on the home/about page).
- **`once-ui.config.ts`** — Visual theme tokens (brand/accent colors, border style, surface style, transitions, scaling) and background effects (mask, gradient, dots, grid, lines). Changes here cascade through CSS custom properties via data attributes set in `layout.tsx`.

This means most portfolio updates (bio, projects metadata, section visibility) happen in `src/resources/content.tsx` without touching component code.

### Content Files (MDX)

- Blog posts: `src/app/blog/posts/*.mdx`
- Work/projects: `src/app/work/projects/*.mdx`

These are auto-discovered; adding a new `.mdx` file is sufficient to publish new content. YAML frontmatter controls metadata (title, publishedAt, summary, image, team, etc.).

### Theming

The theme is initialized in `src/app/layout.tsx` via an inline script that reads localStorage and sets `data-*` attributes on `<html>`. The Once UI system reads these attributes to apply CSS variables. Theme values (light/dark/system, brand color, etc.) come from `once-ui.config.ts`.

### Routing & Protection

Routes (`/about`, `/blog`, `/work`, `/gallery`) can be toggled on/off in `content.tsx`. Individual routes can be password-protected via the `PAGE_ACCESS_PASSWORD` environment variable, enforced by `src/components/RouteGuard.tsx` and the `/api/authenticate` route.

### Path Alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

### Styling

- Once UI components for layout primitives (Flex, Column, Grid, etc.)
- SCSS modules for component-scoped styles (e.g., `Header.module.scss`)
- `src/components/breakpoints.scss` for responsive utilities
- Sass modern API is enabled in `next.config.mjs`

### Key API Routes

| Route | Purpose |
|---|---|
| `/api/authenticate` | Password-protect route login |
| `/api/check-auth` | Validate session cookie |
| `/api/rss` | RSS feed |
| `/api/og/generate` | Dynamic Open Graph image generation |
