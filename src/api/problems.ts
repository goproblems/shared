import qs from 'qs';
import {apiV2} from './index.js';
import {
    Comment,
    CommentGenreEnum,
    DailyProblemsResponse,
    EntriesResponse,
    FlaggedProblemsResponse,
    FilteredProblemsResponse,
    FilterProblemsDto,
    NextProblemRequestArgument,
    NextProblemResponse,
    ProblemTextSearchResponse,
    ProblemAttemptsRequest,
    ProblemAttemptsResponse,
    ProblemPotdAttemptsResponse,
    ProblemChange,
    ProblemComment,
    ProblemClearedFlagsResponse,
    ProblemCriteria,
    ProblemFilterTable,
    ProblemFlagsResponse,
    ProblemPathHistory,
    ProblemPersistRequest,
    ProblemProgress,
    ProblemNeedRating,
    ProblemRatingHistory,
    ProblemsByPatternRequest,
    ProblemsResponse,
    ProblemStarsResponse,
    ProblemPathHistoryFull,
    PROBLEMS_PAGE_SIZE,
    SimilarCountsResponse,
    SimilarProblemsPercentageResponse,
    SimilarProblemsResponse,
    SingleProblem,
    SolveProblemRequest,
    TrainingProblemDto,
    SrsTrainingProblemsResponse,
    SrsSessionHistoryEntry,
    SrsActiveSession,
    ReadyTrainingProblemsResponse,
} from '../contracts/index.js';
import {filterNonNull} from '../utils/object.js';
import type {TrainingData} from '../contracts/training.js';
import type {AchievementType} from '../contracts/training.js';

export const POTD_ATTEMPTS_PAGE_SIZE = 30;
const serializeProblemFilters = (inputs: FilterProblemsDto) => qs.stringify(filterNonNull(inputs), {
    encoder: str => {
        if (typeof str === 'boolean') {
            return str ? 1 : 0;
        }
        return str;
    },
});

export type SrsProblemRemovalCriteria = {
    scope: 'older' | 'all';
    months: 1 | 3 | 6 | 12;
};

export const problemsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchDailyProblems: builder.query<DailyProblemsResponse, void>({
            query: () => ({
                url: '/problems/daily/summary',
            }),
        }),
        fetchAllProblemsPaginated: builder.query<
            ProblemsResponse,
            ProblemCriteria
        >({
            query: criteria => ({
                url: '/problems/paginated',
                method: 'POST',
                body: {criteria},
            }),
        }),
        fetchRecommendedProblemsPaginated: builder.query<
            ProblemsResponse,
            ProblemCriteria
        >({
            query: criteria => ({
                url: '/problems/recommendations',
                method: 'POST',
                body: {criteria},
            }),
        }),
        fetchPracticeProblemsPaginated: builder.query<
            ProblemsResponse,
            ProblemCriteria
        >({
            query: criteria => ({
                url: '/problems/practice',
                method: 'POST',
                body: {criteria},
            }),
        }),
        fetchProblemRatingHistory: builder.query<
            ProblemRatingHistory[],
            number | string
        >({
            query: id => ({
                url: `/problems/${id}/rating-history`,
            }),
        }),
        updateProblem: builder.mutation<
            SingleProblem,
            {problemId: number; body: ProblemPersistRequest}
        >({
            query: ({problemId, body}) => ({
                url: `/problems/${problemId}`,
                method: 'PUT',
                body,
            }),
        }),
        saveProblemCollections: builder.mutation<
            void,
            {problemId: number; collections: number[]}
        >({
            query: ({problemId, collections}) => ({
                url: `/problems/${problemId}/collections`,
                method: 'PUT',
                body: {collections},
            }),
        }),
        fetchProblemsByPattern: builder.query<
            FilteredProblemsResponse,
            ProblemsByPatternRequest
        >({
            query({criteria}) {
                return {
                    url: '/problems/search/pattern',
                    method: 'POST',
                    body: {
                        criteria,
                    },
                };
            },
        }),
        fetchProblem: builder.query<SingleProblem, number | string>({
            query: id => ({url: `/problems/${id}`}),
            providesTags: (result, error, id) => [{type: 'problem', id}],
        }),
        fetchProblemPathHistory: builder.query<
            ProblemPathHistory[],
            number | string
        >({
            query: id => ({url: `/problems/${id}/path-history`}),
        }),
        fetchProblemComments: builder.query<ProblemComment[], string>({
            query: id => ({
                url: `/problems/${id}/comments`,
            }),
        }),
        createProblem: builder.mutation<SingleProblem, ProblemPersistRequest>({
            query: body => ({
                url: '/problems',
                method: 'POST',
                body,
            }),
        }),
        getProblems: builder.query<ProblemFilterTable[], FilterProblemsDto>({
            query: inputs => 'problems?' + serializeProblemFilters(inputs),
        }),
        fetchNeedRatingProblemsPaginated: builder.query<
            EntriesResponse<ProblemNeedRating>,
            ProblemCriteria
        >({
            query: inputs => ({
                url:
                    '/problems/need-rating/paginated?' +
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
        fetchFlaggedProblems: builder.query<FlaggedProblemsResponse, void>({
            query: () => ({
                url: '/problems/flagged',
            }),
        }),
        searchProblemsByText: builder.query<
            ProblemTextSearchResponse,
            {
                text: string;
                searchInText: boolean;
                searchInComments: boolean;
                searchTextPage?: number;
                searchCommentsPage?: number;
            }
        >({
            query: ({
                text,
                searchInText,
                searchInComments,
                searchTextPage = 1,
                searchCommentsPage = 1,
            }) => ({
                url:
                    '/problems/search/text?' +
                    qs.stringify({
                        text,
                        searchInText,
                        searchInComments,
                        searchTextPage,
                        searchCommentsPage,
                    }),
            }),
        }),
        fetchRecentComments: builder.query<
            EntriesResponse<Comment>,
            {limit: number; deactivated: boolean}
        >({
            query: ({limit, deactivated}) => ({
                url: '/comments/recent?' + qs.stringify({limit, deactivated}),
            }),
        }),
        problemsPagination: builder.query<number, FilterProblemsDto>({
            query: inputs => 'problems/total?' + serializeProblemFilters(inputs),
        }),
        getInfiniteProblems: builder.infiniteQuery<
            ProblemFilterTable[],
            FilterProblemsDto,
            number
        >({
            infiniteQueryOptions: {
                initialPageParam: 0,
                getNextPageParam: (
                    lastPage,
                    allPages,
                    lastPageParam,
                    allPageParams,
                    queryArg
                ) =>
                    lastPageParam +
                    (queryArg.limit ?? PROBLEMS_PAGE_SIZE),
            },
            query({queryArg, pageParam}) {
                return 'problems?' + serializeProblemFilters({...queryArg, offset: pageParam});
            },
        }),
        fetchProblemFlags: builder.query<
            ProblemFlagsResponse,
            {problemId: number | string; deleted?: boolean}
        >({
            query: ({problemId, deleted = false}) => ({
                url: `/problems/${problemId}/flags`,
                params: deleted ? {deleted: true} : undefined,
            }),
        }),
        fetchProblemClearedFlags: builder.query<
            ProblemClearedFlagsResponse,
            number | string
        >({
            query: problemId => ({
                url: `/problems/${problemId}/cleared-flags`,
            }),
        }),
        fetchProblemChanges: builder.query<ProblemChange[], number | string>({
            query: id => ({
                url: `/problems/${id}/changes`,
            }),
        }),
        fetchProblemChangesCount: builder.query<
            number,
            number | string | undefined
        >({
            query: id => ({
                url: `/problems/${id}/changes-count`,
            }),
        }),
        fetchProblemAttempts: builder.query<
            ProblemAttemptsResponse,
            ProblemAttemptsRequest
        >({
            query: ({criteria}) => ({
                url: `/attempts${qs.stringify(criteria, {addQueryPrefix: true})}`,
            }),
        }),
        fetchPersonalProblemAttempts: builder.query<
            ProblemAttemptsResponse,
            {problemId: number; userId: number; sortDirection: string}
        >({
            async queryFn(criteria, _api, _extraOptions, baseQuery) {
                const items: ProblemAttemptsResponse['items'] = [];
                let totalRecords = 0;
                do {
                    const result = await baseQuery({
                        url: `/attempts${qs.stringify(
                            {
                                ...criteria,
                                sortBy: 'createdAt',
                                limit: 100,
                                offset: items.length,
                            },
                            {addQueryPrefix: true}
                        )}`,
                    });
                    if (result.error) return {error: result.error};
                    const page = result.data as ProblemAttemptsResponse;
                    items.push(...page.items);
                    totalRecords = page.totalRecords;
                    if (!page.items.length) break;
                } while (items.length < totalRecords);
                return {data: {items, totalRecords}};
            },
        }),
        fetchProblemPotdAttempts: builder.query<
            ProblemPotdAttemptsResponse,
            {
                problemId: number;
                date?: string;
                includeFailed?: boolean;
                limit: number;
                offset: number;
                sortDirection: string;
            }
        >({
            query: ({problemId, ...criteria}) => ({
                url: `/problems/${problemId}/potd-attempts${qs.stringify(
                    {...criteria, sortBy: 'createdAt'},
                    {addQueryPrefix: true}
                )}`,
            }),
        }),
        getInfiniteProblemAttempts: builder.infiniteQuery<
            ProblemAttemptsResponse,
            ProblemAttemptsRequest,
            number
        >({
            infiniteQueryOptions: {
                initialPageParam: 0,
                getNextPageParam: (lastPage, allPages) =>
                    lastPage?.items?.length === POTD_ATTEMPTS_PAGE_SIZE
                        ? allPages.length * POTD_ATTEMPTS_PAGE_SIZE
                        : undefined,
            },
            query({queryArg, pageParam}) {
                return {
                    url: `/attempts${qs.stringify(
                        {
                            ...queryArg.criteria,
                            offset: pageParam,
                        },
                        {addQueryPrefix: true}
                    )}`,
                };
            },
        }),
        addProblemFlag: builder.mutation<
            void,
            {
                problemId: number | string;
                type: string | number;
                comment?: string;
            }
        >({
            query: ({problemId, type, comment}) => ({
                url: `/problems/${problemId}/flag`,
                method: 'POST',
                body: {
                    type,
                    comment,
                },
            }),
        }),
        deleteProblemFlag: builder.mutation<
            void,
            {id: string | number; body: {comment: string | null}}
        >({
            query: ({id, body}) => ({
                url: `/flags/${id}`,
                method: 'DELETE',
                body,
            }),
        }),
        fetchProblemStars: builder.query<ProblemStarsResponse, number | string>(
            {
                query: id => ({
                    url: `/problems/${id}/stars`,
                }),
            }
        ),
        starProblem: builder.mutation<void, {problemId: number; star: number}>({
            query: ({problemId, star}) => ({
                url: `/problems/${problemId}/star`,
                method: 'POST',
                body: {star},
            }),
        }),
        fetchSimilarCounts: builder.query<
            SimilarCountsResponse,
            {
                pattern: string;
                excludedIds: number[];
            }
        >({
            query: ({pattern, excludedIds}) => ({
                url: '/problems/similar-counts',
                method: 'POST',
                body: {
                    pattern,
                    excludedIds,
                },
            }),
        }),
        fetchSimilarProblems: builder.query<
            SimilarProblemsResponse,
            {
                pattern: string;
                radii: number[];
                excludedIds: number[];
                limit: number;
            }
        >({
            query: ({pattern, radii, excludedIds, limit}) => ({
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
        fetchSimilarProblemsPercentage: builder.query<
            SimilarProblemsPercentageResponse,
            {
                pattern: string;
                excludedIds: number[];
                includedIds?: number[];
                limit: number;
            }
        >({
            query: ({pattern, excludedIds, includedIds, limit}) => ({
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
        fetchNextProblem: builder.query<
            NextProblemResponse,
            NextProblemRequestArgument
        >({
            query: params => ({
                url: `/problems/next${qs.stringify(params, {addQueryPrefix: true})}`,
            }),
        }),
        fetchNextProblemPost: builder.mutation<
            NextProblemResponse,
            NextProblemRequestArgument
        >({
            query: function (params) {
                const rest = {...params};
                delete rest.excludedIds;
                //too much of excludedIds causes the url to be too long, so we switch to POST and put them in the body instead
                return {
                    url: `/problems/next${qs.stringify(rest, {addQueryPrefix: true})}`,
                    method: 'POST',
                    body: params,
                };
            },
        }),
        clearProblemSoftStopAttempts: builder.mutation<void, number | string>({
            query: problemId => ({
                url: `/problems/${problemId}/soft-stop-attempts`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, problemId) =>
                error
                    ? []
                    : [
                          {type: 'problem', id: problemId},
                          {type: 'problem', id: String(problemId)},
                      ],
        }),
        solveTrainingProblem: builder.mutation<
            TrainingProblemDto,
            SolveProblemRequest
        >({
            invalidatesTags: ['training_counter', 'srs_active_session'],
            query: ({
                problemId,
                hardStop,
                path,
                solveTime,
                solveTimeMs,
                solved,
                moveTimes,
                name,
            }) => ({
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
        createComment: builder.mutation<
            void,
            {
                prob: number | string;
                authorid: number | string;
                comment: string;
                genre: CommentGenreEnum;
                path: string;
            }
        >({
            query: ({prob, authorid, comment, genre, path}) => ({
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
        getTrainingData: builder.query<TrainingData, void>({
            query: () => 'training-problems/bucket-count',
            providesTags: ['training_counter'],
        }),
        getSrsTrainingProblems: builder.infiniteQuery<
            SrsTrainingProblemsResponse,
            {sortBy: string; sortDirection: string},
            {offset: number; limit: number}
        >({
            infiniteQueryOptions: {
                initialPageParam: {offset: 0, limit: 25},
                getNextPageParam: (lastPage, _allPages, lastPageParam) => {
                    const nextOffset =
                        lastPageParam.offset + lastPageParam.limit;

                    return nextOffset < lastPage.totalRecords
                        ? {...lastPageParam, offset: nextOffset}
                        : undefined;
                },
            },
            query: ({queryArg, pageParam}) => ({
                url: `srs/problems?${qs.stringify({...queryArg, ...pageParam})}`,
            }),
            providesTags: ['training_counter'],
        }),
        removeSrsTrainingProblem: builder.mutation<void, number>({
            query: problemId => ({
                url: `srs/problems/${problemId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['training_counter', 'srs_active_session'],
        }),
        getSrsProblemRemovalPreview: builder.query<
            {count: number},
            SrsProblemRemovalCriteria
        >({
            query: criteria =>
                `srs/problems/removal-preview?${qs.stringify(criteria)}`,
            providesTags: ['training_counter'],
        }),
        removeSrsTrainingProblems: builder.mutation<
            {removedCount: number; sessionEnded: boolean},
            SrsProblemRemovalCriteria
        >({
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
        getSrsSessions: builder.query<SrsSessionHistoryEntry[], void>({
            query: () => 'srs/sessions',
            providesTags: ['srs_sessions'],
        }),
        getActiveSrsSession: builder.query<SrsActiveSession | null, void>({
            query: () => 'srs/sessions/active',
            providesTags: ['srs_active_session'],
        }),
        getCollectionSrsReadyCount: builder.query<
            {readyCount: number},
            number
        >({
            query: collectionId =>
                `srs/collections/${collectionId}/ready-count`,
            providesTags: ['training_counter'],
        }),
        startCollectionSrsSession: builder.mutation<
            SrsActiveSession | null,
            {collectionId: number; replaceCurrent?: boolean}
        >({
            query: ({collectionId, replaceCurrent = false}) => ({
                url: `srs/collections/${collectionId}/start`,
                method: 'POST',
                body: {replaceCurrent},
            }),
            invalidatesTags: ['srs_active_session', 'srs_sessions'],
        }),
        startSrsSession: builder.mutation<SrsActiveSession | null, number[] | void>({
            query: problemIds => ({
                url: 'srs/sessions/start',
                method: 'POST',
                body: {problemIds: problemIds ?? []},
            }),
            invalidatesTags: ['srs_active_session'],
        }),
        advanceSrsSession: builder.mutation<SrsActiveSession | null, number>({
            query: problemId => ({
                url: `srs/sessions/advance/${problemId}`,
                method: 'POST',
            }),
            invalidatesTags: ['srs_active_session'],
        }),
        endSrsSession: builder.mutation<void, void>({
            query: () => ({url: 'srs/sessions/end', method: 'POST'}),
            invalidatesTags: ['srs_sessions', 'srs_active_session'],
        }),
        getReadyTrainingProblems: builder.query<
            ReadyTrainingProblemsResponse,
            void
        >({
            query: () => 'training-problems/ready',
        }),
        skipProblemTraining: builder.mutation<
            void,
            {problemId: number; duration?: string}
        >({
            query: ({problemId, duration}) => ({
                url: `/problem/${problemId}/training-problems/skip`,
                method: 'POST',
                body: duration ? {duration} : {},
            }),
            invalidatesTags: ['training_counter', 'srs_active_session'],
        }),
        sendSolvedProblem: builder.mutation<void, AchievementType>({
            query: code => ({
                url: `/achievement/training-problem/${code}`,
                method: 'POST',
            }),
        }),
        getNextTraining: builder.query<ProblemProgress, void>({
            query: () => ({
                url: '/training-problems/next',
            }),
        }),
        getTrainingProblem: builder.query<TrainingProblemDto | null, number>({
            query: problemId => ({
                url: `/problems/${problemId}/training-problem`,
            }),
            providesTags: ['training_counter'],
        }),
        toggleTrainingProblem: builder.mutation<
            {
                action: 'created' | 'deleted';
                trainingProblem: TrainingProblemDto | null;
            },
            number
        >({
            query: problemId => ({
                url: `/problems/${problemId}/training-problem/toggle`,
                method: 'POST',
            }),
            invalidatesTags: ['training_counter'],
        }),
        deleteComment: builder.mutation<
            void,
            {
                problemId: number;
                commentId: number;
            }
        >({
            query: ({problemId, commentId}) => ({
                url: `/problems/${problemId}/comments/${commentId}/delete`,
                method: 'DELETE',
            }),
        }),
        changeProblemLevel: builder.mutation<
            SingleProblem,
            {
                problemId: number;
                level: number;
            }
        >({
            query: ({problemId, level}) => ({
                url: `/problems/${problemId}/level`,
                method: 'PUT',
                body: {level},
            }),
            invalidatesTags: (result, error, {problemId}) => [
                {type: 'problem' as const, id: problemId},
            ],
        }),
        fetchPathHistoryFull: builder.query<
            ProblemPathHistoryFull,
            number | string
        >({
            query: id => ({
                url: `/problems/${id}/path-history-full`,
            }),
        }),
    }),
});

export const {
    useFetchProblemQuery,
    useFetchProblemPathHistoryQuery,
    useLazyFetchProblemQuery,
    useFetchProblemCommentsQuery,
    useFetchProblemFlagsQuery,
    useFetchProblemClearedFlagsQuery,
    useAddProblemFlagMutation,
    useDeleteProblemFlagMutation,
    useFetchProblemStarsQuery,
    useStarProblemMutation,
    useFetchSimilarCountsQuery,
    useFetchSimilarProblemsQuery,
    useFetchSimilarProblemsPercentageQuery,
    useClearProblemSoftStopAttemptsMutation,
    useCreateCommentMutation,
    useDeleteCommentMutation,
    useFetchNextProblemQuery,
    useLazyFetchNextProblemQuery,
    useFetchProblemAttemptsQuery,
    useFetchPersonalProblemAttemptsQuery,
    useFetchProblemPotdAttemptsQuery,
    useFetchNextProblemPostMutation,
    useGetProblemsQuery,
    useProblemsPaginationQuery,
    useGetInfiniteProblemsInfiniteQuery,
    useCreateProblemMutation,
    useFetchProblemChangesQuery,
    useFetchProblemChangesCountQuery,
    useGetInfiniteProblemAttemptsInfiniteQuery,
    useGetTrainingDataQuery,
    useGetSrsTrainingProblemsInfiniteQuery,
    useRemoveSrsTrainingProblemMutation,
    useGetSrsProblemRemovalPreviewQuery,
    useRemoveSrsTrainingProblemsMutation,
    useGetSrsSessionsQuery,
    useGetActiveSrsSessionQuery,
    useLazyGetActiveSrsSessionQuery,
    useGetCollectionSrsReadyCountQuery,
    useStartCollectionSrsSessionMutation,
    useStartSrsSessionMutation,
    useAdvanceSrsSessionMutation,
    useEndSrsSessionMutation,
    useGetReadyTrainingProblemsQuery,
    useLazyGetReadyTrainingProblemsQuery,
    useSkipProblemTrainingMutation,
    useSolveTrainingProblemMutation,
    useGetNextTrainingQuery,
    useFetchNeedRatingProblemsPaginatedQuery,
    useFetchFlaggedProblemsQuery,
    useSearchProblemsByTextQuery,
    useLazySearchProblemsByTextQuery,
    useFetchRecentCommentsQuery,
    useLazyFetchRecentCommentsQuery,
    useGetTrainingProblemQuery,
    useToggleTrainingProblemMutation,
    useSendSolvedProblemMutation,
    useChangeProblemLevelMutation,
    useFetchPathHistoryFullQuery,
    useFetchDailyProblemsQuery,
    useFetchAllProblemsPaginatedQuery,
    useFetchRecommendedProblemsPaginatedQuery,
    useFetchPracticeProblemsPaginatedQuery,
    useFetchProblemRatingHistoryQuery,
    useUpdateProblemMutation,
    useSaveProblemCollectionsMutation,
    useFetchProblemsByPatternQuery,
} = problemsApi;
