import {apiV2} from './index.js';
import type {
    ApplicationTranslationResources,
    SgfDiffResponse,
    EntriesResponse,
    SgfLint,
} from '../contracts/index.js';

export const toolsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchSgfDiff: builder.query<
            SgfDiffResponse,
            {sgf1: string; sgf2: string}
        >({
            query: ({sgf1, sgf2}) => ({
                method: 'POST',
                url: '/tools/sgf/diff',
                body: {
                    sgf1,
                    sgf2,
                },
            }),
        }),
        renderSgfExt: builder.mutation<string, {sgf: string}>({
            query: ({sgf}) => ({
                responseHandler: response => response.text(),
                method: 'POST',
                url: '/tools/sgf/renderext',
                body: {sgf},
            }),
        }),
        renderSgf: builder.mutation<string, {sgf: string}>({
            query: ({sgf}) => ({
                responseHandler: response => response.text(),
                method: 'POST',
                url: '/tools/sgf/render',
                body: {sgf},
            }),
        }),
        lintSgf: builder.mutation<EntriesResponse<SgfLint>, {sgf: string}>({
            query: ({sgf}) => ({
                method: 'POST',
                url: '/tools/sgf/lint',
                body: {sgf},
            }),
        }),
        fetchTranslationResources: builder.query<
            ApplicationTranslationResources,
            string
        >({
            query: lang => `/tools/translations/${encodeURIComponent(lang)}`,
        }),
    }),
});

export const {
    useFetchSgfDiffQuery,
    useLazyFetchSgfDiffQuery,
    useRenderSgfExtMutation,
    useRenderSgfMutation,
    useLintSgfMutation,
    useLazyFetchTranslationResourcesQuery,
} = toolsApi;
