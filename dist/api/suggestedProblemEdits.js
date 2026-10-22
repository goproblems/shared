import qs from 'qs';
import { apiV2 } from './index.js';
export const suggestedProblemEditsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchSuggestedProblemEdits: builder.query({
            query: params => ({
                url: `/suggested_problem_edits${qs.stringify(params, { addQueryPrefix: true })}`,
                method: 'GET',
            }),
        }),
        countSuggestedProblemEdits: builder.query({
            query: params => ({
                url: `/suggested_problem_edits/counts${qs.stringify(params, { addQueryPrefix: true })}`,
                method: 'GET',
            }),
        }),
        fetchSuggestedProblemEdit: builder.query({
            query: suggestedEditId => ({
                url: `/suggested_problem_edits/${suggestedEditId}`,
                method: 'GET',
            }),
        }),
        createSuggestedProblemEdit: builder.mutation({
            query: body => ({
                url: '/suggested_problem_edits',
                method: 'POST',
                body,
            }),
        }),
        updateSuggestedProblemEdit: builder.mutation({
            query: body => ({
                url: `/suggested_problem_edits/${body.id}`,
                method: 'PUT',
                body,
            }),
        }),
        resolveSuggestedProblemEdit: builder.mutation({
            query: body => ({
                url: `/suggested_problem_edits/${body.id}/resolve`,
                method: 'PUT',
                body,
            }),
        }),
        deleteSuggestedProblemEdit: builder.mutation({
            query: suggestedEditId => ({
                url: `/suggested_problem_edits/${suggestedEditId}`,
                method: 'DELETE',
            }),
        }),
    }),
});
export const { useFetchSuggestedProblemEditsQuery, useCountSuggestedProblemEditsQuery, useLazyFetchSuggestedProblemEditsQuery, useFetchSuggestedProblemEditQuery, useLazyFetchSuggestedProblemEditQuery, useCreateSuggestedProblemEditMutation, useDeleteSuggestedProblemEditMutation, useUpdateSuggestedProblemEditMutation, useResolveSuggestedProblemEditMutation, } = suggestedProblemEditsApi;
//# sourceMappingURL=suggestedProblemEdits.js.map