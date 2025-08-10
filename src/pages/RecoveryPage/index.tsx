import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router'

import s from '../../styles/pages/_Authorization.module.scss'

import logo from '../../../public/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'



const RecoveryPage = () => {

    const {handleSubmit, control, formState: {errors}} = useForm<{email: string}>({defaultValues: {email: ''}})
    const navigate = useNavigate()

    const handleNextStep = () => {
        navigate('/recovery2')
    }
 
    return (
        <div>
            <img src={logo} alt="" className={s.logo} />

            <h2 className={s.descriptionForm}>Забыли пароль?</h2>

            <form action="" className={s.startForm} onSubmit={handleSubmit(handleNextStep)}>
                <p style={{textAlign: 'center'}}>Пожалуйста, введите адрес своей электронной <br />почты для сброса пароля</p>
               <Controller
                    name='email'
                    rules={
                        {required: 'Заполните поле',
                         pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Введите почту правильно, пример - example@mail.ru'
                         }
                        }
                    }
                    control={control}
                    render={({field: {onChange, value}}) =>
                     <Input placeholder='e-mail' type={'email'} value={value} onChange={onChange} name='email'></Input> }
                />
                  {errors.email && (
                    <span className={s.error}>{errors.email.message?.toString()}</span>
                )}
               
                <Button type='submit'>Сбросить пароль</Button>
            </form>
        </div >
    )
}

export default RecoveryPage