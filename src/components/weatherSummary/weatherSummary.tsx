import React, { FC } from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import { StyledWeatherSummary } from './styles';
import { iLocation } from '../../constants';

interface iWeatherSummary {
    currently: {
        icon: string;
        summary: string;
        temperature: number;
    };
    loading: boolean;
}

interface iProps {
    location: iLocation;
    weatherSummary: iWeatherSummary;
}

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'goldenrod',
    size: 50,
    animate: true,
};

const getCelsius = (tempF: number) => Math.round(((tempF - 32) * 5) / 9);

export const WeatherSummary: FC<iProps> = ({
    location = {} as iLocation,
    weatherSummary = { currently: {} } as iWeatherSummary,
}) => {
    const { summary = '', icon = '', temperature } = weatherSummary.currently || ({} as any);
    return (
        <StyledWeatherSummary>
            <h2>Weather in {location.name}</h2>
            {!weatherSummary.loading && (
                <div>
                    <div className='summary'>
                        <span>{summary}</span>
                        <ReactAnimatedWeather
                            icon={icon
                                .split('-')
                                .join('_')
                                .toUpperCase()}
                            color={defaults.color}
                            size={defaults.size}
                            animate={defaults.animate}
                        />
                    </div>
                    <span className='degrees'>
                        {getCelsius(temperature)} C / {temperature} F
                    </span>
                </div>
            )}
            {weatherSummary.loading && <div>Loading ...</div>}
        </StyledWeatherSummary>
    );
};
