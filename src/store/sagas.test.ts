import { put, call } from 'redux-saga/effects';
import * as Api from '../lib/api';
import { makeApiRequest } from './sagas';
import { Locations } from '../constants';
import * as actions from '../actions';

describe('weather fetching flow', () => {
    it('Fetches the weather info successfully', () => {
        const generator = makeApiRequest(actions.requestWeatherLocation(Locations[0]));
        expect(generator.next().value).toEqual(put(actions.putWeatherLocation({ loading: true })));
        expect(generator.next().value).toEqual(call(Api.requestWeatherByLocation, Locations[0]));
        expect(generator.next().value).toEqual(put(actions.putWeatherLocation({ loading: false })));
    });

    it('Handles exception as expected', () => {
        const generator = makeApiRequest(actions.requestWeatherLocation(Locations[0]));
        expect(generator.next().value).toEqual(put(actions.putWeatherLocation({ loading: true })));
        expect(generator.next().value).toEqual(call(Api.requestWeatherByLocation, Locations[0]));
        expect(generator.throw('error').value).toEqual(
            put(actions.putWeatherLocation({ loading: false, error: 'error' })),
        );
    });
});
