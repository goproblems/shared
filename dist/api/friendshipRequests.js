import { apiV2 } from './index.js';
export const friendshipRequestsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchFriendshipRequests: builder.query({
            query: ({ direction = 'incoming' } = {}) => `/friendship-requests?direction=${direction}`,
            providesTags: ['FriendshipRequests'],
        }),
        createFriendshipRequest: builder.mutation({
            query: userId => ({
                url: `/friendship-requests/${userId}`,
                method: 'POST',
                body: { userId },
            }),
            invalidatesTags: ['FriendshipRequests'],
        }),
        cancelFriendshipRequest: builder.mutation({
            query: friendshipRequestId => ({
                url: `/friendship-requests/${friendshipRequestId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['FriendshipRequests'],
        }),
        acceptFriendshipRequest: builder.mutation({
            query: friendshipRequestId => ({
                url: `/friendship-requests/${friendshipRequestId}/accept`,
                method: 'POST',
            }),
            invalidatesTags: ['FriendshipRequests'],
        }),
    }),
});
export const { useFetchFriendshipRequestsQuery, useCreateFriendshipRequestMutation, useCancelFriendshipRequestMutation, useAcceptFriendshipRequestMutation, } = friendshipRequestsApi;
//# sourceMappingURL=friendshipRequests.js.map