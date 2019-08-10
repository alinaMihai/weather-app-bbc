import { applyMiddleware, compose, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import initialState from './initial-state';

import watchLocationSaga from './sagas';
import { iLocation } from '../constants';

export interface AppState {
    weatherInfo: any;
    currentLocation: iLocation;
}

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(watchLocationSaga);

export default store;
