import qs from 'qs';
import {apiV2} from './index.js';
import {
    FriendListCriteria,
    FriendshipAchievementStatistics,
    FriendshipListEntry,
    FriendshipRushStatistics,
    FriendshipSolveStatistics,
    FriendshipStatistics,
} from '../contracts/index.js';

export const friendsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchFriends: builder.query<
            FriendshipListEntry[],
            FriendListCriteria
        >({
            query: ({
                offset,
                limit,
                sortBy,
                sortDirection,
                includeStatistics,
            } = {}) => {
                const queryString = qs.stringify({
                    ...(offset !== undefined && {offset}),
                    ...(limit && {limit}),
                    ...(sortBy && {sortBy}),
                    ...(sortDirection && {sortDirection}),
                    ...(includeStatistics !== undefined && {
                        includeStatistics,
                    }),
                });
                return `/friends${queryString ? `?${queryString}` : ''}`;
            },
            providesTags: ['Friends'],
        }),
        fetchFriendStatistics: builder.query<
            FriendshipStatistics[],
            number[]
        >({
            query: friendIds => ({
                url: '/friends/statistics',
                method: 'POST',
                body: {ids: friendIds},
            }),
            providesTags: ['Friends'],
        }),
        fetchFriendSolveStatistics: builder.query<
            FriendshipSolveStatistics[],
            number[]
        >({
            query: friendIds => ({
                url: '/friends/statistics/solves',
                method: 'POST',
                body: {ids: friendIds},
            }),
            providesTags: ['Friends'],
        }),
        fetchFriendAchievementStatistics: builder.query<
            FriendshipAchievementStatistics[],
            number[]
        >({
            query: friendIds => ({
                url: '/friends/statistics/achievements',
                method: 'POST',
                body: {ids: friendIds},
            }),
            providesTags: ['Friends'],
        }),
        fetchFriendRushStatistics: builder.query<
            FriendshipRushStatistics[],
            number[]
        >({
            query: friendIds => ({
                url: '/friends/statistics/rush',
                method: 'POST',
                body: {ids: friendIds},
            }),
            providesTags: ['Friends'],
        }),
        deleteFriendship: builder.mutation<void, number>({
            query: friendshipId => ({
                url: `/friendships/${friendshipId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Friends'],
        }),
    }),
});

export const {
    useFetchFriendsQuery,
    useFetchFriendStatisticsQuery,
    useFetchFriendSolveStatisticsQuery,
    useFetchFriendAchievementStatisticsQuery,
    useFetchFriendRushStatisticsQuery,
    useDeleteFriendshipMutation,
} = friendsApi;
