import {apiV2} from './index.js';
import qs from 'qs';
import {
    Tournament,
    TournamentMinimal,
    JoinTournamentRequestBody,
    LeaveTournamentRequestBody,
    TournamentProblemAttempt,
    TournamentRoundProblem,
    TournamentsRequest,
    EntriesResponse,
    RoundWithProblems,
    ScheduleTournamentRequestBody,
    PostTournamentChatMessage,
    TournamentChatMessage,
    TournamentSummary,
} from '../contracts/index.js';

export const tournamentsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchTournaments: builder.query<
            EntriesResponse<TournamentMinimal>,
            TournamentsRequest
        >({
            query: params => ({
                url: `/tournaments${qs.stringify(params, {addQueryPrefix: true})}`,
            }),
        }),
        fetchTournamentSummary: builder.query<TournamentSummary, void>({
            query: () => ({url: '/tournaments/summary'}),
        }),
        fetchTournament: builder.query<Tournament, string | number | undefined>(
            {
                query: id => ({url: `/tournaments/${id}`}),
            }
        ),
        createTournament: builder.mutation<
            Tournament,
            ScheduleTournamentRequestBody
        >({
            query: body => ({
                url: '/tournaments',
                method: 'POST',
                body,
            }),
        }),
        updateTournament: builder.mutation<
            Tournament,
            {id: number | string; body: ScheduleTournamentRequestBody}
        >({
            query: ({id, body}) => ({
                url: `/tournaments/${id}`,
                method: 'PUT',
                body,
            }),
        }),
        joinTournament: builder.mutation<Tournament, JoinTournamentRequestBody>(
            {
                query: ({id}) => ({
                    url: `/tournaments/${id}/players`,
                    method: 'POST',
                }),
            }
        ),
        leaveTournament: builder.mutation<
            Tournament,
            LeaveTournamentRequestBody
        >({
            query: ({id}) => ({
                url: `/tournaments/${id}/players?`,
                method: 'DELETE',
            }),
        }),
        fetchTournamentAttempts: builder.query<
            {entries: TournamentProblemAttempt[]; totalRecords: number},
            {
                tournamentId: number | string;
                criteria: {
                    limit?: number;
                    offset?: number;
                    sortDirection?: 'asc' | 'desc';
                    sortBy?: string;
                    tournamentPlayerId?: number | string;
                    tournamentRoundId?: number | string;
                };
            }
        >({
            query: ({tournamentId, criteria}) => ({
                url: `/tournaments/${tournamentId}/attempts${qs.stringify(
                    {
                        criteria: criteria,
                    },
                    {addQueryPrefix: true}
                )}`,
            }),
        }),
        fetchTournamentRounds: builder.query<
            RoundWithProblems[],
            {
                tournamentId: number | string;
            }
        >({
            query: ({tournamentId}) => ({
                url: `/tournaments/${tournamentId}/rounds`,
            }),
        }),
        fetchRoundProblems: builder.query<
            TournamentRoundProblem[],
            number | string | undefined
        >({
            query: id => ({
                url: `/tournament-rounds/${id}/problems`,
            }),
        }),
        postTournamentProblemAttempt: builder.mutation<
            void,
            {
                id: number | string;
                body: {
                    solved: boolean;
                    solveTime: number;
                    path: string;
                    moveTimes?: number[];
                };
            }
        >({
            query: ({id, body}) => ({
                url: `/tournament-problems/${id}/attempts`,
                method: 'POST',
                body,
            }),
        }),
        postTournamentChatMessage: builder.mutation<
            TournamentChatMessage,
            {
                tournamentId: number | string;
                body: PostTournamentChatMessage;
            }
        >({
            query: ({tournamentId, body}) => ({
                url: `/tournaments/${tournamentId}/chat`,
                method: 'POST',
                body,
            }),
        }),
        fetchTournamentChatMessages: builder.query<
            TournamentChatMessage[],
            number | string | undefined
        >({
            query: id => ({
                url: `/tournaments/${id}/chat-messages`,
            }),
        }),
    }),
});

export const {
    useFetchTournamentQuery,
    useLazyFetchTournamentQuery,
    useFetchTournamentsQuery,
    useFetchTournamentSummaryQuery,
    useJoinTournamentMutation,
    useLeaveTournamentMutation,
    useFetchTournamentRoundsQuery,
    useFetchTournamentAttemptsQuery,
    useFetchRoundProblemsQuery,
    usePostTournamentProblemAttemptMutation,
    useCreateTournamentMutation,
    useUpdateTournamentMutation,
    usePostTournamentChatMessageMutation,
    useFetchTournamentChatMessagesQuery,
} = tournamentsApi;
