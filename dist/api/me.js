import { apiV2 } from './index.js';
import qs from 'qs';
export const meApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchCurationStatus: builder.query({
            query: () => '/me/curation-status',
        }),
        fetchGetPro: builder.query({
            query: () => '/user/get-pro',
        }),
        fetchSgfDownload: builder.query({
            query: () => '/download/sgf',
        }),
        fetchStatusCounts: builder.query({
            query: () => '/me/status-counts',
            providesTags: ['status-counts'],
        }),
        fetchDashboardProblemStats: builder.query({
            query: ({ timezone }) => `/me/problem-stats?${qs.stringify({ timezone })}`,
        }),
        fetchPersonalFriendStatistics: builder.query({
            query: () => '/me/friend-statistics',
        }),
    }),
});
export const { useFetchCurationStatusQuery, useFetchGetProQuery, useFetchSgfDownloadQuery, useLazyFetchSgfDownloadQuery, useFetchStatusCountsQuery, useFetchDashboardProblemStatsQuery, useFetchPersonalFriendStatisticsQuery, } = meApi;
//# sourceMappingURL=me.js.map