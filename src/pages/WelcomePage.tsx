import s from '../styles/pages/_Welcome.module.scss'
import person from '../assets/person.png'
import logo from '../../public/logo.png'
import VKIDLogin from '../components/VKID'
import { useNavigate } from 'react-router'

const WelcomePage = () => {
    const navigate = useNavigate()

    return (
        <div className={s.page}>
            <div className={s.welcome}>
                <img src={logo} />
                <div className={s.entry}>
                    <h1>Добро <br /> пожаловать!</h1>
                    <button className={s.buttonEntry} onClick={() => navigate('authorization')}>Войти</button>
                    <button className={s.buttonReg} onClick={() => navigate('registration')}>Зарегистрироваться</button>

                    <div className={s.entryWith}>
                        <div className={s.line}></div>
                        <p>Войти с помощью</p>
                        <div className={s.line}></div>
                    </div>

                    <div className={s.platforms}>
                        <div>
                            <VKIDLogin />
                        </div>
                        <div>
                            <VKIDLogin />
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.welcomeImage}>
                <div>
                    <img src={person} />
                </div>
            </div>
        </div>
    )
}

export default WelcomePage