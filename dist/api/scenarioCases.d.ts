import { Scenario, ScenarioDifficulty, ScenarioNodeTag, UserMinimal } from '../contracts/index.js';
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
export type ScenarioCaseExecutionStatus = 'pending' | 'running' | 'passed' | 'failed' | 'error';
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
export type ExecuteScenarioCaseRequest = number | ExecuteScenarioCaseWithOptionsRequest;
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
export declare const scenarioCasesApi: import("@reduxjs/toolkit/query").Api<import("./index.js").ApiBaseQuery, {
    createScenarioCase: import("@reduxjs/toolkit/query").MutationDefinition<CreateScenarioCaseRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", ScenarioCase, "apiV2", unknown>;
    fetchScenarioCases: import("@reduxjs/toolkit/query").QueryDefinition<ScenarioCasesByScenarioParams, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", ScenarioCase[], "apiV2", unknown>;
    fetchAllTestCases: import("@reduxjs/toolkit/query").QueryDefinition<void | ScenarioCaseListParams, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", ScenarioCase[], "apiV2", unknown>;
    fetchScenarioCaseDetail: import("@reduxjs/toolkit/query").QueryDefinition<number, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", ScenarioCaseDetail, "apiV2", unknown>;
    updateScenarioCase: import("@reduxjs/toolkit/query").MutationDefinition<{
        id: number;
        data: CreateScenarioCaseRequest;
    }, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", ScenarioCase, "apiV2", unknown>;
    deleteScenarioCase: import("@reduxjs/toolkit/query").MutationDefinition<number, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", void, "apiV2", unknown>;
    executeScenarioCase: import("@reduxjs/toolkit/query").MutationDefinition<ExecuteScenarioCaseRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", ScenarioCaseExecution, "apiV2", unknown>;
    fetchExecutions: import("@reduxjs/toolkit/query").QueryDefinition<number, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", ScenarioCaseExecution[], "apiV2", unknown>;
    executeAllTestCases: import("@reduxjs/toolkit/query").MutationDefinition<void | ExecuteAllTestCasesRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", ScenarioCaseExecution[], "apiV2", unknown>;
    fetchTestCasesSummary: import("@reduxjs/toolkit/query").QueryDefinition<void, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", ScenarioCasesSummary, "apiV2", unknown>;
}, "apiV2", "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;
export declare const useCreateScenarioCaseMutation: typeof scenarioCasesApi.useCreateScenarioCaseMutation, useFetchScenarioCasesQuery: typeof scenarioCasesApi.useFetchScenarioCasesQuery, useFetchAllTestCasesQuery: typeof scenarioCasesApi.useFetchAllTestCasesQuery, useFetchScenarioCaseDetailQuery: typeof scenarioCasesApi.useFetchScenarioCaseDetailQuery, useUpdateScenarioCaseMutation: typeof scenarioCasesApi.useUpdateScenarioCaseMutation, useDeleteScenarioCaseMutation: typeof scenarioCasesApi.useDeleteScenarioCaseMutation, useExecuteScenarioCaseMutation: typeof scenarioCasesApi.useExecuteScenarioCaseMutation, useFetchExecutionsQuery: typeof scenarioCasesApi.useFetchExecutionsQuery, useExecuteAllTestCasesMutation: typeof scenarioCasesApi.useExecuteAllTestCasesMutation, useFetchTestCasesSummaryQuery: typeof scenarioCasesApi.useFetchTestCasesSummaryQuery;
//# sourceMappingURL=scenarioCases.d.ts.map