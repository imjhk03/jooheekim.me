# Twitter App Card Metadata

This site uses X/Twitter App Card metadata on `/apps` so posting the page URL can show an install-style app preview for **I Need That Widget**.

## Working Pattern

The working pattern is similar to `usepapercloud.com`: keep normal social preview metadata app-specific, then include the app-card tags.

For `/apps`, the rendered head should include:

```html
<meta name="description" content="See your calendar events and reminders at a glance with widgets." />
<meta property="og:title" content="I Need That Widget" />
<meta property="og:description" content="See your calendar events and reminders at a glance with widgets." />
<meta property="og:image" content="https://jooheekim.me/images/apps/INTW-AppIcon.png" />

<meta name="twitter:card" content="app" />
<meta name="twitter:site" content="@_jooheekim_" />
<meta name="twitter:creator" content="@_jooheekim_" />
<meta name="twitter:title" content="I Need That Widget" />
<meta name="twitter:description" content="See your calendar events and reminders at a glance with widgets." />
<meta name="twitter:image" content="https://jooheekim.me/images/apps/INTW-AppIcon.png" />
<meta name="twitter:app:name:iphone" content="I Need That Widget" />
<meta name="twitter:app:id:iphone" content="6753172187" />
```

Do not set `twitter:app:url:iphone` unless the app has a real deep link URL. That field is for opening a specific in-app URL, not for the App Store URL.

## Source File

The metadata is generated in:

```text
src/layouts/Layout.astro
```

The page still links to the App Store from:

```text
src/pages/apps.md
```

## Testing

1. Run the local build:

```sh
npm run build
```

2. Check the generated page:

```sh
rg -n "twitter:|og:title|og:description|og:image" dist/apps/index.html
```

3. Deploy to a public URL before testing in X. X cannot reliably crawl localhost or protected preview deployments.

4. Test by composing a post with the public page URL:

```text
https://www.jooheekim.me/apps
```

X may cache card previews, so a metadata change can take time to appear.

## Ratings And Reviews

The star rating and review count shown in the X app card are not controlled by this site. X appears to use the `twitter:app:id:iphone` value to look up the App Store record and then render App Store metadata such as icon, app name, rating, and rating count.

For I Need That Widget, Apple's public lookup endpoint currently returns:

```json
{
  "trackName": "I Need That Widget",
  "averageUserRating": 5,
  "userRatingCount": 5,
  "averageUserRatingForCurrentVersion": 5,
  "userRatingCountForCurrentVersion": 5
}
```

Useful lookup URL:

```text
https://itunes.apple.com/lookup?id=6753172187&country=us
```

If X shows a different count than App Store Connect, likely causes are regional storefront differences, X cache, or App Store propagation delay.
