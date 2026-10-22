import {apiV2} from './index.js';
import {UserMinimal} from '../contracts/index.js';

export type PotdStreakEntry = {
    user: UserMinimal;
    username: string;
    displayRating?: number;
    streak: number;
};

export const potdApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        getDailyStreaks: builder.query<PotdStreakEntry[], void>({
            query: () => '/problems/daily/streaks',
        }),
    }),
});

export const {useGetDailyStreaksQuery} = potdApi;
