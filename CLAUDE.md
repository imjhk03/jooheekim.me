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
- **Theme system**: `data-theme` attribute on `<html>`, CSS variables, persisted in localStorage
- **View transitions**: Components use `transition:name` for smooth page animations
- **Back navigation**: Uses sessionStorage to track previous page context
- **Search**: Pagefind indexes content marked with `data-pagefind-body`
- **Code blocks**: Shiki with `min-light`/`night-owl` themes, supports diff notation (`// [!code ++]`)
- **OG images**: Dynamic generation via satori + resvg at build time

## Blog Post Workflow (Primary Task)

### New Post Creation
1. 파일 생성: `src/data/blog/[year]/YYYY-MM-DD-slug-(en|ko).md`
2. Frontmatter 작성 (아래 규칙 참고)
3. 이중언어인 경우 en/ko 파일 쌍으로 생성
4. `npm run build`로 빌드 검증

### File Naming Convention
- 단일 언어: `YYYY-MM-DD-slug.md`
- 이중언어: `YYYY-MM-DD-slug-en.md` + `YYYY-MM-DD-slug-ko.md`
- Week note 시리즈: `YYYY-MM-DD-week-note-N-en.md` / `YYYY-MM-DD-week-note-N-ko.md`

### Bilingual Post Rules
- `lang` 필드 필수: `en` 또는 `ko`
- `translations` 필드로 양쪽 연결: 값은 전체 경로 (`/posts/[year]/[filename-without-ext]`)
- en/ko 파일의 `title`, `description`은 각각 해당 언어로 작성
- `pubDatetime`, `tags`, `heroImage` 등 메타데이터는 동일하게 유지

### Bilingual Post Example
```yaml
# EN file (2026-02-16-week-note-7-en.md)
title: "Week Note 7"
description: "Shipping the update and learning from unfamiliar code"
pubDatetime: 2026-02-16T01:01:59+09:00
lang: en
translations:
  en: /posts/2026/2026-02-16-week-note-7-en
  ko: /posts/2026/2026-02-16-week-note-7-ko
tags: [blog]
```

### Frontmatter Field Guide
| Field | Required | Notes |
|-------|----------|-------|
| `title` | Yes | 해당 언어로 작성 |
| `pubDatetime` | Yes | ISO 8601 with timezone (`+09:00` for KST) |
| `description` | Yes | 해당 언어로 작성 |
| `lang` | Yes (bilingual) | `"en"` or `"ko"` |
| `translations` | Yes (bilingual) | `{ en: "/posts/...", ko: "/posts/..." }` |
| `tags` | No | Default: `["others"]` |
| `featured` | No | `true`면 홈페이지 Featured 섹션에 노출 |
| `draft` | No | `true`면 모든 목록에서 숨김 |
| `heroImage` | No | 경로: `/images/YYYY/MM/DD/filename` |

## Language Filtering Behavior

- **`postFilter.ts`**: `!data.lang || data.lang === "en"` — 영어 글과 `lang` 미지정 글만 통과
- **목록 페이지** (`/`, `/posts/`, `/tags/`): 영어 글만 표시
- **RSS 피드**: 영어 글만 포함 (`getSortedPosts` → `postFilter` 사용)
- **한국어 글 접근 경로**: 영어 글의 `LanguageSwitcher` 컴포넌트 또는 직접 URL
- **개별 포스트 페이지** (`/posts/[slug]`): 언어 무관하게 접근 가능
- **검색 (Pagefind)**: 빌드된 모든 페이지를 인덱싱하므로 한국어 글도 검색 가능

## Style Guide

### Tailwind CSS v4 Theme Tokens
```css
--color-background  /* 페이지 배경 */
--color-foreground  /* 텍스트 */
--color-accent      /* 강조색 (Light: deep red, Dark: cool blue) */
--color-muted       /* 비활성/보조 배경 */
--color-border      /* 테두리 */
```

### Theme Colors
| Token | Light | Dark |
|-------|-------|------|
| Background | `#F0EEE9` | `#2B2C30` |
| Foreground | `#2B2C30` | `#F0EEE9` |
| Accent | `#9F2436` (deep red) | `#6DA9D2` (cool blue) |
| Muted | `#E4E2DD` | `#3D3E44` |
| Border | `#D8D6D1` | `#4A4B52` |

### Common Patterns
- 최대 너비: `max-w-app` (= `max-w-3xl`)
- 다크모드: `@custom-variant dark` → `dark:` prefix 사용
- 아이콘: `src/assets/icons/` 에 SVG 파일 추가 후 import
- 활성 네비게이션: `.active-nav` 클래스 (wavy underline)

## Build & Deploy Checklist

### 빌드 검증 (`npm run build`)
1. `astro check` — TypeScript 타입 에러 확인
2. `astro build` — 정적 사이트 생성
3. `pagefind --site dist` — 검색 인덱스 생성
4. 빌드 성공 시 `dist/` 디렉토리에 결과물 생성

### 빌드 후 확인사항
- 새 글이 올바른 URL에 생성되었는지 (`dist/posts/[year]/[slug]/index.html`)
- 이중언어 포스트의 경우 양쪽 파일 모두 생성 확인
- OG 이미지 생성 확인 (`dist/posts/[slug]/og.png`)
- Pagefind 인덱스에 새 콘텐츠 포함 확인 (빌드 로그에 indexed pages 수 표시)

### 배포
- Vercel에 main 브랜치 push 시 자동 배포
- PR 생성 시 Vercel Preview 배포 자동 생성

## Known Issues & Constraints

- **Vite 7 호환**: `astro.config.mjs`에서 Tailwind CSS 플러그인에 `@ts-ignore` 사용 중 (Astro 6에서 해결 예정, [#14030](https://github.com/withastro/astro/issues/14030))
- **Archives 비활성**: `config.ts`의 `showArchives: false` — 아카이브 페이지 숨김 상태
- **Pagination 미사용**: `/posts/` 페이지는 전체 글을 연/월별 그룹으로 표시
- **Email Migration 진행 중**: `EMAIL_MIGRATION.md` 참고 (iCloud+ 커스텀 도메인 전환)

## Workflow Rules

**CRITICAL:**
1. **Git Operations**: Do NOT commit/push until explicitly instructed
2. **Build Verification**: ALWAYS run `npm run build` after code changes to catch TypeScript errors
3. **Planning First**: Create a plan and wait for user approval before implementing changes
