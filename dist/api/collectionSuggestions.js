import qs from 'qs';
import { apiV2 } from './index.js';
export const collectionSuggestionsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchCollectionSuggestions: builder.query({
            query: params => ({
                url: `/collection-suggestions${qs.stringify(params, { addQueryPrefix: true })}`,
                method: 'GET',
            }),
        }),
        countCollectionSuggestions: builder.query({
            query: params => ({
                url: `/collection-suggestions/counts${qs.stringify(params, { addQueryPrefix: true })}`,
                method: 'GET',
            }),
        }),
        fetchCollectionSuggestion: builder.query({
            query: suggestionId => ({
                url: `/collection-suggestions/${suggestionId}`,
                method: 'GET',
            }),
        }),
        createCollectionSuggestions: builder.mutation({
            query: body => ({
                url: '/collection-suggestions',
                method: 'POST',
                body,
            }),
        }),
        resolveCollectionSuggestion: builder.mutation({
            query: body => ({
                url: `/collection-suggestions/${body.id}/resolve`,
                method: 'PUT',
                body,
            }),
        }),
        deleteCollectionSuggestion: builder.mutation({
            query: suggestionId => ({
                url: `/collection-suggestions/${suggestionId}`,
                method: 'DELETE',
            }),
        }),
    }),
});
export const { useFetchCollectionSuggestionsQuery, useCountCollectionSuggestionsQuery, useFetchCollectionSuggestionQuery, useCreateCollectionSuggestionsMutation, useResolveCollectionSuggestionMutation, useDeleteCollectionSuggestionMutation, } = collectionSuggestionsApi;
//# sourceMappingURL=collectionSuggestions.js.map