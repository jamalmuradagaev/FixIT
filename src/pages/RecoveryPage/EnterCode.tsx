import { useEffect, useState } from 'react'
import { useNavigate } from "react-router"

import s from '../../styles/pages/_Authorization.module.scss'
import logo from '../../../public/logo.png'
import CodeInput from '../../components/CodeInput'


const EnterCode = () => {
    const [values, setValues] = useState<string[]>(Array(5).fill(''));

    const code = '12345';

    const navigate = useNavigate()

    useEffect(() => {
        if (values.join('') === code ) {
            navigate('/recovery3')
        }
    }, [values])

    return (
        <div>
            <img src={logo} alt="" className={s.logo} />

            <h2 className={s.descriptionForm}>Проверьте свою <br />электронную почту</h2>

            <div className={s.startForm}>
                <p style={{textAlign: 'center'}}>Мы отправили ссылку для сброса пароля. <br />Введите 5-значный код, указанный в письме.</p>
                <CodeInput values={values} setValues={setValues} />
            </div>

            <p className={s.anotherWay}>Не получили письмо? <a>Отправить повторно</a></p>
        </div >
    )
}

export default EnterCode