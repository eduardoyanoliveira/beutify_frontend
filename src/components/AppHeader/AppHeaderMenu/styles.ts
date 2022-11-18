import styled, { css } from "styled-components";

interface IHeaderMenuProps {
    margin?: string
}

export const HeaderMenu = styled.ul<IHeaderMenuProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({margin}) => css`
        margin: ${margin};
    `};
`; 

export const MenuItem = styled.li`
    list-style: none;
    margin-left:  20px;

    ${({theme}) => css`
        color: ${theme.colors.font} ;
        ${theme.typographies.titleTwo}
    `};

    font-size: 1.7rem;
    
    &:hover{
        ${({theme}) => css`
            color: ${theme.colors.primary} ;
        `};
    };

    cursor: pointer;

`;