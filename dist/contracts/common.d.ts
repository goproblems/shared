import type { Theme } from 'ghostban';
import { NodeChangeType, ResponseSpeed, SgfDiffType, SortDirection, TournamentVisibility } from './enum.js';
import { CollectionGroup } from './model.js';
export type Criteria = {
    limit?: number;
    offset?: number;
    sortDirection?: 'asc' | 'desc';
    sortBy?: string;
};
export type ProblemCriteria = {
    limit?: number;
    offset?: number;
    sortDirection?: SortDirection;
    sortBy?: string;
};
export type UserCriteria = Criteria & {
    user: number;
};
export type ProblemsByCollectionCriteria = ProblemCriteria & {
    collection: number;
};
export type ProblemsByPatternCriteria = ProblemCriteria & {
    blackPositions: string;
    whitePositions: string;
    emptyPositions: string;
    fullSide: boolean;
};
export type CollectionsCriteria = {
    searchText: string;
    offset: number;
    limit: number;
    collectionType?: CollectionGroup;
    core: boolean;
    sortBy: string;
    sortDirection: SortDirection;
};
export type TournamentCriteria = ProblemCriteria & {
    status: string[] | number[];
    visibility?: TournamentVisibility;
};
export type { AuthState, AuthUser, ThemeMode, UserPreferences, } from './auth.js';
export type StatusCounts = {
    achievementsCount: number;
    unreadNotificationCount: number;
};
export type DashboardProblemStats = {
    lastHour: number;
    last24Hours: number;
    today: number;
    last7Days: number;
};
export type LevelItem = {
    level: number;
    solvedCount: number;
    speedSolvedCount: number;
    speedPlayCount: number;
    totalCount: number;
    triedCount?: number;
    failedCount?: number;
};
export type MetricList = {
    name: String;
    metrics: MetricEntry[];
};
export type MetricEntry = {
    label: string;
    amount: number;
};
export type MetricEntryAnon = number[];
export type UserEntry = {
    id: number;
    name: string;
    visibleElo: number;
    displayRating: number;
    lastHere: string;
};
export type CollectionEntry = {
    id: number;
    name: string;
    description: string;
    numberOfProblems: number;
    group: string;
};
export type RushMinimal = {
    id: number;
    duration: number;
    endedAt: string;
    startedAt: string;
    lives: number;
    score: number;
    type: number;
};
export type BoardSettings = {
    theme: Theme;
    moveSound?: boolean;
    moveSoundVolume?: number;
    coordinate?: boolean;
    boardSize?: number;
    responseSpeed?: ResponseSpeed;
    extent?: number;
    variationsIndicator?: boolean;
    number?: boolean;
};
export type KatagoBackend = 'auto' | 'cpu' | 'wasm' | 'webgl' | 'webgpu';
export type KatagoSettings = {
    backend: KatagoBackend;
    model: string;
    debug: boolean;
};
export type CommentsCriteria = {
    limit: number;
    offset: number;
    sortDirection?: string;
    sortBy?: string;
};
export type CommentsCriteriaWrapper = {
    criteria: CommentsCriteria;
};
export type SuggestedProblemEditsCriteria = Criteria & {
    status?: string;
    userId?: number;
    problemId?: number;
    problemAuthorId?: number;
    resolvedById?: number;
};
export type CollectionSuggestionsCriteria = Criteria & {
    status?: string;
    userId?: number;
    collectionId?: number;
    problemId?: number;
    collectionOwnerId?: number;
    problemAuthorId?: number;
};
export type SuggestionStatusCounts = {
    open: number;
    approved: number;
    rejected: number;
};
export type ChangedCompressedPath = {
    changeType: SgfDiffType;
    basePath: string;
    fullPath: string;
    path: string;
};
export type ChangedNode = {
    changeType: NodeChangeType;
    id: string;
};
export type ApplicationTranslationResources = Record<string, {
    translation?: Record<string, unknown>;
    [namespace: string]: unknown;
}>;
//# sourceMappingURL=common.d.ts.map