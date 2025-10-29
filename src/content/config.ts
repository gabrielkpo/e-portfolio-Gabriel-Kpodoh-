import { glob } from "astro/loaders";
import { z, reference, defineCollection } from "astro:content";

const articles = defineCollection({
    loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/articles" }),
    schema: ({ image }) => z.object({
        cover: image(),
        coverAlt: z.string(),
        title: z.string(),
        slug: z.string(),
        snippet: z.string(),
        category: z.string(),
        pubDate: z.coerce.date(),
    readingDuration: z.number(),
    // allow posts that don't have an external originalLink
    originalLink: z.string().url().optional().nullable(),
        isDraft: z.boolean().default(false),
        updatedDate: z.coerce.date().optional(),
    author: z.string().default('Gabriel Kpodoh'),
        relatedArticles: z.array(reference('articles')).optional(),
    }),
});

export const collections = { articles };