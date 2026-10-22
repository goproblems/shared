import { apiV2 } from './index.js';
export const statisticsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchStatistics: builder.query({
            query: () => ({
                url: '/statistics',
            }),
        }),
        fetchStatisticsTopUsers: builder.query({
            query: ({ limit, offset, sortBy, sortDirection }) => ({
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
export const { useFetchStatisticsQuery, useFetchStatisticsTopUsersQuery } = statisticsApi;
//# sourceMappingURL=statistics.js.map