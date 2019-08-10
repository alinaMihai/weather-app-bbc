import * as Api from './api';
import { Locations, appConstants } from '../constants';

describe('requestWeatherByLocation success response', () => {
    beforeEach(function() {
        global.fetch = jest.fn().mockImplementation(() => {
            var p = new Promise((resolve, reject) => {
                resolve({
                    ok: true,
                    Id: '123',
                    json: function() {
                        return { Id: '123' };
                    },
                });
            });

            return p;
        });
    });

    it('given a location, it should do a call to the api to fetch its weather info', async function() {
        const response = await Api.requestWeatherByLocation(Locations[0]);
        expect(global.fetch).toHaveBeenCalledWith(
            `${appConstants.API_WEATHER}${Locations[0].latitude},${Locations[0].longitude}?exclude=hourly,daily,minutely,alerts,flags`,
        );
        expect(response.Id).toBe('123');
    });
});

describe('requestWeatherByLocation error response', () => {
    beforeEach(function() {
        global.fetch = jest.fn().mockImplementation(() => {
            var p = new Promise((resolve, reject) => {
                reject({
                    name: 'Error x',
                });
            });

            return p;
        });
    });

    it('should return the error response', async () => {
        return Api.requestWeatherByLocation(Locations[0]).catch((e) => {
            expect(e).toEqual({ name: 'Error x' });
        });
    });
});
