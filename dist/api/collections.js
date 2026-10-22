import { apiV2 } from './index.js';
export const collectionsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        getCollectionRespectPrivacy: builder.query({
            query: () => ({
                url: '/collections/preview/respect-privacy',
            }),
        }),
        fetchCollectionPreviewRespectCollaboration: builder.query({
            query: () => ({
                url: '/collections/preview/respect-collaboration',
            }),
        }),
        fetchCollectionPreviewOwnedAndFriends: builder.query({
            query: () => ({
                url: '/collections/preview/owned-and-friends',
            }),
        }),
        fetchCollectionNames: builder.query({
            query: () => ({
                url: '/collection-names',
            }),
        }),
    }),
});
export const { useGetCollectionRespectPrivacyQuery, useFetchCollectionPreviewRespectCollaborationQuery, useFetchCollectionPreviewOwnedAndFriendsQuery, useFetchCollectionNamesQuery, } = collectionsApi;
//# sourceMappingURL=collections.js.map