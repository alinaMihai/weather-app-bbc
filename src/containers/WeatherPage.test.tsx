import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ConnectedWeatherPage from './WeatherPage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import { Locations } from '../constants';

const dummyStore = createStore(reducers);

describe('WeatherPage functionality', () => {
    it('should show the list of locations', () => {
        const { getByText } = render(
            <Provider store={dummyStore}>
                <ConnectedWeatherPage />
            </Provider>,
        );
        Locations.forEach((location) => {
            expect(getByText(location.name)).toBeTruthy();
        });
    });
    it('selecting a location, should show weather info', () => {
        const { icon, temperature, summary } = { icon: 'CLOUDY', temperature: 89, summary: 'cloudy' };

        const dummyStore = createStore(reducers, {
            location: {
                currentLocation: Locations[0],
                weatherInfo: {
                    currently: {
                        icon,
                        temperature,
                        summary,
                    },
                },
            },
        });
        const newLocation = Locations[1].name;
        const { getByText, queryByText } = render(
            <Provider store={dummyStore}>
                <ConnectedWeatherPage />
            </Provider>,
        );
        expect(queryByText(`Weather in ${newLocation}`)).toBeFalsy();

        // select the location from the list
        const selectedLocation = getByText(newLocation);
        fireEvent.click(selectedLocation);

        // assert that the info for the selected location is displayed
        expect(queryByText(`Weather in ${Locations[1].name}`)).toBeTruthy();
        expect(queryByText(`32 C / 89 F`)).toBeTruthy();
        expect(queryByText(summary)).toBeTruthy();
    });
});
