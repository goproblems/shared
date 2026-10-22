import { createSlice } from '@reduxjs/toolkit';
import { SiteStyle } from '../contracts/auth.js';
export const initialAuthState = {
    token: null,
    refresh_token: null,
    refresh_token_expiration: null,
    user: null,
};
export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setAuth: (state, action) => {
            const nextState = {
                ...initialAuthState,
                ...state,
                ...action.payload,
                refresh_token_expiration: Object.prototype.hasOwnProperty.call(action.payload, 'refresh_token_expiration')
                    ? (action.payload.refresh_token_expiration ?? null)
                    : (state.refresh_token_expiration ?? null),
            };
            return nextState;
        },
        updatePreferences: (state, action) => {
            if (!state.user)
                return;
            const currentPreferences = state.user.preferences ?? {
                betaEnabled: false,
                ratedMode: true,
                siteStyle: SiteStyle.DEFAULT,
                theme: state.user.theme,
            };
            const nextPreferences = {
                betaEnabled: action.payload.betaEnabled ??
                    currentPreferences.betaEnabled,
                ratedMode: action.payload.ratedMode ?? currentPreferences.ratedMode,
                siteStyle: action.payload.siteStyle ?? currentPreferences.siteStyle,
                theme: action.payload.theme ??
                    currentPreferences.theme ??
                    state.user.theme,
            };
            return {
                ...state,
                user: {
                    ...state.user,
                    theme: nextPreferences.theme,
                    preferences: nextPreferences,
                },
            };
        },
        logout: () => initialAuthState,
    },
});
//# sourceMappingURL=auth.js.map