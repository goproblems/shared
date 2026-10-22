import type { SortDirection } from './enum.js';
export declare const PROBLEMS_PAGE_SIZE = 30;
export type FilterProblemsDto = {
    sortBy: string | 'p.createdAt' | 'p.elo' | 'p.genre' | 'p.stars' | 'RAND()';
    sortDirection: SortDirection;
    type?: string;
    limit?: number;
    offset?: number;
    difficultyFrom?: number;
    difficultyFromElo?: number;
    difficultyTo?: number;
    difficultyToElo?: number;
    statuses?: string[];
    genres?: string[];
    flagStatus?: 'all' | 'has_negative_flags';
    ratingFrom?: number;
    ratingTo?: number;
    includeNotRated?: boolean;
    collectionIds?: string[];
    excludedCollectionIds?: string[];
    userId?: number;
    userObject?: {
        label: string;
        value: number;
    } | null;
};
//# sourceMappingURL=form.d.ts.map