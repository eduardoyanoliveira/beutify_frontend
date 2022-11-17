import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const LinkLabel = styled(Link)`

    ${({theme}) => css`
        color: ${theme.colors.font};
        ${theme.typographies.subtitleOne};
    `};

    &:hover {

        ${({theme}) => css`
            color: ${theme.colors.primary};
        `}; 
    };
    margin-top: 10px;

    text-decoration: none;
 
`;
