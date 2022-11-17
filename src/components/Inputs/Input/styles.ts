import styled, { css } from "styled-components";

interface InputContainerProps{
    margin?: string,
    maxWidth?: string,
}

interface LabelProps {
    htmlFor: string
}


export const InputContainer = styled.div<InputContainerProps>`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${({margin, maxWidth}) => css`
        margin: ${margin};
        max-width: ${maxWidth};
    `}
`;

export const Label = styled.label<LabelProps>`
    margin-bottom: 5px;
    margin-left: 15px;
    ${({theme}) => css`
        color: ${theme.colors.font};
        ${theme.typographies.subtitleOne};
    `}

`;

export const Input = styled.input`
    outline: none;
    border: none;
    border-radius: 5px;
    height: 50px;
    width: 100%;
    text-indent: 15px;

    color: ${props => props.theme.colors.font};

    ${({theme}) => css`
        background-color: ${theme.colors.backgroundAlt};
        border: 2px solid ${theme.colors.stroke};
        ${theme.typographies.titleTwo};
    `}

    &:focus{
       
        ${({theme}) => css`
            border: 3px solid ${theme.colors.primary};
        `}
    };

    &::placeholder { 
        ${({theme}) => css`
            color: ${theme.colors.font};
        `}
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    &[type=number] {
        -moz-appearance:textfield; /* Firefox */
    }

`;