import {apiV2} from './index.js';
import {StatisticsResponse, StatisticsTopUsersResponse} from '../contracts/index.js';

export const statisticsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchStatistics: builder.query<StatisticsResponse, void>({
            query: () => ({
                url: '/statistics',
            }),
        }),
        fetchStatisticsTopUsers: builder.query<
            StatisticsTopUsersResponse,
            {
                limit: number;
                offset: number;
                sortBy: 'name' | 'problems' | 'attempts' | 'solves' | 'joined';
                sortDirection: 'asc' | 'desc';
            }
        >({
            query: ({limit, offset, sortBy, sortDirection}) => ({
                url: '/users/',
                method: 'POST',
                body: {
                    criteria: {
                        limit,
                        offset,
                        sortBy,
                        sortDirection,
                    },
                },
            }),
        }),
    }),
});

export const {useFetchStatisticsQuery, useFetchStatisticsTopUsersQuery} =
    statisticsApi;
