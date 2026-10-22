import { apiV2 } from './index.js';
import qs from 'qs';
export const notificationsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchNotifications: builder.query({
            query: viewed => `/notifications/list?viewed=${viewed ? 1 : 0}`,
        }),
        fetchNotificationHistory: builder.query({
            query: ({ viewed, limit = 20, offset = 0 } = {}) => {
                const queryString = qs.stringify({
                    limit,
                    offset,
                    ...(viewed !== null && viewed !== undefined
                        ? { viewed: viewed ? 1 : 0 }
                        : {}),
                }, { skipNulls: true });
                return `/notifications?${queryString}`;
            },
        }),
        markAsViewed: builder.mutation({
            query: () => ({
                url: '/notifications/mark-as-viewed',
                method: 'POST',
            }),
        }),
    }),
});
export const { useFetchNotificationsQuery, useLazyFetchNotificationsQuery, useFetchNotificationHistoryQuery, useMarkAsViewedMutation, } = notificationsApi;
//# sourceMappingURL=notifications.js.map