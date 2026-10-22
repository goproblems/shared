export type TrainingBucketData = {
    ready: number;
    notReady: number;
};
export type TrainingData = {
    bucket_5m: TrainingBucketData;
    bucket_1h: TrainingBucketData;
    bucket_1d: TrainingBucketData;
    bucket_1w: TrainingBucketData;
    bucket_1mo: TrainingBucketData;
    bucket_1y: TrainingBucketData;
};
export declare enum AchievementType {
    TRAINING_SESSION = "training_session",
    SERIOUS_GAINS = "serious_gains"
}
//# sourceMappingURL=training.d.ts.map