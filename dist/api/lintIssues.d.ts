import type { ProblemMinimal } from '../contracts/index.js';
export declare enum LintSeverity {
    ERROR = "error",
    WARNING = "warning"
}
export declare enum ProblemPublishStatus {
    LIVE = "live",
    SANDBOX = "sandbox",
    DELETED = "deleted"
}
export type LintIssue = {
    severity: LintSeverity;
    issueType: string;
    message: string;
    nodePath: string | null;
};
export type ProblemWithLintIssues = {
    problem: ProblemMinimal;
    issues: LintIssue[];
};
export type LintIssuesResponse = {
    entries: ProblemWithLintIssues[];
    totalRecords: number;
};
export type LintIssuesStatsResponse = {
    totalProblemsWithIssues: number;
    bySeverity: Record<string, number>;
    byIssueType: Record<string, number>;
    availableIssueTypes: string[];
};
export type LintIssuesRequest = {
    page?: number;
    limit?: number;
    severity?: string;
    issueType?: string;
    status?: ProblemPublishStatus;
};
export declare const lintIssuesApi: import("@reduxjs/toolkit/query").Api<import("./index.js").ApiBaseQuery, {
    fetchLintIssues: import("@reduxjs/toolkit/query").QueryDefinition<LintIssuesRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", LintIssuesResponse, "apiV2", unknown>;
    fetchLintIssuesStats: import("@reduxjs/toolkit/query").QueryDefinition<{
        status?: ProblemPublishStatus;
    }, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", LintIssuesStatsResponse, "apiV2", unknown>;
}, "apiV2", "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;
export declare const useFetchLintIssuesQuery: typeof lintIssuesApi.useFetchLintIssuesQuery, useFetchLintIssuesStatsQuery: typeof lintIssuesApi.useFetchLintIssuesStatsQuery;
//# sourceMappingURL=lintIssues.d.ts.map