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
    getCategories: async () => {
        const allArticles = await getCollection("articles");

        const rawCategories = [
            ...new Set(allArticles.map((article) => article.data.category)),
        ];

        const categories = rawCategories.map((label) => ({ label, slug: slugify(label) }));

        return { success: true, categories };
    },
    filterByCategory: async ({ category }: { category: string }) => {
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
};