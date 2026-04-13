import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";
export const FILMS_PATH = "src/data/films";
export const WIKI_PATH = "src/data/wiki";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: () =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      heroImage: z.string().optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      lang: z.enum(["en", "ko"]).optional(),
      translations: z
        .object({
          en: z.string().optional(),
          ko: z.string().optional(),
        })
        .optional(),
    }),
});

const films = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${FILMS_PATH}` }),
  schema: () =>
    z.object({
      title: z.string(),
      date: z.date(),
      camera: z.string().optional(),
      film: z.string().optional(),
      developed: z.string().optional(),
      location: z.string().optional(),
      description: z.string().optional(),
      images: z.array(z.string()).optional(),
    }),
});

const wiki = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${WIKI_PATH}` }),
  schema: () =>
    z.object({
      title: z.string(),
      author: z.string(),
      dateRead: z.date(),
      rating: z.number().min(1).max(5),
      description: z.string(),
      tags: z.array(z.string()).default(["books"]),
    }),
});

export const collections = { blog, films, wiki };
