import logo from '../../../public/logo.png';
import s from './Header.module.scss';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" className={s.logo} />
            <div>
                <p className={s.link}>Главная</p>
                <p className={s.link}>Создать сбор</p>
                <p className={s.link}>Настройки</p>
                <p className={s.link}>Профиль</p>
            </div>
        </header>
    )
}

export default Header