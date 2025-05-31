import s from '../styles/pages/_Authorization.module.scss'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import Input from '../components/Input'
import logo from '../../public/logo.png'
import Button from '../components/Button'

const RegistrationPage = () => {
    const navigate = useNavigate()
    const [name, setName] = useState<string>('')
    const [login, setLogin] = useState<string>('')
    const [numberPhone, setNumberPhone] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleRegister = async(e: any) => {
        e.preventDefault()
        try {
            const response = await fetch('http://188.120.240.237:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": login,
                    "username": name,
                    "phone_number": numberPhone,
                    "password": password
                  })
            })
    
            if (!response.ok) {
                throw new Error('Запрос не ушел на сервер')
            }
    
            const data = await response.json()
            console.log(data)
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <img src={logo} alt="" className={s.logo} />

            <h2 className={s.descriptionForm}>Создайте свою <br /> учетную запись</h2>

            <form action="" className={s.startForm} onSubmit={(e: any) => handleRegister(e)}>
                <p>Имя</p>
                <Input placeholder='Армаслисурхан' type={'text'} value={name} onChange={(e: any) => setName(e.target.value)} name='name'></Input>
                <p>Логин</p>
                <Input placeholder='e-mail' type={'email'} value={login} onChange={(e: any) => setLogin(e.target.value)} name='login'></Input>
                <p>Номер</p>
                <Input placeholder='Номер телефона' type={'number'} value={numberPhone} onChange={(e: any) => setNumberPhone(e.target.value)} name='numberPhone'></Input>
                <p>Пароль</p>
                <Input placeholder='*******' type={'password'} value={password} onChange={(e: any) => setPassword(e.target.value)} name='password' isPassword={true}></Input>
                <Button type='submit'>Создать</Button>
            </form>


            <p className={s.anotherWay}>Уже есть аккаунт? <a onClick={() => navigate('/authorization')}>Войти</a></p>
        </div>
    )
}

export default RegistrationPage