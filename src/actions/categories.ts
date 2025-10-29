import { z } from "astro:schema";
import { defineAction } from "astro:actions";
import { getCollection } from "astro:content";

function slugify(str: string) {
    return str
        .toString()
        .normalize('NFD') // separate accents
        .replace(/\p{Diacritic}/gu, '') // remove accents
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // replace spaces with -
        .replace(/[^a-z0-9-_]/g, '');
}

export const categories = {
    getCategories: defineAction({
        input: z.null(),
        handler: async () => {
            const allArticles = await getCollection("articles");

            const rawCategories = [
                ...new Set(allArticles.map((article) => article.data.category)),
            ];

            const categories = rawCategories.map((label) => ({ label, slug: slugify(label) }));

            return { success: true, categories };
        }
    }),
    filterByCategory: defineAction({
        input: z.object({
            category: z.string()
        }),
        handler: async ({ category }) => {
            const articles = [];

            const allArticles = await getCollection("articles");

            if (category === "all") {
                articles.push(...allArticles);
                return { success: true, articles };
            }

            // find matching categories by slug
            const matching = allArticles.filter((article) => slugify(article.data.category) === slugify(category));

            articles.push(...matching);

            return { success: true, articles };
        }
    })
};