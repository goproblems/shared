import {apiV2} from './index.js';
import {CollectionName, PreviewCollectionsResponse} from '../contracts/index.js';

export const collectionsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        getCollectionRespectPrivacy: builder.query<
            PreviewCollectionsResponse,
            void
        >({
            query: () => ({
                url: '/collections/preview/respect-privacy',
            }),
        }),
        fetchCollectionPreviewRespectCollaboration: builder.query<
            PreviewCollectionsResponse,
            void
        >({
            query: () => ({
                url: '/collections/preview/respect-collaboration',
            }),
        }),
        fetchCollectionPreviewOwnedAndFriends: builder.query<
            PreviewCollectionsResponse,
            void
        >({
            query: () => ({
                url: '/collections/preview/owned-and-friends',
            }),
        }),
        fetchCollectionNames: builder.query<CollectionName[], void>({
            query: () => ({
                url: '/collection-names',
            }),
        }),
    }),
});

export const {
    useGetCollectionRespectPrivacyQuery,
    useFetchCollectionPreviewRespectCollaborationQuery,
    useFetchCollectionPreviewOwnedAndFriendsQuery,
    useFetchCollectionNamesQuery,
} = collectionsApi;
