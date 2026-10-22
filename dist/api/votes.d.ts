import { UnifiedVoteRequest, UnifiedToggleVoteRequest, UnifiedRemoveVoteRequest, UnifiedVoteInfoRequest, BulkVoteInfoRequest, VoteInfoResponse, BulkVoteInfoResponse } from '../contracts/index.js';
export declare const votesApi: import("@reduxjs/toolkit/query").Api<import("./index.js").ApiBaseQuery, {
    addVote: import("@reduxjs/toolkit/query").MutationDefinition<UnifiedVoteRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>;
    toggleVote: import("@reduxjs/toolkit/query").MutationDefinition<UnifiedToggleVoteRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>;
    removeVote: import("@reduxjs/toolkit/query").MutationDefinition<UnifiedRemoveVoteRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>;
    fetchVoteInfo: import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>;
    fetchBulkVoteInfo: import("@reduxjs/toolkit/query").MutationDefinition<BulkVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", BulkVoteInfoResponse, "apiV2", unknown>;
}, "apiV2", "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;
export declare const useAddVoteMutation: <R extends Record<string, any> = ({
    requestId?: undefined;
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    data?: undefined;
    error?: undefined;
    endpointName?: string;
    startedTimeStamp?: undefined;
    fulfilledTimeStamp?: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    isUninitialized: true;
    isLoading: false;
    isSuccess: false;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
} & Omit<{
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "data" | "fulfilledTimeStamp"> & Required<Pick<{
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "data" | "fulfilledTimeStamp">> & {
    error: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
    isUninitialized: false;
    isLoading: false;
    isSuccess: true;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.pending;
} & {
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
} & {
    data?: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.pending;
    isUninitialized: false;
    isLoading: true;
    isSuccess: false;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
} & Omit<{
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "error"> & Required<Pick<{
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "error">> & {
    status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
    isUninitialized: false;
    isLoading: false;
    isSuccess: false;
    isError: true;
})>(options?: {
    selectFromResult?: ((state: ({
        requestId?: undefined;
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        data?: undefined;
        error?: undefined;
        endpointName?: string;
        startedTimeStamp?: undefined;
        fulfilledTimeStamp?: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        isUninitialized: true;
        isLoading: false;
        isSuccess: false;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
    } & Omit<{
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "data" | "fulfilledTimeStamp"> & Required<Pick<{
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "data" | "fulfilledTimeStamp">> & {
        error: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
        isUninitialized: false;
        isLoading: false;
        isSuccess: true;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.pending;
    } & {
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    } & {
        data?: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.pending;
        isUninitialized: false;
        isLoading: true;
        isSuccess: false;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
    } & Omit<{
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "error"> & Required<Pick<{
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "error">> & {
        status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
        isUninitialized: false;
        isLoading: false;
        isSuccess: false;
        isError: true;
    })) => R) | undefined;
    fixedCacheKey?: string;
} | undefined) => readonly [(arg: UnifiedVoteRequest) => import("@reduxjs/toolkit/query").MutationActionCreatorResult<import("@reduxjs/toolkit/query").MutationDefinition<UnifiedVoteRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>>, R & {
    originalArgs?: UnifiedVoteRequest | undefined;
    reset: () => void;
}], useToggleVoteMutation: <R extends Record<string, any> = ({
    requestId?: undefined;
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    data?: undefined;
    error?: undefined;
    endpointName?: string;
    startedTimeStamp?: undefined;
    fulfilledTimeStamp?: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    isUninitialized: true;
    isLoading: false;
    isSuccess: false;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
} & Omit<{
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "data" | "fulfilledTimeStamp"> & Required<Pick<{
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "data" | "fulfilledTimeStamp">> & {
    error: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
    isUninitialized: false;
    isLoading: false;
    isSuccess: true;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.pending;
} & {
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
} & {
    data?: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.pending;
    isUninitialized: false;
    isLoading: true;
    isSuccess: false;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
} & Omit<{
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "error"> & Required<Pick<{
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "error">> & {
    status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
    isUninitialized: false;
    isLoading: false;
    isSuccess: false;
    isError: true;
})>(options?: {
    selectFromResult?: ((state: ({
        requestId?: undefined;
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        data?: undefined;
        error?: undefined;
        endpointName?: string;
        startedTimeStamp?: undefined;
        fulfilledTimeStamp?: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        isUninitialized: true;
        isLoading: false;
        isSuccess: false;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
    } & Omit<{
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "data" | "fulfilledTimeStamp"> & Required<Pick<{
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "data" | "fulfilledTimeStamp">> & {
        error: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
        isUninitialized: false;
        isLoading: false;
        isSuccess: true;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.pending;
    } & {
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    } & {
        data?: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.pending;
        isUninitialized: false;
        isLoading: true;
        isSuccess: false;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
    } & Omit<{
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "error"> & Required<Pick<{
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "error">> & {
        status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
        isUninitialized: false;
        isLoading: false;
        isSuccess: false;
        isError: true;
    })) => R) | undefined;
    fixedCacheKey?: string;
} | undefined) => readonly [(arg: UnifiedToggleVoteRequest) => import("@reduxjs/toolkit/query").MutationActionCreatorResult<import("@reduxjs/toolkit/query").MutationDefinition<UnifiedToggleVoteRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>>, R & {
    originalArgs?: UnifiedToggleVoteRequest | undefined;
    reset: () => void;
}], useRemoveVoteMutation: <R extends Record<string, any> = ({
    requestId?: undefined;
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    data?: undefined;
    error?: undefined;
    endpointName?: string;
    startedTimeStamp?: undefined;
    fulfilledTimeStamp?: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    isUninitialized: true;
    isLoading: false;
    isSuccess: false;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
} & Omit<{
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "data" | "fulfilledTimeStamp"> & Required<Pick<{
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "data" | "fulfilledTimeStamp">> & {
    error: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
    isUninitialized: false;
    isLoading: false;
    isSuccess: true;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.pending;
} & {
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
} & {
    data?: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.pending;
    isUninitialized: false;
    isLoading: true;
    isSuccess: false;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
} & Omit<{
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "error"> & Required<Pick<{
    requestId: string;
    data?: VoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "error">> & {
    status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
    isUninitialized: false;
    isLoading: false;
    isSuccess: false;
    isError: true;
})>(options?: {
    selectFromResult?: ((state: ({
        requestId?: undefined;
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        data?: undefined;
        error?: undefined;
        endpointName?: string;
        startedTimeStamp?: undefined;
        fulfilledTimeStamp?: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        isUninitialized: true;
        isLoading: false;
        isSuccess: false;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
    } & Omit<{
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "data" | "fulfilledTimeStamp"> & Required<Pick<{
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "data" | "fulfilledTimeStamp">> & {
        error: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
        isUninitialized: false;
        isLoading: false;
        isSuccess: true;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.pending;
    } & {
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    } & {
        data?: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.pending;
        isUninitialized: false;
        isLoading: true;
        isSuccess: false;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
    } & Omit<{
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "error"> & Required<Pick<{
        requestId: string;
        data?: VoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "error">> & {
        status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
        isUninitialized: false;
        isLoading: false;
        isSuccess: false;
        isError: true;
    })) => R) | undefined;
    fixedCacheKey?: string;
} | undefined) => readonly [(arg: UnifiedRemoveVoteRequest) => import("@reduxjs/toolkit/query").MutationActionCreatorResult<import("@reduxjs/toolkit/query").MutationDefinition<UnifiedRemoveVoteRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>>, R & {
    originalArgs?: UnifiedRemoveVoteRequest | undefined;
    reset: () => void;
}], useFetchVoteInfoQuery: <R extends Record<string, any> = import("@reduxjs/toolkit/query").TSHelpersId<(Omit<{
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    originalArgs?: undefined | undefined;
    data?: undefined | undefined;
    error?: undefined | undefined;
    requestId?: undefined | undefined;
    endpointName?: string | undefined;
    startedTimeStamp?: undefined | undefined;
    fulfilledTimeStamp?: undefined | undefined;
} & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "isUninitialized"> & {
    isUninitialized: true;
}) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "isLoading" | "isFetching"> & {
    isLoading: true;
    isFetching: boolean;
    data: undefined;
}) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "error" | "fulfilledTimeStamp" | "isFetching" | "isSuccess"> & {
    isSuccess: true;
    isFetching: true;
    error: undefined;
} & {
    data: VoteInfoResponse;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "fulfilledTimeStamp">>) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "error" | "fulfilledTimeStamp" | "currentData" | "isFetching" | "isSuccess"> & {
    isSuccess: true;
    isFetching: false;
    error: undefined;
} & {
    data: VoteInfoResponse;
    currentData: VoteInfoResponse;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "fulfilledTimeStamp">>) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "error" | "isError"> & {
    isError: true;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "error">>)> & {
    status: import("@reduxjs/toolkit/query").QueryStatus;
}>(arg: UnifiedVoteInfoRequest | typeof import("@reduxjs/toolkit/query").skipToken, options?: (import("@reduxjs/toolkit/query").SubscriptionOptions & {
    skip?: boolean;
    refetchOnMountOrArgChange?: boolean | number;
} & {
    skip?: boolean;
    selectFromResult?: ((state: import("@reduxjs/toolkit/query").TSHelpersId<(Omit<{
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        originalArgs?: undefined | undefined;
        data?: undefined | undefined;
        error?: undefined | undefined;
        requestId?: undefined | undefined;
        endpointName?: string | undefined;
        startedTimeStamp?: undefined | undefined;
        fulfilledTimeStamp?: undefined | undefined;
    } & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "isUninitialized"> & {
        isUninitialized: true;
    }) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "isLoading" | "isFetching"> & {
        isLoading: true;
        isFetching: boolean;
        data: undefined;
    }) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "error" | "fulfilledTimeStamp" | "isFetching" | "isSuccess"> & {
        isSuccess: true;
        isFetching: true;
        error: undefined;
    } & {
        data: VoteInfoResponse;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "fulfilledTimeStamp">>) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "error" | "fulfilledTimeStamp" | "currentData" | "isFetching" | "isSuccess"> & {
        isSuccess: true;
        isFetching: false;
        error: undefined;
    } & {
        data: VoteInfoResponse;
        currentData: VoteInfoResponse;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "fulfilledTimeStamp">>) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "error" | "isError"> & {
        isError: true;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "error">>)> & {
        status: import("@reduxjs/toolkit/query").QueryStatus;
    }) => R) | undefined;
}) | undefined) => R & {
    refetch: () => import("@reduxjs/toolkit/query").QueryActionCreatorResult<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>>;
}, useLazyFetchVoteInfoQuery: <R extends Record<string, any> = import("@reduxjs/toolkit/query").TSHelpersId<(Omit<{
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    originalArgs?: undefined | undefined;
    data?: undefined | undefined;
    error?: undefined | undefined;
    requestId?: undefined | undefined;
    endpointName?: string | undefined;
    startedTimeStamp?: undefined | undefined;
    fulfilledTimeStamp?: undefined | undefined;
} & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "isUninitialized"> & {
    isUninitialized: true;
}) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "isLoading" | "isFetching"> & {
    isLoading: true;
    isFetching: boolean;
    data: undefined;
}) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "error" | "fulfilledTimeStamp" | "isFetching" | "isSuccess"> & {
    isSuccess: true;
    isFetching: true;
    error: undefined;
} & {
    data: VoteInfoResponse;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "fulfilledTimeStamp">>) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "data" | "error" | "fulfilledTimeStamp" | "currentData" | "isFetching" | "isSuccess"> & {
    isSuccess: true;
    isFetching: false;
    error: undefined;
} & {
    data: VoteInfoResponse;
    currentData: VoteInfoResponse;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "fulfilledTimeStamp">>) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "error" | "isError"> & {
    isError: true;
} & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
    currentData?: VoteInfoResponse | undefined;
    isUninitialized: false;
    isLoading: false;
    isFetching: false;
    isSuccess: false;
    isError: false;
}, "error">>)> & {
    status: import("@reduxjs/toolkit/query").QueryStatus;
}>(options?: (import("@reduxjs/toolkit/query").SubscriptionOptions & Omit<{
    skip?: boolean;
    selectFromResult?: ((state: import("@reduxjs/toolkit/query").TSHelpersId<(Omit<{
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        originalArgs?: undefined | undefined;
        data?: undefined | undefined;
        error?: undefined | undefined;
        requestId?: undefined | undefined;
        endpointName?: string | undefined;
        startedTimeStamp?: undefined | undefined;
        fulfilledTimeStamp?: undefined | undefined;
    } & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "isUninitialized"> & {
        isUninitialized: true;
    }) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "isLoading" | "isFetching"> & {
        isLoading: true;
        isFetching: boolean;
        data: undefined;
    }) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "error" | "fulfilledTimeStamp" | "isFetching" | "isSuccess"> & {
        isSuccess: true;
        isFetching: true;
        error: undefined;
    } & {
        data: VoteInfoResponse;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "fulfilledTimeStamp">>) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "data" | "error" | "fulfilledTimeStamp" | "currentData" | "isFetching" | "isSuccess"> & {
        isSuccess: true;
        isFetching: false;
        error: undefined;
    } & {
        data: VoteInfoResponse;
        currentData: VoteInfoResponse;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "fulfilledTimeStamp">>) | (Omit<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "error" | "isError"> & {
        isError: true;
    } & Required<Pick<import("@reduxjs/toolkit/query").QuerySubState<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>> & {
        currentData?: VoteInfoResponse | undefined;
        isUninitialized: false;
        isLoading: false;
        isFetching: false;
        isSuccess: false;
        isError: false;
    }, "error">>)> & {
        status: import("@reduxjs/toolkit/query").QueryStatus;
    }) => R) | undefined;
}, "skip">) | undefined) => [(arg: UnifiedVoteInfoRequest, preferCacheValue?: boolean) => import("@reduxjs/toolkit/query").QueryActionCreatorResult<import("@reduxjs/toolkit/query").QueryDefinition<UnifiedVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", VoteInfoResponse, "apiV2", unknown>>, R & {
    reset: () => void;
}, {
    lastArg: UnifiedVoteInfoRequest;
}], useFetchBulkVoteInfoMutation: <R extends Record<string, any> = ({
    requestId?: undefined;
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    data?: undefined;
    error?: undefined;
    endpointName?: string;
    startedTimeStamp?: undefined;
    fulfilledTimeStamp?: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
    isUninitialized: true;
    isLoading: false;
    isSuccess: false;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
} & Omit<{
    requestId: string;
    data?: BulkVoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "data" | "fulfilledTimeStamp"> & Required<Pick<{
    requestId: string;
    data?: BulkVoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "data" | "fulfilledTimeStamp">> & {
    error: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
    isUninitialized: false;
    isLoading: false;
    isSuccess: true;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.pending;
} & {
    requestId: string;
    data?: BulkVoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
} & {
    data?: undefined;
} & {
    status: import("@reduxjs/toolkit/query").QueryStatus.pending;
    isUninitialized: false;
    isLoading: true;
    isSuccess: false;
    isError: false;
}) | ({
    status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
} & Omit<{
    requestId: string;
    data?: BulkVoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "error"> & Required<Pick<{
    requestId: string;
    data?: BulkVoteInfoResponse | undefined;
    error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
    endpointName: string;
    startedTimeStamp: number;
    fulfilledTimeStamp?: number;
}, "error">> & {
    status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
    isUninitialized: false;
    isLoading: false;
    isSuccess: false;
    isError: true;
})>(options?: {
    selectFromResult?: ((state: ({
        requestId?: undefined;
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        data?: undefined;
        error?: undefined;
        endpointName?: string;
        startedTimeStamp?: undefined;
        fulfilledTimeStamp?: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.uninitialized;
        isUninitialized: true;
        isLoading: false;
        isSuccess: false;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
    } & Omit<{
        requestId: string;
        data?: BulkVoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "data" | "fulfilledTimeStamp"> & Required<Pick<{
        requestId: string;
        data?: BulkVoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "data" | "fulfilledTimeStamp">> & {
        error: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.fulfilled;
        isUninitialized: false;
        isLoading: false;
        isSuccess: true;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.pending;
    } & {
        requestId: string;
        data?: BulkVoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    } & {
        data?: undefined;
    } & {
        status: import("@reduxjs/toolkit/query").QueryStatus.pending;
        isUninitialized: false;
        isLoading: true;
        isSuccess: false;
        isError: false;
    }) | ({
        status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
    } & Omit<{
        requestId: string;
        data?: BulkVoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "error"> & Required<Pick<{
        requestId: string;
        data?: BulkVoteInfoResponse | undefined;
        error?: import("@reduxjs/toolkit/query").FetchBaseQueryError | import("@reduxjs/toolkit").SerializedError | undefined;
        endpointName: string;
        startedTimeStamp: number;
        fulfilledTimeStamp?: number;
    }, "error">> & {
        status: import("@reduxjs/toolkit/query").QueryStatus.rejected;
        isUninitialized: false;
        isLoading: false;
        isSuccess: false;
        isError: true;
    })) => R) | undefined;
    fixedCacheKey?: string;
} | undefined) => readonly [(arg: BulkVoteInfoRequest) => import("@reduxjs/toolkit/query").MutationActionCreatorResult<import("@reduxjs/toolkit/query").MutationDefinition<BulkVoteInfoRequest, import("./index.js").ApiBaseQuery, "Friends" | "FriendshipRequests" | "Groups" | "Index" | "RushDailyHighScores" | "RushOverview" | "RushRecentResults" | "ScenarioCase" | "ScenarioCaseExecution" | "ScenarioCaseSummary" | "anon_rating" | "current-avatar" | "favorite-collections" | "get-token" | "lint-issues" | "notification-settings" | "privacy-settings" | "problem" | "problem-collections" | "profile" | "profile-settings" | "srs_active_session" | "srs_sessions" | "status-counts" | "training_counter" | "user-preferences", BulkVoteInfoResponse, "apiV2", unknown>>, R & {
    originalArgs?: BulkVoteInfoRequest | undefined;
    reset: () => void;
}];
//# sourceMappingURL=votes.d.ts.map