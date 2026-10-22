export var NotificationTypeEnum;
(function (NotificationTypeEnum) {
    NotificationTypeEnum["USER_FRIENDSHIP_REQUEST_SENT"] = "user_friendship_request_sent";
    NotificationTypeEnum["USER_FRIENDSHIP_REQUEST_ACCEPTED"] = "user_friendship_request_accepted";
    NotificationTypeEnum["USER_MENTIONED_IN_COMMENT"] = "user_mentioned_in_comment";
    NotificationTypeEnum["USER_MENTIONED_IN_SCENARIO_COMMENT"] = "user_mentioned_in_scenario_comment";
    NotificationTypeEnum["COMMENT_UPVOTED"] = "comment_upvoted";
    NotificationTypeEnum["FLAG_DELETED"] = "flag_deleted";
    NotificationTypeEnum["ACHIEVEMENT_EARNED"] = "achievement_earned";
    NotificationTypeEnum["ENOUGH_GOBITS_AVATAR"] = "enough_gobits_avatar";
    NotificationTypeEnum["SUGGESTED_PROBLEM_EDIT_CREATED"] = "suggested_problem_edit_created";
    NotificationTypeEnum["SUGGESTED_PROBLEM_EDIT_APPROVED"] = "suggested_problem_edit_approved";
    NotificationTypeEnum["SUGGESTED_PROBLEM_EDIT_REJECTED"] = "suggested_problem_edit_rejected";
    NotificationTypeEnum["COLLECTION_SUGGESTION_CREATED"] = "collection_suggestion_created";
    NotificationTypeEnum["COLLECTION_SUGGESTION_APPROVED"] = "collection_suggestion_approved";
    NotificationTypeEnum["COLLECTION_SUGGESTION_REJECTED"] = "collection_suggestion_rejected";
    NotificationTypeEnum["TOURNAMENT_COMPLETED"] = "tournament_completed";
})(NotificationTypeEnum || (NotificationTypeEnum = {}));
export var RushTypes;
(function (RushTypes) {
    RushTypes[RushTypes["TYPE_3_MINUTES"] = 1] = "TYPE_3_MINUTES";
    RushTypes[RushTypes["TYPE_5_MINUTES"] = 2] = "TYPE_5_MINUTES";
    RushTypes[RushTypes["TYPE_UNTIMED"] = 3] = "TYPE_UNTIMED";
})(RushTypes || (RushTypes = {}));
export var RushRecentResultsScope;
(function (RushRecentResultsScope) {
    RushRecentResultsScope["PERSONAL"] = "personal";
    RushRecentResultsScope["GLOBAL"] = "global";
    RushRecentResultsScope["FRIENDS"] = "friends";
})(RushRecentResultsScope || (RushRecentResultsScope = {}));
export { SiteStyle } from './auth.js';
export var VoteTypeEnum;
(function (VoteTypeEnum) {
    VoteTypeEnum[VoteTypeEnum["UPVOTE"] = 1] = "UPVOTE";
    VoteTypeEnum[VoteTypeEnum["DOWNVOTE"] = -1] = "DOWNVOTE";
})(VoteTypeEnum || (VoteTypeEnum = {}));
export var VotableEntityTypeEnum;
(function (VotableEntityTypeEnum) {
    VotableEntityTypeEnum["COMMENT"] = "comment";
    VotableEntityTypeEnum["PROBLEM_COLLECTION"] = "problem-collection";
    VotableEntityTypeEnum["SCENARIO"] = "scenario";
    VotableEntityTypeEnum["SCENARIO_COMMENT"] = "scenario-comment";
})(VotableEntityTypeEnum || (VotableEntityTypeEnum = {}));
export var ProblemFlagEnum;
(function (ProblemFlagEnum) {
    ProblemFlagEnum[ProblemFlagEnum["WELL_CONSTRUCTED"] = 1] = "WELL_CONSTRUCTED";
    ProblemFlagEnum[ProblemFlagEnum["NEEDS_FIXING"] = 2] = "NEEDS_FIXING";
    ProblemFlagEnum[ProblemFlagEnum["INVALID"] = 3] = "INVALID";
    ProblemFlagEnum[ProblemFlagEnum["DUPLICATE"] = 4] = "DUPLICATE";
})(ProblemFlagEnum || (ProblemFlagEnum = {}));
export var ProblemFlagStringEnum;
(function (ProblemFlagStringEnum) {
    ProblemFlagStringEnum["WELL_CONSTRUCTED"] = "Well constructed";
    ProblemFlagStringEnum["NEEDS_FIXING"] = "Needs fixing";
    ProblemFlagStringEnum["INVALID"] = "Invalid";
    ProblemFlagStringEnum["DUPLICATE"] = "Duplicate";
})(ProblemFlagStringEnum || (ProblemFlagStringEnum = {}));
export var ResponseSpeed;
(function (ResponseSpeed) {
    ResponseSpeed[ResponseSpeed["SLOW"] = 500] = "SLOW";
    ResponseSpeed[ResponseSpeed["NORMAL"] = 300] = "NORMAL";
    ResponseSpeed[ResponseSpeed["FAST"] = 100] = "FAST";
    ResponseSpeed[ResponseSpeed["INSTANT"] = 0] = "INSTANT";
})(ResponseSpeed || (ResponseSpeed = {}));
export var Mode;
(function (Mode) {
    Mode["None"] = "none";
    Mode["Stone"] = "abw";
    Mode["Move"] = "bw";
    Mode["BlackStone"] = "ab";
    Mode["WhiteStone"] = "aw";
    Mode["ClearStone"] = "clearstone";
    Mode["ClearMarkup"] = "clearmark";
    Mode["Circle"] = "ci";
    Mode["DeleteNode"] = "delete";
    Mode["Square"] = "sq";
    Mode["Triangle"] = "tri";
    Mode["Letter"] = "le";
    Mode["Number"] = "num";
    Mode["Cross"] = "cr";
    Mode["TargetPosition"] = "targetpos";
    Mode["PlayerAllowedArea"] = "playerallowed";
    Mode["PlayerDisallowedArea"] = "playerdisallowed";
    Mode["ComputerAllowedArea"] = "computerallowed";
    Mode["ComputerDisallowedArea"] = "computerdisallowed";
})(Mode || (Mode = {}));
export var SuggestedProblemEditStatusEnum;
(function (SuggestedProblemEditStatusEnum) {
    SuggestedProblemEditStatusEnum["OPEN"] = "open";
    SuggestedProblemEditStatusEnum["APPROVED"] = "approved";
    SuggestedProblemEditStatusEnum["REJECTED"] = "rejected";
})(SuggestedProblemEditStatusEnum || (SuggestedProblemEditStatusEnum = {}));
export var CollectionSuggestionTypeEnum;
(function (CollectionSuggestionTypeEnum) {
    CollectionSuggestionTypeEnum["ADD"] = "add";
    CollectionSuggestionTypeEnum["REMOVE"] = "remove";
})(CollectionSuggestionTypeEnum || (CollectionSuggestionTypeEnum = {}));
export var ScenarioType;
(function (ScenarioType) {
    ScenarioType["INVADE"] = "invade";
    ScenarioType["REPEL"] = "repel";
    ScenarioType["SCENARIO"] = "scenario";
})(ScenarioType || (ScenarioType = {}));
export var ScenarioAttemptResult;
(function (ScenarioAttemptResult) {
    ScenarioAttemptResult[ScenarioAttemptResult["IN_PROGRESS"] = 0] = "IN_PROGRESS";
    ScenarioAttemptResult[ScenarioAttemptResult["SUCCESS"] = 1] = "SUCCESS";
    ScenarioAttemptResult[ScenarioAttemptResult["FAILURE"] = 2] = "FAILURE";
})(ScenarioAttemptResult || (ScenarioAttemptResult = {}));
export var ScenarioAttemptStatus;
(function (ScenarioAttemptStatus) {
    ScenarioAttemptStatus["READY"] = "ready";
    ScenarioAttemptStatus["THINKING"] = "thinking";
    ScenarioAttemptStatus["ENDED"] = "ended";
})(ScenarioAttemptStatus || (ScenarioAttemptStatus = {}));
export var AnalysisClientStatus;
(function (AnalysisClientStatus) {
    AnalysisClientStatus["READY"] = "ready";
    AnalysisClientStatus["BUSY"] = "busy";
    AnalysisClientStatus["OFFLINE"] = "offline";
})(AnalysisClientStatus || (AnalysisClientStatus = {}));
export var ScenarioDifficulty;
(function (ScenarioDifficulty) {
    ScenarioDifficulty["KYU_20"] = "20k";
    ScenarioDifficulty["KYU_10"] = "10k";
    ScenarioDifficulty["KYU_5"] = "5k";
    ScenarioDifficulty["DAN_1"] = "1d";
    ScenarioDifficulty["DAN_4"] = "4d";
    ScenarioDifficulty["DAN_7"] = "7d";
    ScenarioDifficulty["PRO"] = "pro";
    // AI = 'ai',
    ScenarioDifficulty["MAX"] = "max";
})(ScenarioDifficulty || (ScenarioDifficulty = {}));
export var ScenarioToMove;
(function (ScenarioToMove) {
    ScenarioToMove["BLACK"] = "b";
    ScenarioToMove["WHITE"] = "w";
})(ScenarioToMove || (ScenarioToMove = {}));
export var ProblemGenreEnum;
(function (ProblemGenreEnum) {
    ProblemGenreEnum["ELEMENTARY"] = "elementary";
    ProblemGenreEnum["LIFE_AND_DEATH"] = "life and death";
    ProblemGenreEnum["JOSEKI"] = "joseki";
    ProblemGenreEnum["FUSEKI"] = "fuseki";
    ProblemGenreEnum["TESUJI"] = "tesuji";
    ProblemGenreEnum["BEST_MOVE"] = "best move";
    ProblemGenreEnum["ENDGAME"] = "endgame";
})(ProblemGenreEnum || (ProblemGenreEnum = {}));
export var NextProblemEntryEnum;
(function (NextProblemEntryEnum) {
    NextProblemEntryEnum["BEGINNER"] = "beginner";
    NextProblemEntryEnum["EASY"] = "easy";
    NextProblemEntryEnum["MEDIUM"] = "medium";
    NextProblemEntryEnum["HARD"] = "hard";
    NextProblemEntryEnum["RECOMMENDED"] = "recommended";
    NextProblemEntryEnum["PRACTICE"] = "practice";
    NextProblemEntryEnum["NEEDING_RATING"] = "needingRating";
    NextProblemEntryEnum["AUTOLEVEL"] = "autolevel";
    NextProblemEntryEnum["COLLECTION"] = "collection";
    NextProblemEntryEnum["FAVORITES"] = "favorites";
    NextProblemEntryEnum["NEWEST"] = "newest";
    NextProblemEntryEnum["FRESH"] = "fresh";
    NextProblemEntryEnum["CUSTOM"] = "custom";
    NextProblemEntryEnum["LEVEL_PROGRESS"] = "levelProgress";
    NextProblemEntryEnum["MADE_BY_USER"] = "madeByUser";
    NextProblemEntryEnum["SPEED"] = "speed";
    NextProblemEntryEnum["SET"] = "set";
    NextProblemEntryEnum["FILTER"] = "filter";
    NextProblemEntryEnum["TRAINING"] = "training";
})(NextProblemEntryEnum || (NextProblemEntryEnum = {}));
export var TournamentRuleset;
(function (TournamentRuleset) {
    TournamentRuleset["SolvingRoyale"] = "solving_royale";
})(TournamentRuleset || (TournamentRuleset = {}));
export var TournamentStatus;
(function (TournamentStatus) {
    TournamentStatus["Scheduled"] = "scheduled";
    TournamentStatus["Running"] = "running";
    TournamentStatus["Cancelled"] = "cancelled";
    TournamentStatus["Finished"] = "finished";
})(TournamentStatus || (TournamentStatus = {}));
export var TournamentVisibility;
(function (TournamentVisibility) {
    TournamentVisibility[TournamentVisibility["Public"] = 1] = "Public";
    TournamentVisibility[TournamentVisibility["Private"] = 2] = "Private";
})(TournamentVisibility || (TournamentVisibility = {}));
export var TournamentPlayerStatus;
(function (TournamentPlayerStatus) {
    TournamentPlayerStatus[TournamentPlayerStatus["Active"] = 1] = "Active";
    TournamentPlayerStatus[TournamentPlayerStatus["Eliminated"] = 2] = "Eliminated";
    TournamentPlayerStatus[TournamentPlayerStatus["Winner"] = 3] = "Winner";
})(TournamentPlayerStatus || (TournamentPlayerStatus = {}));
export var TournamentChatContentType;
(function (TournamentChatContentType) {
    TournamentChatContentType["TEXT"] = "text";
    TournamentChatContentType["SYSTEM"] = "system";
})(TournamentChatContentType || (TournamentChatContentType = {}));
export var ProblemContextEnum;
(function (ProblemContextEnum) {
    ProblemContextEnum["UNKNOWN"] = "?";
    ProblemContextEnum["SINGLE_PROBLEM"] = ".";
    ProblemContextEnum["RUSH"] = "r";
    ProblemContextEnum["UNTIMED_RUSH"] = "u";
    ProblemContextEnum["TIME_TRIAL"] = "t";
    ProblemContextEnum["COLLECTION_TEST"] = "c";
    ProblemContextEnum["MULTIPLAYER"] = "m";
    ProblemContextEnum["TRAINING"] = "s";
})(ProblemContextEnum || (ProblemContextEnum = {}));
export var CommentGenreEnum;
(function (CommentGenreEnum) {
    CommentGenreEnum["COMMENT"] = "comment";
    CommentGenreEnum["CORRECT"] = "correct";
    CommentGenreEnum["WRONG"] = "wrong";
    CommentGenreEnum["QUESTION"] = "question";
})(CommentGenreEnum || (CommentGenreEnum = {}));
export var SiteBannerVariantEnum;
(function (SiteBannerVariantEnum) {
    SiteBannerVariantEnum["PRIMARY"] = "primary";
    SiteBannerVariantEnum["SECONDARY"] = "secondary";
    SiteBannerVariantEnum["SUCCESS"] = "success";
    SiteBannerVariantEnum["DANGER"] = "danger";
    SiteBannerVariantEnum["WARNING"] = "warning";
    SiteBannerVariantEnum["INFO"] = "info";
    SiteBannerVariantEnum["DARK"] = "dark";
    SiteBannerVariantEnum["LIGHT"] = "light";
})(SiteBannerVariantEnum || (SiteBannerVariantEnum = {}));
export var FeatureName;
(function (FeatureName) {
    FeatureName["Tournament"] = "tournament";
})(FeatureName || (FeatureName = {}));
export var ProblemCollectionGroupEnum;
(function (ProblemCollectionGroupEnum) {
    ProblemCollectionGroupEnum["STYLE"] = "Style";
    ProblemCollectionGroupEnum["COLLECTION"] = "Collection";
    ProblemCollectionGroupEnum["SEQUENCE"] = "Sequence";
    ProblemCollectionGroupEnum["TESUJI"] = "Tesuji";
    ProblemCollectionGroupEnum["JOSEKI"] = "Joseki";
})(ProblemCollectionGroupEnum || (ProblemCollectionGroupEnum = {}));
export var ProblemPublishStatusEnum;
(function (ProblemPublishStatusEnum) {
    ProblemPublishStatusEnum["DELETED"] = "deleted";
    ProblemPublishStatusEnum["SANDBOX"] = "sandbox";
    ProblemPublishStatusEnum["LIVE"] = "live";
})(ProblemPublishStatusEnum || (ProblemPublishStatusEnum = {}));
export var CompressedPathChangeType;
(function (CompressedPathChangeType) {
    CompressedPathChangeType["Add"] = "add";
    CompressedPathChangeType["Delete"] = "delete";
})(CompressedPathChangeType || (CompressedPathChangeType = {}));
export var NodeChangeType;
(function (NodeChangeType) {
    NodeChangeType["Result"] = "result";
    NodeChangeType["Choice"] = "choice";
    NodeChangeType["Target"] = "target";
    NodeChangeType["NotThis"] = "not_this";
})(NodeChangeType || (NodeChangeType = {}));
export var SgfDiffType;
(function (SgfDiffType) {
    SgfDiffType["Add"] = "Add";
    SgfDiffType["Choice"] = "Choice";
    SgfDiffType["Comment"] = "Comment";
    SgfDiffType["Delete"] = "Delete";
    SgfDiffType["Force"] = "Force";
    SgfDiffType["Markup"] = "Markup";
    SgfDiffType["NotThis"] = "Not This";
    SgfDiffType["Result"] = "Result";
    SgfDiffType["Setup"] = "Setup";
})(SgfDiffType || (SgfDiffType = {}));
export var SortBy;
(function (SortBy) {
    SortBy["CreatedAt"] = "p.createdAt";
    SortBy["Elo"] = "p.elo";
    SortBy["Genre"] = "p.genre";
    SortBy["Stars"] = "p.stars";
    SortBy["Random"] = "RAND()";
})(SortBy || (SortBy = {}));
export var SortDirection;
(function (SortDirection) {
    SortDirection["Asc"] = "asc";
    SortDirection["Desc"] = "desc";
})(SortDirection || (SortDirection = {}));
export var ProblemDraftStatus;
(function (ProblemDraftStatus) {
    ProblemDraftStatus["New"] = "new";
    ProblemDraftStatus["Pending"] = "pending";
    ProblemDraftStatus["Approved"] = "approved";
    ProblemDraftStatus["Rejected"] = "rejected";
    ProblemDraftStatus["Incomplete"] = "incomplete";
    ProblemDraftStatus["Duplicate"] = "duplicate";
    ProblemDraftStatus["Invalid"] = "invalid";
})(ProblemDraftStatus || (ProblemDraftStatus = {}));
//# sourceMappingURL=enum.js.map