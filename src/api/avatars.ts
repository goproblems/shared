import {apiV2} from './index.js';
import {
    AvatarConfigurationResponse,
    AvatarEntryListResponse,
    AvatarEntryResponse,
    CustomizationOption,
} from '../contracts/index.js';

export const avatarsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchAvatar: builder.query<AvatarEntryResponse, number | string>({
            query: userId => ({
                url: `/avatar/user/${userId}/current`,
                method: 'GET',
            }),
            providesTags: (_result, _error, userId) => [
                {type: 'current-avatar', id: userId},
            ],
        }),
        fetchAvatars: builder.query<
            AvatarEntryListResponse,
            {userId: number; limit: number; offset: number}
        >({
            query: ({userId, limit, offset}) => ({
                url: `/avatar/user/${userId}`,
                method: 'POST',
                body: {
                    limit,
                    offset,
                },
            }),
        }),
        fetchAvatarConfiguration: builder.query<
            AvatarConfigurationResponse,
            number | string
        >({
            query: userId => ({
                url: `/avatar/user/${userId}/configuration`,
                method: 'GET',
            }),
        }),
        unlockAvatarCustomization: builder.mutation<
            unknown,
            {userId: number; customizationCode: string; optionCode: string}
        >({
            query: ({userId, customizationCode, optionCode}) => ({
                url: `/avatar/user/${userId}/customization/${customizationCode}/option/${optionCode}/unlock`,
                method: 'POST',
            }),
        }),
        deleteAvatar: builder.mutation<unknown, number>({
            query: userId => ({
                url: `/avatar/user/${userId}/current`,
                method: 'DELETE',
            }),
        }),
        generateAvatar: builder.mutation<
            unknown,
            {userId: number; customizations: CustomizationOption[]}
        >({
            query: ({userId, customizations}) => ({
                url: `/avatar/user/${userId}/generate`,
                method: 'POST',
                body: {
                    customizations,
                },
            }),
        }),
        setAvatar: builder.mutation<unknown, {userId: number; avatarId: number}>({
            query: ({userId, avatarId}) => ({
                url: `/avatar/user/${userId}/current/${avatarId}`,
                method: 'PUT',
            }),
            invalidatesTags: (_result, error, {userId}) =>
                error ? [] : [{type: 'current-avatar', id: userId}],
        }),
    }),
});

export const {
    useFetchAvatarQuery,
    useFetchAvatarsQuery,
    useFetchAvatarConfigurationQuery,
    useUnlockAvatarCustomizationMutation,
    useDeleteAvatarMutation,
    useGenerateAvatarMutation,
    useSetAvatarMutation,
} = avatarsApi;
