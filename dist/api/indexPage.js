import { apiV2 } from './index.js';
import qs from 'qs';
export const indexPageApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchProblemsOfTheDay: builder.query({
            query: () => '/problems/daily',
            providesTags: ['Index'],
        }),
        fetchProblemsOfTheDayStatus: builder.query({
            query: () => '/problems/daily/status',
            providesTags: ['Index'],
        }),
        fetchCollectionProgress: builder.query({
            query: limit => `/collections/progress${qs.stringify({ limit }, { addQueryPrefix: true })}`,
            providesTags: ['Index'],
        }),
        fetchNewestProblems: builder.query({
            query: () => '/problems/newest',
            providesTags: ['Index'],
        }),
        fetchPracticeProblems: builder.query({
            query: () => '/problems/practice',
            providesTags: ['Index'],
        }),
        fetchRecommendProblems: builder.query({
            query: () => '/problems/recommended',
            providesTags: ['Index'],
        }),
        fetchNeedRatingProblems: builder.query({
            query: () => '/problems/need-rating?limit=10&offset=0&sortBy=tries&sortDirection=desc',
            providesTags: ['Index'],
        }),
        createTimeTrial: builder.mutation({
            query(body) {
                return {
                    url: '/time-trials',
                    method: 'POST',
                    body,
                };
            },
        }),
    }),
});
export const { useFetchProblemsOfTheDayQuery, useFetchProblemsOfTheDayStatusQuery, useCreateTimeTrialMutation, useFetchCollectionProgressQuery, useFetchNewestProblemsQuery, useFetchPracticeProblemsQuery, useFetchNeedRatingProblemsQuery, useFetchRecommendProblemsQuery, } = indexPageApi;
//# sourceMappingURL=indexPage.js.map