import qs from 'qs';
import { apiV2 } from './index.js';
export const problemDraftsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchNextCuratableProblemDraft: builder.query({
            query: ({ excludedIds }) => {
                const queryString = qs.stringify({ excludedIds }, { arrayFormat: 'brackets', addQueryPrefix: true });
                return {
                    url: `/problem-drafts/curatable/next${queryString}`,
                    method: 'GET',
                };
            },
        }),
        fetchProblemDraft: builder.query({
            query: id => ({
                url: `/problem-drafts/${id}`,
            }),
        }),
        resolveCuration: builder.mutation({
            query: ({ id, body }) => ({
                url: `/problem-drafts/curatable/${id}/resolve`,
                method: 'POST',
                body,
            }),
        }),
        countCuratableProblemDrafts: builder.query({
            query: () => '/problem-drafts/curatable/count',
        }),
        fetchResolvableProblemDraft: builder.query({
            query: id => ({
                url: `/problem-drafts/resolve/${id}`,
            }),
        }),
        resolveProblemDraft: builder.mutation({
            query: ({ id, body }) => ({
                url: `/problem-drafts/${id}/resolve`,
                method: 'POST',
                body,
            }),
        }),
        switchProblemDraft: builder.query({
            query: ({ id, reversed, statuses }) => {
                const queryString = qs.stringify({ reversed, statuses }, { arrayFormat: 'brackets', addQueryPrefix: true });
                return {
                    url: `/problem-drafts/${id}/switch${queryString}`,
                    method: 'GET',
                };
            },
        }),
        countResolvableProblemDrafts: builder.query({
            query: () => '/problem-drafts/resolve/count',
        }),
    }),
});
export const { useFetchNextCuratableProblemDraftQuery, useLazyFetchNextCuratableProblemDraftQuery, useFetchProblemDraftQuery, useCountCuratableProblemDraftsQuery, useLazyFetchProblemDraftQuery, useResolveCurationMutation, useFetchResolvableProblemDraftQuery, useResolveProblemDraftMutation, useSwitchProblemDraftQuery, useLazySwitchProblemDraftQuery, useCountResolvableProblemDraftsQuery, } = problemDraftsApi;
//# sourceMappingURL=problemDrafts.js.map