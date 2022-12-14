import styled, { css } from "styled-components";
import { ScreenSizes } from "../../utils/screen/sizes";


export const Container = styled.nav`

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 80px;
    width: 100%;
    background-color: red;
    border-radius: 0;
    padding: 0 30px;

    @media(min-width: ${ScreenSizes.md}){
        border-radius: 15px 15px 0 0;
    };

    @media(min-width: ${ScreenSizes.xl}){
        display: block;
        height: 100%;
        width: 290px;
        border-radius: 15px 0 0 15px;
        padding: 0;
        position: unset;
    };

    ${({theme}) => css`
        background: ${theme.colors.backgroundAlt};
    `};
    
`;

export const MenuBarsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    cursor: pointer;

    ${({theme}) => css`
        color: ${theme.colors.font};
    `}; 

    &:hover{
        ${({theme}) => css`
            color: ${theme.colors.primary};
        `}; 
    }

    @media(min-width: ${ScreenSizes.xl}){
        display: none;
    };
`;
