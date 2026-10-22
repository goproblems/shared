import {apiV2} from './index.js';
import qs from 'qs';
import {
    TimeTrialLeaderboardRequest,
    TimeTrialLeaderboardResponse,
} from '../contracts/index.js';

export const timeTrialLeaderboardApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchTimeTrialLeaderboard: builder.query<
            TimeTrialLeaderboardResponse,
            TimeTrialLeaderboardRequest
        >({
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

export const {useFetchTimeTrialLeaderboardQuery} = timeTrialLeaderboardApi;
