import { apiV2 } from './index.js';
export const levelsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        getLevels: builder.query({
            query: () => '/levels',
        }),
    }),
});
export const { useGetLevelsQuery } = levelsApi;
//# sourceMappingURL=levels.js.map