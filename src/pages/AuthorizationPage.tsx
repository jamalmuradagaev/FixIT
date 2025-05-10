import s from '../styles/pages/_Authorization.module.scss'
import logo from '../../public/logo.png'
import Input from '../components/Input'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { TokenUtils } from '../utils/TokenUtils'
import { useDispatch } from 'react-redux'
import { setAccessToken, setIsAuthorized, setRefreshToken } from '../store/userSlice'

const AuthorizationPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    console.log({login, password})

    const handleLogin = async(e: any) => {
        e.preventDefault()
        try {
            const response = await fetch('http://188.120.240.237:8000/api/token/', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${TokenUtils.getAccessToken()}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: login,
                    password: password
                })
            })
    
            if (!response.ok) {
                throw new Error('Не удалось войти в систему')
            }
    
            const token = await response.json();
            console.log(token);
            TokenUtils.storeTokens(token.access, token.refresh);

            dispatch(setAccessToken(token.access));
            dispatch(setRefreshToken(token.refresh));

            dispatch(setIsAuthorized(true));
            navigate('/');
        }
        catch (error) {
            console.log(e)
        }
    }

    return (
        <div>
            <img src={logo} alt="" className={s.logo}/>

            <h2 className={s.descriptionForm}>Войдите в свою <br /> учетную запись</h2>

            <form action="" className={s.startForm} onSubmit={(e: any) => handleLogin(e)}>
                <p>Логин</p>
                <Input placeholder='e-mail' type={'email'} value={login} onChange={(e: any) => setLogin(e.target.value)} name='login'></Input>
                <p>Пароль</p>
                <Input placeholder='*******' type={'password'} value={password} onChange={(e: any) => setPassword(e.target.value)} name='password' isPassword={true}></Input>
                <p className={s.lostPassword} onClick={() => navigate('/recovery1')}>Забыли пароль?</p>
                <button>Войти</button>
            </form>


            <p className={s.anotherWay}>Нет аккаунта? <a onClick={() => navigate('/registration')}>Зарегистрироваться</a></p>
        </div>
    )
}

export default AuthorizationPage