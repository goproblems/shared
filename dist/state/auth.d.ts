import type { PayloadAction } from '@reduxjs/toolkit';
import { SiteStyle } from '../contracts/auth.js';
import type { AuthState, UserPreferences, UserPreferencesRequest } from '../contracts/auth.js';
export declare const initialAuthState: AuthState;
export declare const authSlice: import("@reduxjs/toolkit").Slice<AuthState, {
    setAuth: (state: {
        token: string | null;
        refresh_token: string | null;
        refresh_token_expiration: number | null;
        user: {
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
            theme: import("../contracts/auth.js").ThemeMode;
            gobits: number;
            preferences?: {
                betaEnabled: boolean;
                ratedMode: boolean;
                siteStyle: SiteStyle;
                theme: import("../contracts/auth.js").ThemeMode;
            } | undefined;
        } | null;
    }, action: PayloadAction<Partial<AuthState>>) => AuthState;
    updatePreferences: (state: {
        token: string | null;
        refresh_token: string | null;
        refresh_token_expiration: number | null;
        user: {
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
            theme: import("../contracts/auth.js").ThemeMode;
            gobits: number;
            preferences?: {
                betaEnabled: boolean;
                ratedMode: boolean;
                siteStyle: SiteStyle;
                theme: import("../contracts/auth.js").ThemeMode;
            } | undefined;
        } | null;
    }, action: PayloadAction<UserPreferencesRequest>) => {
        user: {
            theme: import("../contracts/auth.js").ThemeMode;
            preferences: UserPreferences;
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
            gobits: number;
        };
        token: string | null;
        refresh_token: string | null;
        refresh_token_expiration: number | null;
    } | undefined;
    logout: () => AuthState;
}, "auth", "auth", import("@reduxjs/toolkit").SliceSelectors<AuthState>>;
//# sourceMappingURL=auth.d.ts.map