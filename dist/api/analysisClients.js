import { apiV2 } from './index.js';
export const analysisClientsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchAvailableClients: builder.query({
            query: () => 'analysis-clients/available',
        }),
    }),
});
export const { useFetchAvailableClientsQuery } = analysisClientsApi;
//# sourceMappingURL=analysisClients.js.map