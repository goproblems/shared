import {apiV2} from './index.js';
import qs from 'qs';
import {EntriesResponse, NotificationsResponse} from '../contracts/index.js';
import {Notification} from '../contracts/index.js';

export type FetchNotificationHistoryArgs = {
    viewed?: boolean | null;
    limit?: number;
    offset?: number;
};

export const notificationsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchNotifications: builder.query<
            NotificationsResponse,
            number | boolean
        >({
            query: viewed => `/notifications/list?viewed=${viewed ? 1 : 0}`,
        }),
        fetchNotificationHistory: builder.query<
            EntriesResponse<Notification>,
            FetchNotificationHistoryArgs
        >({
            query: ({viewed, limit = 20, offset = 0} = {}) => {
                const queryString = qs.stringify(
                    {
                        limit,
                        offset,
                        ...(viewed !== null && viewed !== undefined
                            ? {viewed: viewed ? 1 : 0}
                            : {}),
                    },
                    {skipNulls: true}
                );
                return `/notifications?${queryString}`;
            },
        }),
        markAsViewed: builder.mutation<unknown, void>({
            query: () => ({
                url: '/notifications/mark-as-viewed',
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useFetchNotificationsQuery,
    useLazyFetchNotificationsQuery,
    useFetchNotificationHistoryQuery,
    useMarkAsViewedMutation,
} = notificationsApi;
