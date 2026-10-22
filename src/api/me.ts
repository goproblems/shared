import {apiV2} from './index.js';
import {
    CurationStatus,
    DashboardProblemStats,
    PersonalFriendStatistics,
    StatusCounts,
} from '../contracts/index.js';
import qs from 'qs';

type GetProResponse = {
    freePro: boolean | null;
    lastPay: string | null;
};

type SgfDownloadResponse = {
    url: string;
    filename: string;
    size: number | null;
};

export const meApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchCurationStatus: builder.query<CurationStatus, void>({
            query: () => '/me/curation-status',
        }),
        fetchGetPro: builder.query<GetProResponse, void>({
            query: () => '/user/get-pro',
        }),
        fetchSgfDownload: builder.query<SgfDownloadResponse, void>({
            query: () => '/download/sgf',
        }),
        fetchStatusCounts: builder.query<StatusCounts, void>({
            query: () => '/me/status-counts',
            providesTags: ['status-counts'],
        }),
        fetchDashboardProblemStats: builder.query<
            DashboardProblemStats,
            {timezone: string}
        >({
            query: ({timezone}) =>
                `/me/problem-stats?${qs.stringify({timezone})}`,
        }),
        fetchPersonalFriendStatistics: builder.query<
            PersonalFriendStatistics,
            void
        >({
            query: () => '/me/friend-statistics',
        }),
    }),
});

export const {
    useFetchCurationStatusQuery,
    useFetchGetProQuery,
    useFetchSgfDownloadQuery,
    useLazyFetchSgfDownloadQuery,
    useFetchStatusCountsQuery,
    useFetchDashboardProblemStatsQuery,
    useFetchPersonalFriendStatisticsQuery,
} = meApi;
