import type { AuthUser } from '../contracts/auth.js';
export type LoginRequest = {
    username: string;
    password: string;
};
export type LoginResponse = {
    token: string;
    refresh_token: string;
    refresh_token_expiration?: number | null;
    user: AuthUser;
};
export type RegisterStatusResponse = {
    allowed: boolean;
    solveLink?: string | null;
};
export type RegisterRequest = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
};
export type RegisterResponse = {
    success: boolean;
    message?: string;
};
export type ForgotPasswordRequest = {
    login?: string;
    email?: string;
};
export type ForgotPasswordResponse = {
    success: boolean;
    message?: string;
};
export type ChangePasswordRequest = {
    password: string;
    passwordConfirm: string;
};
export type ChangePasswordResponse = {
    success: boolean;
    message?: string;
};
export type ForgotUsernameRequest = {
    email: string;
};
export type ForgotUsernameResponse = {
    message?: string;
};
export declare const authApi: import("@reduxjs/toolkit/query").Api<import("./index.js").ApiBaseQuery, {
    login: import("@reduxjs/toolkit/query").MutationDefinition<LoginRequest, import("./index.js").ApiBaseQuery, never, LoginResponse, "apiV1", unknown>;
    registerStatus: import("@reduxjs/toolkit/query").QueryDefinition<void, import("./index.js").ApiBaseQuery, never, RegisterStatusResponse, "apiV1", unknown>;
    register: import("@reduxjs/toolkit/query").MutationDefinition<RegisterRequest, import("./index.js").ApiBaseQuery, never, RegisterResponse, "apiV1", unknown>;
    forgotPassword: import("@reduxjs/toolkit/query").MutationDefinition<ForgotPasswordRequest, import("./index.js").ApiBaseQuery, never, ForgotPasswordResponse, "apiV1", unknown>;
    changePassword: import("@reduxjs/toolkit/query").MutationDefinition<ChangePasswordRequest & {
        code: string;
    }, import("./index.js").ApiBaseQuery, never, ChangePasswordResponse, "apiV1", unknown>;
    forgotUsername: import("@reduxjs/toolkit/query").MutationDefinition<ForgotUsernameRequest, import("./index.js").ApiBaseQuery, never, ForgotUsernameResponse, "apiV1", unknown>;
}, "apiV1", never, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;
export declare const useLoginMutation: typeof authApi.useLoginMutation, useRegisterStatusQuery: typeof authApi.useRegisterStatusQuery, useRegisterMutation: typeof authApi.useRegisterMutation, useForgotPasswordMutation: typeof authApi.useForgotPasswordMutation, useChangePasswordMutation: typeof authApi.useChangePasswordMutation, useForgotUsernameMutation: typeof authApi.useForgotUsernameMutation;
//# sourceMappingURL=auth.d.ts.map