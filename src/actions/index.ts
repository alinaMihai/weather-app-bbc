import { REQUEST_WEATHER_LOCATION, PUT_WEATHER_INFO, iLocation } from '../constants';

export const requestWeatherLocation = (location: iLocation) => {
    return {
        type: REQUEST_WEATHER_LOCATION,
        payload: location,
    };
};

export const putWeatherLocation = (weatherInfo: any) => {
    return {
        type: PUT_WEATHER_INFO,
        payload: weatherInfo,
    };
};