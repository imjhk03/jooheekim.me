import type { CollectionEntry } from "astro:content";
import { SITE } from "@/config";

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  // Filter out Korean posts (only show English or posts without language specified)
  const isEnglishOrNoLang = !data.lang || data.lang === "en";
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed) && isEnglishOrNoLang;
};

export default postFilter;
