import {apiV2} from './index.js';
import {FriendshipRequestRecord} from '../contracts/index.js';

type FriendshipRequestDirection = 'incoming' | 'outgoing' | 'any';

export const friendshipRequestsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchFriendshipRequests: builder.query<
            FriendshipRequestRecord[],
            {direction?: FriendshipRequestDirection}
        >({
            query: ({direction = 'incoming'} = {}) =>
                `/friendship-requests?direction=${direction}`,
            providesTags: ['FriendshipRequests'],
        }),
        createFriendshipRequest: builder.mutation<
            FriendshipRequestRecord,
            number
        >({
            query: userId => ({
                url: `/friendship-requests/${userId}`,
                method: 'POST',
                body: {userId},
            }),
            invalidatesTags: ['FriendshipRequests'],
        }),
        cancelFriendshipRequest: builder.mutation<void, number>({
            query: friendshipRequestId => ({
                url: `/friendship-requests/${friendshipRequestId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['FriendshipRequests'],
        }),
        acceptFriendshipRequest: builder.mutation<void, number>({
            query: friendshipRequestId => ({
                url: `/friendship-requests/${friendshipRequestId}/accept`,
                method: 'POST',
            }),
            invalidatesTags: ['FriendshipRequests'],
        }),
    }),
});

export const {
    useFetchFriendshipRequestsQuery,
    useCreateFriendshipRequestMutation,
    useCancelFriendshipRequestMutation,
    useAcceptFriendshipRequestMutation,
} = friendshipRequestsApi;
