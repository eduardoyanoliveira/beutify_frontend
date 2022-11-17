import styled, { css } from "styled-components";

interface ContainerProps {
    margin?: string,
    padding?: string,
    justifyContent?: string,
    position?: string
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 25px 0 0 0;

    ${({ margin, padding, justifyContent, position }) => css`
        margin: ${margin};
        padding: ${padding};
        justify-content: ${justifyContent};
        position: ${position};
    `}
`;