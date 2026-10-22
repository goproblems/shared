import type { PayloadAction } from '@reduxjs/toolkit';
export type AiStatus = {
    avail: boolean;
    statusText: string;
    log: string;
    visits: number;
};
export declare const aiStatusSlice: import("@reduxjs/toolkit").Slice<AiStatus, {
    setAvail(state: {
        avail: boolean;
        statusText: string;
        log: string;
        visits: number;
    }, action: PayloadAction<boolean>): void;
    setStatusText(state: {
        avail: boolean;
        statusText: string;
        log: string;
        visits: number;
    }, action: PayloadAction<string>): void;
    setLog(state: {
        avail: boolean;
        statusText: string;
        log: string;
        visits: number;
    }, action: PayloadAction<string>): void;
    setVisits(state: {
        avail: boolean;
        statusText: string;
        log: string;
        visits: number;
    }, action: PayloadAction<number>): void;
}, "aiStatus", "aiStatus", import("@reduxjs/toolkit").SliceSelectors<AiStatus>>;
//# sourceMappingURL=aiStatus.d.ts.map