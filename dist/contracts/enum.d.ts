export declare enum NotificationTypeEnum {
    USER_FRIENDSHIP_REQUEST_SENT = "user_friendship_request_sent",
    USER_FRIENDSHIP_REQUEST_ACCEPTED = "user_friendship_request_accepted",
    USER_MENTIONED_IN_COMMENT = "user_mentioned_in_comment",
    USER_MENTIONED_IN_SCENARIO_COMMENT = "user_mentioned_in_scenario_comment",
    COMMENT_UPVOTED = "comment_upvoted",
    FLAG_DELETED = "flag_deleted",
    ACHIEVEMENT_EARNED = "achievement_earned",
    ENOUGH_GOBITS_AVATAR = "enough_gobits_avatar",
    SUGGESTED_PROBLEM_EDIT_CREATED = "suggested_problem_edit_created",
    SUGGESTED_PROBLEM_EDIT_APPROVED = "suggested_problem_edit_approved",
    SUGGESTED_PROBLEM_EDIT_REJECTED = "suggested_problem_edit_rejected",
    COLLECTION_SUGGESTION_CREATED = "collection_suggestion_created",
    COLLECTION_SUGGESTION_APPROVED = "collection_suggestion_approved",
    COLLECTION_SUGGESTION_REJECTED = "collection_suggestion_rejected",
    TOURNAMENT_COMPLETED = "tournament_completed"
}
export declare enum RushTypes {
    TYPE_3_MINUTES = 1,
    TYPE_5_MINUTES = 2,
    TYPE_UNTIMED = 3
}
export declare enum RushRecentResultsScope {
    PERSONAL = "personal",
    GLOBAL = "global",
    FRIENDS = "friends"
}
export { SiteStyle } from './auth.js';
export declare enum VoteTypeEnum {
    UPVOTE = 1,
    DOWNVOTE = -1
}
export declare enum VotableEntityTypeEnum {
    COMMENT = "comment",
    PROBLEM_COLLECTION = "problem-collection",
    SCENARIO = "scenario",
    SCENARIO_COMMENT = "scenario-comment"
}
export declare enum ProblemFlagEnum {
    WELL_CONSTRUCTED = 1,
    NEEDS_FIXING = 2,
    INVALID = 3,
    DUPLICATE = 4
}
export declare enum ProblemFlagStringEnum {
    WELL_CONSTRUCTED = "Well constructed",
    NEEDS_FIXING = "Needs fixing",
    INVALID = "Invalid",
    DUPLICATE = "Duplicate"
}
export declare enum ResponseSpeed {
    SLOW = 500,
    NORMAL = 300,
    FAST = 100,
    INSTANT = 0
}
export declare enum Mode {
    None = "none",
    Stone = "abw",
    Move = "bw",
    BlackStone = "ab",
    WhiteStone = "aw",
    ClearStone = "clearstone",
    ClearMarkup = "clearmark",
    Circle = "ci",
    DeleteNode = "delete",
    Square = "sq",
    Triangle = "tri",
    Letter = "le",
    Number = "num",
    Cross = "cr",
    TargetPosition = "targetpos",
    PlayerAllowedArea = "playerallowed",
    PlayerDisallowedArea = "playerdisallowed",
    ComputerAllowedArea = "computerallowed",
    ComputerDisallowedArea = "computerdisallowed"
}
export declare enum SuggestedProblemEditStatusEnum {
    OPEN = "open",
    APPROVED = "approved",
    REJECTED = "rejected"
}
export declare enum CollectionSuggestionTypeEnum {
    ADD = "add",
    REMOVE = "remove"
}
export declare enum ScenarioType {
    INVADE = "invade",
    REPEL = "repel",
    SCENARIO = "scenario"
}
export declare enum ScenarioAttemptResult {
    IN_PROGRESS = 0,
    SUCCESS = 1,
    FAILURE = 2
}
export declare enum ScenarioAttemptStatus {
    READY = "ready",
    THINKING = "thinking",
    ENDED = "ended"
}
export declare enum AnalysisClientStatus {
    READY = "ready",
    BUSY = "busy",
    OFFLINE = "offline"
}
export declare enum ScenarioDifficulty {
    KYU_20 = "20k",
    KYU_10 = "10k",
    KYU_5 = "5k",
    DAN_1 = "1d",
    DAN_4 = "4d",
    DAN_7 = "7d",
    PRO = "pro",
    MAX = "max"
}
export declare enum ScenarioToMove {
    BLACK = "b",
    WHITE = "w"
}
export declare enum ProblemGenreEnum {
    ELEMENTARY = "elementary",
    LIFE_AND_DEATH = "life and death",
    JOSEKI = "joseki",
    FUSEKI = "fuseki",
    TESUJI = "tesuji",
    BEST_MOVE = "best move",
    ENDGAME = "endgame"
}
export declare enum NextProblemEntryEnum {
    BEGINNER = "beginner",
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
    RECOMMENDED = "recommended",
    PRACTICE = "practice",
    NEEDING_RATING = "needingRating",
    AUTOLEVEL = "autolevel",
    COLLECTION = "collection",
    FAVORITES = "favorites",
    NEWEST = "newest",
    FRESH = "fresh",
    CUSTOM = "custom",
    LEVEL_PROGRESS = "levelProgress",
    MADE_BY_USER = "madeByUser",
    SPEED = "speed",
    SET = "set",
    FILTER = "filter",
    TRAINING = "training"
}
export declare enum TournamentRuleset {
    SolvingRoyale = "solving_royale"
}
export declare enum TournamentStatus {
    Scheduled = "scheduled",
    Running = "running",
    Cancelled = "cancelled",
    Finished = "finished"
}
export declare enum TournamentVisibility {
    Public = 1,
    Private = 2
}
export declare enum TournamentPlayerStatus {
    Active = 1,
    Eliminated = 2,
    Winner = 3
}
export declare enum TournamentChatContentType {
    TEXT = "text",
    SYSTEM = "system"
}
export declare enum ProblemContextEnum {
    UNKNOWN = "?",
    SINGLE_PROBLEM = ".",
    RUSH = "r",
    UNTIMED_RUSH = "u",
    TIME_TRIAL = "t",
    COLLECTION_TEST = "c",
    MULTIPLAYER = "m",
    TRAINING = "s"
}
export declare enum CommentGenreEnum {
    COMMENT = "comment",
    CORRECT = "correct",
    WRONG = "wrong",
    QUESTION = "question"
}
export declare enum SiteBannerVariantEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    DANGER = "danger",
    WARNING = "warning",
    INFO = "info",
    DARK = "dark",
    LIGHT = "light"
}
export declare enum FeatureName {
    Tournament = "tournament"
}
export declare enum ProblemCollectionGroupEnum {
    STYLE = "Style",
    COLLECTION = "Collection",
    SEQUENCE = "Sequence",
    TESUJI = "Tesuji",
    JOSEKI = "Joseki"
}
export declare enum ProblemPublishStatusEnum {
    DELETED = "deleted",
    SANDBOX = "sandbox",
    LIVE = "live"
}
export declare enum CompressedPathChangeType {
    Add = "add",
    Delete = "delete"
}
export declare enum NodeChangeType {
    Result = "result",
    Choice = "choice",
    Target = "target",
    NotThis = "not_this"
}
export declare enum SgfDiffType {
    Add = "Add",
    Choice = "Choice",
    Comment = "Comment",
    Delete = "Delete",
    Force = "Force",
    Markup = "Markup",
    NotThis = "Not This",
    Result = "Result",
    Setup = "Setup"
}
export declare enum SortBy {
    CreatedAt = "p.createdAt",
    Elo = "p.elo",
    Genre = "p.genre",
    Stars = "p.stars",
    Random = "RAND()"
}
export declare enum SortDirection {
    Asc = "asc",
    Desc = "desc"
}
export declare enum ProblemDraftStatus {
    New = "new",
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    Incomplete = "incomplete",
    Duplicate = "duplicate",
    Invalid = "invalid"
}
//# sourceMappingURL=enum.d.ts.map