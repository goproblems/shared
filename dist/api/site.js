import { apiV2 } from './index.js';
export const siteApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchSiteSettings: builder.query({
            query: () => ({
                url: '/site/settings',
            }),
        }),
    }),
});
export const { useFetchSiteSettingsQuery } = siteApi;
//# sourceMappingURL=site.js.map