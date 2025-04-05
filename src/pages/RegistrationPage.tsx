import s from '../styles/pages/_Authorization.module.scss'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import Input from '../components/Input'
import logo from '../../public/logo.png'

const RegistrationPage = () => {
    const navigate = useNavigate()
    const [name, setName] = useState<string>()
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    console.log({ name, login, password })

    return (
        <div>
            <img src={logo} alt="" />

            <h2>Создайте свою <br /> учетную запись</h2>

            <form action="">
                <p>Имя</p>
                <Input placeholder='Армаслисурхан' value={name} onChange={(e: any) => setName(e.target.value)} name='name'></Input>
                <p>Логин</p>
                <Input placeholder='Номер телефона' value={login} onChange={(e: any) => setLogin(e.target.value)} name='login'></Input>
                <p>Пароль</p>
                <Input placeholder='*******' value={password} onChange={(e: any) => setPassword(e.target.value)} name='password'></Input>
                <button>Создать</button>
            </form>


            <p>Уже есть аккаунт? <a onClick={() => navigate('/authorization')}>Войти</a></p>
        </div>
    )
}

export default RegistrationPage