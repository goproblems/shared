import { apiV2 } from './index.js';
export const articlesApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchArticleTitles: builder.query({
            query: () => ({
                url: '/article-titles',
            }),
        }),
        fetchArticleBySlug: builder.query({
            query: slug => ({
                url: `/articles/${slug}`,
            }),
        }),
    }),
});
export const { useFetchArticleTitlesQuery, useFetchArticleBySlugQuery } = articlesApi;
//# sourceMappingURL=articles.js.map