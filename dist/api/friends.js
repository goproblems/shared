import qs from 'qs';
import { apiV2 } from './index.js';
export const friendsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchFriends: builder.query({
            query: ({ offset, limit, sortBy, sortDirection, includeStatistics, } = {}) => {
                const queryString = qs.stringify({
                    ...(offset !== undefined && { offset }),
                    ...(limit && { limit }),
                    ...(sortBy && { sortBy }),
                    ...(sortDirection && { sortDirection }),
                    ...(includeStatistics !== undefined && {
                        includeStatistics,
                    }),
                });
                return `/friends${queryString ? `?${queryString}` : ''}`;
            },
            providesTags: ['Friends'],
        }),
        fetchFriendStatistics: builder.query({
            query: friendIds => ({
                url: '/friends/statistics',
                method: 'POST',
                body: { ids: friendIds },
            }),
            providesTags: ['Friends'],
        }),
        fetchFriendSolveStatistics: builder.query({
            query: friendIds => ({
                url: '/friends/statistics/solves',
                method: 'POST',
                body: { ids: friendIds },
            }),
            providesTags: ['Friends'],
        }),
        fetchFriendAchievementStatistics: builder.query({
            query: friendIds => ({
                url: '/friends/statistics/achievements',
                method: 'POST',
                body: { ids: friendIds },
            }),
            providesTags: ['Friends'],
        }),
        fetchFriendRushStatistics: builder.query({
            query: friendIds => ({
                url: '/friends/statistics/rush',
                method: 'POST',
                body: { ids: friendIds },
            }),
            providesTags: ['Friends'],
        }),
        deleteFriendship: builder.mutation({
            query: friendshipId => ({
                url: `/friendships/${friendshipId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Friends'],
        }),
    }),
});
export const { useFetchFriendsQuery, useFetchFriendStatisticsQuery, useFetchFriendSolveStatisticsQuery, useFetchFriendAchievementStatisticsQuery, useFetchFriendRushStatisticsQuery, useDeleteFriendshipMutation, } = friendsApi;
//# sourceMappingURL=friends.js.map