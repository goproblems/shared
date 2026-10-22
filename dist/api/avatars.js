import { apiV2 } from './index.js';
export const avatarsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchAvatar: builder.query({
            query: userId => ({
                url: `/avatar/user/${userId}/current`,
                method: 'GET',
            }),
            providesTags: (_result, _error, userId) => [
                { type: 'current-avatar', id: userId },
            ],
        }),
        fetchAvatars: builder.query({
            query: ({ userId, limit, offset }) => ({
                url: `/avatar/user/${userId}`,
                method: 'POST',
                body: {
                    limit,
                    offset,
                },
            }),
        }),
        fetchAvatarConfiguration: builder.query({
            query: userId => ({
                url: `/avatar/user/${userId}/configuration`,
                method: 'GET',
            }),
        }),
        unlockAvatarCustomization: builder.mutation({
            query: ({ userId, customizationCode, optionCode }) => ({
                url: `/avatar/user/${userId}/customization/${customizationCode}/option/${optionCode}/unlock`,
                method: 'POST',
            }),
        }),
        deleteAvatar: builder.mutation({
            query: userId => ({
                url: `/avatar/user/${userId}/current`,
                method: 'DELETE',
            }),
        }),
        generateAvatar: builder.mutation({
            query: ({ userId, customizations }) => ({
                url: `/avatar/user/${userId}/generate`,
                method: 'POST',
                body: {
                    customizations,
                },
            }),
        }),
        setAvatar: builder.mutation({
            query: ({ userId, avatarId }) => ({
                url: `/avatar/user/${userId}/current/${avatarId}`,
                method: 'PUT',
            }),
            invalidatesTags: (_result, error, { userId }) => error ? [] : [{ type: 'current-avatar', id: userId }],
        }),
    }),
});
export const { useFetchAvatarQuery, useFetchAvatarsQuery, useFetchAvatarConfigurationQuery, useUnlockAvatarCustomizationMutation, useDeleteAvatarMutation, useGenerateAvatarMutation, useSetAvatarMutation, } = avatarsApi;
//# sourceMappingURL=avatars.js.map