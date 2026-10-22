import qs from 'qs';
import {apiV2} from './index.js';
import {
    EntriesResponse,
    CollectionSuggestionMinimal,
    CollectionSuggestionsRequest,
    CreateCollectionSuggestionsRequest,
    ResolveCollectionSuggestionRequest,
    SuggestionStatusCounts,
} from '../contracts/index.js';

export const collectionSuggestionsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchCollectionSuggestions: builder.query<
            EntriesResponse<CollectionSuggestionMinimal>,
            CollectionSuggestionsRequest
        >({
            query: params => ({
                url: `/collection-suggestions${qs.stringify(params, {addQueryPrefix: true})}`,
                method: 'GET',
            }),
        }),
        countCollectionSuggestions: builder.query<
            SuggestionStatusCounts,
            CollectionSuggestionsRequest
        >({
            query: params => ({
                url: `/collection-suggestions/counts${qs.stringify(params, {addQueryPrefix: true})}`,
                method: 'GET',
            }),
        }),
        fetchCollectionSuggestion: builder.query<
            CollectionSuggestionMinimal,
            number
        >({
            query: suggestionId => ({
                url: `/collection-suggestions/${suggestionId}`,
                method: 'GET',
            }),
        }),
        createCollectionSuggestions: builder.mutation<
            void,
            CreateCollectionSuggestionsRequest
        >({
            query: body => ({
                url: '/collection-suggestions',
                method: 'POST',
                body,
            }),
        }),
        resolveCollectionSuggestion: builder.mutation<
            CollectionSuggestionMinimal,
            ResolveCollectionSuggestionRequest
        >({
            query: body => ({
                url: `/collection-suggestions/${body.id}/resolve`,
                method: 'PUT',
                body,
            }),
        }),
        deleteCollectionSuggestion: builder.mutation<
            CollectionSuggestionMinimal,
            number
        >({
            query: suggestionId => ({
                url: `/collection-suggestions/${suggestionId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useFetchCollectionSuggestionsQuery,
    useCountCollectionSuggestionsQuery,
    useFetchCollectionSuggestionQuery,
    useCreateCollectionSuggestionsMutation,
    useResolveCollectionSuggestionMutation,
    useDeleteCollectionSuggestionMutation,
} = collectionSuggestionsApi;
