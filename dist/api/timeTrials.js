import { apiV2 } from './index.js';
export const timeTrialsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        resumeTimeTrial: builder.mutation({
            query: ({ id, advanceFromProblemId }) => ({
                url: `/time-trials/${id}/resume`,
                method: 'POST',
                body: { advanceFromProblemId },
            }),
        }),
        postTimeTrialResult: builder.mutation({
            query: ({ id, path, solved, solveTime, moveTimes, solveTimeMs, durationMs, }) => ({
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
        resignTimeTrial: builder.mutation({
            query: id => ({
                url: `/time-trials/${id}/resign`,
                method: 'POST',
            }),
        }),
        fetchTimeTrialResult: builder.query({
            query: id => ({
                url: `/time-trials/${id}/result`,
                method: 'GET',
            }),
        }),
        fetchTimeTrialSummary: builder.query({
            query: () => '/time-trials/summary',
        }),
    }),
});
export const { useResumeTimeTrialMutation, usePostTimeTrialResultMutation, useResignTimeTrialMutation, useFetchTimeTrialResultQuery, useFetchTimeTrialSummaryQuery, } = timeTrialsApi;
//# sourceMappingURL=timeTrials.js.map