import qs from 'qs';
import {apiV2} from './index.js';
import {
    Scenario,
    ScenarioAttempt,
    ScenarioAttemptMinimal,
    ScenarioAttemptStatusResponse,
    EntriesResponse,
    ScenarioCriteria,
    ScenarioSolution,
    ScenarioSolutionChildren,
    ScenarioSolutionPathContext,
    ScenarioNode,
    ScenarioNodeTagSummary,
    FetchScenarioNodeTagSummaryRequest,
    ScenarioNodeTagEvent,
    FetchScenarioNodeTagEventsRequest,
    ScenarioAnalysisResult,
    ScenarioAnalysisRequest,
    UpdateScenarioNodeRequest,
    UpdateScenarioAttemptRequest,
    PostMoveRequest,
    FetchScenarioSolutionsRequest,
    FetchScenarioSolutionTreeRequest,
    FetchAnalysisRequest,
    FetchScenarioAttemptsCriteria,
    ScenarioDifficultyResults,
    ScenarioAttemptsSummaryResponse,
    ScenarioHomeSummary,
    ScenarioComment,
    CommentsCriteriaWrapper,
    ScenarioMetadata,
} from '../contracts/index.js';

export const scenariosApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchScenarios: builder.query<
            EntriesResponse<Scenario>,
            ScenarioCriteria
        >({
            query: (criteria = {}) =>
                `scenarios${qs.stringify(criteria, {
                    skipNulls: true,
                    addQueryPrefix: true,
                })}`,
        }),
        fetchScenario: builder.query<Scenario, number>({
            query: id => `scenarios/${id}`,
        }),
        fetchScenarioAttempts: builder.query<
            EntriesResponse<ScenarioAttemptMinimal>,
            FetchScenarioAttemptsCriteria
        >({
            query: criteria =>
                `scenario-attempts${qs.stringify(criteria, {
                    skipNulls: true,
                    addQueryPrefix: true,
                })}`,
        }),
        fetchScenarioAttempt: builder.query<
            ScenarioAttempt,
            {scenarioId: number; attemptId: number}
        >({
            query: ({scenarioId, attemptId}) =>
                `scenarios/${scenarioId}/attempts/${attemptId}`,
        }),
        createScenarioAttempt: builder.mutation<
            ScenarioAttempt,
            {scenarioId: number; difficulty: string}
        >({
            query: ({scenarioId, difficulty}) => ({
                url: `scenarios/${scenarioId}/attempts`,
                method: 'POST',
                body: {difficulty},
            }),
        }),
        fetchScenarioAttemptStatus: builder.query<
            ScenarioAttemptStatusResponse,
            {scenarioId: number; attemptId: number}
        >({
            query: ({scenarioId, attemptId}) =>
                `scenarios/${scenarioId}/attempts/${attemptId}/status`,
        }),
        fetchScenarioDifficultyResults: builder.query<
            ScenarioDifficultyResults,
            {scenarioId: number}
        >({
            query: ({scenarioId}) =>
                `scenarios/${scenarioId}/difficulty-results`,
        }),
        fetchScenarioAttemptsSummary: builder.query<
            ScenarioAttemptsSummaryResponse,
            {scenarioIds: number[]}
        >({
            query: ({scenarioIds}) =>
                `scenario-attempts/summary?scenarioIds=${scenarioIds.join(
                    ','
                )}`,
        }),
        fetchScenarioHomeSummary: builder.query<ScenarioHomeSummary, void>({
            query: () => 'scenarios/home-summary',
        }),
        postMove: builder.mutation<
            {message: string; move: string},
            PostMoveRequest
        >({
            query: ({
                scenarioId,
                attemptId,
                move,
                forceAiRequest,
                targetClientIds,
            }) => ({
                url: `scenarios/${scenarioId}/attempts/${attemptId}/moves`,
                method: 'POST',
                body: {
                    move,
                    forceAiRequest,
                    ...(targetClientIds ? {targetClientIds} : {}),
                },
            }),
        }),
        resignScenarioAttempt: builder.mutation<
            {message: string},
            {scenarioId: number; attemptId: number}
        >({
            query: ({scenarioId, attemptId}) => ({
                url: `scenarios/${scenarioId}/attempts/${attemptId}/resign`,
                method: 'POST',
            }),
        }),
        fetchScenarioSolutions: builder.query<
            ScenarioSolution,
            FetchScenarioSolutionsRequest
        >({
            query: ({scenarioId, difficulty}) =>
                `scenarios/${scenarioId}/solutions${qs.stringify(
                    {difficulty},
                    {
                        skipNulls: true,
                        addQueryPrefix: true,
                    }
                )}`,
        }),
        fetchScenarioSolutionPathContext: builder.query<
            ScenarioSolutionPathContext,
            FetchScenarioSolutionTreeRequest
        >({
            query: ({scenarioId, difficulty, path}) =>
                `scenarios/${scenarioId}/solutions/path-context${qs.stringify(
                    {difficulty, path},
                    {
                        skipNulls: true,
                        addQueryPrefix: true,
                    }
                )}`,
        }),
        fetchScenarioSolutionChildren: builder.query<
            ScenarioSolutionChildren,
            FetchScenarioSolutionTreeRequest
        >({
            query: ({scenarioId, difficulty, path}) =>
                `scenarios/${scenarioId}/solutions/children${qs.stringify(
                    {difficulty, path},
                    {
                        skipNulls: true,
                        addQueryPrefix: true,
                    }
                )}`,
        }),
        fetchScenarioNodeTagSummary: builder.query<
            ScenarioNodeTagSummary[],
            FetchScenarioNodeTagSummaryRequest | void
        >({
            query: criteria =>
                `scenario-node-tags/summary${qs.stringify(criteria, {
                    skipNulls: true,
                    addQueryPrefix: true,
                })}`,
        }),
        fetchScenarioNodeTagEvents: builder.query<
            ScenarioNodeTagEvent[],
            FetchScenarioNodeTagEventsRequest
        >({
            query: criteria =>
                `scenario-node-tags/events${qs.stringify(criteria, {
                    skipNulls: true,
                    addQueryPrefix: true,
                })}`,
        }),
        updateScenarioNode: builder.mutation<
            ScenarioNode,
            UpdateScenarioNodeRequest & {nodeId: number}
        >({
            query: ({nodeId, ...body}) => ({
                url: `scenario_nodes/${nodeId}`,
                method: 'PUT',
                body,
            }),
        }),
        fetchAnalysis: builder.query<
            ScenarioAnalysisResult,
            FetchAnalysisRequest
        >({
            query: ({scenarioId, path, difficulty}) =>
                `scenarios/${scenarioId}/analysis${qs.stringify(
                    {path, difficulty},
                    {skipNulls: true, addQueryPrefix: true}
                )}`,
        }),
        createAnalysisRequest: builder.mutation<
            ScenarioAnalysisRequest,
            {
                scenarioId: number;
                path: string;
                difficulty: string;
                targetClientIds?: string[] | null;
                source?: string;
            }
        >({
            query: ({
                scenarioId,
                path,
                difficulty,
                targetClientIds,
                source,
            }) => ({
                url: `scenarios/${scenarioId}/analysis-requests`,
                method: 'POST',
                body: {
                    path,
                    difficulty,
                    ...(targetClientIds ? {targetClientIds} : {}),
                    ...(source ? {source} : {}),
                },
            }),
        }),
        broadcastPendingAnalysisRequests: builder.mutation<
            {broadcasted: boolean; pendingRequestCount: number},
            void
        >({
            query: () => ({
                url: 'analysis-requests/broadcast',
                method: 'POST',
            }),
        }),
        updateScenarioAttempt: builder.mutation<
            ScenarioAttempt,
            UpdateScenarioAttemptRequest
        >({
            query: ({scenarioId, attemptId, ...body}) => ({
                url: `scenarios/${scenarioId}/attempts/${attemptId}`,
                method: 'PUT',
                body,
            }),
        }),
        fetchScenarioComments: builder.query<ScenarioComment[], number>({
            query: scenarioId => `scenarios/${scenarioId}/comments`,
        }),
        createScenarioComment: builder.mutation<
            ScenarioComment,
            {scenarioId: number; comment: string; path?: string | null}
        >({
            query: ({scenarioId, comment, path}) => ({
                url: `scenarios/${scenarioId}/comments`,
                method: 'POST',
                body: {comment, ...(path ? {path} : {})},
            }),
        }),
        deleteScenarioComment: builder.mutation<
            void,
            {scenarioId: number; commentId: number}
        >({
            query: ({scenarioId, commentId}) => ({
                url: `scenarios/${scenarioId}/comments/${commentId}`,
                method: 'DELETE',
            }),
        }),
        fetchCommentsOnMyInvasions: builder.query<
            EntriesResponse<ScenarioComment>,
            CommentsCriteriaWrapper
        >({
            query: payload =>
                `scenario-comments/on-my-scenarios${qs.stringify(payload, {
                    addQueryPrefix: true,
                })}`,
        }),
        fetchMyScenarioComments: builder.query<
            EntriesResponse<ScenarioComment>,
            CommentsCriteriaWrapper
        >({
            query: payload =>
                `scenario-comments/by-me${qs.stringify(payload, {
                    addQueryPrefix: true,
                })}`,
        }),
        createScenario: builder.mutation<
            Scenario,
            {
                type: string;
                sgf: string;
                elo?: number;
                intro?: string;
                alive?: boolean;
                metadata?: ScenarioMetadata;
            }
        >({
            query: body => ({
                url: 'scenarios',
                method: 'POST',
                body,
            }),
        }),
        updateScenario: builder.mutation<
            Scenario,
            {
                id: number;
                type?: string;
                sgf?: string;
                elo?: number;
                intro?: string;
                alive?: boolean;
                metadata?: ScenarioMetadata;
            }
        >({
            query: ({id, ...body}) => ({
                url: `scenarios/${id}`,
                method: 'PUT',
                body,
            }),
        }),
        resetScenarioNodes: builder.mutation<
            void,
            {scenarioId: number; deleteAttempts?: boolean}
        >({
            query: ({scenarioId, deleteAttempts}) => ({
                url: `scenarios/${scenarioId}/nodes${qs.stringify(
                    {deleteAttempts},
                    {skipNulls: true, addQueryPrefix: true}
                )}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useFetchScenariosQuery,
    useFetchScenarioQuery,
    useFetchScenarioAttemptsQuery,
    useFetchScenarioAttemptQuery,
    useCreateScenarioAttemptMutation,
    useFetchScenarioAttemptStatusQuery,
    useFetchScenarioDifficultyResultsQuery,
    useFetchScenarioAttemptsSummaryQuery,
    useFetchScenarioHomeSummaryQuery,
    usePostMoveMutation,
    useResignScenarioAttemptMutation,
    useFetchScenarioSolutionsQuery,
    useLazyFetchScenarioSolutionsQuery,
    useFetchScenarioSolutionPathContextQuery,
    useLazyFetchScenarioSolutionChildrenQuery,
    useFetchScenarioNodeTagSummaryQuery,
    useLazyFetchScenarioNodeTagEventsQuery,
    useUpdateScenarioNodeMutation,
    useFetchAnalysisQuery,
    useLazyFetchAnalysisQuery,
    useCreateAnalysisRequestMutation,
    useBroadcastPendingAnalysisRequestsMutation,
    useUpdateScenarioAttemptMutation,
    useFetchScenarioCommentsQuery,
    useCreateScenarioCommentMutation,
    useDeleteScenarioCommentMutation,
    useFetchCommentsOnMyInvasionsQuery,
    useFetchMyScenarioCommentsQuery,
    useCreateScenarioMutation,
    useUpdateScenarioMutation,
    useResetScenarioNodesMutation,
} = scenariosApi;
