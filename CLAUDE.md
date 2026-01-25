# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website and blog for jooheekim.me built with Astro (AstroPaper theme), deployed on Vercel. Features bilingual content (Korean/English), blog system, film photography gallery, and search via Pagefind.

## Commands

```bash
npm run dev          # Dev server at localhost:4321
npm run build        # Build (runs astro check + build + pagefind indexing)
npm run preview      # Preview production build
npm run lint         # ESLint check
npm run format       # Prettier format
npm run format:check # Check formatting
```

## Architecture

### Content System
- **Blog posts**: `src/data/blog/[year]/` - Markdown files organized by year
- **Film gallery**: `src/data/films/` - Film photography entries
- **Content schema**: `src/content.config.ts` - Zod schemas for blog and films collections

### Key Configuration Files
- `src/config.ts` - Site settings (author, postPerPage, locale, timezone)
- `src/constants.ts` - Social links (SOCIALS, SHARE_LINKS arrays)
- `astro.config.mjs` - Astro config with Shiki transformers and remark plugins

### Blog Post Frontmatter
```yaml
title: string          # Required
pubDatetime: date      # Required
description: string    # Required
tags: string[]         # Default: ["others"]
featured: boolean      # Show in featured section
draft: boolean         # Hide from listings
lang: "en" | "ko"      # Content language
translations:          # Link to translated version
  en: "slug"
  ko: "slug"
```

### Page Routing
- `/` - Homepage with featured/recent posts
- `/posts/` - Blog listing with pagination
- `/posts/[slug]/` - Individual blog post
- `/tags/` - Tag index
- `/tags/[tag]/` - Posts by tag
- `/films/` - Film photography gallery
- `/search` - Pagefind search

### Utilities (`src/utils/`)
- `getSortedPosts.ts` - Filter drafts, future posts; sort by date
- `postFilter.ts` - Filters out drafts, scheduled posts, and **non-English posts by default**
- `slugify.ts` - URL slug generation (uses lodash.kebabcase)
- `getReadingTime.ts` - Reading time calculation (225 wpm)
- `getPath.ts` - Generates post URLs from file paths
- `getPostsByGroupCondition.ts` - Generic grouping (used for year/month grouping)

### Layout Hierarchy
```
Layout.astro (root HTML, meta tags, OG, JSON-LD)
├── Main.astro (breadcrumb + title) → posts listing, tags
├── PostDetails.astro (progress bar, prev/next, share) → individual posts
├── AboutLayout.astro / SimpleLayout.astro → static pages
└── FilmLayout.astro (standalone darkroom theme) → film gallery
```

### Key Implementation Details
- **Language filtering**: `postFilter.ts` only shows English posts (`!data.lang || data.lang === "en"`)
- **Theme system**: `data-theme` attribute on `<html>`, CSS variables, persisted in localStorage
- **View transitions**: Components use `transition:name` for smooth page animations
- **Back navigation**: Uses sessionStorage to track previous page context
- **Search**: Pagefind indexes content marked with `data-pagefind-body`
- **Code blocks**: Shiki with `min-light`/`night-owl` themes, supports diff notation (`// [!code ++]`)
- **OG images**: Dynamic generation via satori + resvg at build time

### Theme Colors
| Token | Light | Dark |
|-------|-------|------|
| Accent | `#9F2436` (deep red) | `#6DA9D2` (cool blue) |
| Background | `#F0EEE9` | `#2B2C30` |

## Workflow Rules

**CRITICAL:**
1. **Git Operations**: Do NOT commit/push until explicitly instructed
2. **Build Verification**: ALWAYS run `npm run build` after code changes to catch TypeScript errors
3. **Planning First**: Create a plan and wait for user approval before implementing changes
