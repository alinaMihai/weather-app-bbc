import * as actions from './index';
import { Locations, REQUEST_WEATHER_LOCATION, PUT_WEATHER_INFO } from '../constants';

describe('actions', () => {
    it('should create an action to fetch weather by location', () => {
        const location = Locations[0];
        const expectedAction = {
            type: REQUEST_WEATHER_LOCATION,
            payload: location,
        };
        expect(actions.requestWeatherLocation(location)).toEqual(expectedAction);
    });
    it('should create an action to populate weather info', () => {
        const weatherInfo = { something: { from: 'api' } };
        const expectedAction = {
            type: PUT_WEATHER_INFO,
            payload: weatherInfo,
        };
        expect(actions.putWeatherLocation(weatherInfo)).toEqual(expectedAction);
    });
});
