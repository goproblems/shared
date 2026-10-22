import {apiV2} from './index.js';
import qs from 'qs';
import {
    CollectionTest,
    CollectionTestLeaderboardRequest,
    CollectionTestLeaderboardView,
    CollectionTestMinimalResponse,
    CollectionTestResultView,
    PostCollectionTestRequest,
    PostCollectionTestResultRequest,
    CollectionTestListItem,
    CollectionTestRecentResultEntry,
} from '../contracts/index.js';

export const collectionTestsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        createCollectionTest: builder.mutation<
            CollectionTestMinimalResponse,
            PostCollectionTestRequest
        >({
            query: body => ({
                url: '/collection-tests',
                method: 'POST',
                body,
            }),
        }),
        resumeCollectionTest: builder.mutation<CollectionTest, number | string>(
            {
                query: id => ({
                    url: `/collection-tests/${id}/resume`,
                    method: 'POST',
                }),
            }
        ),
        postCollectionTestResult: builder.mutation<
            CollectionTest,
            PostCollectionTestResultRequest
        >({
            query: ({id, solved, path, durationMs, moveTimes}) => ({
                url: `/collection-tests/${id}/result`,
                method: 'POST',
                body: {solved, path, durationMs, moveTimes},
            }),
        }),
        fetchCollectionTestResult: builder.query<
            CollectionTestResultView,
            number | string
        >({
            query: id => ({
                url: `/collection-tests/${id}/result`,
                method: 'GET',
            }),
        }),
        fetchCollectionTestLeaderboard: builder.query<
            CollectionTestLeaderboardView,
            {
                collectionId: number | string;
                request: CollectionTestLeaderboardRequest;
            }
        >({
            query: ({collectionId, request}) => ({
                url: `/collection-tests/leaderboard/${collectionId}${qs.stringify(request, {addQueryPrefix: true})}`,
                method: 'GET',
            }),
        }),
        fetchCollectionTests: builder.query<
            {entries: CollectionTestListItem[]; totalRecords: number},
            {offset?: number; limit?: number; collectionId?: number}
        >({
            query: request => ({
                url: `/collection-tests${qs.stringify(request, {addQueryPrefix: true})}`,
                method: 'GET',
            }),
        }),
        fetchRecentCollectionTestResults: builder.query<
            {entries: CollectionTestRecentResultEntry[]; totalRecords: number},
            void
        >({
            query: () => ({
                url: '/collection-tests/recent-results',
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useCreateCollectionTestMutation,
    useResumeCollectionTestMutation,
    usePostCollectionTestResultMutation,
    useFetchCollectionTestResultQuery,
    useFetchCollectionTestLeaderboardQuery,
    useFetchCollectionTestsQuery,
    useFetchRecentCollectionTestResultsQuery,
} = collectionTestsApi;
