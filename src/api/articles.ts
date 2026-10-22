import {apiV2} from './index.js';
import {ArticleContentResponse} from '../contracts/index.js';

export const articlesApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchArticleTitles: builder.query<
            {slug: string; title: string}[],
            void
        >({
            query: () => ({
                url: '/article-titles',
            }),
        }),
        fetchArticleBySlug: builder.query<ArticleContentResponse, string>({
            query: slug => ({
                url: `/articles/${slug}`,
            }),
        }),
    }),
});

export const {useFetchArticleTitlesQuery, useFetchArticleBySlugQuery} =
    articlesApi;
