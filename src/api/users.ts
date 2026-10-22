import qs from 'qs';
import {apiV2} from './index.js';
import {problemCollectionsApi} from './problemCollections.js';
import {authSlice} from '../state/auth.js';
import {
    CreatedProblemsResponse,
    FavoritedProblem,
    FavoritedProblemsResponse,
    DashboardEditedProblemsResponse,
    DashboardFlaggedProblemsResponse,
    LevelsResponse,
    TimeTrialProgressResponse,
    TokenResponse,
    UserProfileResponse,
    UsersResponse,
    ProtectedInfoResponse,
    CommentsResponse,
    CommentsCriteriaWrapper,
    UserPreferences,
    UserPreferencesRequest,
    UserAchievementResponse,
    ProblemCollection,
    MetricEntry,
    HeatmapResponse,
    PrivacySettings,
    PrivacySettingsPayload,
    EntriesResponse,
    ProblemEntry,
    UserProblemsRequest,
} from '../contracts/index.js';

export const PROFILE_PROBLEM_PREVIEW_LIMIT = 6;

export type UserRatingDynamicRange =
    | '7d'
    | '1m'
    | '6m'
    | 'ytd'
    | '1y'
    | '5y'
    | 'max'
    | 'month'
    | 'all-time';

const serializeQueryParams = (
    values: Record<string, unknown>,
    prefix = ''
): string => {
    const pairs: string[] = [];

    Object.keys(values).forEach(key => {
        const value = values[key];
        const parameterName = prefix ? `${prefix}[${key}]` : key;

        if (typeof value === 'object' && value !== null) {
            pairs.push(
                serializeQueryParams(
                    value as Record<string, unknown>,
                    parameterName
                )
            );
        } else {
            pairs.push(
                `${encodeURIComponent(parameterName)}=${encodeURIComponent(String(value))}`
            );
        }
    });

    return pairs.join('&');
};

export const usersApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchUserProfile: builder.query<UserProfileResponse, number | string>({
            query: id => `/users/${id}/profile`,
            providesTags: ['profile'],
        }),
        fetchUserProfileByName: builder.query<UserProfileResponse, string>({
            query: name => `/users/${encodeURIComponent(name)}/profile`,
            providesTags: ['profile'],
            keepUnusedDataFor: 86400, //one day
        }),
        fetchUserCreatedProblems: builder.query<
            CreatedProblemsResponse,
            number | string
        >({
            query: id =>
                `/users/${id}/created-problems?limit=${PROFILE_PROBLEM_PREVIEW_LIMIT}&offset=0&sort_direction=desc&sort_by=id`,
        }),
        fetchUserFavoritedProblems: builder.query<
            FavoritedProblemsResponse,
            number | string
        >({
            query: id => `/users/${id}/favorited_problems`,
        }),
        fetchDashboardProblems: builder.query<
            EntriesResponse<ProblemEntry>,
            UserProblemsRequest
        >({
            query: body => ({
                url: '/problems/user',
                method: 'POST',
                body,
            }),
        }),
        fetchDashboardFavoriteProblems: builder.query<
            EntriesResponse<FavoritedProblem>,
            UserProblemsRequest
        >({
            query: body => ({
                url: '/problems/favorites',
                method: 'POST',
                body,
            }),
        }),
        fetchUserLevels: builder.query<LevelsResponse, number | string>({
            query: id => `/users/${id}/levels`,
        }),
        fetchUserToken: builder.query<TokenResponse, number | string>({
            query: id => `users/${id}/token`,
            providesTags: ['get-token'],
        }),
        enableUserToken: builder.mutation<void, number | string>({
            query: id => ({
                url: `users/${id}/token`,
                method: 'POST',
            }),
            invalidatesTags: ['get-token'],
        }),
        disableUserToken: builder.mutation<void, number | string>({
            query: id => ({
                url: `users/${id}/token`,
                method: 'DELETE',
            }),
            invalidatesTags: ['get-token'],
        }),
        rotateUserToken: builder.mutation<TokenResponse, number | string>({
            query: id => ({
                url: `users/${id}/token`,
                method: 'PUT',
            }),
            invalidatesTags: ['get-token'],
        }),
        fetchUserAchievements: builder.query<
            UserAchievementResponse,
            {name: string; viewerId?: number}
        >({
            query: ({name}) => `/user/${encodeURIComponent(name)}/achievements`,
            transformResponse: (response: UserAchievementResponse) => ({
                ...response,
                achievements: response.achievements.filter(
                    achievement => !achievement.hidden
                ),
            }),
        }),
        fetchUserTimeTrialProgress: builder.query<
            TimeTrialProgressResponse,
            number | string
        >({
            query: id => `/users/${id}/time-trials`,
        }),
        fetchUserRatingDynamic: builder.query<
            MetricEntry[],
            {gap?: string; range?: UserRatingDynamicRange}
        >({
            query: ({gap, range = '6m'}) =>
                `/user/rating/dynamic?${qs.stringify(gap ? {gap} : {range})}`,
        }),
        searchUsers: builder.query<UsersResponse, {q: string; limit?: number}>({
            query: ({q, limit}) => {
                const queryString = qs.stringify({
                    q,
                    ...(limit !== undefined && {limit}),
                });
                return `/users/search?${queryString}`;
            },
        }),
        fetchProtectedInfo: builder.query<
            ProtectedInfoResponse,
            number | string
        >({
            query: id => `/user/${id}/protected_info`,
        }),
        fetchCommentsByUserId: builder.query<
            CommentsResponse,
            {id: number; payload: CommentsCriteriaWrapper}
        >({
            query: ({id, payload}) => {
                const queryString = serializeQueryParams(payload);

                return {
                    url: `/users/${id}/comments?${queryString}`,
                };
            },
        }),
        fetchCommentsOnUserProblems: builder.query<
            CommentsResponse,
            {id: number; payload: CommentsCriteriaWrapper}
        >({
            query: ({id, payload}) => ({
                url: `/user/${id}/problem-comments?${serializeQueryParams(payload)}`,
            }),
        }),
        fetchDashboardEditedProblems: builder.query<
            DashboardEditedProblemsResponse,
            {
                payload: {
                    criteria: {
                        editorId: number;
                        limit: number;
                        offset: number;
                        sortDirection: 'asc' | 'desc';
                        sortBy: string;
                    };
                };
            }
        >({
            query: ({payload}) => ({
                url: '/problems/dashboard/edits',
                method: 'POST',
                body: payload,
            }),
        }),
        fetchDashboardFlaggedProblems: builder.query<
            DashboardFlaggedProblemsResponse,
            {limit: number; offset: number}
        >({
            query: ({limit, offset}) =>
                `/user/dashboard/flagged-problems?${qs.stringify({
                    limit,
                    offset,
                })}`,
        }),
        fetchDashboardDeactivatedProblems: builder.query<
            EntriesResponse<ProblemEntry>,
            {limit: number; offset: number}
        >({
            query: ({limit, offset}) =>
                `/user/dashboard/deactivated-problems?${qs.stringify({
                    limit,
                    offset,
                })}`,
        }),
        fetchDashboardSandboxProblems: builder.query<
            EntriesResponse<ProblemEntry>,
            {limit: number; offset: number}
        >({
            query: ({limit, offset}) =>
                `/user/dashboard/sandbox-problems?${qs.stringify({
                    limit,
                    offset,
                })}`,
        }),
        fetchLastProblemCollectionIds: builder.query<
            {lastProblemCollectionIds: number[]},
            void
        >({
            query: () => ({
                url: '/user/problem-collection/last-ids',
            }),
        }),
        saveLastProblemCollectionId: builder.mutation<void, number>({
            query: lastProblemCollectionId => ({
                url: '/user/problem-collection/last-id',
                method: 'PUT',
                body: {lastProblemCollectionId},
            }),
        }),
        addToFavorites: builder.mutation<
            void,
            {userId: string | number; problemId: string | number}
        >({
            query: ({userId, problemId}) => ({
                url: `user/${userId}/problem/favorite/${problemId}`,
                method: 'POST',
            }),
        }),
        removeFromFavorites: builder.mutation<
            void,
            {userId: string | number; problemId: string | number}
        >({
            query: ({userId, problemId}) => ({
                url: `user/${userId}/problem/favorite/${problemId}`,
                method: 'DELETE',
            }),
        }),
        fetchUserPreferences: builder.query<UserPreferences, void>({
            query: () => '/me/preferences',
            providesTags: ['user-preferences'],
        }),
        fetchUserCollections: builder.query<ProblemCollection[], void>({
            query: () => '/user/collections',
        }),
        fetchUserFavoriteCollections: builder.query<ProblemCollection[], void>({
            query: () => '/user/collections/favorites',
            providesTags: ['favorite-collections'],
        }),
        addCollectionToFavorites: builder.mutation<void, number>({
            query: collectionId => ({
                url: `/collections/${collectionId}/favorite`,
                method: 'POST',
            }),
            invalidatesTags: ['favorite-collections'],
            async onQueryStarted(_collectionId, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(
                        problemCollectionsApi.util.invalidateTags([
                            {type: 'problem-collections', id: 'LIST'},
                            {
                                type: 'problem-collections',
                                id: _collectionId,
                            },
                        ])
                    );
                } catch {
                    // no-op
                }
            },
        }),
        removeCollectionFromFavorites: builder.mutation<void, number>({
            query: collectionId => ({
                url: `/collections/${collectionId}/favorite`,
                method: 'DELETE',
            }),
            invalidatesTags: ['favorite-collections'],
            async onQueryStarted(_collectionId, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(
                        problemCollectionsApi.util.invalidateTags([
                            {type: 'problem-collections', id: 'LIST'},
                            {
                                type: 'problem-collections',
                                id: _collectionId,
                            },
                        ])
                    );
                } catch {
                    // no-op
                }
            },
        }),
        updateUserPreferences: builder.mutation<
            UserPreferences,
            UserPreferencesRequest
        >({
            query: body => ({
                url: '/me/preferences',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['user-preferences'],
            async onQueryStarted(_preferences, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    dispatch(authSlice.actions.updatePreferences(data));
                } catch {
                    // Keep the persisted preferences unchanged when saving fails.
                }
            },
        }),
        fetchUserRepetitionTraining: builder.query<
            {
                addRushGamesToTraining: boolean;
                addTimeTrialsToTraining: boolean;
            },
            void
        >({
            query: () => '/me/repetition-training',
        }),
        setUserRepetitionTraining: builder.mutation<
            {
                addRushGamesToTraining: boolean;
                addTimeTrialsToTraining: boolean;
            },
            {
                addRushGamesToTraining: boolean;
                addTimeTrialsToTraining: boolean;
            }
        >({
            query: body => ({
                url: '/me/repetition-training',
                method: 'PATCH',
                body,
            }),
        }),
        fetchUserProfileSettings: builder.query<
            {
                email: string;
                strength: string;
                info: string;
                language: string;
                defaultLanguage: string;
                languageOptions: {code: string; label: string}[];
                featuredAchievements: string[];
                featuredAchievementsLimit: number;
                achievementOptions: {
                    code: string;
                    name: string;
                    description: string;
                    achievedAt: string | null;
                }[];
            },
            void
        >({
            query: () => '/me/profile',
            providesTags: ['profile-settings', 'profile'],
        }),
        fetchUserNotificationSettings: builder.query<
            {
                problemFrequency: string;
                problemFrequencyOptions: {code: string; label: string}[];
                newsletter: boolean;
                emailUpdatesFrequencyWeekly: boolean;
            },
            void
        >({
            query: () => '/me/notification-settings',
            providesTags: ['notification-settings'],
        }),
        setUserNotificationSettings: builder.mutation<
            {
                problemFrequency: string;
                newsletter: boolean;
                emailUpdatesFrequencyWeekly: boolean;
            },
            {
                problemFrequency: string;
                newsletter: boolean;
                emailUpdatesFrequencyWeekly: boolean;
            }
        >({
            query: body => ({
                url: '/me/notification-settings',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['notification-settings'],
        }),
        fetchUserPrivacySettings: builder.query<PrivacySettings, void>({
            query: () => '/me/privacy',
            providesTags: ['privacy-settings'],
        }),
        setUserPrivacySettings: builder.mutation<
            PrivacySettingsPayload,
            PrivacySettingsPayload
        >({
            query: body => ({
                url: '/me/privacy',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['privacy-settings'],
        }),
        fetchUserPasswordSettings: builder.query<
            {
                passwordChangeRequired: boolean;
            },
            void
        >({
            query: () => '/me/password',
        }),
        setUserPasswordSettings: builder.mutation<
            {
                passwordChangeRequired: boolean;
            },
            {
                currentPassword: string;
                newPassword: string;
            }
        >({
            query: body => ({
                url: '/me/password',
                method: 'PATCH',
                body,
            }),
        }),
        deleteUserAccount: builder.mutation<
            void,
            {password: string; confirmation: string}
        >({
            query: body => ({
                url: '/me/account',
                method: 'DELETE',
                body,
            }),
        }),
        fetchUserSolveHeatmap: builder.query<
            HeatmapResponse,
            {
                userId: number | string;
                dateFrom?: string;
                dateTo?: string;
            }
        >({
            query: ({userId, dateFrom, dateTo}) => {
                const queryString = qs.stringify(
                    {dateFrom, dateTo},
                    {skipNulls: true, addQueryPrefix: true}
                );
                return `/user/${userId}/solve-heatmap${queryString}`;
            },
        }),
    }),
});

export const {
    useFetchUserProfileQuery,
    useLazyFetchUserProfileQuery,
    useFetchUserCreatedProblemsQuery,
    useLazyFetchUserCreatedProblemsQuery,
    useFetchDashboardProblemsQuery,
    useFetchDashboardFavoriteProblemsQuery,
    useFetchUserFavoritedProblemsQuery,
    useLazyFetchUserFavoritedProblemsQuery,
    useFetchUserLevelsQuery,
    useFetchUserTimeTrialProgressQuery,
    useLazyFetchUserLevelsQuery,
    useFetchUserRatingDynamicQuery,
    useLazyFetchUserRatingDynamicQuery,
    useLazySearchUsersQuery,
    useSearchUsersQuery,
    useLazyFetchProtectedInfoQuery,
    useFetchProtectedInfoQuery,
    useFetchCommentsByUserIdQuery,
    useLazyFetchCommentsByUserIdQuery,
    useFetchCommentsOnUserProblemsQuery,
    useFetchDashboardEditedProblemsQuery,
    useFetchDashboardFlaggedProblemsQuery,
    useFetchDashboardDeactivatedProblemsQuery,
    useFetchDashboardSandboxProblemsQuery,
    useFetchLastProblemCollectionIdsQuery,
    useSaveLastProblemCollectionIdMutation,
    useFetchUserTokenQuery,
    useDisableUserTokenMutation,
    useRotateUserTokenMutation,
    useEnableUserTokenMutation,
    useFetchUserAchievementsQuery,
    useAddToFavoritesMutation,
    useRemoveFromFavoritesMutation,
    useFetchUserPreferencesQuery,
    useUpdateUserPreferencesMutation,
    useFetchUserCollectionsQuery,
    useFetchUserFavoriteCollectionsQuery,
    useAddCollectionToFavoritesMutation,
    useRemoveCollectionFromFavoritesMutation,
    useFetchUserProfileByNameQuery,
    useFetchUserRepetitionTrainingQuery,
    useSetUserRepetitionTrainingMutation,
    useFetchUserProfileSettingsQuery,
    useFetchUserNotificationSettingsQuery,
    useSetUserNotificationSettingsMutation,
    useFetchUserPrivacySettingsQuery,
    useSetUserPrivacySettingsMutation,
    useFetchUserPasswordSettingsQuery,
    useSetUserPasswordSettingsMutation,
    useDeleteUserAccountMutation,
    useFetchUserSolveHeatmapQuery,
    useLazyFetchUserSolveHeatmapQuery,
} = usersApi;
