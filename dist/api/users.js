import qs from 'qs';
import { apiV2 } from './index.js';
import { problemCollectionsApi } from './problemCollections.js';
import { authSlice } from '../state/auth.js';
export const PROFILE_PROBLEM_PREVIEW_LIMIT = 6;
const serializeQueryParams = (values, prefix = '') => {
    const pairs = [];
    Object.keys(values).forEach(key => {
        const value = values[key];
        const parameterName = prefix ? `${prefix}[${key}]` : key;
        if (typeof value === 'object' && value !== null) {
            pairs.push(serializeQueryParams(value, parameterName));
        }
        else {
            pairs.push(`${encodeURIComponent(parameterName)}=${encodeURIComponent(String(value))}`);
        }
    });
    return pairs.join('&');
};
export const usersApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchUserProfile: builder.query({
            query: id => `/users/${id}/profile`,
            providesTags: ['profile'],
        }),
        fetchUserProfileByName: builder.query({
            query: name => `/users/${encodeURIComponent(name)}/profile`,
            providesTags: ['profile'],
            keepUnusedDataFor: 86400, //one day
        }),
        fetchUserCreatedProblems: builder.query({
            query: id => `/users/${id}/created-problems?limit=${PROFILE_PROBLEM_PREVIEW_LIMIT}&offset=0&sort_direction=desc&sort_by=id`,
        }),
        fetchUserFavoritedProblems: builder.query({
            query: id => `/users/${id}/favorited_problems`,
        }),
        fetchDashboardProblems: builder.query({
            query: body => ({
                url: '/problems/user',
                method: 'POST',
                body,
            }),
        }),
        fetchDashboardFavoriteProblems: builder.query({
            query: body => ({
                url: '/problems/favorites',
                method: 'POST',
                body,
            }),
        }),
        fetchUserLevels: builder.query({
            query: id => `/users/${id}/levels`,
        }),
        fetchUserToken: builder.query({
            query: id => `users/${id}/token`,
            providesTags: ['get-token'],
        }),
        enableUserToken: builder.mutation({
            query: id => ({
                url: `users/${id}/token`,
                method: 'POST',
            }),
            invalidatesTags: ['get-token'],
        }),
        disableUserToken: builder.mutation({
            query: id => ({
                url: `users/${id}/token`,
                method: 'DELETE',
            }),
            invalidatesTags: ['get-token'],
        }),
        rotateUserToken: builder.mutation({
            query: id => ({
                url: `users/${id}/token`,
                method: 'PUT',
            }),
            invalidatesTags: ['get-token'],
        }),
        fetchUserAchievements: builder.query({
            query: ({ name }) => `/user/${encodeURIComponent(name)}/achievements`,
            transformResponse: (response) => ({
                ...response,
                achievements: response.achievements.filter(achievement => !achievement.hidden),
            }),
        }),
        fetchUserTimeTrialProgress: builder.query({
            query: id => `/users/${id}/time-trials`,
        }),
        fetchUserRatingDynamic: builder.query({
            query: ({ gap, range = '6m' }) => `/user/rating/dynamic?${qs.stringify(gap ? { gap } : { range })}`,
        }),
        searchUsers: builder.query({
            query: ({ q, limit }) => {
                const queryString = qs.stringify({
                    q,
                    ...(limit !== undefined && { limit }),
                });
                return `/users/search?${queryString}`;
            },
        }),
        fetchProtectedInfo: builder.query({
            query: id => `/user/${id}/protected_info`,
        }),
        fetchCommentsByUserId: builder.query({
            query: ({ id, payload }) => {
                const queryString = serializeQueryParams(payload);
                return {
                    url: `/users/${id}/comments?${queryString}`,
                };
            },
        }),
        fetchCommentsOnUserProblems: builder.query({
            query: ({ id, payload }) => ({
                url: `/user/${id}/problem-comments?${serializeQueryParams(payload)}`,
            }),
        }),
        fetchDashboardEditedProblems: builder.query({
            query: ({ payload }) => ({
                url: '/problems/dashboard/edits',
                method: 'POST',
                body: payload,
            }),
        }),
        fetchDashboardFlaggedProblems: builder.query({
            query: ({ limit, offset }) => `/user/dashboard/flagged-problems?${qs.stringify({
                limit,
                offset,
            })}`,
        }),
        fetchDashboardDeactivatedProblems: builder.query({
            query: ({ limit, offset }) => `/user/dashboard/deactivated-problems?${qs.stringify({
                limit,
                offset,
            })}`,
        }),
        fetchDashboardSandboxProblems: builder.query({
            query: ({ limit, offset }) => `/user/dashboard/sandbox-problems?${qs.stringify({
                limit,
                offset,
            })}`,
        }),
        fetchLastProblemCollectionIds: builder.query({
            query: () => ({
                url: '/user/problem-collection/last-ids',
            }),
        }),
        saveLastProblemCollectionId: builder.mutation({
            query: lastProblemCollectionId => ({
                url: '/user/problem-collection/last-id',
                method: 'PUT',
                body: { lastProblemCollectionId },
            }),
        }),
        addToFavorites: builder.mutation({
            query: ({ userId, problemId }) => ({
                url: `user/${userId}/problem/favorite/${problemId}`,
                method: 'POST',
            }),
        }),
        removeFromFavorites: builder.mutation({
            query: ({ userId, problemId }) => ({
                url: `user/${userId}/problem/favorite/${problemId}`,
                method: 'DELETE',
            }),
        }),
        fetchUserPreferences: builder.query({
            query: () => '/me/preferences',
            providesTags: ['user-preferences'],
        }),
        fetchUserCollections: builder.query({
            query: () => '/user/collections',
        }),
        fetchUserFavoriteCollections: builder.query({
            query: () => '/user/collections/favorites',
            providesTags: ['favorite-collections'],
        }),
        addCollectionToFavorites: builder.mutation({
            query: collectionId => ({
                url: `/collections/${collectionId}/favorite`,
                method: 'POST',
            }),
            invalidatesTags: ['favorite-collections'],
            async onQueryStarted(_collectionId, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(problemCollectionsApi.util.invalidateTags([
                        { type: 'problem-collections', id: 'LIST' },
                        {
                            type: 'problem-collections',
                            id: _collectionId,
                        },
                    ]));
                }
                catch {
                    // no-op
                }
            },
        }),
        removeCollectionFromFavorites: builder.mutation({
            query: collectionId => ({
                url: `/collections/${collectionId}/favorite`,
                method: 'DELETE',
            }),
            invalidatesTags: ['favorite-collections'],
            async onQueryStarted(_collectionId, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(problemCollectionsApi.util.invalidateTags([
                        { type: 'problem-collections', id: 'LIST' },
                        {
                            type: 'problem-collections',
                            id: _collectionId,
                        },
                    ]));
                }
                catch {
                    // no-op
                }
            },
        }),
        updateUserPreferences: builder.mutation({
            query: body => ({
                url: '/me/preferences',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['user-preferences'],
            async onQueryStarted(_preferences, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(authSlice.actions.updatePreferences(data));
                }
                catch {
                    // Keep the persisted preferences unchanged when saving fails.
                }
            },
        }),
        fetchUserRepetitionTraining: builder.query({
            query: () => '/me/repetition-training',
        }),
        setUserRepetitionTraining: builder.mutation({
            query: body => ({
                url: '/me/repetition-training',
                method: 'PATCH',
                body,
            }),
        }),
        fetchUserProfileSettings: builder.query({
            query: () => '/me/profile',
            providesTags: ['profile-settings', 'profile'],
        }),
        fetchUserNotificationSettings: builder.query({
            query: () => '/me/notification-settings',
            providesTags: ['notification-settings'],
        }),
        setUserNotificationSettings: builder.mutation({
            query: body => ({
                url: '/me/notification-settings',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['notification-settings'],
        }),
        fetchUserPrivacySettings: builder.query({
            query: () => '/me/privacy',
            providesTags: ['privacy-settings'],
        }),
        setUserPrivacySettings: builder.mutation({
            query: body => ({
                url: '/me/privacy',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['privacy-settings'],
        }),
        fetchUserPasswordSettings: builder.query({
            query: () => '/me/password',
        }),
        setUserPasswordSettings: builder.mutation({
            query: body => ({
                url: '/me/password',
                method: 'PATCH',
                body,
            }),
        }),
        deleteUserAccount: builder.mutation({
            query: body => ({
                url: '/me/account',
                method: 'DELETE',
                body,
            }),
        }),
        fetchUserSolveHeatmap: builder.query({
            query: ({ userId, dateFrom, dateTo }) => {
                const queryString = qs.stringify({ dateFrom, dateTo }, { skipNulls: true, addQueryPrefix: true });
                return `/user/${userId}/solve-heatmap${queryString}`;
            },
        }),
    }),
});
export const { useFetchUserProfileQuery, useLazyFetchUserProfileQuery, useFetchUserCreatedProblemsQuery, useLazyFetchUserCreatedProblemsQuery, useFetchDashboardProblemsQuery, useFetchDashboardFavoriteProblemsQuery, useFetchUserFavoritedProblemsQuery, useLazyFetchUserFavoritedProblemsQuery, useFetchUserLevelsQuery, useFetchUserTimeTrialProgressQuery, useLazyFetchUserLevelsQuery, useFetchUserRatingDynamicQuery, useLazyFetchUserRatingDynamicQuery, useLazySearchUsersQuery, useSearchUsersQuery, useLazyFetchProtectedInfoQuery, useFetchProtectedInfoQuery, useFetchCommentsByUserIdQuery, useLazyFetchCommentsByUserIdQuery, useFetchCommentsOnUserProblemsQuery, useFetchDashboardEditedProblemsQuery, useFetchDashboardFlaggedProblemsQuery, useFetchDashboardDeactivatedProblemsQuery, useFetchDashboardSandboxProblemsQuery, useFetchLastProblemCollectionIdsQuery, useSaveLastProblemCollectionIdMutation, useFetchUserTokenQuery, useDisableUserTokenMutation, useRotateUserTokenMutation, useEnableUserTokenMutation, useFetchUserAchievementsQuery, useAddToFavoritesMutation, useRemoveFromFavoritesMutation, useFetchUserPreferencesQuery, useUpdateUserPreferencesMutation, useFetchUserCollectionsQuery, useFetchUserFavoriteCollectionsQuery, useAddCollectionToFavoritesMutation, useRemoveCollectionFromFavoritesMutation, useFetchUserProfileByNameQuery, useFetchUserRepetitionTrainingQuery, useSetUserRepetitionTrainingMutation, useFetchUserProfileSettingsQuery, useFetchUserNotificationSettingsQuery, useSetUserNotificationSettingsMutation, useFetchUserPrivacySettingsQuery, useSetUserPrivacySettingsMutation, useFetchUserPasswordSettingsQuery, useSetUserPasswordSettingsMutation, useDeleteUserAccountMutation, useFetchUserSolveHeatmapQuery, useLazyFetchUserSolveHeatmapQuery, } = usersApi;
//# sourceMappingURL=users.js.map