import logo from '../../../public/logo.png';
import s from './Header.module.scss';

import { NavLink } from 'react-router';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" className={s.logo} />
            <div>
                <NavLink  to='/' className={({isActive}) => isActive ? `${s.link} ${s.active}` : `${s.link}` }>Главная</NavLink>
                <NavLink to='/create-fundraising' className={({isActive}) => isActive ? `${s.link} ${s.active}` : `${s.link}` }>Создать сбор</NavLink>
                <NavLink to='/settings' className={({isActive}) => isActive ? `${s.link} ${s.active}` : `${s.link}` }>Настройки</NavLink>
                <NavLink to='/profile'className={({isActive}) => isActive ? `${s.link} ${s.active}` : `${s.link}` }>Профиль</NavLink>
            </div>
        </header>
    )
}

export default Header