import { HeaderMenu, MenuItem } from './styles'
import { useNavigate } from 'react-router-dom';

import { BiExit } from 'react-icons/bi';

import UserPhoto from '../../UserPhoto';

interface IProps {
    margin?: string
}

function AppHeaderMenu({margin}: IProps) {

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('@token');
        localStorage.removeItem('@user');
        navigate('/');
        window.location.reload();
    };

    const user = JSON.parse(localStorage.getItem('@user') as string);

    return (
        <HeaderMenu margin={margin}>
            <MenuItem>
                <UserPhoto 
                    photoUrl={user.image as string} 
                    alt={user.username as string}
                    size='40px'
                />
            </MenuItem>
           
            <MenuItem onClick={logOut}>
                <BiExit />
            </MenuItem>
        </HeaderMenu>
    )
};

export default AppHeaderMenu;