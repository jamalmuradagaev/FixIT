import s from '../../styles/pages/_Authorization.module.scss'
import logo from '../../../public/logo.png'
import Input from '../../components/Input'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const ChangePassword = () => {
    const navigate = useNavigate()
    const [enterPassword, setEnterPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    return (
        <div>
            <img src={logo} alt="" className={s.logo}/>

            <h2 className={s.descriptionForm}>Установите новый пароль</h2>

            <form action="" className={s.startForm}>
                <p style={{textAlign: 'center'}}>Создайте новый пароль. <br />Пароль должен содержать не менее 6 символов.</p>
                <p>Введите новый пароль</p>
                <Input placeholder='*******' type={'password'} value={enterPassword} onChange={(e: any) => setEnterPassword(e.target.value)} name='password'></Input>
                <p>Подтвердите пароль</p>
                <Input placeholder='*******' type={'password'} value={confirmPassword} onChange={(e: any) => setConfirmPassword(e.target.value)} name='password'></Input>
                <button onClick={() => navigate('/recovery4')}>Обновить пароль</button>
            </form>
        </div>
    )
}

export default ChangePassword