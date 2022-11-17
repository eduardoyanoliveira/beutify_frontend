import styled, { css } from "styled-components";

interface ContainerProps {
    margin?: string
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;

    ${({margin}) => css`
        margin: ${margin};
    `};
`;

export const Label = styled.p`
    ${({theme}) => css`
        color: ${theme.colors.font};
        ${theme.typographies.titleTwo}
    `};
    margin-right: 20px;
`;
