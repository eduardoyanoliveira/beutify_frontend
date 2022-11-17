import styled, { css } from "styled-components";
interface ContainerProps {
    maxWidth?: string,
    margin?: string
};



export const SearchInput = styled.input`
    width: 80%;
    border-radius: 5px 0 0 5px;
    outline: none;
    border: none;
    height: 50px;
    text-indent: 15px;

    color: ${props => props.theme.colors.font};
    
    ${({theme}) => css`
        background-color: ${theme.colors.backgroundAlt};
        border: 2px solid ${theme.colors.stroke};
        ${theme.typographies.titleTwo};
    `}

    &::placeholder { 
        ${({theme}) => css`
            color: ${theme.colors.font};
        `}
    }
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    padding: 0 15px 0 0;
    width: 20%;
    border-radius: 0 5px 5px 0;
    ${({theme}) => css`
        background-color: ${theme.colors.backgroundAlt};
    `}

`;

export const Container = styled.div<ContainerProps>`
    display: flex;
    border-radius: 5px;
    width: 100%;
    ${({ maxWidth, margin }) => css`
        max-width: ${maxWidth};
        margin: ${margin};
    `};

`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 4px;

    ${({theme}) => css`
        color: ${theme.colors.primary};
    `}

    
`;