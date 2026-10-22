import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
export type ApiBaseQuery = BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>;
export type ApiTransportExtra = {
    apiV1BaseQuery: ApiBaseQuery;
    apiV2BaseQuery: ApiBaseQuery;
};
export declare const apiV1: import("@reduxjs/toolkit/query").Api<ApiBaseQuery, {}, "apiV1", never, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;
export declare const apiV2: import("@reduxjs/toolkit/query").Api<ApiBaseQuery, {}, "apiV2", "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;
//# sourceMappingURL=index.d.ts.map