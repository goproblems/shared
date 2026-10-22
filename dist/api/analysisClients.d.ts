export type AvailableAnalysisClient = {
    clientId: string;
    name: string;
    isOnline: boolean;
    isBusy: boolean;
};
export type AvailableClientsResponse = {
    clients: AvailableAnalysisClient[];
    pendingRequestCount: number;
};
export declare const analysisClientsApi: import("@reduxjs/toolkit/query").Api<import("./index.js").ApiBaseQuery, {
    fetchAvailableClients: import("@reduxjs/toolkit/query").QueryDefinition<void, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", AvailableClientsResponse, "apiV2", unknown>;
}, "apiV2", "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;
export declare const useFetchAvailableClientsQuery: typeof analysisClientsApi.useFetchAvailableClientsQuery;
//# sourceMappingURL=analysisClients.d.ts.map