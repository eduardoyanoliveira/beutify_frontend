import styled, { css } from "styled-components";
import { ScreenSizes } from "../../../utils/screen/sizes";

export const Container = styled.form`

    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    max-width: 650px;
    padding: 0 30px;
    // margin-bottom: 30px;

    &::-webkit-scrollbar {
        width: 4px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {

        ${({theme}) => css`
            background: ${theme.colors.iconColor};
        `}
        -webkit-border-radius: 2px;
        border-radius: 2px;
    }
    
    /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        background: 0;
    };

    overflow-y: auto;
    
    ${({theme}) => css`
        scrollbar-color: ${theme.colors.iconColor} ${theme.colors.backgroundAlt};
        scrollbar-width: thin;
    `};

    &::-webkit-scrollbar {
        width: 4px;
    };

    /* Handle */
    &::-webkit-scrollbar-thumb {

        ${({theme}) => css`
            background: ${theme.colors.iconColor};
        `}
        -webkit-border-radius: 2px;
        border-radius: 2px;
    };
    
    /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        background: 0;
    };
`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin: 30px 0 ;
    ${({theme}) => css`
        color: ${theme.colors.font};
        ${theme.typographies.titleOne}
    `}

    @media(min-width:${ScreenSizes.xl}){
        width: 100%;
    }; 
`;