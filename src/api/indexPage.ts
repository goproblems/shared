import {apiV2} from './index.js';
import {
    CollectionProgress,
    DailyProblemContentResponse,
    DailyProblemStatusResponse,
    ProblemWithSolvesAndTries,
    ProblemMinimal,
    ProblemV2,
    ProblemMinimalWithAuthorAndCreated,
} from '../contracts/index.js';
import qs from 'qs';

export const indexPageApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchProblemsOfTheDay: builder.query<DailyProblemContentResponse, void>({
            query: () => '/problems/daily',
            providesTags: ['Index'],
        }),
        fetchProblemsOfTheDayStatus: builder.query<
            DailyProblemStatusResponse,
            number | null
        >({
            query: () => '/problems/daily/status',
            providesTags: ['Index'],
        }),
        fetchCollectionProgress: builder.query<
            CollectionProgress[],
            number | void
        >({
            query: limit =>
                `/collections/progress${qs.stringify({limit}, {addQueryPrefix: true})}`,
            providesTags: ['Index'],
        }),
        fetchNewestProblems: builder.query<ProblemV2[], void>({
            query: () => '/problems/newest',
            providesTags: ['Index'],
        }),
        fetchPracticeProblems: builder.query<ProblemWithSolvesAndTries[], void>(
            {
                query: () => '/problems/practice',
                providesTags: ['Index'],
            }
        ),
        fetchRecommendProblems: builder.query<
            ProblemMinimalWithAuthorAndCreated[],
            void
        >({
            query: () => '/problems/recommended',
            providesTags: ['Index'],
        }),
        fetchNeedRatingProblems: builder.query<ProblemMinimal[], void>({
            query: () =>
                '/problems/need-rating?limit=10&offset=0&sortBy=tries&sortDirection=desc',
            providesTags: ['Index'],
        }),
        createTimeTrial: builder.mutation<
            {
                id: number;
            },
            {
                level: number;
            }
        >({
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

export const {
    useFetchProblemsOfTheDayQuery,
    useFetchProblemsOfTheDayStatusQuery,
    useCreateTimeTrialMutation,
    useFetchCollectionProgressQuery,
    useFetchNewestProblemsQuery,
    useFetchPracticeProblemsQuery,
    useFetchNeedRatingProblemsQuery,
    useFetchRecommendProblemsQuery,
} = indexPageApi;
