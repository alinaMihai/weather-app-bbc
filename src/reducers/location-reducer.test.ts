import reducer from './location-reducer';
import { REQUEST_WEATHER_LOCATION, Locations, PUT_WEATHER_INFO } from '../constants';

describe('location reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            currentLocation: undefined,
            weatherInfo: {},
        });
    });

    it('should handle REQUEST_WEATHER_LOCATION', () => {
        expect(
            reducer(
                {},
                {
                    type: REQUEST_WEATHER_LOCATION,
                    payload: Locations[0],
                },
            ),
        ).toEqual({
            currentLocation: Locations[0],
        });
    });
    it('should handle PUT_WEATHER_INFO', () => {
        expect(
            reducer(
                {},
                {
                    type: PUT_WEATHER_INFO,
                    payload: { some: 'weatherinfo' },
                },
            ),
        ).toEqual({
            weatherInfo: { some: 'weatherinfo' },
        });
    });
});
