import qs from 'qs';
import { apiV2 } from './index.js';
import { PROBLEMS_PAGE_SIZE, } from '../contracts/index.js';
import { filterNonNull } from '../utils/object.js';
export const POTD_ATTEMPTS_PAGE_SIZE = 30;
const serializeProblemFilters = (inputs) => qs.stringify(filterNonNull(inputs), {
    encoder: str => {
        if (typeof str === 'boolean') {
            return str ? 1 : 0;
        }
        return str;
    },
});
export const problemsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchDailyProblems: builder.query({
            query: () => ({
                url: '/problems/daily/summary',
            }),
        }),
        fetchAllProblemsPaginated: builder.query({
            query: criteria => ({
                url: '/problems/paginated',
                method: 'POST',
                body: { criteria },
            }),
        }),
        fetchRecommendedProblemsPaginated: builder.query({
            query: criteria => ({
                url: '/problems/recommendations',
                method: 'POST',
                body: { criteria },
            }),
        }),
        fetchPracticeProblemsPaginated: builder.query({
            query: criteria => ({
                url: '/problems/practice',
                method: 'POST',
                body: { criteria },
            }),
        }),
        fetchProblemRatingHistory: builder.query({
            query: id => ({
                url: `/problems/${id}/rating-history`,
            }),
        }),
        updateProblem: builder.mutation({
            query: ({ problemId, body }) => ({
                url: `/problems/${problemId}`,
                method: 'PUT',
                body,
            }),
        }),
        saveProblemCollections: builder.mutation({
            query: ({ problemId, collections }) => ({
                url: `/problems/${problemId}/collections`,
                method: 'PUT',
                body: { collections },
            }),
        }),
        fetchProblemsByPattern: builder.query({
            query({ criteria }) {
                return {
                    url: '/problems/search/pattern',
                    method: 'POST',
                    body: {
                        criteria,
                    },
                };
            },
        }),
        fetchProblem: builder.query({
            query: id => ({ url: `/problems/${id}` }),
            providesTags: (result, error, id) => [{ type: 'problem', id }],
        }),
        fetchProblemPathHistory: builder.query({
            query: id => ({ url: `/problems/${id}/path-history` }),
        }),
        fetchProblemComments: builder.query({
            query: id => ({
                url: `/problems/${id}/comments`,
            }),
        }),
        createProblem: builder.mutation({
            query: body => ({
                url: '/problems',
                method: 'POST',
                body,
            }),
        }),
        getProblems: builder.query({
            query: inputs => 'problems?' + serializeProblemFilters(inputs),
        }),
        fetchNeedRatingProblemsPaginated: builder.query({
            query: inputs => ({
                url: '/problems/need-rating/paginated?' +
                    qs.stringify(filterNonNull(inputs), {
                        encoder: str => {
                            if (typeof str === 'boolean') {
                                return str ? 1 : 0;
                            }
                            return str;
                        },
                    }),
            }),
        }),
        fetchFlaggedProblems: builder.query({
            query: () => ({
                url: '/problems/flagged',
            }),
        }),
        searchProblemsByText: builder.query({
            query: ({ text, searchInText, searchInComments, searchTextPage = 1, searchCommentsPage = 1, }) => ({
                url: '/problems/search/text?' +
                    qs.stringify({
                        text,
                        searchInText,
                        searchInComments,
                        searchTextPage,
                        searchCommentsPage,
                    }),
            }),
        }),
        fetchRecentComments: builder.query({
            query: ({ limit, deactivated }) => ({
                url: '/comments/recent?' + qs.stringify({ limit, deactivated }),
            }),
        }),
        problemsPagination: builder.query({
            query: inputs => 'problems/total?' + serializeProblemFilters(inputs),
        }),
        getInfiniteProblems: builder.infiniteQuery({
            infiniteQueryOptions: {
                initialPageParam: 0,
                getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams, queryArg) => lastPageParam +
                    (queryArg.limit ?? PROBLEMS_PAGE_SIZE),
            },
            query({ queryArg, pageParam }) {
                return 'problems?' + serializeProblemFilters({ ...queryArg, offset: pageParam });
            },
        }),
        fetchProblemFlags: builder.query({
            query: ({ problemId, deleted = false }) => ({
                url: `/problems/${problemId}/flags`,
                params: deleted ? { deleted: true } : undefined,
            }),
        }),
        fetchProblemClearedFlags: builder.query({
            query: problemId => ({
                url: `/problems/${problemId}/cleared-flags`,
            }),
        }),
        fetchProblemChanges: builder.query({
            query: id => ({
                url: `/problems/${id}/changes`,
            }),
        }),
        fetchProblemChangesCount: builder.query({
            query: id => ({
                url: `/problems/${id}/changes-count`,
            }),
        }),
        fetchProblemAttempts: builder.query({
            query: ({ criteria }) => ({
                url: `/attempts${qs.stringify(criteria, { addQueryPrefix: true })}`,
            }),
        }),
        fetchPersonalProblemAttempts: builder.query({
            async queryFn(criteria, _api, _extraOptions, baseQuery) {
                const items = [];
                let totalRecords = 0;
                do {
                    const result = await baseQuery({
                        url: `/attempts${qs.stringify({
                            ...criteria,
                            sortBy: 'createdAt',
                            limit: 100,
                            offset: items.length,
                        }, { addQueryPrefix: true })}`,
                    });
                    if (result.error)
                        return { error: result.error };
                    const page = result.data;
                    items.push(...page.items);
                    totalRecords = page.totalRecords;
                    if (!page.items.length)
                        break;
                } while (items.length < totalRecords);
                return { data: { items, totalRecords } };
            },
        }),
        fetchProblemPotdAttempts: builder.query({
            query: ({ problemId, ...criteria }) => ({
                url: `/problems/${problemId}/potd-attempts${qs.stringify({ ...criteria, sortBy: 'createdAt' }, { addQueryPrefix: true })}`,
            }),
        }),
        getInfiniteProblemAttempts: builder.infiniteQuery({
            infiniteQueryOptions: {
                initialPageParam: 0,
                getNextPageParam: (lastPage, allPages) => lastPage?.items?.length === POTD_ATTEMPTS_PAGE_SIZE
                    ? allPages.length * POTD_ATTEMPTS_PAGE_SIZE
                    : undefined,
            },
            query({ queryArg, pageParam }) {
                return {
                    url: `/attempts${qs.stringify({
                        ...queryArg.criteria,
                        offset: pageParam,
                    }, { addQueryPrefix: true })}`,
                };
            },
        }),
        addProblemFlag: builder.mutation({
            query: ({ problemId, type, comment }) => ({
                url: `/problems/${problemId}/flag`,
                method: 'POST',
                body: {
                    type,
                    comment,
                },
            }),
        }),
        deleteProblemFlag: builder.mutation({
            query: ({ id, body }) => ({
                url: `/flags/${id}`,
                method: 'DELETE',
                body,
            }),
        }),
        fetchProblemStars: builder.query({
            query: id => ({
                url: `/problems/${id}/stars`,
            }),
        }),
        starProblem: builder.mutation({
            query: ({ problemId, star }) => ({
                url: `/problems/${problemId}/star`,
                method: 'POST',
                body: { star },
            }),
        }),
        fetchSimilarCounts: builder.query({
            query: ({ pattern, excludedIds }) => ({
                url: '/problems/similar-counts',
                method: 'POST',
                body: {
                    pattern,
                    excludedIds,
                },
            }),
        }),
        fetchSimilarProblems: builder.query({
            query: ({ pattern, radii, excludedIds, limit }) => ({
                url: '/problems/similar',
                method: 'POST',
                body: {
                    pattern,
                    radii,
                    excludedIds,
                    limit,
                },
            }),
        }),
        fetchSimilarProblemsPercentage: builder.query({
            query: ({ pattern, excludedIds, includedIds, limit }) => ({
                url: '/problems/similar-percentage',
                method: 'POST',
                body: {
                    pattern,
                    excludedIds,
                    includedIds,
                    limit,
                },
            }),
        }),
        fetchNextProblem: builder.query({
            query: params => ({
                url: `/problems/next${qs.stringify(params, { addQueryPrefix: true })}`,
            }),
        }),
        fetchNextProblemPost: builder.mutation({
            query: function (params) {
                const rest = { ...params };
                delete rest.excludedIds;
                //too much of excludedIds causes the url to be too long, so we switch to POST and put them in the body instead
                return {
                    url: `/problems/next${qs.stringify(rest, { addQueryPrefix: true })}`,
                    method: 'POST',
                    body: params,
                };
            },
        }),
        clearProblemSoftStopAttempts: builder.mutation({
            query: problemId => ({
                url: `/problems/${problemId}/soft-stop-attempts`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, problemId) => error
                ? []
                : [
                    { type: 'problem', id: problemId },
                    { type: 'problem', id: String(problemId) },
                ],
        }),
        solveTrainingProblem: builder.mutation({
            invalidatesTags: ['training_counter', 'srs_active_session'],
            query: ({ problemId, hardStop, path, solveTime, solveTimeMs, solved, moveTimes, name, }) => ({
                url: `/problem/${problemId}/training-problems/solved`,
                method: 'POST',
                body: {
                    hardStop,
                    path,
                    solveTime,
                    solveTimeMs,
                    solved,
                    moveTimes,
                    name,
                },
            }),
        }),
        createComment: builder.mutation({
            query: ({ prob, authorid, comment, genre, path }) => ({
                url: '/problem/comment',
                method: 'POST',
                body: {
                    prob,
                    authorid,
                    comment,
                    genre,
                    path,
                },
            }),
        }),
        getTrainingData: builder.query({
            query: () => 'training-problems/bucket-count',
            providesTags: ['training_counter'],
        }),
        getSrsTrainingProblems: builder.infiniteQuery({
            infiniteQueryOptions: {
                initialPageParam: { offset: 0, limit: 25 },
                getNextPageParam: (lastPage, _allPages, lastPageParam) => {
                    const nextOffset = lastPageParam.offset + lastPageParam.limit;
                    return nextOffset < lastPage.totalRecords
                        ? { ...lastPageParam, offset: nextOffset }
                        : undefined;
                },
            },
            query: ({ queryArg, pageParam }) => ({
                url: `srs/problems?${qs.stringify({ ...queryArg, ...pageParam })}`,
            }),
            providesTags: ['training_counter'],
        }),
        removeSrsTrainingProblem: builder.mutation({
            query: problemId => ({
                url: `srs/problems/${problemId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['training_counter', 'srs_active_session'],
        }),
        getSrsProblemRemovalPreview: builder.query({
            query: criteria => `srs/problems/removal-preview?${qs.stringify(criteria)}`,
            providesTags: ['training_counter'],
        }),
        removeSrsTrainingProblems: builder.mutation({
            query: criteria => ({
                url: 'srs/problems/bulk-remove',
                method: 'POST',
                body: criteria,
            }),
            invalidatesTags: [
                'training_counter',
                'srs_active_session',
                'srs_sessions',
            ],
        }),
        getSrsSessions: builder.query({
            query: () => 'srs/sessions',
            providesTags: ['srs_sessions'],
        }),
        getActiveSrsSession: builder.query({
            query: () => 'srs/sessions/active',
            providesTags: ['srs_active_session'],
        }),
        getCollectionSrsReadyCount: builder.query({
            query: collectionId => `srs/collections/${collectionId}/ready-count`,
            providesTags: ['training_counter'],
        }),
        startCollectionSrsSession: builder.mutation({
            query: ({ collectionId, replaceCurrent = false }) => ({
                url: `srs/collections/${collectionId}/start`,
                method: 'POST',
                body: { replaceCurrent },
            }),
            invalidatesTags: ['srs_active_session', 'srs_sessions'],
        }),
        startSrsSession: builder.mutation({
            query: problemIds => ({
                url: 'srs/sessions/start',
                method: 'POST',
                body: { problemIds: problemIds ?? [] },
            }),
            invalidatesTags: ['srs_active_session'],
        }),
        advanceSrsSession: builder.mutation({
            query: problemId => ({
                url: `srs/sessions/advance/${problemId}`,
                method: 'POST',
            }),
            invalidatesTags: ['srs_active_session'],
        }),
        endSrsSession: builder.mutation({
            query: () => ({ url: 'srs/sessions/end', method: 'POST' }),
            invalidatesTags: ['srs_sessions', 'srs_active_session'],
        }),
        getReadyTrainingProblems: builder.query({
            query: () => 'training-problems/ready',
        }),
        skipProblemTraining: builder.mutation({
            query: ({ problemId, duration }) => ({
                url: `/problem/${problemId}/training-problems/skip`,
                method: 'POST',
                body: duration ? { duration } : {},
            }),
            invalidatesTags: ['training_counter', 'srs_active_session'],
        }),
        sendSolvedProblem: builder.mutation({
            query: code => ({
                url: `/achievement/training-problem/${code}`,
                method: 'POST',
            }),
        }),
        getNextTraining: builder.query({
            query: () => ({
                url: '/training-problems/next',
            }),
        }),
        getTrainingProblem: builder.query({
            query: problemId => ({
                url: `/problems/${problemId}/training-problem`,
            }),
            providesTags: ['training_counter'],
        }),
        toggleTrainingProblem: builder.mutation({
            query: problemId => ({
                url: `/problems/${problemId}/training-problem/toggle`,
                method: 'POST',
            }),
            invalidatesTags: ['training_counter'],
        }),
        deleteComment: builder.mutation({
            query: ({ problemId, commentId }) => ({
                url: `/problems/${problemId}/comments/${commentId}/delete`,
                method: 'DELETE',
            }),
        }),
        changeProblemLevel: builder.mutation({
            query: ({ problemId, level }) => ({
                url: `/problems/${problemId}/level`,
                method: 'PUT',
                body: { level },
            }),
            invalidatesTags: (result, error, { problemId }) => [
                { type: 'problem', id: problemId },
            ],
        }),
        fetchPathHistoryFull: builder.query({
            query: id => ({
                url: `/problems/${id}/path-history-full`,
            }),
        }),
    }),
});
export const { useFetchProblemQuery, useFetchProblemPathHistoryQuery, useLazyFetchProblemQuery, useFetchProblemCommentsQuery, useFetchProblemFlagsQuery, useFetchProblemClearedFlagsQuery, useAddProblemFlagMutation, useDeleteProblemFlagMutation, useFetchProblemStarsQuery, useStarProblemMutation, useFetchSimilarCountsQuery, useFetchSimilarProblemsQuery, useFetchSimilarProblemsPercentageQuery, useClearProblemSoftStopAttemptsMutation, useCreateCommentMutation, useDeleteCommentMutation, useFetchNextProblemQuery, useLazyFetchNextProblemQuery, useFetchProblemAttemptsQuery, useFetchPersonalProblemAttemptsQuery, useFetchProblemPotdAttemptsQuery, useFetchNextProblemPostMutation, useGetProblemsQuery, useProblemsPaginationQuery, useGetInfiniteProblemsInfiniteQuery, useCreateProblemMutation, useFetchProblemChangesQuery, useFetchProblemChangesCountQuery, useGetInfiniteProblemAttemptsInfiniteQuery, useGetTrainingDataQuery, useGetSrsTrainingProblemsInfiniteQuery, useRemoveSrsTrainingProblemMutation, useGetSrsProblemRemovalPreviewQuery, useRemoveSrsTrainingProblemsMutation, useGetSrsSessionsQuery, useGetActiveSrsSessionQuery, useLazyGetActiveSrsSessionQuery, useGetCollectionSrsReadyCountQuery, useStartCollectionSrsSessionMutation, useStartSrsSessionMutation, useAdvanceSrsSessionMutation, useEndSrsSessionMutation, useGetReadyTrainingProblemsQuery, useLazyGetReadyTrainingProblemsQuery, useSkipProblemTrainingMutation, useSolveTrainingProblemMutation, useGetNextTrainingQuery, useFetchNeedRatingProblemsPaginatedQuery, useFetchFlaggedProblemsQuery, useSearchProblemsByTextQuery, useLazySearchProblemsByTextQuery, useFetchRecentCommentsQuery, useLazyFetchRecentCommentsQuery, useGetTrainingProblemQuery, useToggleTrainingProblemMutation, useSendSolvedProblemMutation, useChangeProblemLevelMutation, useFetchPathHistoryFullQuery, useFetchDailyProblemsQuery, useFetchAllProblemsPaginatedQuery, useFetchRecommendedProblemsPaginatedQuery, useFetchPracticeProblemsPaginatedQuery, useFetchProblemRatingHistoryQuery, useUpdateProblemMutation, useSaveProblemCollectionsMutation, useFetchProblemsByPatternQuery, } = problemsApi;
//# sourceMappingURL=problems.js.map