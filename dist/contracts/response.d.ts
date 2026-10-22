import { LevelItem, RushMinimal } from './common.js';
import { UserMinimal, ProblemMinimal } from './model.js';
import { AvatarConfiguration, AvatarEntry, ProblemCollection, Comment, FriendshipRequest, Leaderboard, Notification, Problem, DailyProblemContent, DailyProblemStatusEntry, DailyProblemV2, RushProblem, TimeTrialProgress, UserProfile, SingleProblemCollectionWithPrivacy, SgfDiff, ProblemFlag, ProblemStar, DailyProblem, ProblemAttempt, Achievement, ProblemFilterTable, FavoritedProblem, HeatmapData, DashboardEditedProblem, DashboardFlaggedProblem, ProblemClearedFlag } from './model.js';
import type { NextProblemRequestArgument } from './request.js';
import { VoteTypeEnum } from './enum.js';
import { DailyLeaderboardEntry, Rank, TimeTrialLeaderboardEntry } from './model.js';
export type EntriesResponse<T> = {
    entries: T[];
    totalRecords: number;
};
export type DailyLeaderboardResponse = {
    entries: DailyLeaderboardEntry[];
    totalRecords: number;
};
export type TimeTrialLeaderboardResponse = {
    entries: TimeTrialLeaderboardEntry[];
    totalRecords: number;
    minLevel: number;
    maxLevel: number;
    allLevelsValue: number;
};
export type UsersResponse = {
    entries: UserMinimal[];
    totalRecords: number;
};
export type CollectionsResponse = {
    entries: ProblemCollection[];
    totalRecords: number;
};
export type PreviewCollectionsResponse = {
    entries: SingleProblemCollectionWithPrivacy[];
};
export type VotesInfoResponse = {
    votesInfo: {
        likesCount: number;
        dislikesCount: number;
        userVote?: VoteTypeEnum;
    };
};
export type FilteredProblemsResponse = {
    entries: ProblemFilterTable[];
    totalRecords: number;
};
export type ProblemsResponse = {
    entries: Problem[];
    totalRecords: number;
};
export type ProblemSolveResponse = {
    elo: number;
    elo_change: boolean;
    solved: boolean;
    attemptId?: number | null;
    elo_precise?: number | null;
    level_name?: string | null;
    rating_fac?: number | null;
    seen_before?: boolean | null;
};
export type LeaderboardResponse = {
    entries: Leaderboard[];
    totalRecords: number;
};
export type UserProfileResponse = {
    user: UserProfile;
};
export type CreatedProblemsResponse = {
    createdProblems: Problem[];
};
export type FavoritedProblemsResponse = {
    favoritedProblems: FavoritedProblem[];
};
export type DashboardEditedProblemsResponse = EntriesResponse<DashboardEditedProblem>;
export type DashboardFlaggedProblemsResponse = EntriesResponse<DashboardFlaggedProblem>;
export type LevelsResponse = LevelItem[];
export type TokenResponse = {
    token: string;
    apiEnabled: boolean;
};
export type NotificationsResponse = Notification[];
export type TimeTrialProgressResponse = TimeTrialProgress[];
export type TimeTrialSummaryResponse = {
    featured: TimeTrialProgress[];
    progress: TimeTrialProgress[];
};
export type RushReponse = {
    rush: RushMinimal;
    timeLeft: number;
    notFinishedProblems: RushProblem[];
};
export type LiveRushEntry = {
    rushId: number;
    user: UserMinimal | null;
    playerKey: string | null;
    playerRank: Rank | null;
    currentProblem: ProblemMinimal;
    timeLeft: number;
    type: number;
    score: number;
    lives: number;
    isCompleted: boolean;
    lastProblemSolved: boolean | null;
    lastProblemEndedAt: string | null;
    lastProblemSgf: string | null;
    lastProblemPath: string | null;
    currentProblemSgf: string | null;
    lastProblem: ProblemMinimal | null;
};
export type LiveRushesResponse = {
    entries: LiveRushEntry[];
};
export type TimeTrialResponse = {
    id: number;
    active: boolean;
    solved: boolean;
};
export type CollectionTestMinimalResponse = {
    id: number;
};
export type AvatarConfigurationResponse = AvatarConfiguration;
export type AvatarEntryResponse = AvatarEntry;
export type AvatarEntryListResponse = {
    total_entries: number;
    entries: AvatarEntry[];
};
export type ProtectedInfoResponse = {
    forumUserId: number;
    userId: number;
    isFriend: boolean;
    friendshipRequestAllowed: boolean;
    friendshipRequest?: FriendshipRequest | null;
};
export type CommentsResponse = {
    entries: Comment[];
    totalRecords: number;
};
export type ProblemTextSearchResponse = {
    foundById: Problem | null;
    foundByText: EntriesResponse<Problem>;
    foundByComments: EntriesResponse<Problem>;
};
export type FlaggedProblemsResponse = {
    totals: {
        wellConstructed: number;
        needsFixing: number;
        invalid: number;
        duplicate: number;
    };
    wellConstructed: Problem[];
    needsFixing: Problem[];
    invalid: Problem[];
    duplicate: Problem[];
};
export type ArticleContentResponse = {
    article: {
        slug: string;
        title: string;
        content: string;
        createdAt: string | null;
        views: number;
        author: {
            name: string;
        };
    };
    articles: {
        slug: string;
        title: string;
    }[];
};
export type StatisticsResponse = {
    totalAttempts: number;
    totalSolves: number;
    totalStarVotes: number;
    totalProblems: number;
    totalUsers: number;
    totalComments: number;
    averageProblemStars: number;
};
export type StatisticsTopUser = {
    name: string;
    problems: number;
    attempts: number;
    solves: number;
    joined: string;
};
export type StatisticsTopUsersResponse = {
    entries: StatisticsTopUser[];
    totalRecords: number;
};
export type ProblemOfTheDayResponse = {
    currentStreak?: number;
    entries: DailyProblemV2[];
    resetsAt: string;
    streakRecovery?: {
        needsRepair: boolean;
        requiredSolves: number;
    } | null;
};
export type DailyProblemContentResponse = {
    entries: DailyProblemContent[];
    resetsAt: string;
};
export type DailyProblemStatusResponse = {
    currentStreak: number;
    entries: DailyProblemStatusEntry[];
    streakRecovery?: {
        needsRepair: boolean;
        requiredSolves: number;
    } | null;
};
export interface BestScore {
    type: number;
    best: number;
}
export interface RushOverview {
    bestScores: BestScore[];
    activeUntimedRush: {
        id: number;
        score: number;
    } | null;
}
export type SuggestedProblemEditsResponse = {
    entries: Comment[];
    totalRecords: number;
};
export type SgfDiffResponse = SgfDiff[];
export type ProblemFlagsResponse = {
    entries: ProblemFlag[];
};
export type ProblemClearedFlagsResponse = {
    entries: ProblemClearedFlag[];
};
export type ProblemStarsResponse = {
    entries: ProblemStar[];
};
export type ProblemAttemptsResponse = {
    items: ProblemAttempt[];
    totalRecords: number;
};
export type ProblemPotdAttemptsResponse = {
    items: {
        id: number;
        solved: boolean;
        createdAt: string;
        time: number | null;
        user: UserMinimal | null;
        displayRank: Rank | null;
        speedSolved: boolean;
        speedPlay: boolean;
    }[];
    totalRecords: number;
    entry: DailyProblemV2;
    date: string;
    isToday: boolean;
    dates: string[];
};
export type DailyProblemsResponse = {
    beginner: DailyProblem;
    easy: DailyProblem;
    medium: DailyProblem;
    hard: DailyProblem;
};
export type DailyProblemsResponseV2 = {
    beginner: DailyProblemV2;
    easy: DailyProblemV2;
    medium: DailyProblemV2;
    hard: DailyProblemV2;
};
export type NextProblemResponse = {
    nextProblem: Problem | null;
    argument: NextProblemRequestArgument;
};
export type ErrorResponse = {
    data: {
        errors: string[];
        message: string;
        detail: string;
    };
};
export type UserAchievementResponse = {
    user: UserMinimal;
    userAchievementCounter: number;
    achievements: Achievement[];
};
export type VoteInfoResponse = {
    userVote: VoteTypeEnum | null;
    upvoteCount: number;
    downvoteCount: number;
    totalCount: number;
    score: number;
};
export type BulkVoteInfoResponse = {
    [entityId: string]: VoteInfoResponse;
};
export interface TrainingProblemDto {
    id: number;
    userId: number;
    problemId: number;
    currentBucket: string;
    lastAttemptAt: string | null;
    skippedForever: boolean;
    addedAt: string;
    timeUntilNextReady: string | null;
    nextBucketInfoMessage: string | null;
    whenMessage: string | null;
}
export interface TrainingProblem {
    id: number;
    userId: number;
    problemId: number;
    currentBucket: string;
    lastAttemptAt: Date | null;
    skippedForever: boolean;
    addedAt: Date;
    timeUntilNextReady: string | null;
    nextRepeatMessage: string | null;
}
export interface SrsTrainingProblemEntry {
    problem: {
        id: number;
        imageUrl: string;
        rank: Rank | null;
        elo: number | null;
    };
    genre: string;
    bucket: string;
    lastAttemptAt: string | null;
    results: {
        solved: number;
        attempted: number;
    };
}
export interface SrsTrainingProblemsResponse {
    entries: SrsTrainingProblemEntry[];
    totalRecords: number;
    readyProblemIds: number[];
    readyProblems: TrainingSessionProblem[];
}
export interface SrsSessionHistoryEntry {
    id: number;
    endedAt: string;
    solvedCount: number;
    attemptedCount: number;
    readySetSize: number;
    bucketAttemptCounts: Record<string, number>;
    bucketSolvedCounts: Record<string, number> | null;
    collectionId: number | null;
    collectionName: string | null;
}
export interface SrsActiveSession {
    id: number;
    startedAt: string;
    lastActivityAt: string;
    readySetSize: number;
    solvedCount: number;
    attemptedCount: number;
    bucketAttemptCounts: Record<string, number>;
    bucketSolvedCounts: Record<string, number> | null;
    remainingProblemIds: number[];
    collectionId: number | null;
    collectionName: string | null;
}
export interface TrainingSessionProblem {
    problemId: number;
    bucket: string;
}
export interface ReadyTrainingProblemsResponse {
    problemIds: number[];
    problems: TrainingSessionProblem[];
}
export type HeatmapResponse = {
    data: HeatmapData[];
    dateFrom: string;
    dateTo: string;
    totalSolves: number;
};
//# sourceMappingURL=response.d.ts.map