import s from '../../styles/pages/_Authorization.module.scss'
import logo from '../../../public/logo.png'
import Input from '../../components/Input'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const RecoveryPage = () => {
    const navigate = useNavigate()
    const [mail, setMail] = useState<string>('')

    return (
        <div>
            <img src={logo} alt="" className={s.logo} />

            <h2 className={s.descriptionForm}>Забыли пароль?</h2>

            <form action="" className={s.startForm}>
                <p style={{textAlign: 'center'}}>Пожалуйста, введите адрес своей электронной <br />почты для сброса пароля</p>
                <Input placeholder='e-mail' value={mail} onChange={(e: any) => setMail(e.target.value)} name='mail'></Input>
                <button type='button' onClick={() => navigate('/recovery2')}>Сбросить пароль</button>
            </form>
        </div >
    )
}

export default RecoveryPage