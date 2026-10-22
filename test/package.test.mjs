import assert from 'node:assert/strict';
import test from 'node:test';
import {configureStore} from '@reduxjs/toolkit';
import {apiV1, apiV2} from '@goproblems/shared/api';
import '@goproblems/shared/api/endpoints';
import {authSlice, initialAuthState} from '@goproblems/shared/state/auth';
import {filterNonNull} from '@goproblems/shared/utils/object';

test('published ESM registers endpoints without browser globals', () => {
    assert.equal(typeof apiV1.endpoints.login.initiate, 'function');
    assert.equal(typeof apiV2.endpoints.getUserLeaderboardList.initiate, 'function');
    assert.equal(typeof apiV2.endpoints.fetchProblemCollections.initiate, 'function');
});

test('requests use the consuming application transport', async () => {
    const requests = [];
    const transport = async args => {
        requests.push(args);
        return {data: {items: [], total: 0}};
    };
    const store = configureStore({
        reducer: {[apiV1.reducerPath]: apiV1.reducer, [apiV2.reducerPath]: apiV2.reducer},
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {extraArgument: {apiV1BaseQuery: transport, apiV2BaseQuery: transport}},
        }).concat(apiV1.middleware, apiV2.middleware),
    });
    const request = store.dispatch(apiV2.endpoints.getUserLeaderboardList.initiate({
        page: 2, sortBy: 'solved', sortDirection: 'desc',
    }));
    try {
        await request.unwrap();
        assert.equal(requests[0], '/users/leaderboard?limit=30&offset=60&sortDirection=desc&sortBy=solved');
    } finally {
        request.unsubscribe();
        store.dispatch(apiV1.util.resetApiState());
        store.dispatch(apiV2.util.resetApiState());
    }
});

test('auth updates preserve omitted refresh expiration and clear explicit null', () => {
    const first = authSlice.reducer(initialAuthState, authSlice.actions.setAuth({token: 'first', refresh_token_expiration: 123}));
    const refreshed = authSlice.reducer(first, authSlice.actions.setAuth({token: 'next'}));
    assert.equal(refreshed.refresh_token_expiration, 123);
    const cleared = authSlice.reducer(refreshed, authSlice.actions.setAuth({refresh_token_expiration: null}));
    assert.equal(cleared.refresh_token_expiration, null);
    assert.deepEqual(authSlice.reducer(cleared, authSlice.actions.logout()), initialAuthState);
});

test('query filters retain false and zero', () => {
    assert.deepEqual(filterNonNull({enabled: false, offset: 0, empty: '', missing: undefined, nullable: null}), {enabled: false, offset: 0});
});
