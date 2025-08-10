import { useNavigate } from 'react-router'
import { useForm, Controller} from 'react-hook-form'

import s from '../../styles/pages/_Authorization.module.scss'
import logo from '../../../public/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

type FormData = {
    password: string,
    confirmPassword: string
}

const ChangePassword = () => {

    const {handleSubmit, control, formState: {errors}} = useForm<FormData>({defaultValues: {password: '', confirmPassword: ''}})

    const navigate = useNavigate()


    const handleNextStep = () => {
        navigate('/recovery4')
    }

    return (
        <div>
            <img src={logo} alt="" className={s.logo}/>

            <h2 className={s.descriptionForm}>Установите новый пароль</h2>

            <form action="" className={s.startForm} onSubmit={handleSubmit(handleNextStep)}>
                <p style={{textAlign: 'center'}}>Создайте новый пароль. <br />Пароль должен содержать не менее 6 символов.</p>
                <p>Введите новый пароль</p>

                <Controller
                    name='password'
                    control={control}
                    rules={{
                        required: 'Заполните поле',
                        minLength: {
                            value: 6,
                            message: 'Пароль должен состоять из 6 или более символов'
                        }
                    }}
                    render={({field: {onChange, value}}) => 
                        <Input placeholder='*******' type={'password'} value={value} onChange={onChange} name='oldPassword'/>
                    }

                />
                 {errors.password && (
                    <span className={s.error}>{errors.password.message?.toString()}</span>
                    )}
                <p>Подтвердите пароль</p>
                  <Controller
                    name='confirmPassword'
                    control={control}
                    rules={{
                        required: 'Заполните поле',
                        validate: (value, formValues) => {if (value !== formValues.password) return 'Пароли не совпадают'}
                    }}
                    render={({field: {onChange, value}}) => 
                        <Input placeholder='*******' type={'password'} value={value} onChange={onChange} name='oldPassword'/>
                    }

                />
                 {errors.confirmPassword && (
                    <span className={s.error}>{errors.confirmPassword.message?.toString()}</span>
                    )}
                <Button type='submit'>Обновить пароль</Button>
            </form>
        </div>
    )
}

export default ChangePassword