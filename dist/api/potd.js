import { apiV2 } from './index.js';
export const potdApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        getDailyStreaks: builder.query({
            query: () => '/problems/daily/streaks',
        }),
    }),
});
export const { useGetDailyStreaksQuery } = potdApi;
//# sourceMappingURL=potd.js.map