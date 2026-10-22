import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type AiStatus = {
    avail: boolean;
    statusText: string;
    log: string;
    visits: number;
};

const initialState: AiStatus = {
    avail: false,
    statusText: 'analysis_client.initializing',
    log: '',
    visits: 500,
};

export const aiStatusSlice = createSlice({
    name: 'aiStatus',
    initialState,
    reducers: {
        setAvail(state, action: PayloadAction<boolean>) {
            state.avail = action.payload;
        },
        setStatusText(state, action: PayloadAction<string>) {
            state.statusText = action.payload;
        },
        setLog(state, action: PayloadAction<string>) {
            state.log = action.payload;
        },
        setVisits(state, action: PayloadAction<number>) {
            state.visits = action.payload;
        },
    },
});
