import {createApi} from '@reduxjs/toolkit/query/react';
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

export type ApiBaseQuery = BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
>;

export type ApiTransportExtra = {
    apiV1BaseQuery: ApiBaseQuery;
    apiV2BaseQuery: ApiBaseQuery;
};

const platformBaseQuery =
    (key: keyof ApiTransportExtra): ApiBaseQuery =>
    (args, api, extraOptions) => {
        const transport = (api.extra as ApiTransportExtra | undefined)?.[key];
        if (!transport) {
            throw new Error(`The ${key} transport must be configured in the store`);
        }

        return transport(args, api, extraOptions);
    };

export const apiV1 = createApi({
    reducerPath: 'apiV1',
    baseQuery: platformBaseQuery('apiV1BaseQuery'),
    endpoints: () => ({}),
});

export const apiV2 = createApi({
    reducerPath: 'apiV2',
    baseQuery: platformBaseQuery('apiV2BaseQuery'),
    tagTypes: [
        'Friends',
        'FriendshipRequests',
        'Groups',
        'Index',
        'RushDailyHighScores',
        'RushOverview',
        'RushRecentResults',
        'ScenarioCase',
        'ScenarioCaseExecution',
        'ScenarioCaseSummary',
        'anon_rating',
        'current-avatar',
        'favorite-collections',
        'get-token',
        'lint-issues',
        'notification-settings',
        'privacy-settings',
        'problem',
        'problem-collections',
        'profile',
        'profile-settings',
        'srs_active_session',
        'srs_sessions',
        'status-counts',
        'training_counter',
        'user-preferences',
    ],
    endpoints: () => ({}),
});
