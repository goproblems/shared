import { apiV2 } from './index.js';
import { ROWS_PER_PAGE } from '../contracts/pagination.js';
export const leaderboardApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        getUserLeaderboardList: builder.query({
            query: ({ page, sortDirection, sortBy }) => `/users/leaderboard?limit=${ROWS_PER_PAGE}&offset=${ROWS_PER_PAGE * page}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
        }),
    }),
});
export const { useGetUserLeaderboardListQuery } = leaderboardApi;
//# sourceMappingURL=leaderboard.js.map