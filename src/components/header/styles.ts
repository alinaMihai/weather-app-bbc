import styled from 'styled-components';

export const StyledHeader = styled.header`
    & {
        display: flex;
        align-items: center;
        border-bottom: 1px solid gray;
    }
    img {
        height: 81px;
    }
    h1 {
        font-size: 24px;
        margin-left: 10px;
    }
`;
