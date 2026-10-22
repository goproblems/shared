import {apiV1} from './index.js';
import type {AuthUser} from '../contracts/auth.js';

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

export const authApi = apiV1.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: body => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
        }),
        registerStatus: builder.query<RegisterStatusResponse, void>({
            query: () => '/auth/register/status',
        }),
        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: body => ({
                url: '/auth/register',
                method: 'POST',
                body,
            }),
        }),
        forgotPassword: builder.mutation<
            ForgotPasswordResponse,
            ForgotPasswordRequest
        >({
            query: body => ({
                url: '/auth/forgot-password',
                method: 'POST',
                body,
            }),
        }),
        changePassword: builder.mutation<
            ChangePasswordResponse,
            ChangePasswordRequest & {code: string}
        >({
            query: ({code, ...body}) => ({
                url: `/auth/change-password/${code}`,
                method: 'POST',
                body,
            }),
        }),
        forgotUsername: builder.mutation<
            ForgotUsernameResponse,
            ForgotUsernameRequest
        >({
            query: body => ({
                url: '/forgot-username',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterStatusQuery,
    useRegisterMutation,
    useForgotPasswordMutation,
    useChangePasswordMutation,
    useForgotUsernameMutation,
} = authApi;
