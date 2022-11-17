import styled, { css } from "styled-components";


export const HeaderMenu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
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

`;