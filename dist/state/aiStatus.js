import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    avail: false,
    statusText: 'analysis_client.initializing',
    log: '',
    visits: 500,
};
export const aiStatusSlice = createSlice({
    name: 'aiStatus',
    initialState,
    reducers: {
        setAvail(state, action) {
            state.avail = action.payload;
        },
        setStatusText(state, action) {
            state.statusText = action.payload;
        },
        setLog(state, action) {
            state.log = action.payload;
        },
        setVisits(state, action) {
            state.visits = action.payload;
        },
    },
});
//# sourceMappingURL=aiStatus.js.map