import { apiV2 } from './index.js';
import qs from 'qs';
export const collectionTestsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        createCollectionTest: builder.mutation({
            query: body => ({
                url: '/collection-tests',
                method: 'POST',
                body,
            }),
        }),
        resumeCollectionTest: builder.mutation({
            query: id => ({
                url: `/collection-tests/${id}/resume`,
                method: 'POST',
            }),
        }),
        postCollectionTestResult: builder.mutation({
            query: ({ id, solved, path, durationMs, moveTimes }) => ({
                url: `/collection-tests/${id}/result`,
                method: 'POST',
                body: { solved, path, durationMs, moveTimes },
            }),
        }),
        fetchCollectionTestResult: builder.query({
            query: id => ({
                url: `/collection-tests/${id}/result`,
                method: 'GET',
            }),
        }),
        fetchCollectionTestLeaderboard: builder.query({
            query: ({ collectionId, request }) => ({
                url: `/collection-tests/leaderboard/${collectionId}${qs.stringify(request, { addQueryPrefix: true })}`,
                method: 'GET',
            }),
        }),
        fetchCollectionTests: builder.query({
            query: request => ({
                url: `/collection-tests${qs.stringify(request, { addQueryPrefix: true })}`,
                method: 'GET',
            }),
        }),
        fetchRecentCollectionTestResults: builder.query({
            query: () => ({
                url: '/collection-tests/recent-results',
                method: 'GET',
            }),
        }),
    }),
});
export const { useCreateCollectionTestMutation, useResumeCollectionTestMutation, usePostCollectionTestResultMutation, useFetchCollectionTestResultQuery, useFetchCollectionTestLeaderboardQuery, useFetchCollectionTestsQuery, useFetchRecentCollectionTestResultsQuery, } = collectionTestsApi;
//# sourceMappingURL=collectionTests.js.map