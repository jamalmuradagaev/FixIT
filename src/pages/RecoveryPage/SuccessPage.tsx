import s from '../../styles/pages/_Authorization.module.scss'
import logo from '../../../public/logo.png'
import { useNavigate } from 'react-router'
import Button from '../../components/Button'

const SuccessPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <img src={logo} alt="" className={s.logo} />

            <h2 className={s.descriptionForm}>Поздравляем!</h2>

            <form action="" className={s.startForm}>
                <p style={{ textAlign: 'center' }}>Ваш пароль изменен <br />Нажмите “Продолжить чтобы войти.</p>
                <Button type='button' onClick={() => navigate('/authorization')}>Продолжить</Button>
            </form>
        </div>
    )
}

export default SuccessPage