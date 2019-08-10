import React from 'react';
import bbcLogo from '../../assets/images/bbc-logo.png';
import { StyledHeader } from './styles';

export const Header = () => {
    return (
        <StyledHeader>
            <img src={bbcLogo} alt='bbc logo' />
            <h1>Weather</h1>
        </StyledHeader>
    );
};
