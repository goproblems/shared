export enum RankEnum {
    KYU = 'kyu',
    DAN = 'dan',
}

export type Rank = {
    value: number;
    unit: RankEnum;
    exact: boolean;
    mark: boolean;
};

export type Level = {
    level: number | null;
    rank: Rank | null;
    solvedCount: number;
    speedSolvedCount: number;
    speedPlayCount: number;
    totalCount: number;
    triedCount?: number;
    failedCount?: number;
};
