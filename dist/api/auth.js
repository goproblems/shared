import { apiV1 } from './index.js';
export const authApi = apiV1.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: body => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
        }),
        registerStatus: builder.query({
            query: () => '/auth/register/status',
        }),
        register: builder.mutation({
            query: body => ({
                url: '/auth/register',
                method: 'POST',
                body,
            }),
        }),
        forgotPassword: builder.mutation({
            query: body => ({
                url: '/auth/forgot-password',
                method: 'POST',
                body,
            }),
        }),
        changePassword: builder.mutation({
            query: ({ code, ...body }) => ({
                url: `/auth/change-password/${code}`,
                method: 'POST',
                body,
            }),
        }),
        forgotUsername: builder.mutation({
            query: body => ({
                url: '/forgot-username',
                method: 'POST',
                body,
            }),
        }),
    }),
});
export const { useLoginMutation, useRegisterStatusQuery, useRegisterMutation, useForgotPasswordMutation, useChangePasswordMutation, useForgotUsernameMutation, } = authApi;
//# sourceMappingURL=auth.js.map