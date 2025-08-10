import s from '../../styles/pages/_Authorization.module.scss'
import logo from '../../../public/logo.png'
import { useNavigate } from "react-router"
import CodeInput from '../../components/CodeInput'
import Button from '../../components/Button'

import { useForm } from 'react-hook-form'


const EnterCode = () => {

    const {handleSubmit} = useForm<{code: string}>({defaultValues: {code: ''}})

    const navigate = useNavigate()

    const handleNextStep = () => {
        navigate('/recovery3')
    }

    return (
        <div>
            <img src={logo} alt="" className={s.logo} />

            <h2 className={s.descriptionForm}>Проверьте свою <br />электронную почту</h2>

            <form action="" className={s.startForm} onSubmit={handleSubmit(handleNextStep)}>
                <p style={{textAlign: 'center'}}>Мы отправили ссылку для сброса пароля. <br />Введите 5-значный код, указанный в письме.</p>
                <CodeInput />
                <Button type='submit'>Отправить</Button>
            </form>

            <p className={s.anotherWay}>Не получили письмо? <a>Отправить повторно</a></p>
        </div >
    )
}

export default EnterCode