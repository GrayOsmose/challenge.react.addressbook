import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import * as reducers from './index';

const initialState = {};
export const createNewStore = (state = initialState) => createStore(
    combineReducers(reducers),
    state,
    applyMiddleware(thunk, createLogger({ predicate: () => false }))
);
