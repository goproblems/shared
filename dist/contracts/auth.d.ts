export declare enum SiteStyle {
    DEFAULT = "default",
    GAME = "game"
}
export type ThemeMode = 'light' | 'dark' | 'system';
export type UserPreferences = {
    betaEnabled: boolean;
    ratedMode: boolean;
    siteStyle: SiteStyle;
    theme: ThemeMode;
};
export type UserPreferencesRequest = Partial<UserPreferences>;
export type AuthUser = {
    id: number;
    name: string;
    language: string;
    pro: boolean;
    tranny: string;
    elo: number;
    eloLevel: string;
    isEditor: boolean;
    isTranslator: boolean;
    isAdmin: boolean;
    isImpersonator: boolean;
    canRateProblems: boolean;
    theme: ThemeMode;
    gobits: number;
    preferences?: UserPreferences;
};
export type AuthState = {
    token: string | null;
    refresh_token: string | null;
    refresh_token_expiration: number | null;
    user: AuthUser | null;
};
//# sourceMappingURL=auth.d.ts.map