# Changelog

All notable website architecture changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Bilingual blog post support with language switcher component
- Language field (`lang`) in blog schema to specify post language (en/ko)
- Translations field in blog schema to link between language versions
- LanguageSwitcher component displaying "ENG / KOR" with underline for active language
- Automatic filtering to show only English posts in main blog list (Korean posts accessible via language switcher)

### Changed
- PostDetails layout now includes language switcher on the right side of metadata line
- Post filter updated to exclude Korean posts from default listings

## [2.0.0] - 2024-09-24

### Added
- Complete AstroPaper blog theme integration
- Korean language support (ko locale, Seoul timezone)
- Personal avatar with theme-aware border colors
- Custom social media links (GitHub, X, BlueSky, Mastodon, Email)
- Custom SVG icons for BlueSky and Mastodon
- Dual licensing system (MIT for code, CC BY 4.0 for content)
- Personalized homepage with avatar and bio layout
- Responsive design with flexbox layout
- Personal tagline: "Create something, craft well"
- RSS feed integration
- Search functionality with Pagefind
- Theme persistence (dark/light mode)
- Korean/English bilingual content support

### Changed
- Complete migration from custom Astro site to AstroPaper theme
- Site configuration updated with personal information
- Updated site description to "Personal blog of Joohee Kim"
- Replaced SVG favicon with ICO format for better browser support
- Updated ogImage to use custom avatar (jhk-avatar.jpg)
- Social links configuration moved to constants.ts
- Homepage layout redesigned with avatar and content sections
- Bio updated to reflect iOS engineering background and current focus

### Removed
- All demo blog posts from AstroPaper theme
- LinkedIn social link (removed per user preference)
- Custom glassy navigation design (replaced with AstroPaper theme)
- Previous hero section design
- References to missing astropaper-og.jpg file

### Fixed
- Favicon path issues (updated Layout.astro to use favicon.ico)
- Missing SVG icon imports
- Cache-related build issues resolved
- Asset path corrections for avatar and icons

## [1.0.0] - 2024-09-24

### Added
- Initial Astro project setup
- Vercel deployment configuration
- Basic "Coming Soon" landing page
- Dark theme implementation with inline CSS
- Custom glassy navigation header with JHK branding
- About section with iOS developer information
- Responsive design foundation

### Infrastructure
- Astro v5.13.10 framework
- Static site generation with Vercel adapter
- File-based routing system
- TypeScript configuration