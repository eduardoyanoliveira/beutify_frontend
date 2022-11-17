import styled, { css } from "styled-components";
import { ScreenSizes } from "../../utils/screen/sizes";

interface IElementProps {
    isActive: boolean,
    screenOverflow?: boolean,
    minWidth?: string,
};

export const ListContainer = styled.ul`
    margin: 45px 0 0 0;
    width: 100%;
    // min-width: 400px;
    overflow: auto;
    height: fit-content;
    max-height: 550px;


    
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


export const Row = styled.li<IElementProps>`
    display: flex;
    align-items: center;
    list-style: none;
    height: 50px;
    width: ${({screenOverflow}) => screenOverflow ? '98%' : '100%'};
    border-radius: 5px;

    margin-bottom: 25px;
    padding: 0 1.5rem;

    position: relative;

    ${({theme, minWidth}) => css`
        background-color: ${theme.colors.backgroundAlt};
        min-width: ${minWidth ? minWidth: '500px'};
    `};
    width: 100%;
    
`;

export const Title = styled.h3<IElementProps>`

    width: fit-content;
    margin: 1rem;

    ${({theme, isActive}) => css`
        color: ${isActive ? theme.colors.primary : theme.colors.font};
        ${theme.typographies.titleTwo};
    `};

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const Label = styled.label`

    display: block;
    margin: 0 1rem;
    ${({theme}) => css`
        color: ${theme.colors.font};
        ${theme.typographies.subtitleTwo};
    `};

    
    @media(min-width:${ScreenSizes.md}){
        display: block;
    }; 
`;

interface IValueProps {
    warning?: boolean,
};

export const Value = styled.span<IValueProps>`
    margin-left: 10px;
    ${({theme, warning}) => css`
        color: ${warning ? 'red' : theme.colors.font};
        ${theme.typographies.subtitleTwo};
    `};
`;

export const EditIconContainer = styled.label`
    display: flex;
    align-items: center;
    position: absolute;
    font-size: 1.75rem;
    right: 20px;

    ${({theme}) => css`
        color: ${theme.colors.font};
    `};

    &:hover{
        ${({theme}) => css`
            color: ${theme.colors.primary} ;
        `};
    };

    cursor: pointer;
`;
