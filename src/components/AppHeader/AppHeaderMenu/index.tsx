import { HeaderMenu, MenuItem } from './styles'
import { useNavigate } from 'react-router-dom';

import { BiExit } from 'react-icons/bi';

import UserPhoto from '../../UserPhoto';

function AppHeaderMenu() {

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('@token');
        localStorage.removeItem('@user');
        navigate('/');
        window.location.reload();
    };

    const user = JSON.parse(localStorage.getItem('@user') as string);

    return (
        <HeaderMenu>
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