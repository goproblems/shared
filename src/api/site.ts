import {apiV2} from './index.js';
import {SiteSettings} from '../contracts/index.js';

export const siteApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchSiteSettings: builder.query<SiteSettings, void>({
            query: () => ({
                url: '/site/settings',
            }),
        }),
    }),
});

export const {useFetchSiteSettingsQuery} = siteApi;
