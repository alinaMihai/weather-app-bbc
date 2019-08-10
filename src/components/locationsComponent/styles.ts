import styled from 'styled-components';

export const StyledLocations = styled.ul`
    & {
        list-style: none;
        margin: 0;
        padding: 0;
        display: inline-flex;
        flex-wrap: wrap;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 20px;
    }
    li:not(:last-child) button {
        border-right: 1px solid black;
    }
    button:hover {
        color: darkgreen;
    }
`;
