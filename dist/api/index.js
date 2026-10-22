import { createApi } from '@reduxjs/toolkit/query/react';
const platformBaseQuery = (key) => (args, api, extraOptions) => {
    const transport = api.extra?.[key];
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
//# sourceMappingURL=index.js.map