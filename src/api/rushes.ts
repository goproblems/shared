import qs from 'qs';
import {apiV2} from './index.js';
import {
    RushProblem,
    RushReponse,
    PostRushResultRequest,
    EntriesResponse,
    RushScoreTableEntry,
    RushScoreRequest,
    RushRecentResultsRequest,
    RushRecentResultEntry,
    BestScore,
    RushOverview,
    LiveRushesResponse,
    RushResultView,
    RushDailyHighScoresResponse,
} from '../contracts/index.js';

export const rushesApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchRush: builder.query<RushReponse, number | string>({
            query: id => `/rushes/${id}`,
        }),
        fetchRushResult: builder.query<RushResultView, number | string>({
            query: id => `/rushes/${id}/result`,
        }),
        createRush: builder.mutation<
            {
                id: number;
                resumed: boolean;
            },
            {
                type: number;
            }
        >({
            query(body) {
                return {
                    url: '/rushes',
                    method: 'POST',
                    body,
                };
            },
        }),
        fetchRushOverview: builder.query<RushOverview, void>({
            query: () => '/rushes/overview',
            providesTags: ['RushOverview'],
        }),
        fetchRushBestScore: builder.query<BestScore[], void>({
            query: () => '/rushes/best-scores',
        }),
        fetchRushDailyHighScores: builder.query<RushDailyHighScoresResponse, void>({
            query: () => '/rushes/daily-high-scores',
            providesTags: ['RushDailyHighScores'],
        }),
        postRushResult: builder.mutation<RushProblem[], PostRushResultRequest>({
            query: ({
                rushId,
                rushProblemId,
                path,
                solved,
                duration,
                moveTimes,
            }) => ({
                url: `/rushes/${rushId}/result`,
                method: 'POST',
                body: {
                    id: rushProblemId,
                    path,
                    solved,
                    duration,
                    moveTimes,
                },
            }),
            invalidatesTags: ['RushOverview'],
        }),
        completeRush: builder.mutation<void, number | string>({
            query: id => ({
                url: `/rushes/${id}/complete`,
                method: 'POST',
            }),
            invalidatesTags: ['RushRecentResults', 'RushDailyHighScores', 'RushOverview'],
        }),
        fetchRushGlobalScores: builder.query<
            EntriesResponse<RushScoreTableEntry>,
            RushScoreRequest
        >({
            query: request =>
                `/rushes/global-scores${qs.stringify(request, {addQueryPrefix: true})}`,
        }),
        fetchRushFriendScores: builder.query<
            EntriesResponse<RushScoreTableEntry>,
            RushScoreRequest
        >({
            query: request =>
                `/rushes/friend-scores${qs.stringify(request, {addQueryPrefix: true})}`,
        }),
        fetchRushPersonalScores: builder.query<
            EntriesResponse<RushScoreTableEntry>,
            RushScoreRequest
        >({
            query: request =>
                `/rushes/personal-scores${qs.stringify(request, {addQueryPrefix: true})}`,
        }),
        fetchRushRecentResults: builder.query<
            EntriesResponse<RushRecentResultEntry>,
            RushRecentResultsRequest
        >({
            query: request =>
                `/rushes/recent-results${qs.stringify(request, {addQueryPrefix: true})}`,
            providesTags: ['RushRecentResults'],
        }),
        fetchLiveRushes: builder.query<LiveRushesResponse, void>({
            query: () => '/rushes/live',
        }),
    }),
});

export const {
    useFetchRushQuery,
    useFetchRushResultQuery,
    usePostRushResultMutation,
    useCompleteRushMutation,
    useFetchRushGlobalScoresQuery,
    useFetchRushPersonalScoresQuery,
    useFetchRushFriendScoresQuery,
    useLazyFetchRushGlobalScoresQuery,
    useLazyFetchRushFriendScoresQuery,
    useLazyFetchRushPersonalScoresQuery,
    useFetchRushRecentResultsQuery,
    useFetchRushBestScoreQuery,
    useFetchRushOverviewQuery,
    useFetchRushDailyHighScoresQuery,
    useCreateRushMutation,
    useFetchLiveRushesQuery,
} = rushesApi;
