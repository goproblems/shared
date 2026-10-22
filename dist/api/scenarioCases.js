import { apiV2 } from './index.js';
export const scenarioCasesApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        createScenarioCase: builder.mutation({
            query: data => ({
                url: '/scenario-cases',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['ScenarioCase', 'ScenarioCaseSummary'],
        }),
        fetchScenarioCases: builder.query({
            query: ({ scenarioId, testCaseFilter, activeFilter }) => ({
                url: `/scenario-cases/scenario/${scenarioId}`,
                params: buildScenarioCaseListParams({
                    testCaseFilter,
                    activeFilter,
                }),
            }),
            providesTags: ['ScenarioCase'],
        }),
        fetchAllTestCases: builder.query({
            query: params => ({
                url: '/scenario-cases',
                params: buildScenarioCaseListParams(params),
            }),
            providesTags: ['ScenarioCase'],
        }),
        fetchScenarioCaseDetail: builder.query({
            query: id => `/scenario-cases/${id}`,
            providesTags: (_result, _err, id) => [
                { type: 'ScenarioCase', id },
                'ScenarioCaseExecution',
            ],
        }),
        updateScenarioCase: builder.mutation({
            query: ({ id, data }) => ({
                url: `/scenario-cases/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['ScenarioCase'],
        }),
        deleteScenarioCase: builder.mutation({
            query: id => ({
                url: `/scenario-cases/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['ScenarioCase', 'ScenarioCaseSummary'],
        }),
        executeScenarioCase: builder.mutation({
            query: request => {
                const id = typeof request === 'number' ? request : request.id;
                const body = typeof request === 'number'
                    ? undefined
                    : {
                        targetClientIds: request.targetClientIds,
                        source: request.source,
                    };
                return {
                    url: `/scenario-cases/${id}/execute`,
                    method: 'POST',
                    body,
                };
            },
            invalidatesTags: [
                'ScenarioCase',
                'ScenarioCaseExecution',
                'ScenarioCaseSummary',
            ],
        }),
        fetchExecutions: builder.query({
            query: id => `/scenario-cases/${id}/executions`,
            providesTags: ['ScenarioCaseExecution'],
        }),
        executeAllTestCases: builder.mutation({
            query: request => ({
                url: '/scenario-cases/execute-all',
                method: 'POST',
                body: request,
            }),
            invalidatesTags: [
                'ScenarioCase',
                'ScenarioCaseExecution',
                'ScenarioCaseSummary',
            ],
        }),
        fetchTestCasesSummary: builder.query({
            query: () => '/scenario-cases/summary',
            providesTags: ['ScenarioCaseSummary'],
        }),
    }),
});
export const { useCreateScenarioCaseMutation, useFetchScenarioCasesQuery, useFetchAllTestCasesQuery, useFetchScenarioCaseDetailQuery, useUpdateScenarioCaseMutation, useDeleteScenarioCaseMutation, useExecuteScenarioCaseMutation, useFetchExecutionsQuery, useExecuteAllTestCasesMutation, useFetchTestCasesSummaryQuery, } = scenarioCasesApi;
const buildScenarioCaseListParams = (params) => {
    const queryParams = {};
    if (params?.testCaseFilter && params.testCaseFilter !== 'test') {
        queryParams.testCaseFilter = params.testCaseFilter;
    }
    if (params?.activeFilter && params.activeFilter !== 'active') {
        queryParams.activeFilter = params.activeFilter;
    }
    return Object.keys(queryParams).length > 0 ? queryParams : undefined;
};
//# sourceMappingURL=scenarioCases.js.map