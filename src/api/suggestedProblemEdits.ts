import qs from 'qs';
import {apiV2} from './index.js';
import {
    EntriesResponse,
    SuggestedProblemEdit,
    SuggestedProblemEditsRequest,
    CreateSuggestedProblemEditsRequest,
    EditSuggestedProblemEditsRequest,
    ResolveSuggestedProblemEditsRequest,
    SuggestedProblemEditMinimal,
    SuggestionStatusCounts,
} from '../contracts/index.js';

export const suggestedProblemEditsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchSuggestedProblemEdits: builder.query<
            EntriesResponse<SuggestedProblemEditMinimal>,
            SuggestedProblemEditsRequest
        >({
            query: params => ({
                url: `/suggested_problem_edits${qs.stringify(params, {addQueryPrefix: true})}`,
                method: 'GET',
            }),
        }),
        countSuggestedProblemEdits: builder.query<
            SuggestionStatusCounts,
            SuggestedProblemEditsRequest
        >({
            query: params => ({
                url: `/suggested_problem_edits/counts${qs.stringify(params, {addQueryPrefix: true})}`,
                method: 'GET',
            }),
        }),
        fetchSuggestedProblemEdit: builder.query<SuggestedProblemEdit, number>({
            query: suggestedEditId => ({
                url: `/suggested_problem_edits/${suggestedEditId}`,
                method: 'GET',
            }),
        }),
        createSuggestedProblemEdit: builder.mutation<
            SuggestedProblemEdit,
            CreateSuggestedProblemEditsRequest
        >({
            query: body => ({
                url: '/suggested_problem_edits',
                method: 'POST',
                body,
            }),
        }),
        updateSuggestedProblemEdit: builder.mutation<
            SuggestedProblemEdit,
            EditSuggestedProblemEditsRequest
        >({
            query: body => ({
                url: `/suggested_problem_edits/${body.id}`,
                method: 'PUT',
                body,
            }),
        }),
        resolveSuggestedProblemEdit: builder.mutation<
            SuggestedProblemEdit,
            ResolveSuggestedProblemEditsRequest
        >({
            query: body => ({
                url: `/suggested_problem_edits/${body.id}/resolve`,
                method: 'PUT',
                body,
            }),
        }),
        deleteSuggestedProblemEdit: builder.mutation<
            SuggestedProblemEdit,
            number
        >({
            query: suggestedEditId => ({
                url: `/suggested_problem_edits/${suggestedEditId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useFetchSuggestedProblemEditsQuery,
    useCountSuggestedProblemEditsQuery,
    useLazyFetchSuggestedProblemEditsQuery,
    useFetchSuggestedProblemEditQuery,
    useLazyFetchSuggestedProblemEditQuery,
    useCreateSuggestedProblemEditMutation,
    useDeleteSuggestedProblemEditMutation,
    useUpdateSuggestedProblemEditMutation,
    useResolveSuggestedProblemEditMutation,
} = suggestedProblemEditsApi;
