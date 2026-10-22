import type { Analysis } from 'ghostban';
import { RankEnum } from './levels.js';
import type { Rank, Level } from './levels.js';
export { RankEnum };
export type { Rank, Level };
import { CommentGenreEnum, ProblemCollectionGroupEnum, ProblemContextEnum, ProblemDraftStatus, ProblemFlagEnum, ProblemGenreEnum, RushTypes, ScenarioAttemptResult, ScenarioAttemptStatus as ScenarioAttemptStatusEnum, ScenarioToMove, ScenarioType, SgfDiffType, SiteBannerVariantEnum, SuggestedProblemEditStatusEnum, TournamentPlayerStatus, TournamentRuleset, TournamentStatus, TournamentVisibility, TournamentChatContentType, ScenarioDifficulty } from './enum.js';
import { COLLECTION_TYPES } from './collections.js';
import type { ScenarioMetadata } from './scenarioMetadata.js';
export type PlayerColor = 'black' | 'white' | null;
export type lastOnlineAt = {
    timezone: {
        offset: number;
        timestamp: number;
    };
};
export type UserMinimal = {
    id: number;
    name: string;
    avatar: AvatarEntry;
    lastOnlineAt: string | null;
    rank?: Rank;
    displayRank?: Rank;
};
export type Problem = {
    id: number;
    author: User;
    sgf: string;
    intro: string;
    genre: ProblemGenreEnum;
    difficulty: string;
    rating: number;
    flagged: number;
    wins: number;
    tries: number;
    solves: number;
    fails: number;
    speedSolved?: number;
    speedPlay?: number;
    canon: boolean;
    standard: boolean;
    createdAt: string;
    playerColor: PlayerColor;
    imageUrl: string;
    collections: ProblemCollectionPreview[];
    specificGenre?: ProblemGenreEnum;
    userStats?: ProblemUserStats;
    problemStarStats?: ProblemStarStats;
    problemFlagStats?: ProblemFlagStats;
    additionalInfo?: AdditionalProblemInfo;
};
export type ProblemNeedRating = Pick<Problem, 'id' | 'author' | 'genre' | 'difficulty' | 'rating' | 'flagged' | 'solves' | 'fails' | 'speedSolved' | 'speedPlay' | 'createdAt' | 'imageUrl'> & {
    problemTries: number;
    problemWin: number;
};
export type ProblemRatingHistory = {
    timestamp: number;
    rating: number;
    userRating: number;
    delta: number;
    user: UserMinimal | null;
};
export type Scenario = {
    id: number;
    type: ScenarioType;
    sgf: string;
    elo?: number;
    intro?: string;
    author: UserMinimal;
    alive: boolean;
    createdAt: string;
    updatedAt: string;
    imageUrl?: string;
    toMove: ScenarioToMove;
    metadata?: ScenarioMetadata;
};
export type MoveScore = {
    move: string;
    moveNumber: number;
    score: number;
};
export type MoveOwnership = {
    move: string;
    moveNumber: number;
    ownership: number;
    isPlayerMove: boolean;
};
export type ScenarioAttemptMinimal = {
    id: number;
    scenario: Scenario;
    difficulty: ScenarioDifficulty;
    startedAt: string;
    result: ScenarioAttemptResult;
    didResign: boolean;
    score: number;
    moveCount: number;
    user: UserMinimal | null;
};
export type ScenarioAttempt = {
    id: number;
    scenario: Scenario;
    difficulty: ScenarioDifficulty;
    path: string;
    startedAt: string;
    result: ScenarioAttemptResult;
    didResign: boolean;
    totalLoss: number;
    displayLoss: number;
    scoreDelta: number;
    score: number;
    optimalLoss: number;
    finishedAt: string | null;
    duration: number | null;
    user: UserMinimal | null;
    totalLossForPlayerMoves?: number | null;
    optimalLossForPlayerMoves?: number | null;
    deviationLossForPlayerMoves?: number | null;
    moveScores?: MoveScore[];
    moveOwnerships?: MoveOwnership[];
    analysisSummary?: AnalysisSummary | null;
    endnessReasons?: ScenarioEndnessReason[] | null;
};
export type ScenarioDifficultyResult = {
    result: ScenarioAttemptResult | null;
    userAttempts: number;
    userSuccesses: number;
    globalAttempts: number;
    globalSuccesses: number;
};
export type ScenarioDifficultyResults = Record<ScenarioDifficulty, ScenarioDifficultyResult>;
export type ScenarioAttemptSummary = {
    scenarioId: number;
    triedUsers: number;
    solvedUsers: number;
    userSolvedAny: boolean;
    userSolvedAll: boolean;
    userSolvedDifficulties: string[];
    userTriedDifficulties: string[];
};
export type ScenarioAttemptsSummaryResponse = Record<number, ScenarioAttemptSummary>;
export type ScenarioProgress = Record<ScenarioDifficulty, {
    solved: number;
    total: number;
}>;
export type ScenarioHomePreview = Pick<Scenario, 'id' | 'type'> & {
    imageUrl: string;
    userSolvedDifficulties: ScenarioDifficulty[];
    userTriedDifficulties: ScenarioDifficulty[];
};
export type ScenarioHomeSummary = {
    progress: ScenarioProgress;
    previews: ScenarioHomePreview[];
};
export type AnalysisSummary = {
    humanMovesCount: number;
    humanMoveOwnershipValues: number[];
    computerMovesCount: number;
    computerMoveOwnershipValues: number[];
};
export type ScenarioAttemptStatusResponse = {
    status: ScenarioAttemptStatusEnum;
    path: string;
    totalLoss?: number | null;
    optimalLoss?: number | null;
    deviationLoss?: number | null;
    displayLoss?: number | null;
    score?: number | null;
    moveScores?: MoveScore[];
    moveOwnerships?: MoveOwnership[];
    analysisSummary?: AnalysisSummary | null;
    endnessReasons?: ScenarioEndnessReason[] | null;
};
export type ScenarioAttemptStatusUpdatedPayload = {
    scenarioId: number;
    attemptId: number;
    data: ScenarioAttemptStatusResponse;
};
export type ScenarioAttemptStatusUpdatedLiveNotification = {
    type: 'scenario_attempt_status_updated';
    payload: ScenarioAttemptStatusUpdatedPayload;
};
export type ScenarioAttemptAnalysisErrorPayload = {
    scenarioId: number;
    attemptId: number;
    errorMessage: string;
};
export type ScenarioAttemptAnalysisErrorLiveNotification = {
    type: 'scenario_attempt_analysis_error';
    payload: ScenarioAttemptAnalysisErrorPayload;
};
export type ScenarioNode = {
    id?: number;
    path: string;
    difficulty: string;
    weight: number;
    responseValid: boolean;
    totalLoss: number;
    scoreDelta: number;
    score: number;
    optimalLoss: number;
    urgency: number;
    endness: number;
    result: number;
    playCount: number;
    comment?: string;
    totalLossForPlayerMoves?: number;
    optimalLossForPlayerMoves?: number;
    deviationLossForPlayerMoves?: number;
    isAnalyzed: boolean;
    tags: ScenarioNodeTag[];
};
export type ScenarioNodeTag = {
    id?: number;
    type: string;
    code: string;
    isSystem: boolean;
    createdAt: string;
    updatedAt: string;
    effect?: 'end' | 'block' | 'info' | null;
    primary?: boolean | null;
};
export type ScenarioNodeTagSummary = {
    tagId: number;
    type: string;
    code: string;
    isSystem: boolean;
    scenarioNodeCount: number;
};
export type FetchScenarioNodeTagSummaryRequest = {
    scenarioId?: number;
};
export type ScenarioNodeTagEvent = {
    id: number;
    scenarioNodeId: number;
    tagId: number;
    tagType: string;
    tagCode: string;
    tagIsSystem: boolean;
    action: 'added' | 'removed';
    actorUser: UserMinimal | null;
    contextType: string | null;
    contextId: number | null;
    createdAt: string;
};
export type FetchScenarioNodeTagEventsRequest = {
    scenarioNodeId: number;
    scenarioId?: never;
    difficulty?: never;
    path?: never;
} | {
    scenarioId: number;
    difficulty: string;
    path?: string | null;
    scenarioNodeId?: never;
};
export type UpdateScenarioNodeRequest = {
    responseValid?: boolean;
    comment?: string | null;
};
export type PostMoveRequest = {
    scenarioId: number;
    attemptId: number;
    move: string;
    forceAiRequest?: boolean;
    targetClientIds?: string[] | null;
};
export type FetchScenarioSolutionsRequest = {
    scenarioId: number;
    difficulty?: string;
};
export type FetchScenarioSolutionTreeRequest = {
    scenarioId: number;
    difficulty: string;
    path?: string | null;
};
export type FetchAnalysisRequest = {
    scenarioId: number;
    path?: string;
    difficulty?: string;
};
export type FetchScenarioAttemptsCriteria = {
    scenarioId?: number;
    userId?: number;
    result?: ScenarioAttemptResult;
    scenarioType?: ScenarioType;
    includeInactive?: boolean;
    limit?: number;
    offset?: number;
};
export type UpdateScenarioAttemptRequest = {
    scenarioId: number;
    attemptId: number;
    path?: string;
    totalLoss?: number;
    result?: ScenarioAttemptResult;
};
export type ScenarioAnalysisRequest = {
    id: number;
    scenario: Scenario;
    path: string;
    requestedAt: string;
    difficulty: string;
};
export type ExtraInfo = {
    analysis?: Analysis;
    debug?: string;
};
export type ScenarioEndnessReason = {
    code: string;
    effect: 'end' | 'block' | 'info';
    value: number | null;
    threshold: number | null;
    endness: number | null;
    primary: boolean | null;
};
export type ScenarioAnalysisResult = {
    id: number;
    analysisRequest: ScenarioAnalysisRequest | null;
    scenario: Scenario;
    path: string;
    loss: number;
    score: number;
    urgency: number;
    endness: number;
    difficulty: string;
    weight: number;
    isAnalyzed: boolean;
    katagoPlayouts: number;
    katagoWeightsFile: string;
    extraInfo: string | null;
    createdAt: string;
    analysisUrl?: string | null;
    analysis?: string | null;
    moveOwnerships?: MoveOwnership[];
    analysisSummary?: AnalysisSummary | null;
    endnessReasons?: ScenarioEndnessReason[] | null;
};
export type ScenarioSolution = {
    scenario: Scenario;
    nodes: ScenarioNode[];
    analysisResults: ScenarioAnalysisResult[];
};
export type ScenarioSolutionNodeStats = {
    nodeId: number | null;
    selectedAnalysisResultId: number | null;
    score: number | null;
    scoreDelta: number | null;
    totalLoss: number | null;
    urgency: number | null;
    endness: number | null;
    weight: number | null;
    responseValid: boolean;
    isAnalyzed: boolean;
    tags: ScenarioNodeTag[];
};
export type ScenarioSolutionChildNode = {
    path: string;
    move: string;
    stats: ScenarioSolutionNodeStats | null;
    childrenCount: number;
    hasChildren: boolean;
};
export type ScenarioSolutionContextNode = {
    path: string;
    move: string | null;
    stats: ScenarioSolutionNodeStats | null;
    childrenCount: number;
    hasChildren: boolean;
    children: ScenarioSolutionChildNode[];
};
export type ScenarioSolutionPathContext = {
    scenarioId: number;
    difficulty: string;
    path: string;
    nodes: ScenarioSolutionContextNode[];
};
export type ScenarioSolutionChildren = {
    scenarioId: number;
    difficulty: string;
    path: string;
    children: ScenarioSolutionChildNode[];
};
export type SingleProblem = {
    id: number;
    elo: number;
    rank: Rank;
    hasNegativeFlags: boolean;
    problemLevel: number;
    flagStats: ProblemFlagStats;
    isCanon: boolean;
    isStandard: boolean;
    genre: ProblemGenreEnum;
    specificGenre: ProblemGenreEnum;
    description: string;
    rating: ProblemStarRating | null;
    sgf: string;
    author: UserMinimal;
    avgSolveTimeSeconds: number;
    attempts: Attempts;
    currentUserAttempts?: Attempts;
    isFavorited: boolean;
    canBeEdited: boolean;
    createdAt: string;
    source?: string;
    playerColor?: PlayerColor;
    collections: ProblemCollectionPreview[];
    commentsCount: number;
    suggestionsOpenCount: number;
    alive: boolean;
    sandbox: boolean;
    allowSuggestedDifficulty: boolean;
    suggestedElo: number;
} & ProblemSolvesAndTries & ProblemMinimal;
export type ProblemFilterTable = {
    id: number;
    imageUrl: string;
    rank: Rank;
    createdAt: string;
    author: UserMinimal;
    rating: {
        stars: number;
        votes: number;
        currentUserVote: number;
    };
    genre: string;
    flagStats: ProblemFlagStats;
    userData: UserData;
};
export type UserData = {
    attempts?: {
        solved: number;
        failed: number;
        tries: number;
    };
};
export type ProblemEntry = {
    id: number;
    author: UserMinimal;
    genre: ProblemGenreEnum;
    difficulty: string;
    rating: number;
    flagged: number;
    solves: number;
    fails: number;
    speedSolved?: number;
    speedPlay?: number;
    problemWin: number;
    problemTries: number;
    createdAt: string;
    playerColor: PlayerColor;
    imageUrl: string;
};
export type ProblemPathHistory = {
    count: number;
    result: boolean;
    path: string;
};
export type LevelAttemptEntry = {
    name: string;
    value: string;
};
export type ProblemPathHistoryFull = {
    pathStats: ProblemPathHistory[];
    levelAttemptsRight: LevelAttemptEntry[];
    levelAttemptsWrong: LevelAttemptEntry[];
};
export type ProblemFlagStats = {
    positiveFlagSum: number;
    negativeFlagSum: number;
    flagSum: number;
};
export type ProblemUserStats = {
    winCount: number;
    attemptCount: number;
    favorite: boolean;
};
export type ProblemStarStats = {
    starSum: number;
    starCount: number;
    userStar?: number;
};
export type AdditionalProblemInfo = {
    difficulty: number;
    createdAt: string;
    totalAttempts: number;
    totalWins: number;
    winTime: number;
    source: string | null;
    rating: number;
    ratingCount: number;
};
export type CreatedProblem = ProblemEntry;
export type FavoritedProblem = ProblemEntry & {
    favoritedAt: string;
};
export type DashboardEditedProblem = ProblemEntry & {
    editor: UserMinimal;
    editedAt: string;
    comment: string;
};
export type DashboardFlaggedProblem = {
    id: number;
    problem: {
        id: number;
        imageUrl: string;
    };
    flag: string;
    user: Pick<UserMinimal, 'id' | 'name'>;
    description: string | null;
    createdAt: string;
};
export type Transition = {
    ts: number;
    time: string;
    offset: number;
    isdst: boolean;
    abbr: string;
};
export type Location = {
    country_code: string;
    latitude: number;
    longitude: number;
    comments: string;
};
export type Timezone = {
    name: string;
    transitions: Transition[];
    location: Location;
};
export type LastOnlineAt = {
    timezone: Timezone;
    offset: number;
    timestamp: number;
};
export type User = UserMinimal & {
    id: number;
    name: string;
    avatar: AvatarEntry;
    info: string;
    visibleElo: number;
    solveTotal: number;
    problemsCount: number;
    friendsCount: number;
    commentsCount: number;
    rushBestScore: number | null;
    achievementsCount: number;
    timeTrialLevelsWonCount: number;
    lastHere: string;
    joined: string;
    gobits: number | null;
    rank?: Rank;
};
export type AnonymousUser = {
    id: number;
    name: string;
    visibleElo: number;
    rank?: Rank;
};
export type Leaderboard = {
    user: UserMinimal;
    currentRating: string;
    highestRating: string;
    achievementCount: number;
    longestPOTDStreak: number;
    solvedProblemsCounter: number;
    speedSolves: number;
    solveTotal: number;
    suggestionsAcceptedCount: number;
};
export type DailyLeaderboardEntry = {
    user: UserMinimal | null;
    isAnonymous: boolean;
    problemsSolved: number;
    speedSolves: number;
    speedPlays: number;
    topRush3: number | null;
    topRush5: number | null;
    topRushUntimed: number | null;
    topTimeTrial: number | null;
    topTimeTrialLevel: number | null;
};
export type TimeTrialLeaderboardEntry = {
    id: number | null;
    user: UserMinimal | null;
    duration: number;
    date: string;
    level: number | null;
};
export type TimeTrialResultProblemEntry = {
    position: number;
    problem: ProblemMinimal;
    solved: boolean;
    attemptsCount: number | null;
    durationSeconds: number | null;
};
export type TimeTrialResultView = {
    id: number;
    user: UserMinimal | null;
    level: number;
    completed: number;
    solved: boolean;
    endedAt: string | null;
    totalDurationSeconds: number | null;
    problems: TimeTrialResultProblemEntry[];
};
export type CollectionGroup = (typeof COLLECTION_TYPES)[number];
export declare enum CollectionPrivacy {
    PUBLIC = "public",
    FRIENDS = "friends",
    PRIVATE = "private"
}
export declare enum CollectionCollaboration {
    PROBLEM_AUTHOR = "problem_author",
    FRIENDS = "friends",
    PRIVATE = "private"
}
export type ProblemCollection = {
    favorite: boolean;
    id: number;
    name: string;
    description: string;
    numberOfProblems: number;
    thumbsUpCount?: number | null;
    core: boolean;
    author: Author;
    createdAt: string;
    group: CollectionGroup;
    secret: boolean;
};
export type SingleProblemCollection = ProblemCollection & {
    privacy: CollectionPrivacy;
    collaboration: CollectionCollaboration;
    hasPassedTest?: boolean | null;
    hasPassedTestFast?: boolean | null;
    favorite?: boolean;
    numberOfSolvedProblems: number;
    numberOfSpeedSolvedProblems: number;
    numberOfSpeedPlayProblems: number;
};
export type SingleProblemCollectionWithPrivacy = ProblemCollectionPreview & {
    privacy: CollectionPrivacy;
    collaboration: CollectionPrivacy;
};
export type ProblemCollectionPreview = {
    id: number;
    name: string;
    group: CollectionGroup;
    core: boolean;
    privacy: CollectionPrivacy;
};
interface Author {
    id: number;
    name: string;
    avatar: {
        current: boolean;
        sources: {
            url: string;
            size: number;
        }[];
    };
    lastOnlineAt: string;
    rank: {
        value: number;
        unit: string;
        exact: boolean;
    };
}
export type AvatarSource = {
    url: string;
    size: number;
};
export type AvatarEntry = {
    id: number | null;
    current: boolean;
    sources: AvatarSource[];
};
export type FeaturedAchievement = {
    code: string;
    name: string;
    achievedAt: string | null;
};
export type CollectionProgress = {
    id: number;
    name: string;
    group: string;
    numberOfProblems: number;
    previewProblem: ProblemMinimal;
    numberOfSolvedProblems: number;
    numberOfSpeedSolvedProblems: number;
};
export type UserProfile = {
    id: number;
    name: string;
    info: string;
    lastHere: string;
    joined: string;
    visibleElo: number;
    displayRating: number;
    highestVisibleElo: number;
    solveTotal: number;
    dailyProblemsSolved: number;
    problemsCount: number;
    friendsCount: number;
    commentsCount: number;
    suggestionsCreatedCount: number;
    avatar: AvatarEntry;
    rushBestScore: number;
    achievementsCount: number;
    featuredAchievements?: FeaturedAchievement[] | null;
    timeTrialLevelsWonCount?: number;
    gobits: number | null;
    solvedProblemsCounter: number;
    isPro?: boolean | null;
    language?: string | null;
    notificationsCount?: number | null;
};
export type ProblemMinimal = {
    id: number;
    imageUrl: string;
    rank?: Rank;
};
export type ProblemMinimalWithSgf = ProblemMinimal & {
    sgf: string;
    genre: ProblemGenreEnum;
};
export type ProblemFlagMinimal = {
    problem: ProblemMinimal;
    flag: ProblemFlagEnum;
    id: number;
    flagName: string;
};
export type AchievementEarnedNotificationPayload = {
    code: string;
    name: string;
};
export type UserFriendshipRequestNotificationPayload = {
    id: number;
    user: UserMinimal;
};
export type UserMentionedInCommentPayload = {
    commentId: number;
    problemId: number;
    compressedPath: string;
    mentioner: UserMinimal;
    commentExcerpt: string;
};
export type UserMentionedInScenarioCommentPayload = {
    commentId: number;
    scenarioId: number;
    mentioner: UserMinimal;
    commentExcerpt: string;
};
export type CommentUpvotedNotificationPayload = {
    commentId: number;
    problemId: number;
    compressedPath: string;
    voter: UserMinimal;
    commentExcerpt: string;
};
export type FlagDeletedNotificationPayload = {
    user: UserMinimal;
    flag: ProblemFlagMinimal;
    reason: string | null;
};
export type EnoughGobitsAvatarNotificationPayload = {
    gobits: number;
};
export type SuggestedProblemEditCreatedPayload = {
    id: number;
    problemId: number;
    user: UserMinimal;
};
export type SuggestedProblemEditApprovedPayload = {
    id: number;
    user: UserMinimal;
    resolvedBy: UserMinimal;
};
export type SuggestedProblemEditRejectedPayload = {
    id: number;
    user: UserMinimal;
    resolvedBy: UserMinimal;
    resolutionComment: string;
};
export type CollectionSuggestionCreatedPayload = {
    id: number;
    problemId: number;
    collectionId: number;
    collectionName: string;
    type: string;
    user: UserMinimal;
    comment: string | null;
};
export type CollectionSuggestionApprovedPayload = {
    id: number;
    collectionId: number;
    collectionName: string;
    type: string;
    user: UserMinimal;
    resolvedBy: UserMinimal;
    resolutionComment: string | null;
};
export type CollectionSuggestionRejectedPayload = {
    id: number;
    collectionId: number;
    collectionName: string;
    type: string;
    user: UserMinimal;
    resolvedBy: UserMinimal;
    resolutionComment: string | null;
};
export type TournamentCompletedNotificationPayload = {
    tournament: TournamentMinimal;
};
export type Notification = {
    id: number;
    type: string;
    payload: UserFriendshipRequestNotificationPayload | UserMentionedInCommentPayload | UserMentionedInScenarioCommentPayload | CommentUpvotedNotificationPayload | AchievementEarnedNotificationPayload | FlagDeletedNotificationPayload | EnoughGobitsAvatarNotificationPayload | TournamentCompletedNotificationPayload;
    viewed: boolean;
    createdAt: string;
};
export type RushProblem = {
    id: number;
    problemId: number;
    sgf: string;
    description: string;
    difficulty: string;
    rating: number;
    playerColor: PlayerColor;
    startedAt: string | null;
    endedAt: string | null;
    solved: number;
    duration: number;
};
export type RushResultProblemStatus = 'solved' | 'failed' | 'timed_out' | 'not_tried';
export type RushResultProblemEntry = {
    position: number;
    problem: ProblemMinimal;
    status: RushResultProblemStatus;
    durationMs: number | null;
};
export type RushResultView = {
    id: number;
    user: UserMinimal | null;
    type: number;
    isRushUser: boolean;
    score: number;
    newHighScore: boolean;
    personalRankToday: number | null;
    personalRankAllTime: number | null;
    globalRankToday: number | null;
    averageSolveTimeSeconds: number | null;
    hardestProblemDifficulty: string | null;
    problems: RushResultProblemEntry[];
};
export type AvatarCustomizationOption = {
    code: string;
    cost: number;
    pro: boolean;
    unlocked: boolean;
};
export type AvatarCustomization = {
    code: string;
    options: AvatarCustomizationOption[];
};
export type AvatarConfiguration = {
    cost: number;
    customizations: AvatarCustomization[];
};
export type CustomizationOption = {
    customization_code: string;
    option_code: string;
};
export type TimeTrialProgress = {
    level: number;
    rank: Rank;
    bestScore: number | null;
    lastScore: number | null;
    lastCompletedAt: string | null;
    trialsCount: number | null;
    victoriesCount: number | null;
    perfectVictoriesCount: number | null;
    bestTime: number | null;
    totalSolved: number | null;
    averageSolveTimeSeconds: number | null;
};
export interface TimeTrialProgressWithStatus extends TimeTrialProgress {
    status: string;
}
export type FriendshipRequest = {
    id: number;
    senderId: number;
    receiverId: number;
    createdAt: string;
};
export type FriendshipRequestRecord = {
    id: number;
    user: UserMinimal;
    createdAt: string;
};
export type Comment = {
    id: number;
    problem: Problem;
    author: UserMinimal;
    createdAt: string;
    active: boolean;
    text: string;
    type: string;
    path: string;
    compressedPath: string;
};
export type ProblemSolvesAndTries = {
    solves: number;
    tries: number;
};
export type Attempts = {
    solved: number;
    failed: number;
    tries: number;
    speedSolved: number;
    speedPlay: number;
    hasSoftStopAttempts: boolean;
};
export type OptimisticAttempts = Attempts & {
    isSolved: boolean;
    isAttempted: boolean;
};
export type ProblemV2 = ProblemWithSolvesAndTries & ProblemMinimalWithAuthorAndCreated;
export type ProblemStarRating = {
    stars: number;
    votes: number;
    currentUserVote: number;
};
export type ProblemMinimalWithAuthorAndCreated = ProblemMinimal & {
    createdAt: string;
    author: UserMinimal;
};
export type ProblemMinimalWithAuthorAndCreatedAndSgf = ProblemMinimalWithAuthorAndCreated & {
    sgf: string;
};
export type ProblemMinimalWithFlagStatsAndRating = ProblemMinimalWithAuthorAndCreated & {
    flagStats: ProblemFlagStats;
} & {
    rating: ProblemStarRating;
} & {
    canBeEdited: boolean;
};
export type ProblemWithSolvesAndTries = ProblemMinimal & ProblemSolvesAndTries;
export type DailyProblemContent = ProblemMinimal & {
    id: number;
    imageUrl: string;
    difficulty?: Rank;
    category: CategoryDifficulty;
    genre: CommentGenreEnum;
    rating?: number;
    author: UserMinimal;
};
export type DailyProblemStatusEntry = {
    problemId: number;
    solversCount: number;
    solvedByCurrentUser: boolean;
    firstSolveAttemptFailedByCurrentUser: boolean;
    currentStreak: number;
    isSpeedPlay: boolean;
    isSpeedSolved: boolean;
};
export type DailyProblemV2 = DailyProblemContent & Partial<Omit<DailyProblemStatusEntry, 'problemId'>>;
export type SuggestedProblemEdit = {
    id: number | null;
    type: string;
    status: SuggestedProblemEditStatusEnum;
    problem: SingleProblem;
    user: UserMinimal;
    originalSgf: string;
    suggestedSgf: string;
    comment: string;
    resolutionComment: string | null;
    resolvedBy: UserMinimal | null;
    createdAt: string | null;
    resolvedAt: string | null;
};
export type DiffSummary = {
    addedNodes: number;
    addedVariations: number;
    deletedNodes: number;
    changedNodes: number;
    changedProperties: string[];
};
export type SuggestedProblemEditMinimal = {
    id: number | null;
    type: string;
    status: SuggestedProblemEditStatusEnum;
    problem: ProblemMinimalWithFlagStatsAndRating;
    user: UserMinimal;
    comment: string;
    resolutionComment: string | null;
    resolvedBy: UserMinimal | null;
    createdAt: string | null;
    resolvedAt: string | null;
    diffSummary: DiffSummary | null;
};
export type VisualDiff = {
    step1: string;
    step2: string;
    txt: string;
    step3: string;
};
export type SgfDiff = {
    path: string;
    type: SgfDiffType;
    vis: VisualDiff[];
};
export type SgfLint = {
    severity: string;
    message: string;
    issue: string;
};
export type TournamentMinimal = {
    id: number;
    startedAt: string;
    endedAt: string | null;
    ruleset: TournamentRuleset;
    status: TournamentStatus;
    playersCount: number;
    roundsCount: number;
    winners: UserMinimal[];
    rulesetConfiguration: RulesetConfiguration;
};
export type TournamentSummaryEntry = {
    id: number;
    startedAt: string;
    ruleset: TournamentRuleset;
    status: TournamentStatus;
    playersCount: number;
    winners: Array<Pick<UserMinimal, 'id' | 'name'>>;
};
export type TournamentSummary = {
    next: TournamentSummaryEntry | null;
    previous: TournamentSummaryEntry | null;
};
export type RulesetConfiguration = {
    step: number;
    lives: number;
    exponent: number;
    maxLevel: number;
    baseLevel: number;
    threshold: number;
    problemsCount: number;
    roundDuration: number;
    pauseBetweenRounds: number;
    minimalPlayersCount: number;
    gobits: number;
};
export type Tournament = {
    id: number;
    playersCount: number;
    startedAt: string;
    endedAt: string | null;
    ruleset: TournamentRuleset;
    status: TournamentStatus;
    maxPlayers: number;
    visibility: TournamentVisibility;
    rulesetConfiguration: RulesetConfiguration;
    currentRound?: TournamentRound;
};
export type TournamentRound = {
    id: number;
    number: number;
    startedAt: string;
    endedAt: string | null;
    duration: number;
    results: TournamentPlayerRoundResult[];
};
export type RoundWithProblems = {
    id: number;
    number: number;
    startedAt: string;
    endedAt: string | null;
    duration: number;
    results: TournamentPlayerRoundResult[];
    roundProblems: TournamentProblemMinimal[];
};
export type TournamentRoundMinimal = {
    id: number;
    roundNumber: number;
    startedAt: string;
    endedAt: string | null;
};
export type TournamentProblemMinimal = {
    id: number;
    problem: ProblemMinimal;
};
export type TournamentRoundProblem = {
    id: number;
    problem: ProblemMinimalWithSgf;
};
export type TournamentPlayer = {
    id: number;
    user: User | AnonymousUser;
    status: TournamentPlayerStatus;
};
export type TournamentPlayerRoundResult = {
    id: number;
    player: TournamentPlayer;
    roundNumber: number;
    score: number;
    livesLeft: number;
    timeSpent: number;
    promoted: boolean;
    endedAt: string;
    lastTriedProblem: TournamentRoundProblem | null;
};
export type TournamentPlayerResult = {
    id: number;
    tournamentRound: TournamentRound;
    tournamentPlayer: TournamentPlayer;
    problemsSolved: number;
    livesLeft: number;
    timeSpent: number;
};
export type TournamentProblemAttempt = {
    id: number;
    roundNumber: number;
    roundProblem: TournamentRoundProblem;
    tournamentPlayer: TournamentPlayer;
    timeSpent: number;
    attempt: Attempt;
};
export type TournamentChatMessage = {
    id: number;
    sender?: UserMinimal;
    content?: string;
    contentType: TournamentChatContentType;
    parameters?: Record<string, unknown>;
    createdAt?: string;
};
export type Attempt = {
    id: number;
    problem: Problem;
    isSolved: boolean;
    createdAt: string;
    user: User;
    path: string;
    hardStop: boolean;
    context: ProblemContextEnum;
};
export type ProblemAttempt = {
    solved: boolean;
    createdAt: string;
    path: string;
    hardstop: boolean;
    context: ProblemContextEnum;
    id: number;
    problem: ProblemMinimal;
    contextRepresentation: string;
    time: number;
    user: UserMinimal;
    speedSolved: boolean;
    speedPlay: boolean;
};
export type ProblemComment = {
    id: number;
    problem: ProblemMinimal;
    author: UserMinimal;
    text: string;
    alive: boolean;
    type: string;
    path: string;
    compressedPath: string;
    createdAt: string;
};
export type ScenarioComment = {
    id: number;
    scenarioId: number;
    author: UserMinimal;
    text: string;
    path: string | null;
    alive: boolean;
    createdAt: string;
};
export type ProblemFlag = {
    id: number;
    own: boolean;
    user: string;
    userRating: string;
    createdAt: string;
    type: string;
    description: string | null;
    problemAuthor: boolean;
    deletedAt: string | null;
    clearedBy: string | null;
    clearReason: string | null;
};
export type ProblemClearedFlag = {
    when: string;
    user: string | null;
    type: string;
    count: number;
    reason: string;
};
export type ProblemStar = {
    user: string;
    createdAt: string;
    stars: number;
};
export type SimilarProblem = {
    id: number;
    difficulty: string;
    rank?: Rank;
    createdAt: string;
    imageDataUrl: string;
    matchPercentage?: number;
};
export type SimilarCountsResponse = {
    r1Count: number;
    r2Count: number;
    count: number;
};
export type SimilarProblemsResponse = {
    entries: SimilarProblem[];
};
export type SimilarProblemsPercentageResponse = {
    entries: SimilarProblem[];
    topPercentage: number;
    totalRecords: number;
};
export type DailyProblem = {
    solvedByCurrentUser: boolean;
    dailySolversCount: number;
    notSolvedAttempts: boolean;
    id: number;
    author: UserMinimal;
    genre: string;
    difficulty: string;
    rating: number;
    flagged: number;
    solves: number;
    fails: number;
    createdAt: string;
    imageUrl: string;
};
export type Achievement = {
    code: string;
    name: string;
    description: string;
    achievedAt: string | null;
    usersAwardedInformation: string;
    requiredUnits: number;
    currentUnits: number;
    units: 'percent' | 'point';
    hidden: boolean;
};
export type AchievementInfo = {
    code: string;
    name: string;
    description: string;
    dateEarned?: string;
    iconUrl?: string;
};
export type AchievementInfoEntry = {
    achievedAt: string;
    user: UserMinimal;
};
export type AchievementInfoResponse = {
    entries: AchievementInfoEntry[];
    totalRecords: number;
};
export type AchievementInfoApiResponse = {
    code: string;
    name: string;
    description: string;
    hidden: boolean;
    units: string;
    requiredUnits: number;
    currentUnits: number;
    achievedAt: string | null;
    usersAwardedInformation: string;
};
export type SiteBanner = {
    id: number;
    heading?: string;
    content?: string;
    variant: SiteBannerVariantEnum;
    dismissible: boolean;
    active: boolean;
};
export type FeatureFlag = {
    id: number;
    name: string;
    description: string | null;
    enable: boolean;
    flagValue: string | null;
};
export type SiteSettings = {
    featureFlags: FeatureFlag[];
    siteBanners: SiteBanner[];
};
export type CollectionPreviewEntry = {
    id: number;
    group: ProblemCollectionGroupEnum;
    name: string;
    privacy: CollectionPrivacy;
    collaboration: CollectionCollaboration;
};
export type CollectionSuggestionMinimal = {
    id: number;
    problem: ProblemMinimalWithFlagStatsAndRating;
    collection: {
        id: number;
        name: string;
        core: boolean;
        privacy: CollectionPrivacy;
    };
    type: string;
    status: SuggestedProblemEditStatusEnum;
    user: UserMinimal;
    comment: string | null;
    resolutionComment: string | null;
    resolvedBy: UserMinimal | null;
    createdAt: string | null;
    resolvedAt: string | null;
    problemInCollection: boolean | null;
};
export type ProblemChange = {
    initiator?: UserMinimal;
    operation: string;
    property: string | null;
    oldValue: string | object[];
    newValue: string | object[];
    addedValues: object[];
    removedValues: object[];
    comment: string;
    changedAt: string;
};
export type TimeTrial = {
    id: number;
    user: UserMinimal;
    completed: number;
    startedAt: string;
    endedAt?: string;
    problem: ProblemMinimalWithSgf;
    lives: number;
    level: number;
    solved: boolean;
    trialProblemsCount: number;
    trialDuration: number;
    totalTime: number;
    currentProblemUpdatedAt?: string;
    canBeEdited: boolean;
};
export type CollectionTestProblemState = {
    position: number;
    status: 'not_tried' | 'failed' | 'solved' | 'solved_fast';
};
export type CollectionTest = {
    id: number;
    collectionId: number;
    collectionName: string;
    completed: boolean;
    solvedCount: number;
    fastSolvedCount: number;
    problem: ProblemMinimalWithSgf | null;
    states: CollectionTestProblemState[];
};
export type CollectionTestResultProblemEntry = {
    position: number;
    problem: ProblemMinimal;
    difficulty: string;
    status: 'not_tried' | 'failed' | 'solved' | 'solved_fast';
    durationMs: number | null;
};
export type CollectionTestResultView = {
    id: number;
    collectionId: number;
    collectionName: string;
    score: number;
    fastSolved: number;
    personalRankToday: number | null;
    personalRankAllTime: number | null;
    globalRankToday: number | null;
    averageSolveTimeSeconds: number | null;
    hardestProblemDifficulty: string | null;
    problems: CollectionTestResultProblemEntry[];
};
export type CollectionTestLeaderboardEntry = {
    id: number;
    rank: number;
    user?: UserMinimal;
    score: number;
    fastSolved: number;
    totalDurationMs: number;
    endedAt: string | null;
};
export type CollectionTestLeaderboardView = {
    collectionId: number;
    collectionName: string;
    entries: CollectionTestLeaderboardEntry[];
};
export type RushScoreTableEntry = {
    id?: number;
    user: UserMinimal;
    type: string;
    score: number;
    date: string;
};
export type RushRecentResultEntry = {
    id: number;
    user: UserMinimal | null;
    type: string;
    score: number;
    date: string;
    userDailyBest: boolean;
    globalDailyRank: 1 | 2 | 3 | null;
    personalBest: boolean;
};
export type RushDailyHighScoresResponse = {
    entries: RushScoreTableEntry[];
    resetsAt: string;
};
export type Friendship = {
    id: number;
    user: UserMinimal;
    createdAt: string;
} & FriendshipStatistics;
export type FriendshipStatistics = {
    id: number;
    solvesToday: number;
    solvesWeek: number;
    solvesMonth: number;
    achievementsCount: number;
    maxRushScoreWeek?: number | null;
    maxRushScoreType?: RushTypes | null;
};
export type PersonalFriendStatistics = {
    user: UserMinimal;
    solvesToday: number;
    solvesWeek: number;
    solvesMonth: number;
    achievementsCount: number;
    maxRushScoreWeek: number | null;
    maxRushScoreType: RushTypes | null;
};
export type FriendshipSolveStatistics = Pick<FriendshipStatistics, 'id' | 'solvesToday' | 'solvesWeek' | 'solvesMonth'>;
export type FriendshipAchievementStatistics = Pick<FriendshipStatistics, 'id' | 'achievementsCount'>;
export type FriendshipRushStatistics = Pick<FriendshipStatistics, 'id' | 'maxRushScoreWeek' | 'maxRushScoreType'>;
export type FriendshipListEntry = Pick<Friendship, 'id' | 'user' | 'createdAt'> & Partial<FriendshipStatistics>;
export type Group = {
    id: number;
    name: string;
    description: string;
    private: boolean;
    createdAt: string;
    createdBy: UserMinimal;
    membersCount: number;
    hasJoinPassword: boolean;
    joined: boolean;
};
export type JoinedGroup = Group & {
    joinedAt: string | null;
};
export type JoinedUserLastAttempt = {
    id: number;
    problem: ProblemMinimal;
    isSolved: boolean;
    context: ProblemContextEnum;
};
export type JoinedUser = {
    id: number;
    user: UserMinimal;
    joinedAt: string;
    solvesToday: number;
    solvesWeek: number;
    lastAttempt: JoinedUserLastAttempt | null;
};
export type GroupSummary = {
    recent: Group[];
    top: Group[];
    random: Group[];
};
export type ArticleTitle = {
    slug: string;
    title: string;
};
export type CollectionName = {
    id: number;
    name: string;
};
export type CurationStatus = {
    allowed: boolean;
    solved: number;
    required: number;
};
export type ProblemDraft = {
    id: number;
    sgf: string;
    sgfSource: string;
    rating: number | null;
    ratingSource: number | null;
    status: ProblemDraftStatus;
    genre: ProblemGenreEnum | null;
    canon: boolean | null;
    standard: boolean | null;
    category: string | null;
    comment?: string | null;
    problemId?: number | null;
    resolvedBy?: UserMinimal | null;
    createdAt: string;
    updatedAt: string;
};
export type CategoryDifficulty = 'beginner' | 'easy' | 'medium' | 'hard';
export type HeatmapData = {
    date: string;
    count: number;
    level: number;
};
export type PrivacySettingsPayload = {
    problemAttempts: string;
    timeTrial: string;
    rush: string;
    achievement: string;
    gobits: string;
    scenarioProblems: string;
    testResults: string;
};
export type PrivacySettings = PrivacySettingsPayload & {
    privacyOptions: {
        code: string;
        label: string;
    }[];
};
export type CollectionTestListItem = {
    id: number;
    collectionId: number;
    collectionName: string;
    startedAt: string;
    endedAt: string | null;
    solvedCount: number;
    fastSolvedCount: number;
    totalDurationMs: number;
};
export type CollectionTestRecentResultEntry = {
    id: number;
    collectionId: number;
    collectionName: string;
    user: UserMinimal;
    score: number;
    fastSolved: number;
    totalDurationMs: number;
    endedAt: string;
    viewable: boolean;
};
//# sourceMappingURL=model.d.ts.map