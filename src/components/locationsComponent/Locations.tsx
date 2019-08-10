import React, { FC } from 'react';
import { iLocation } from '../../constants';
import { StyledLocations } from './styles';

interface iProps {
    locations: iLocation[];
    handleClick: (location: iLocation) => void;
}

export const LocationsComponent: FC<iProps> = ({ locations = [], handleClick }) => (
    <StyledLocations>
        {locations.map((location, index) => (
            <li key={index}>
                <button onClick={() => handleClick(location)}>{location.name}</button>
            </li>
        ))}
    </StyledLocations>
);
