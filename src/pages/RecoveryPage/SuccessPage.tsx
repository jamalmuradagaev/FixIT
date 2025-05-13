import s from '../../styles/pages/_Authorization.module.scss'
import logo from '../../../public/logo.png'
import { useNavigate } from 'react-router'

const SuccessPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <img src={logo} alt="" className={s.logo} />

            <h2 className={s.descriptionForm}>Поздравляем!</h2>

            <form action="" className={s.startForm}>
                <p style={{ textAlign: 'center' }}>Ваш пароль изменен <br />Нажмите “Продолжить чтобы войти.</p>
                <button onClick={() => navigate('/authorization')}>Продолжить</button>
            </form>
        </div>
    )
}

export default SuccessPage