import qs from 'qs';
import { apiV2 } from './index.js';
export const scenariosApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchScenarios: builder.query({
            query: (criteria = {}) => `scenarios${qs.stringify(criteria, {
                skipNulls: true,
                addQueryPrefix: true,
            })}`,
        }),
        fetchScenario: builder.query({
            query: id => `scenarios/${id}`,
        }),
        fetchScenarioAttempts: builder.query({
            query: criteria => `scenario-attempts${qs.stringify(criteria, {
                skipNulls: true,
                addQueryPrefix: true,
            })}`,
        }),
        fetchScenarioAttempt: builder.query({
            query: ({ scenarioId, attemptId }) => `scenarios/${scenarioId}/attempts/${attemptId}`,
        }),
        createScenarioAttempt: builder.mutation({
            query: ({ scenarioId, difficulty }) => ({
                url: `scenarios/${scenarioId}/attempts`,
                method: 'POST',
                body: { difficulty },
            }),
        }),
        fetchScenarioAttemptStatus: builder.query({
            query: ({ scenarioId, attemptId }) => `scenarios/${scenarioId}/attempts/${attemptId}/status`,
        }),
        fetchScenarioDifficultyResults: builder.query({
            query: ({ scenarioId }) => `scenarios/${scenarioId}/difficulty-results`,
        }),
        fetchScenarioAttemptsSummary: builder.query({
            query: ({ scenarioIds }) => `scenario-attempts/summary?scenarioIds=${scenarioIds.join(',')}`,
        }),
        fetchScenarioHomeSummary: builder.query({
            query: () => 'scenarios/home-summary',
        }),
        postMove: builder.mutation({
            query: ({ scenarioId, attemptId, move, forceAiRequest, targetClientIds, }) => ({
                url: `scenarios/${scenarioId}/attempts/${attemptId}/moves`,
                method: 'POST',
                body: {
                    move,
                    forceAiRequest,
                    ...(targetClientIds ? { targetClientIds } : {}),
                },
            }),
        }),
        resignScenarioAttempt: builder.mutation({
            query: ({ scenarioId, attemptId }) => ({
                url: `scenarios/${scenarioId}/attempts/${attemptId}/resign`,
                method: 'POST',
            }),
        }),
        fetchScenarioSolutions: builder.query({
            query: ({ scenarioId, difficulty }) => `scenarios/${scenarioId}/solutions${qs.stringify({ difficulty }, {
                skipNulls: true,
                addQueryPrefix: true,
            })}`,
        }),
        fetchScenarioSolutionPathContext: builder.query({
            query: ({ scenarioId, difficulty, path }) => `scenarios/${scenarioId}/solutions/path-context${qs.stringify({ difficulty, path }, {
                skipNulls: true,
                addQueryPrefix: true,
            })}`,
        }),
        fetchScenarioSolutionChildren: builder.query({
            query: ({ scenarioId, difficulty, path }) => `scenarios/${scenarioId}/solutions/children${qs.stringify({ difficulty, path }, {
                skipNulls: true,
                addQueryPrefix: true,
            })}`,
        }),
        fetchScenarioNodeTagSummary: builder.query({
            query: criteria => `scenario-node-tags/summary${qs.stringify(criteria, {
                skipNulls: true,
                addQueryPrefix: true,
            })}`,
        }),
        fetchScenarioNodeTagEvents: builder.query({
            query: criteria => `scenario-node-tags/events${qs.stringify(criteria, {
                skipNulls: true,
                addQueryPrefix: true,
            })}`,
        }),
        updateScenarioNode: builder.mutation({
            query: ({ nodeId, ...body }) => ({
                url: `scenario_nodes/${nodeId}`,
                method: 'PUT',
                body,
            }),
        }),
        fetchAnalysis: builder.query({
            query: ({ scenarioId, path, difficulty }) => `scenarios/${scenarioId}/analysis${qs.stringify({ path, difficulty }, { skipNulls: true, addQueryPrefix: true })}`,
        }),
        createAnalysisRequest: builder.mutation({
            query: ({ scenarioId, path, difficulty, targetClientIds, source, }) => ({
                url: `scenarios/${scenarioId}/analysis-requests`,
                method: 'POST',
                body: {
                    path,
                    difficulty,
                    ...(targetClientIds ? { targetClientIds } : {}),
                    ...(source ? { source } : {}),
                },
            }),
        }),
        broadcastPendingAnalysisRequests: builder.mutation({
            query: () => ({
                url: 'analysis-requests/broadcast',
                method: 'POST',
            }),
        }),
        updateScenarioAttempt: builder.mutation({
            query: ({ scenarioId, attemptId, ...body }) => ({
                url: `scenarios/${scenarioId}/attempts/${attemptId}`,
                method: 'PUT',
                body,
            }),
        }),
        fetchScenarioComments: builder.query({
            query: scenarioId => `scenarios/${scenarioId}/comments`,
        }),
        createScenarioComment: builder.mutation({
            query: ({ scenarioId, comment, path }) => ({
                url: `scenarios/${scenarioId}/comments`,
                method: 'POST',
                body: { comment, ...(path ? { path } : {}) },
            }),
        }),
        deleteScenarioComment: builder.mutation({
            query: ({ scenarioId, commentId }) => ({
                url: `scenarios/${scenarioId}/comments/${commentId}`,
                method: 'DELETE',
            }),
        }),
        fetchCommentsOnMyInvasions: builder.query({
            query: payload => `scenario-comments/on-my-scenarios${qs.stringify(payload, {
                addQueryPrefix: true,
            })}`,
        }),
        fetchMyScenarioComments: builder.query({
            query: payload => `scenario-comments/by-me${qs.stringify(payload, {
                addQueryPrefix: true,
            })}`,
        }),
        createScenario: builder.mutation({
            query: body => ({
                url: 'scenarios',
                method: 'POST',
                body,
            }),
        }),
        updateScenario: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `scenarios/${id}`,
                method: 'PUT',
                body,
            }),
        }),
        resetScenarioNodes: builder.mutation({
            query: ({ scenarioId, deleteAttempts }) => ({
                url: `scenarios/${scenarioId}/nodes${qs.stringify({ deleteAttempts }, { skipNulls: true, addQueryPrefix: true })}`,
                method: 'DELETE',
            }),
        }),
    }),
});
export const { useFetchScenariosQuery, useFetchScenarioQuery, useFetchScenarioAttemptsQuery, useFetchScenarioAttemptQuery, useCreateScenarioAttemptMutation, useFetchScenarioAttemptStatusQuery, useFetchScenarioDifficultyResultsQuery, useFetchScenarioAttemptsSummaryQuery, useFetchScenarioHomeSummaryQuery, usePostMoveMutation, useResignScenarioAttemptMutation, useFetchScenarioSolutionsQuery, useLazyFetchScenarioSolutionsQuery, useFetchScenarioSolutionPathContextQuery, useLazyFetchScenarioSolutionChildrenQuery, useFetchScenarioNodeTagSummaryQuery, useLazyFetchScenarioNodeTagEventsQuery, useUpdateScenarioNodeMutation, useFetchAnalysisQuery, useLazyFetchAnalysisQuery, useCreateAnalysisRequestMutation, useBroadcastPendingAnalysisRequestsMutation, useUpdateScenarioAttemptMutation, useFetchScenarioCommentsQuery, useCreateScenarioCommentMutation, useDeleteScenarioCommentMutation, useFetchCommentsOnMyInvasionsQuery, useFetchMyScenarioCommentsQuery, useCreateScenarioMutation, useUpdateScenarioMutation, useResetScenarioNodesMutation, } = scenariosApi;
//# sourceMappingURL=scenarios.js.map