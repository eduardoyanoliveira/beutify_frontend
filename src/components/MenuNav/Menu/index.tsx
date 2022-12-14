import { Container, Header, MenuContainer, MenuHomeButton, MenuItem, MenuItemIcon, MenuItemText, MenuLink } from "./styles";

import { AiOutlineHome } from "react-icons/ai";
import { menuData } from "./data";
import { MenuBarsContainer } from "../styles";
import { FaBars } from "react-icons/fa";

import ToggleInputWithFunction from '../../Inputs/ToggleInput/WithFunction';
import { ThemeContext } from '../../../styles/themeProvider';
import { useContext } from 'react';
import AppHeaderMenu from "../../AppHeader/AppHeaderMenu";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { ScreenSizes } from "../../../utils/screen/sizes";

interface MenuProps {
    fn(): void,
};

/**
 * 
 * @param fn - Function that will handle the bars icon click 
 * @returns A menu component
 */
const  Menu: React.FC<MenuProps> = ({ fn }) => {

    const { toggleTheme } = useContext(ThemeContext);
    
    // Should controlls with the current size is cosidere desktop size 
    const isDesktop = useMediaQuery(`(min-width: ${ScreenSizes.xl})`);

    return (

        <Container >
            <Header>
                <MenuBarsContainer style={{marginRight: '25px'}} onClick={() => fn()}>
                    <FaBars/>
                </MenuBarsContainer>
                <ToggleInputWithFunction
                    onClick={toggleTheme}
                />
                {
                    isDesktop && (<AppHeaderMenu  margin={'0 30px 0 0'}/>)
                } 
            </Header>
            <MenuContainer>
                <MenuItem style={{marginBottom: '25px'}} onClick={() => fn()} >
                    <MenuHomeButton to={'/'}>
                        <MenuItemIcon>
                            <AiOutlineHome/>
                        </MenuItemIcon>
                        <MenuItemText>
                            Home
                        </MenuItemText>
                    </MenuHomeButton>
                </MenuItem>
                {
                    menuData.map(( item ) => {
                        return (
                            <MenuItem key={item.path} onClick={() => fn()}>
                                <MenuLink to={item.path}>
                                    <MenuItemIcon>
                                        {item.icon} 
                                    </MenuItemIcon>
                                    <MenuItemText>
                                        {item.title}
                                    </MenuItemText>
                                </MenuLink>
                            </MenuItem>
                        );
                    })
                }
            </MenuContainer>
        </Container>
    );
};

export default Menu;