import { apiV2 } from './index.js';
import { VoteTypeEnum, } from '../contracts/index.js';
export const votesApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        addVote: builder.mutation({
            query: ({ entityType, entityId, voteType }) => ({
                url: voteType === VoteTypeEnum.UPVOTE
                    ? '/votes/upvote'
                    : '/votes/downvote',
                method: 'POST',
                body: {
                    entityType,
                    entityId,
                },
            }),
        }),
        toggleVote: builder.mutation({
            query: ({ entityType, entityId, voteType }) => ({
                url: voteType === VoteTypeEnum.UPVOTE
                    ? '/votes/upvote/toggle'
                    : '/votes/downvote/toggle',
                method: 'POST',
                body: {
                    entityType,
                    entityId,
                },
            }),
        }),
        removeVote: builder.mutation({
            query: ({ entityType, entityId }) => ({
                url: '/votes',
                method: 'DELETE',
                body: {
                    entityType,
                    entityId,
                },
            }),
        }),
        fetchVoteInfo: builder.query({
            query: ({ entityType, entityId }) => `/votes/${entityType}/${entityId}`,
        }),
        fetchBulkVoteInfo: builder.mutation({
            query: ({ entityType, entityIds }) => ({
                url: `/votes/${entityType}/bulk`,
                method: 'POST',
                body: {
                    entityIds,
                },
            }),
        }),
    }),
});
export const { useAddVoteMutation, useToggleVoteMutation, useRemoveVoteMutation, useFetchVoteInfoQuery, useLazyFetchVoteInfoQuery, useFetchBulkVoteInfoMutation, } = votesApi;
//# sourceMappingURL=votes.js.map