# Joohee Kim's Personal Website

This is the source code for my personal website and blog, built with [Astro](https://astro.build) using the [AstroPaper theme](https://github.com/satnaing/astro-paper) and deployed on [Vercel](https://vercel.com).

## About

I'm Joohee Kim (김주희), an iOS engineer living in South Korea. Currently exploring new challenges and building side projects while sharing my development experiences through this blog.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) v5.13.10
- **Theme**: [AstroPaper](https://github.com/satnaing/astro-paper)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.1.11
- **Deployment**: [Vercel](https://vercel.com)
- **Language**: TypeScript

## Project Structure

```text
├── public/               # Static assets
│   ├── favicon.ico      # Site favicon
│   └── toggle-theme.js  # Theme switcher script
├── src/
│   ├── assets/icons/    # SVG icons (social media, UI)
│   ├── components/      # Reusable Astro components
│   ├── data/blog/       # Blog posts in Markdown
│   ├── layouts/         # Page layouts and templates
│   ├── pages/           # Routes and pages
│   ├── styles/          # Global styles and typography
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── CHANGELOG.md         # Project change log
├── CLAUDE.md           # Claude Code instructions
└── package.json         # Dependencies and scripts
```

## Commands

| Command                | Action                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Installs dependencies                       |
| `npm run dev`          | Starts local dev server at `localhost:4321` |
| `npm run build`        | Build the production site to `./dist/`      |
| `npm run preview`      | Preview the build locally, before deploying |

## Features

- ✅ **Korean/English bilingual** content support
- ✅ **Dark/Light mode** with theme persistence
- ✅ **Responsive design** optimized for mobile and desktop
- ✅ **SEO optimized** with proper meta tags and structured data
- ✅ **RSS feed** for blog subscriptions
- ✅ **Search functionality** with Pagefind integration
- ✅ **Social media integration** (GitHub, Twitter, BlueSky, Mastodon)
- ✅ **Fast loading** with Astro's static site generation

## Deployment

This site is deployed on [Vercel](https://vercel.com) with automatic deployments from the main branch. The site is available at [jooheekim.me](https://jooheekim.me).

## License

This repository uses a dual licensing approach - see the [LICENSE](LICENSE) file for full details.

- **Code** (website structure, configuration, build scripts): MIT License
- **Content** (blog posts, documentation): Creative Commons Attribution 4.0 International License (CC BY 4.0)
- **Code examples** within blog posts: Dual-licensed under both MIT and CC BY 4.0

## Acknowledgments

Built with the amazing [AstroPaper theme](https://github.com/satnaing/astro-paper) by [Sat Naing](https://github.com/satnaing). Thank you for creating such a clean and well-architected theme that made this website possible!