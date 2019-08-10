import { appConstants, iLocation } from '../constants';

export async function requestWeatherByLocation(location: iLocation) {
    const weatherInfo = await fetch(`${appConstants.API_WEATHER}${location.latitude},${location.longitude}`);
    return weatherInfo.json();
}
