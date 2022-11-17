import styled, { css } from "styled-components";
import { ScreenSizes } from "../utils/screen/sizes";

interface IAppTemplate {
    isLogged?: boolean 
};

export const AppTemplate = styled.main<IAppTemplate>`

    width: 100%;
    display: flex;
    justify-content: center;
    // align-items: center;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;

    ${({theme}) => css`
        background-image: ${theme.colors.background} ;
    `};

    @media(min-width:${ScreenSizes.xl}){
        flex-direction: row;
        align-items: center;
    }; 
    
`;


export const PageContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    // align-items: center;

    overflow-x: hidden;
    overflow-y: auto;

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