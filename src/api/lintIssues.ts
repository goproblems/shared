import qs from 'qs';
import {apiV2} from './index.js';
import type {ProblemMinimal} from '../contracts/index.js';

export enum LintSeverity {
    ERROR = 'error',
    WARNING = 'warning',
}

export enum ProblemPublishStatus {
    LIVE = 'live',
    SANDBOX = 'sandbox',
    DELETED = 'deleted',
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

export const lintIssuesApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchLintIssues: builder.query<LintIssuesResponse, LintIssuesRequest>({
            query: params => ({
                url: `/problems/lint-issues${qs.stringify(params, {addQueryPrefix: true})}`,
            }),
            providesTags: ['lint-issues'],
        }),
        fetchLintIssuesStats: builder.query<
            LintIssuesStatsResponse,
            {status?: ProblemPublishStatus}
        >({
            query: params => ({
                url: `/problems/lint-issues/stats${qs.stringify(params, {addQueryPrefix: true})}`,
            }),
            providesTags: ['lint-issues'],
        }),
    }),
});

export const {useFetchLintIssuesQuery, useFetchLintIssuesStatsQuery} =
    lintIssuesApi;
