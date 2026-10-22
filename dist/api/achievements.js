import { apiV2 } from './index.js';
export const achievementsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        getAchievementInfo: builder.query({
            query: ({ code, limit = 10, offset = 0, sortDirection = 'desc', sortBy = 'achievedAt', }) => `achievements/${encodeURIComponent(code)}?criteria[limit]=${limit}&criteria[offset]=${offset}&criteria[sortDirection]=${sortDirection}&criteria[sortBy]=${sortBy}`,
        }),
        getAchievementInfoDetails: builder.query({
            query: ({ code }) => `achievements-info/${encodeURIComponent(code)}`,
            // Keep data for 1 day
            keepUnusedDataFor: 86400,
        }),
    }),
});
export const { useGetAchievementInfoQuery, useGetAchievementInfoDetailsQuery } = achievementsApi;
//# sourceMappingURL=achievements.js.map