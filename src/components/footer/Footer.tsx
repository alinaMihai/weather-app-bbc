import React from 'react';
import { StyledFooter } from './styles';

export const Footer = () => (
    <StyledFooter>
        <span>Alina Mihai {new Date().getUTCFullYear()}</span>
        <span>powered by Dark Sky</span>
    </StyledFooter>
);
