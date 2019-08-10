import { call, takeEvery, put } from 'redux-saga/effects';

import * as Api from '../lib/api';

import { REQUEST_WEATHER_LOCATION, iLocation } from '../constants';
import { putWeatherLocation } from '../actions/index';

export default function* watchLocationSaga() {
    yield takeEvery(REQUEST_WEATHER_LOCATION, makeApiRequest);
}

export function* makeApiRequest(action: { type: string; payload: iLocation }) {
    const weatherInfo = yield call(Api.requestWeatherByLocation, action.payload);

    yield put(putWeatherLocation(weatherInfo));
}
