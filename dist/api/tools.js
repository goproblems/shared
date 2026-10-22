import { apiV2 } from './index.js';
export const toolsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchSgfDiff: builder.query({
            query: ({ sgf1, sgf2 }) => ({
                method: 'POST',
                url: '/tools/sgf/diff',
                body: {
                    sgf1,
                    sgf2,
                },
            }),
        }),
        renderSgfExt: builder.mutation({
            query: ({ sgf }) => ({
                responseHandler: response => response.text(),
                method: 'POST',
                url: '/tools/sgf/renderext',
                body: { sgf },
            }),
        }),
        renderSgf: builder.mutation({
            query: ({ sgf }) => ({
                responseHandler: response => response.text(),
                method: 'POST',
                url: '/tools/sgf/render',
                body: { sgf },
            }),
        }),
        lintSgf: builder.mutation({
            query: ({ sgf }) => ({
                method: 'POST',
                url: '/tools/sgf/lint',
                body: { sgf },
            }),
        }),
        fetchTranslationResources: builder.query({
            query: lang => `/tools/translations/${encodeURIComponent(lang)}`,
        }),
    }),
});
export const { useFetchSgfDiffQuery, useLazyFetchSgfDiffQuery, useRenderSgfExtMutation, useRenderSgfMutation, useLintSgfMutation, useLazyFetchTranslationResourcesQuery, } = toolsApi;
//# sourceMappingURL=tools.js.map