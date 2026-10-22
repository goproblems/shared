import {apiV2} from './index.js';
import type {Level} from '../contracts/levels.js';

export const levelsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        getLevels: builder.query<Level[], void>({
            query: () => '/levels',
        }),
    }),
});

export const {useGetLevelsQuery} = levelsApi;
