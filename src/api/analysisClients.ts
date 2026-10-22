import {apiV2} from './index.js';

export type AvailableAnalysisClient = {
    clientId: string;
    name: string;
    isOnline: boolean;
    isBusy: boolean;
};

export type AvailableClientsResponse = {
    clients: AvailableAnalysisClient[];
    pendingRequestCount: number;
};

export const analysisClientsApi = apiV2.injectEndpoints({
    endpoints: builder => ({
        fetchAvailableClients: builder.query<AvailableClientsResponse, void>({
            query: () => 'analysis-clients/available',
        }),
    }),
});

export const {useFetchAvailableClientsQuery} = analysisClientsApi;
