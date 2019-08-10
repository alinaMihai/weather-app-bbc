export interface iLocation {
    name: string;
    latitude: string;
    longitude: string;
}

export const Locations: iLocation[] = [
    {
        name: 'London',
        latitude: '51.5074',
        longitude: '0.1278',
    },
];

export const appConstants = {
    API_WEATHER:
        'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/202344867431d1c796507c85c588d238/',
};

export const REQUEST_WEATHER_LOCATION = 'REQUEST_WEATHER_LOCATION';
export const PUT_WEATHER_INFO = 'PUT_WEATHER_INFO';
