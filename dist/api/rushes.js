import qs from 'qs';
import { apiV2 } from './index.js';
export const rushesApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchRush: builder.query({
            query: id => `/rushes/${id}`,
        }),
        fetchRushResult: builder.query({
            query: id => `/rushes/${id}/result`,
        }),
        createRush: builder.mutation({
            query(body) {
                return {
                    url: '/rushes',
                    method: 'POST',
                    body,
                };
            },
        }),
        fetchRushOverview: builder.query({
            query: () => '/rushes/overview',
            providesTags: ['RushOverview'],
        }),
        fetchRushBestScore: builder.query({
            query: () => '/rushes/best-scores',
        }),
        fetchRushDailyHighScores: builder.query({
            query: () => '/rushes/daily-high-scores',
            providesTags: ['RushDailyHighScores'],
        }),
        postRushResult: builder.mutation({
            query: ({ rushId, rushProblemId, path, solved, duration, moveTimes, }) => ({
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
        completeRush: builder.mutation({
            query: id => ({
                url: `/rushes/${id}/complete`,
                method: 'POST',
            }),
            invalidatesTags: ['RushRecentResults', 'RushDailyHighScores', 'RushOverview'],
        }),
        fetchRushGlobalScores: builder.query({
            query: request => `/rushes/global-scores${qs.stringify(request, { addQueryPrefix: true })}`,
        }),
        fetchRushFriendScores: builder.query({
            query: request => `/rushes/friend-scores${qs.stringify(request, { addQueryPrefix: true })}`,
        }),
        fetchRushPersonalScores: builder.query({
            query: request => `/rushes/personal-scores${qs.stringify(request, { addQueryPrefix: true })}`,
        }),
        fetchRushRecentResults: builder.query({
            query: request => `/rushes/recent-results${qs.stringify(request, { addQueryPrefix: true })}`,
            providesTags: ['RushRecentResults'],
        }),
        fetchLiveRushes: builder.query({
            query: () => '/rushes/live',
        }),
    }),
});
export const { useFetchRushQuery, useFetchRushResultQuery, usePostRushResultMutation, useCompleteRushMutation, useFetchRushGlobalScoresQuery, useFetchRushPersonalScoresQuery, useFetchRushFriendScoresQuery, useLazyFetchRushGlobalScoresQuery, useLazyFetchRushFriendScoresQuery, useLazyFetchRushPersonalScoresQuery, useFetchRushRecentResultsQuery, useFetchRushBestScoreQuery, useFetchRushOverviewQuery, useFetchRushDailyHighScoresQuery, useCreateRushMutation, useFetchLiveRushesQuery, } = rushesApi;
//# sourceMappingURL=rushes.js.map