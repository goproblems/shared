import {apiV2} from './index.js';
import {
    CreateGroupRequest,
    EditGroupRequest,
    JoinGroupRequest,
    Group,
    JoinedUser,
    Criteria,
    EntriesResponse,
    JoinedGroup,
    GroupSummary,
} from '../contracts/index.js';

const invalidateGroupsOnSuccess = (_result: unknown, error: unknown) =>
    error ? [] : (['Groups'] as const);

export const groupsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchGroups: builder.query<Group[], {q: string}>({
            query: ({q}) => `/groups?q=${encodeURIComponent(q)}`,
            providesTags: ['Groups'],
        }),
        fetchGroup: builder.query<Group, number | string>({
            query: groupId => `/groups/${groupId}`,
            providesTags: ['Groups'],
        }),
        fetchMyGroups: builder.query<JoinedGroup[], void>({
            query: () => '/groups/my',
            providesTags: ['Groups'],
        }),
        fetchGroupSummary: builder.query<GroupSummary, void>({
            query: () => '/groups/public-summary',
            providesTags: ['Groups'],
        }),
        fetchGroupMembers: builder.query<
            EntriesResponse<JoinedUser>,
            {id: number | string; criteria: Criteria}
        >({
            query: ({id: groupId, criteria}) => ({
                url: `/groups/${groupId}/members`,
                method: 'POST',
                body: criteria,
            }),
        }),
        createGroup: builder.mutation<Group, CreateGroupRequest>({
            invalidatesTags: invalidateGroupsOnSuccess,
            query: body => ({
                url: '/groups',
                method: 'POST',
                body,
            }),
        }),
        updateGroup: builder.mutation<
            Group,
            {id: number | string; data: EditGroupRequest}
        >({
            query: ({id: groupId, data: body}) => ({
                url: `/groups/${groupId}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: invalidateGroupsOnSuccess,
        }),
        deleteGroup: builder.mutation<Group, number | string>({
            invalidatesTags: invalidateGroupsOnSuccess,
            query: groupId => ({
                url: `/groups/${groupId}`,
                method: 'DELETE',
            }),
        }),
        joinGroup: builder.mutation<
            Group,
            {id: number | string; data: JoinGroupRequest}
        >({
            query: ({id: groupId, data: body}) => ({
                url: `/groups/${groupId}/join`,
                method: 'POST',
                body,
            }),
            invalidatesTags: invalidateGroupsOnSuccess,
        }),
        leaveGroup: builder.mutation<Group, number>({
            invalidatesTags: invalidateGroupsOnSuccess,
            query: groupId => ({
                url: `/groups/${groupId}/leave`,
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useFetchGroupsQuery,
    useFetchGroupQuery,
    useLazyFetchGroupQuery,
    useLazyFetchGroupsQuery,
    useFetchGroupSummaryQuery,
    useFetchMyGroupsQuery,
    useFetchGroupMembersQuery,
    useCreateGroupMutation,
    useUpdateGroupMutation,
    useDeleteGroupMutation,
    useJoinGroupMutation,
    useLeaveGroupMutation,
} = groupsApi;
