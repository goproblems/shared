import { apiV2 } from './index.js';
import qs from 'qs';
export const tournamentsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchTournaments: builder.query({
            query: params => ({
                url: `/tournaments${qs.stringify(params, { addQueryPrefix: true })}`,
            }),
        }),
        fetchTournamentSummary: builder.query({
            query: () => ({ url: '/tournaments/summary' }),
        }),
        fetchTournament: builder.query({
            query: id => ({ url: `/tournaments/${id}` }),
        }),
        createTournament: builder.mutation({
            query: body => ({
                url: '/tournaments',
                method: 'POST',
                body,
            }),
        }),
        updateTournament: builder.mutation({
            query: ({ id, body }) => ({
                url: `/tournaments/${id}`,
                method: 'PUT',
                body,
            }),
        }),
        joinTournament: builder.mutation({
            query: ({ id }) => ({
                url: `/tournaments/${id}/players`,
                method: 'POST',
            }),
        }),
        leaveTournament: builder.mutation({
            query: ({ id }) => ({
                url: `/tournaments/${id}/players?`,
                method: 'DELETE',
            }),
        }),
        fetchTournamentAttempts: builder.query({
            query: ({ tournamentId, criteria }) => ({
                url: `/tournaments/${tournamentId}/attempts${qs.stringify({
                    criteria: criteria,
                }, { addQueryPrefix: true })}`,
            }),
        }),
        fetchTournamentRounds: builder.query({
            query: ({ tournamentId }) => ({
                url: `/tournaments/${tournamentId}/rounds`,
            }),
        }),
        fetchRoundProblems: builder.query({
            query: id => ({
                url: `/tournament-rounds/${id}/problems`,
            }),
        }),
        postTournamentProblemAttempt: builder.mutation({
            query: ({ id, body }) => ({
                url: `/tournament-problems/${id}/attempts`,
                method: 'POST',
                body,
            }),
        }),
        postTournamentChatMessage: builder.mutation({
            query: ({ tournamentId, body }) => ({
                url: `/tournaments/${tournamentId}/chat`,
                method: 'POST',
                body,
            }),
        }),
        fetchTournamentChatMessages: builder.query({
            query: id => ({
                url: `/tournaments/${id}/chat-messages`,
            }),
        }),
    }),
});
export const { useFetchTournamentQuery, useLazyFetchTournamentQuery, useFetchTournamentsQuery, useFetchTournamentSummaryQuery, useJoinTournamentMutation, useLeaveTournamentMutation, useFetchTournamentRoundsQuery, useFetchTournamentAttemptsQuery, useFetchRoundProblemsQuery, usePostTournamentProblemAttemptMutation, useCreateTournamentMutation, useUpdateTournamentMutation, usePostTournamentChatMessageMutation, useFetchTournamentChatMessagesQuery, } = tournamentsApi;
//# sourceMappingURL=tournaments.js.map