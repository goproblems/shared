import qs from 'qs';
import {apiV2} from './index.js';
import {DailyLeaderboardRequest, DailyLeaderboardResponse} from '../contracts/index.js';

export const dailyLeaderboardApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchDailyLeaderboard: builder.query<
            DailyLeaderboardResponse,
            DailyLeaderboardRequest
        >({
            query: ({startDate, sortBy, sortDirection, limit, offset}) => {
                const queryString = qs.stringify({
                    ...(startDate && {startDate}),
                    ...(sortBy && {sortBy}),
                    ...(sortDirection && {sortDirection}),
                    ...(limit && {limit}),
                    ...(offset !== undefined && {offset}),
                });
                return `/daily-leaderboard${queryString ? `?${queryString}` : ''}`;
            },
        }),
    }),
});

export const {useFetchDailyLeaderboardQuery} = dailyLeaderboardApi;
