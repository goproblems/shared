import { apiV2 } from './index.js';
import qs from 'qs';
export const timeTrialLeaderboardApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchTimeTrialLeaderboard: builder.query({
            query: request => ({
                url: `/time-trials/leaderboard${qs.stringify(request, {
                    addQueryPrefix: true,
                    skipNulls: true,
                })}`,
                method: 'GET',
            }),
        }),
    }),
});
export const { useFetchTimeTrialLeaderboardQuery } = timeTrialLeaderboardApi;
//# sourceMappingURL=timeTrialLeaderboard.js.map