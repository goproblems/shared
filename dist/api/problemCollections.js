import { apiV2 } from './index.js';
import qs from 'qs';
import { filterNonNull } from '../utils/object.js';
export const problemCollectionsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchProblemCollections: builder.query({
            query: ({ criteria: { searchText, offset, limit, collectionType, core, sortBy, sortDirection, }, }) => `/collections${qs.stringify(filterNonNull({
                text: searchText,
                offset,
                limit,
                order: sortBy,
                sortDirection,
                group: collectionType,
                core: core ? true : undefined,
            }), { addQueryPrefix: true })}`,
            providesTags: [{ type: 'problem-collections', id: 'LIST' }],
        }),
        fetchProblemCollection: builder.query({
            query: collectionId => `/collections/${collectionId}`,
            providesTags: (_result, _error, collectionId) => [
                { type: 'problem-collections', id: collectionId },
            ],
        }),
        fetchProblemsByCollection: builder.query({
            query: ({ criteria }) => `collections/${criteria.collection}/problems${qs.stringify({ criteria }, { addQueryPrefix: true })}`,
        }),
        createProblemCollection: builder.mutation({
            query: body => ({
                url: '/collections',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['problem-collections'],
        }),
        editProblemCollection: builder.mutation({
            query: body => ({
                url: `/collections/${body.id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['problem-collections'],
        }),
        deleteProblemCollection: builder.mutation({
            query: collectionId => ({
                url: `/collections/${collectionId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['problem-collections'],
        }),
        addFavoriteProblemCollection: builder.mutation({
            query: collectionId => ({
                url: `/collections/${collectionId}/favorite`,
                method: 'POST',
            }),
        }),
        removeFavoriteProblemCollection: builder.mutation({
            query: collectionId => ({
                url: `/collections/${collectionId}/favorite`,
                method: 'DELETE',
            }),
        }),
    }),
});
export const { useFetchProblemCollectionsQuery, useLazyFetchProblemCollectionsQuery, useFetchProblemCollectionQuery, useFetchProblemsByCollectionQuery, useLazyFetchProblemsByCollectionQuery, useEditProblemCollectionMutation, useCreateProblemCollectionMutation, useDeleteProblemCollectionMutation, useAddFavoriteProblemCollectionMutation, useRemoveFavoriteProblemCollectionMutation, } = problemCollectionsApi;
//# sourceMappingURL=problemCollections.js.map