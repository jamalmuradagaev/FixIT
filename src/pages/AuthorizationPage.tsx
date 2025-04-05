import s from '../styles/pages/_Authorization.module.scss'
import logo from '../../public/logo.png'
import Input from '../components/Input'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const AuthorizationPage = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    console.log({login, password})

    return (
        <div>
            <img src={logo} alt="" />

            <h2>Войдите в свою <br /> учетную запись</h2>

            <form action="">
                <p>Логин</p>
                <Input placeholder='Номер телефона' value={login} onChange={(e: any) => setLogin(e.target.value)} name='login'></Input>
                <p>Пароль</p>
                <Input placeholder='*******' value={password} onChange={(e: any) => setPassword(e.target.value)} name='password'></Input>
                <p className={s.lostPassword}>Забыли пароль?</p>
                <button>Войти</button>
            </form>


            <p>Нет аккаунта? <a onClick={() => navigate('/registration')}>Зарегистрироваться</a></p>
        </div>
    )
}

export default AuthorizationPage