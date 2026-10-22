import {apiV2} from './index.js';
import {
    Scenario,
    ScenarioDifficulty,
    ScenarioNodeTag,
    UserMinimal,
} from '../contracts/index.js';

export type ExpectedValues = {
    endness?: boolean;
    urgency?: number;
    totalLoss?: number;
};

export type ActualValues = {
    endness?: number;
    urgency?: number;
    totalLoss?: number;
};

export type Tolerances = {
    urgency?: number | null;
    totalLoss?: number | null;
};

export type Expectation = {
    path: string;
    expected: ExpectedValues;
    tolerances?: Tolerances;
};

export type ExpectationResult = {
    path: string;
    expected: ExpectedValues;
    actual: ActualValues | null;
    tolerances: Tolerances | null;
    passed: boolean;
    error?: string;
};

export type CreateScenarioCaseRequest = {
    scenarioId: number;
    path: string;
    difficulty?: ScenarioDifficulty;
    description?: string | null;
    isActive?: boolean;
    isTestCase?: boolean;
    expectations: Expectation[];
    tolerances?: Tolerances;
};

export type ScenarioCase = {
    id: number;
    scenario: Scenario;
    path: string;
    difficulty?: ScenarioDifficulty;
    user: UserMinimal | null;
    description?: string | null;
    isActive: boolean;
    isTestCase: boolean;
    expectations: Expectation[];
    tolerances?: Tolerances;
    tags: ScenarioNodeTag[];
    createdAt: string;
    updatedAt: string;
    lastExecution?: ScenarioCaseExecution | null;
};

export type ScenarioCaseExecutionStatus =
    | 'pending'
    | 'running'
    | 'passed'
    | 'failed'
    | 'error';

export type ScenarioCaseExecution = {
    id: number;
    scenarioCaseId: number;
    status: ScenarioCaseExecutionStatus;
    results: ExpectationResult[] | null;
    katagoWeightsFile: string | null;
    katagoPlayouts: number | null;
    analysisClientId: string | null;
    analysisClientName: string | null;
    clientVersion: number | null;
    durationMs: number | null;
    errorMessage: string | null;
    startedAt: string | null;
    completedAt: string | null;
    createdAt: string;
};

export type ScenarioCaseExecutionUpdatedPayload = {
    scenarioId: number;
    scenarioCaseId: number;
    execution: ScenarioCaseExecution;
};

export type ScenarioCaseExecutionUpdatedLiveNotification = {
    type: 'scenario_case_execution_updated';
    payload: ScenarioCaseExecutionUpdatedPayload;
};

export type ScenarioCaseDetail = {
    case: ScenarioCase;
    lastExecution: ScenarioCaseExecution | null;
    lastPassedExecution: ScenarioCaseExecution | null;
};

export type ScenarioCasesSummary = {
    total: number;
    passed: number;
    failed: number;
    notExecuted: number;
};

export type ExecuteScenarioCaseWithOptionsRequest = {
    id: number;
    targetClientIds?: string[];
    source?: 'test_case' | 'play';
};

export type ExecuteScenarioCaseRequest =
    | number
    | ExecuteScenarioCaseWithOptionsRequest;

export type ExecuteAllTestCasesRequest = {
    targetClientIds?: string[];
    source?: 'test_case' | 'play';
};

export type ScenarioCaseTestCaseFilter = 'test' | 'all' | 'non_test';

export type ScenarioCaseActiveFilter = 'active' | 'all' | 'inactive';

export type ScenarioCaseListParams = {
    testCaseFilter?: ScenarioCaseTestCaseFilter;
    activeFilter?: ScenarioCaseActiveFilter;
};

export type ScenarioCasesByScenarioParams = ScenarioCaseListParams & {
    scenarioId: number;
};

export const scenarioCasesApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        createScenarioCase: builder.mutation<
            ScenarioCase,
            CreateScenarioCaseRequest
        >({
            query: data => ({
                url: '/scenario-cases',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['ScenarioCase', 'ScenarioCaseSummary'],
        }),
        fetchScenarioCases: builder.query<
            ScenarioCase[],
            ScenarioCasesByScenarioParams
        >({
            query: ({scenarioId, testCaseFilter, activeFilter}) => ({
                url: `/scenario-cases/scenario/${scenarioId}`,
                params: buildScenarioCaseListParams({
                    testCaseFilter,
                    activeFilter,
                }),
            }),
            providesTags: ['ScenarioCase'],
        }),
        fetchAllTestCases: builder.query<
            ScenarioCase[],
            ScenarioCaseListParams | void
        >({
            query: params => ({
                url: '/scenario-cases',
                params: buildScenarioCaseListParams(params),
            }),
            providesTags: ['ScenarioCase'],
        }),
        fetchScenarioCaseDetail: builder.query<ScenarioCaseDetail, number>({
            query: id => `/scenario-cases/${id}`,
            providesTags: (_result, _err, id) => [
                {type: 'ScenarioCase', id},
                'ScenarioCaseExecution',
            ],
        }),
        updateScenarioCase: builder.mutation<
            ScenarioCase,
            {id: number; data: CreateScenarioCaseRequest}
        >({
            query: ({id, data}) => ({
                url: `/scenario-cases/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['ScenarioCase'],
        }),
        deleteScenarioCase: builder.mutation<void, number>({
            query: id => ({
                url: `/scenario-cases/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['ScenarioCase', 'ScenarioCaseSummary'],
        }),
        executeScenarioCase: builder.mutation<
            ScenarioCaseExecution,
            ExecuteScenarioCaseRequest
        >({
            query: request => {
                const id = typeof request === 'number' ? request : request.id;
                const body =
                    typeof request === 'number'
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
        fetchExecutions: builder.query<ScenarioCaseExecution[], number>({
            query: id => `/scenario-cases/${id}/executions`,
            providesTags: ['ScenarioCaseExecution'],
        }),
        executeAllTestCases: builder.mutation<
            ScenarioCaseExecution[],
            ExecuteAllTestCasesRequest | void
        >({
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
        fetchTestCasesSummary: builder.query<ScenarioCasesSummary, void>({
            query: () => '/scenario-cases/summary',
            providesTags: ['ScenarioCaseSummary'],
        }),
    }),
});

export const {
    useCreateScenarioCaseMutation,
    useFetchScenarioCasesQuery,
    useFetchAllTestCasesQuery,
    useFetchScenarioCaseDetailQuery,
    useUpdateScenarioCaseMutation,
    useDeleteScenarioCaseMutation,
    useExecuteScenarioCaseMutation,
    useFetchExecutionsQuery,
    useExecuteAllTestCasesMutation,
    useFetchTestCasesSummaryQuery,
} = scenarioCasesApi;

const buildScenarioCaseListParams = (
    params?: ScenarioCaseListParams | void
) => {
    const queryParams: Record<string, string> = {};

    if (params?.testCaseFilter && params.testCaseFilter !== 'test') {
        queryParams.testCaseFilter = params.testCaseFilter;
    }

    if (params?.activeFilter && params.activeFilter !== 'active') {
        queryParams.activeFilter = params.activeFilter;
    }

    return Object.keys(queryParams).length > 0 ? queryParams : undefined;
};
