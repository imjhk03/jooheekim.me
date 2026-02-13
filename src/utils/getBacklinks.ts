import kebabcase from "lodash.kebabcase";
import type { CollectionEntry } from "astro:content";

export interface Backlink {
  id: string;
  title: string;
  url: string;
}

const WIKI_LINK_RE = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;

export function getBacklinks(
  currentId: string,
  allEntries: CollectionEntry<"wiki">[]
): Backlink[] {
  const backlinks: Backlink[] = [];

  for (const entry of allEntries) {
    if (entry.id === currentId) continue;
    if (!entry.body) continue;

    const matches = entry.body.matchAll(WIKI_LINK_RE);
    for (const match of matches) {
      const target = match[1].trim();
      if (kebabcase(target) === currentId) {
        backlinks.push({
          id: entry.id,
          title: entry.data.title,
          url: `/wiki/books/${entry.id}/`,
        });
        break; // One backlink per entry is enough
      }
    }
  }

  return backlinks.sort((a, b) => a.title.localeCompare(b.title));
}
