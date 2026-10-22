import { CollectionsCriteria, CollectionSuggestionsCriteria, ProblemsByCollectionCriteria, SuggestedProblemEditsCriteria, UserCriteria, Criteria, ProblemsByPatternCriteria } from './common.js';
import { RushRecentResultsScope, ProblemDraftStatus, RushTypes, ScenarioType, SortDirection, TournamentRuleset, TournamentVisibility, VoteTypeEnum, VotableEntityTypeEnum, NextProblemEntryEnum } from './enum.js';
import type { FilterProblemsDto } from './form.js';
import { AnonymousUser, CollectionGroup, CollectionPrivacy, CollectionCollaboration, RulesetConfiguration } from './model.js';
export type ScenarioCriteria = {
    limit?: number;
    offset?: number;
    sortDirection?: SortDirection;
    sortBy?: 'id' | 'elo' | 'created_at' | 'type';
    type?: ScenarioType;
    authorId?: number;
    includeInactive?: boolean;
};
export type UserProblemsRequest = {
    criteria: UserCriteria;
};
export type TournamentsRequest = {
    status: string[] | number[];
    visibility?: TournamentVisibility;
    userId?: number | string;
} & Criteria;
export type PostTournamentChatMessage = {
    message: string;
};
export type RushRequest = {
    type: string;
};
export type DailyLeaderboardRequest = {
    startDate?: string;
    sortBy?: string;
    sortDirection?: string;
    limit?: number;
    offset?: number;
};
export type FriendListCriteria = {
    sortBy?: string;
    sortDirection?: string;
    limit?: number;
    offset?: number;
    includeStatistics?: boolean;
};
export type PostRushResultRequest = {
    rushId: number | string;
    rushProblemId: number;
    duration: number;
    path: string;
    solved: boolean;
    moveTimes?: number[];
};
export type PostTimeTrialResultRequest = {
    id: number | string;
    path: string | null;
    solveTime: number;
    solved: boolean;
    moveTimes?: number[];
    solveTimeMs?: number;
    durationMs?: number;
};
export type PostCollectionTestRequest = {
    collectionId: number;
};
export type PostCollectionTestResultRequest = {
    id: number | string;
    solved: boolean;
    path: string | null;
    durationMs?: number;
    moveTimes?: number[];
};
export type CollectionTestLeaderboardRequest = {
    tab: 'personal' | 'friends' | 'global';
    filter: 'all_time' | 'year' | 'month' | 'week' | 'day';
};
export type CollectionsRequest = {
    criteria: CollectionsCriteria;
};
export type CreateCollectionRequest = {
    name: string;
    description: string;
    group: CollectionGroup;
    privacy: CollectionPrivacy;
    collaboration: CollectionCollaboration;
};
export type EditCollectionRequest = {
    id: number;
    name: string;
    description: string;
    group: CollectionGroup;
    privacy: CollectionPrivacy;
    collaboration: CollectionCollaboration;
};
export type ProblemsByCollectionRequest = {
    criteria: ProblemsByCollectionCriteria;
};
export type ProblemsByPatternRequest = {
    criteria: ProblemsByPatternCriteria;
};
export type LeaderboardRequest = {
    page: number;
    sortDirection: string;
    sortBy: string;
};
export type TimeTrialLeaderboardRequest = {
    tab?: string | null;
    sort?: string | null;
    date_range?: string | null;
    level?: number | null;
};
export type SuggestedProblemEditsRequest = {
    criteria: SuggestedProblemEditsCriteria;
};
export type CreateSuggestedProblemEditsRequest = {
    problemId: number;
    comment: string;
    originalSgf: string;
    suggestedSgf: string;
};
export type EditSuggestedProblemEditsRequest = {
    id: number;
    comment?: string;
    originalSgf?: string;
    suggestedSgf?: string;
};
export type ResolveSuggestedProblemEditsRequest = {
    id: number;
    resolutionComment: string;
    status: string;
};
export type CollectionSuggestionsRequest = {
    criteria: CollectionSuggestionsCriteria;
};
export type CreateCollectionSuggestionEntry = {
    collectionId: number;
    type: string;
};
export type CreateCollectionSuggestionsRequest = {
    problemId: number;
    suggestions: CreateCollectionSuggestionEntry[];
    comment?: string;
};
export type ResolveCollectionSuggestionRequest = {
    id: number;
    resolutionComment: string;
    status: string;
};
export type JoinTournamentRequestBody = {
    id: number | string;
    anonymousUser?: AnonymousUser;
};
export type ScheduleTournamentRequestBody = {
    startedAt: string;
    ruleset: TournamentRuleset;
    visibility: TournamentVisibility;
    maxPlayers: number;
    solvingRoyaleConfiguration: RulesetConfiguration;
};
export type LeaveTournamentRequestBody = JoinTournamentRequestBody;
export type NextProblemRequestArgument = {
    name?: NextProblemEntryEnum | null;
    levelFrom?: number | null;
    levelTo?: number | null;
    rating?: number | null;
    collectionId?: number | null;
    offset?: number | null;
    madeByUser?: string | null;
    lastProblemId?: number | null;
    filterCursorElo?: number | null;
    filtersDto?: FilterProblemsDto | null;
    excludedIds?: number[];
    orders?: [string, 'asc' | 'desc'][];
};
export type { UserPreferencesRequest } from './auth.js';
export type ProblemPersistRequest = {
    status: string;
    genre: String;
    suggestedRating?: number;
    collections: Number[];
    source: String;
    introduction: String;
    sgf: String;
    id?: Number;
    comment?: String;
};
export type ProblemAttemptsRequest = {
    criteria: {
        problemId?: number;
        userId?: number;
        limit: number;
        offset?: number;
        sortDirection: string;
        sortBy: string;
        today?: boolean;
        firstAttempt?: boolean;
    };
};
export type RushScoreRequest = {
    sort: string;
    limit: number;
    offset?: number;
    filter?: string;
    rushType?: RushTypes;
};
export type RushRecentResultsRequest = {
    scope: RushRecentResultsScope;
    limit?: number;
};
export type CreateGroupRequest = {
    name: string;
    description: string;
    isPrivate: boolean;
    joinPassword?: string | null;
};
export type EditGroupRequest = {
    description: string;
    isPrivate: boolean;
    joinPassword?: string | null;
};
export type JoinGroupRequest = {
    password?: string | null;
};
export type ResolveCuratableProblemDraftRequest = {
    status: ProblemDraftStatus;
    comment?: string | null;
    sgf?: string | null;
};
export type ResolveProblemDraftRequest = {
    status: ProblemDraftStatus;
    genre?: string;
    canon?: boolean;
    standard?: boolean;
    rating?: number;
    sgf?: string;
    comment?: string;
};
export type UnifiedVoteRequest = {
    entityType: VotableEntityTypeEnum;
    entityId: number;
    voteType: VoteTypeEnum;
};
export type UnifiedToggleVoteRequest = {
    entityType: VotableEntityTypeEnum;
    entityId: number;
    voteType: VoteTypeEnum;
};
export type UnifiedRemoveVoteRequest = {
    entityType: VotableEntityTypeEnum;
    entityId: number;
};
export type UnifiedVoteInfoRequest = {
    entityType: VotableEntityTypeEnum;
    entityId: number;
};
export type BulkVoteInfoRequest = {
    entityType: VotableEntityTypeEnum;
    entityIds: number[];
};
export type SolveProblemRequest = {
    problemId: number;
    hardStop: boolean;
    path: string;
    solveTime: number;
    solveTimeMs?: number;
    solved: boolean;
    moveTimes?: number[];
    name?: NextProblemEntryEnum | null | undefined;
    isDailyProblem?: boolean;
};
export type ProblemProgress = {
    id: number;
    userId: number;
    problemId: number;
    currentBucket: string;
    lastAttemptAt: string;
    skippedForever: boolean;
    addedAt: string;
    timeUntilNextReady: string | null;
    nextBucketInfoMessage: string;
    whenMessage: string;
};
//# sourceMappingURL=request.d.ts.map