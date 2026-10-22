import { AchievementInfoResponse, AchievementInfoApiResponse } from '../contracts/model.js';
export declare const achievementsApi: import("@reduxjs/toolkit/query").Api<import("./index.js").ApiBaseQuery, {
    getAchievementInfo: import("@reduxjs/toolkit/query").QueryDefinition<{
        code: string;
        viewerId?: number;
        limit?: number;
        offset?: number;
        sortDirection?: string;
        sortBy?: string;
    }, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", AchievementInfoResponse, "apiV2", unknown>;
    getAchievementInfoDetails: import("@reduxjs/toolkit/query").QueryDefinition<{
        code: string;
        viewerId?: number;
    }, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", AchievementInfoApiResponse, "apiV2", unknown>;
}, "apiV2", "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;
export declare const useGetAchievementInfoQuery: typeof achievementsApi.useGetAchievementInfoQuery, useGetAchievementInfoDetailsQuery: typeof achievementsApi.useGetAchievementInfoDetailsQuery;
//# sourceMappingURL=achievements.d.ts.map