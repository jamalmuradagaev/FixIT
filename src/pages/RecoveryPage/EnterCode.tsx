import s from '../../styles/pages/_Authorization.module.scss'
import logo from '../../../public/logo.png'
import { useNavigate } from "react-router"
import CodeInput from '../../components/CodeInput'

const EnterCode = () => {
    const navigate = useNavigate()

    return (
        <div>
            <img src={logo} alt="" className={s.logo} />

            <h2 className={s.descriptionForm}>Проверьте свою <br />электронную почту</h2>

            <form action="" className={s.startForm}>
                <p style={{textAlign: 'center'}}>Мы отправили ссылку для сброса пароля. <br />Введите 5-значный код, указанный в письме.</p>
                <CodeInput />
                <button type='button' onClick={() => navigate('/recovery3')}>Отправить</button>
            </form>

            <p className={s.anotherWay}>Не получили письмо? <a>Отправить повторно</a></p>
        </div >
    )
}

export default EnterCode