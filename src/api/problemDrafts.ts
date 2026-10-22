import qs from 'qs';
import {apiV2} from './index.js';
import {
    ProblemDraft,
    ResolveCuratableProblemDraftRequest,
    ResolveProblemDraftRequest,
} from '../contracts/index.js';

export const problemDraftsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchNextCuratableProblemDraft: builder.query<
            {nextCuratableProblemDraftId: number},
            {excludedIds?: number[]}
        >({
            query: ({excludedIds}) => {
                const queryString = qs.stringify(
                    {excludedIds},
                    {arrayFormat: 'brackets', addQueryPrefix: true}
                );
                return {
                    url: `/problem-drafts/curatable/next${queryString}`,
                    method: 'GET',
                };
            },
        }),
        fetchProblemDraft: builder.query<ProblemDraft, number | string>({
            query: id => ({
                url: `/problem-drafts/${id}`,
            }),
        }),
        resolveCuration: builder.mutation<
            ProblemDraft,
            {
                id: number | string;
                body: ResolveCuratableProblemDraftRequest;
            }
        >({
            query: ({id, body}) => ({
                url: `/problem-drafts/curatable/${id}/resolve`,
                method: 'POST',
                body,
            }),
        }),
        countCuratableProblemDrafts: builder.query<{count: number}, void>({
            query: () => '/problem-drafts/curatable/count',
        }),
        fetchResolvableProblemDraft: builder.query<
            ProblemDraft,
            number | string
        >({
            query: id => ({
                url: `/problem-drafts/resolve/${id}`,
            }),
        }),
        resolveProblemDraft: builder.mutation<
            {nextProblemDraftToResolveId: number},
            {
                id: number | string;
                body: ResolveProblemDraftRequest;
            }
        >({
            query: ({id, body}) => ({
                url: `/problem-drafts/${id}/resolve`,
                method: 'POST',
                body,
            }),
        }),
        switchProblemDraft: builder.query<
            {nextProblemDraftId: number},
            {
                id: number | string;
                reversed?: boolean;
                statuses?: string[];
            }
        >({
            query: ({id, reversed, statuses}) => {
                const queryString = qs.stringify(
                    {reversed, statuses},
                    {arrayFormat: 'brackets', addQueryPrefix: true}
                );
                return {
                    url: `/problem-drafts/${id}/switch${queryString}`,
                    method: 'GET',
                };
            },
        }),
        countResolvableProblemDrafts: builder.query<{count: number}, void>({
            query: () => '/problem-drafts/resolve/count',
        }),
    }),
});

export const {
    useFetchNextCuratableProblemDraftQuery,
    useLazyFetchNextCuratableProblemDraftQuery,
    useFetchProblemDraftQuery,
    useCountCuratableProblemDraftsQuery,
    useLazyFetchProblemDraftQuery,
    useResolveCurationMutation,
    useFetchResolvableProblemDraftQuery,
    useResolveProblemDraftMutation,
    useSwitchProblemDraftQuery,
    useLazySwitchProblemDraftQuery,
    useCountResolvableProblemDraftsQuery,
} = problemDraftsApi;
