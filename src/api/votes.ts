import {apiV2} from './index.js';
import {
    VoteTypeEnum,
    UnifiedVoteRequest,
    UnifiedToggleVoteRequest,
    UnifiedRemoveVoteRequest,
    UnifiedVoteInfoRequest,
    BulkVoteInfoRequest,
    VoteInfoResponse,
    BulkVoteInfoResponse,
} from '../contracts/index.js';

export const votesApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        addVote: builder.mutation<VoteInfoResponse, UnifiedVoteRequest>({
            query: ({entityType, entityId, voteType}) => ({
                url:
                    voteType === VoteTypeEnum.UPVOTE
                        ? '/votes/upvote'
                        : '/votes/downvote',
                method: 'POST',
                body: {
                    entityType,
                    entityId,
                },
            }),
        }),
        toggleVote: builder.mutation<
            VoteInfoResponse,
            UnifiedToggleVoteRequest
        >({
            query: ({entityType, entityId, voteType}) => ({
                url:
                    voteType === VoteTypeEnum.UPVOTE
                        ? '/votes/upvote/toggle'
                        : '/votes/downvote/toggle',
                method: 'POST',
                body: {
                    entityType,
                    entityId,
                },
            }),
        }),
        removeVote: builder.mutation<
            VoteInfoResponse,
            UnifiedRemoveVoteRequest
        >({
            query: ({entityType, entityId}) => ({
                url: '/votes',
                method: 'DELETE',
                body: {
                    entityType,
                    entityId,
                },
            }),
        }),
        fetchVoteInfo: builder.query<VoteInfoResponse, UnifiedVoteInfoRequest>({
            query: ({entityType, entityId}) =>
                `/votes/${entityType}/${entityId}`,
        }),
        fetchBulkVoteInfo: builder.mutation<
            BulkVoteInfoResponse,
            BulkVoteInfoRequest
        >({
            query: ({entityType, entityIds}) => ({
                url: `/votes/${entityType}/bulk`,
                method: 'POST',
                body: {
                    entityIds,
                },
            }),
        }),
    }),
});

export const {
    useAddVoteMutation,
    useToggleVoteMutation,
    useRemoveVoteMutation,
    useFetchVoteInfoQuery,
    useLazyFetchVoteInfoQuery,
    useFetchBulkVoteInfoMutation,
} = votesApi;
