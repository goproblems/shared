import {apiV2} from './index.js';
import {
    TimeTrialResponse,
    PostTimeTrialResultRequest,
    TimeTrial,
    TimeTrialResultView,
    TimeTrialSummaryResponse,
} from '../contracts/index.js';

export const timeTrialsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        resumeTimeTrial: builder.mutation<
            TimeTrial,
            {id: number | string; advanceFromProblemId?: number}
        >({
            query: ({id, advanceFromProblemId}) => ({
                url: `/time-trials/${id}/resume`,
                method: 'POST',
                body: {advanceFromProblemId},
            }),
        }),
        postTimeTrialResult: builder.mutation<
            TimeTrialResponse,
            PostTimeTrialResultRequest
        >({
            query: ({
                id,
                path,
                solved,
                solveTime,
                moveTimes,
                solveTimeMs,
                durationMs,
            }) => ({
                url: `/time-trials/${id}/result`,
                method: 'POST',
                body: {
                    id,
                    path,
                    solved,
                    solveTime,
                    moveTimes,
                    solveTimeMs,
                    durationMs,
                },
            }),
        }),
        resignTimeTrial: builder.mutation<void, string | number>({
            query: id => ({
                url: `/time-trials/${id}/resign`,
                method: 'POST',
            }),
        }),
        fetchTimeTrialResult: builder.query<
            TimeTrialResultView,
            number | string
        >({
            query: id => ({
                url: `/time-trials/${id}/result`,
                method: 'GET',
            }),
        }),
        fetchTimeTrialSummary: builder.query<TimeTrialSummaryResponse, void>({
            query: () => '/time-trials/summary',
        }),
    }),
});

export const {
    useResumeTimeTrialMutation,
    usePostTimeTrialResultMutation,
    useResignTimeTrialMutation,
    useFetchTimeTrialResultQuery,
    useFetchTimeTrialSummaryQuery,
} = timeTrialsApi;
