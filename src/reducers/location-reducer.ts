import { REQUEST_WEATHER_LOCATION, PUT_WEATHER_INFO } from '../constants';
import initialState from '../store/initial-state';

interface iAction {
    type: string;
    payload: any;
}

export default function(state = initialState.location, action: iAction) {
    switch (action.type) {
        case REQUEST_WEATHER_LOCATION: {
            return {
                ...state,
                currentLocation: action.payload,
            };
        }
        case PUT_WEATHER_INFO: {
            return {
                ...state,
                weatherInfo: action.payload,
            };
        }
        default:
            return state;
    }
}
