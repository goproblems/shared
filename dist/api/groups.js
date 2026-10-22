import { apiV2 } from './index.js';
const invalidateGroupsOnSuccess = (_result, error) => error ? [] : ['Groups'];
export const groupsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchGroups: builder.query({
            query: ({ q }) => `/groups?q=${encodeURIComponent(q)}`,
            providesTags: ['Groups'],
        }),
        fetchGroup: builder.query({
            query: groupId => `/groups/${groupId}`,
            providesTags: ['Groups'],
        }),
        fetchMyGroups: builder.query({
            query: () => '/groups/my',
            providesTags: ['Groups'],
        }),
        fetchGroupSummary: builder.query({
            query: () => '/groups/public-summary',
            providesTags: ['Groups'],
        }),
        fetchGroupMembers: builder.query({
            query: ({ id: groupId, criteria }) => ({
                url: `/groups/${groupId}/members`,
                method: 'POST',
                body: criteria,
            }),
        }),
        createGroup: builder.mutation({
            invalidatesTags: invalidateGroupsOnSuccess,
            query: body => ({
                url: '/groups',
                method: 'POST',
                body,
            }),
        }),
        updateGroup: builder.mutation({
            query: ({ id: groupId, data: body }) => ({
                url: `/groups/${groupId}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: invalidateGroupsOnSuccess,
        }),
        deleteGroup: builder.mutation({
            invalidatesTags: invalidateGroupsOnSuccess,
            query: groupId => ({
                url: `/groups/${groupId}`,
                method: 'DELETE',
            }),
        }),
        joinGroup: builder.mutation({
            query: ({ id: groupId, data: body }) => ({
                url: `/groups/${groupId}/join`,
                method: 'POST',
                body,
            }),
            invalidatesTags: invalidateGroupsOnSuccess,
        }),
        leaveGroup: builder.mutation({
            invalidatesTags: invalidateGroupsOnSuccess,
            query: groupId => ({
                url: `/groups/${groupId}/leave`,
                method: 'POST',
            }),
        }),
    }),
});
export const { useFetchGroupsQuery, useFetchGroupQuery, useLazyFetchGroupQuery, useLazyFetchGroupsQuery, useFetchGroupSummaryQuery, useFetchMyGroupsQuery, useFetchGroupMembersQuery, useCreateGroupMutation, useUpdateGroupMutation, useDeleteGroupMutation, useJoinGroupMutation, useLeaveGroupMutation, } = groupsApi;
//# sourceMappingURL=groups.js.map