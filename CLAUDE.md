# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website and blog for jooheekim.me built with Astro using the AstroPaper theme and deployed on Vercel. Features a personalized homepage with avatar, bilingual content support (Korean/English), and a complete blog system ready for content.

## Tech Stack

- **Framework**: Astro v5.13.10
- **Theme**: AstroPaper blog theme
- **Styling**: Tailwind CSS v4.1.11
- **Deployment**: Vercel (static site)
- **Language**: TypeScript
- **Package Manager**: npm

## Common Commands

All commands should be run from the root directory:

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |
| `npm run astro ...` | Run Astro CLI commands |

## Project Structure

```
/
├── public/               # Static assets
│   ├── favicon.ico      # Site favicon
│   ├── jhk-avatar.jpg   # Profile avatar
│   └── toggle-theme.js  # Theme switcher script
├── src/
│   ├── assets/icons/    # SVG icons (social media, UI)
│   ├── components/      # Reusable Astro components
│   ├── content/blog/    # Blog posts in Markdown
│   ├── layouts/         # Page layouts and templates
│   ├── pages/           # Routes and pages
│   ├── styles/          # Global styles and typography
│   ├── utils/           # Utility functions
│   ├── config.ts        # Site configuration
│   └── constants.ts     # Social links and constants
├── astro.config.mjs     # Astro configuration with Vercel adapter
├── CHANGELOG.md         # Project change log
├── CLAUDE.md           # Claude Code instructions
├── LICENSE             # Dual licensing (MIT + CC BY 4.0)
└── package.json        # Dependencies and scripts
```

## Deployment

- **Platform**: Vercel
- **Adapter**: `@astrojs/vercel/static`
- **Output**: Static site generation
- **Auto-deployment**: Configured via GitHub integration

## Development Notes

- The site uses Astro's static output mode for optimal performance
- AstroPaper theme provides a complete blog system with dark/light mode
- Tailwind CSS for styling with theme-aware color system
- Korean language support configured (ko locale, Seoul timezone)
- Custom social media integration (GitHub, X, BlueSky, Mastodon, Email)
- Responsive design with avatar and content layout
- RSS feed and search functionality built-in
- Dual licensing: MIT for code, CC BY 4.0 for content

## Workflow Rules

**CRITICAL: Follow these rules strictly when working on this project:**

1. **Git Operations**: Do NOT proceed with any git-related commands (commit, push, etc.) until explicitly instructed by the user
2. **Build Verification**: ALWAYS run `npm run build` after making any code changes to ensure TypeScript errors are caught and the build passes
3. **Planning First**: Before making any code changes, create a plan first and wait for user approval before proceeding with implementation

## Content Management

- Blog posts go in `src/content/blog/` as Markdown files
- Featured posts can be marked with `featured: true` in frontmatter
- Social links configured in `src/constants.ts`
- Site settings in `src/config.ts`

## Personal Branding

- Avatar: `/public/jhk-avatar.jpg`
- Brand: "JHK" (Joohee Kim)
- Tagline: "Create something, craft well"
- Bio: iOS engineer from South Korea, exploring challenges and building projects