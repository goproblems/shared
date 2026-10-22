import qs from 'qs';
import { apiV2 } from './index.js';
export var LintSeverity;
(function (LintSeverity) {
    LintSeverity["ERROR"] = "error";
    LintSeverity["WARNING"] = "warning";
})(LintSeverity || (LintSeverity = {}));
export var ProblemPublishStatus;
(function (ProblemPublishStatus) {
    ProblemPublishStatus["LIVE"] = "live";
    ProblemPublishStatus["SANDBOX"] = "sandbox";
    ProblemPublishStatus["DELETED"] = "deleted";
})(ProblemPublishStatus || (ProblemPublishStatus = {}));
export const lintIssuesApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchLintIssues: builder.query({
            query: params => ({
                url: `/problems/lint-issues${qs.stringify(params, { addQueryPrefix: true })}`,
            }),
            providesTags: ['lint-issues'],
        }),
        fetchLintIssuesStats: builder.query({
            query: params => ({
                url: `/problems/lint-issues/stats${qs.stringify(params, { addQueryPrefix: true })}`,
            }),
            providesTags: ['lint-issues'],
        }),
    }),
});
export const { useFetchLintIssuesQuery, useFetchLintIssuesStatsQuery } = lintIssuesApi;
//# sourceMappingURL=lintIssues.js.map