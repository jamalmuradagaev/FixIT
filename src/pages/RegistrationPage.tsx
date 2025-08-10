import s from '../styles/pages/_Authorization.module.scss'
import { useNavigate } from 'react-router'

import { useForm, Controller } from 'react-hook-form'

import Input from '../components/Input'
import logo from '../../public/logo.png'
import Button from '../components/Button'
import InputTel from '../components/Input/InputTel'

type FormData = {
    name: string;
    email: string;
    phone: string;
    password: string;
}

const RegistrationPage = () => {
    const {handleSubmit, control, formState: {errors}} = useForm<FormData>({defaultValues: {name: '', email: '', phone: '', password: ''}})
    const navigate = useNavigate()

    const handleRegister = async(formData: FormData) => {
        console.log('register')
        try {
            const response = await fetch('http://188.120.240.237:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": formData.email,
                    "username": formData.name,
                    "phone_number": formData.phone,
                    "password": formData.password
                  })
            })
    
            if (!response.ok) {
                throw new Error('Запрос не ушел на сервер')
            }
    
            const data = await response.json()
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <img src={logo} alt="" className={s.logo} />

            <h2 className={s.descriptionForm}>Создайте свою <br /> учетную запись</h2>

            <form className={s.startForm} onSubmit={handleSubmit(handleRegister)}>
                <p>Имя</p>
                <Controller 
                    name='name'
                    rules={
                        {required: 'Заполните поле',
                         pattern: {
                            value: /^[a-zA-Zа-яА-ЯёЁ0-9\s]+$/,
                            message: 'Ваше имя не должно содержать символы'
                         }
                        }
                    }
                    control={control}
                    render={({field: {onChange, value}}) =>
                     <Input placeholder='Армаслисурхан' type={'text'} value={value} onChange={onChange} name='name'></Input> }
                />
                {errors.name && (
                    <span className={s.error}>{errors.name.message?.toString()}</span>
                )}
                <p>Логин</p>
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
                     <Input placeholder='e-mail' type={'email'} value={value} onChange={onChange} name='login'></Input> }
                />
                  {errors.email && (
                    <span className={s.error}>{errors.email.message?.toString()}</span>
                )}
                <p>Номер</p>
                <Controller 
                    name='phone'
                    rules={
                        {required: 'Заполните поле',
                         minLength: {
                            value: 18,
                            message: 'Введите номер правильно, пример - +7 999 999 99 99'
                         }
                        }
                    }
                    control={control}
                    render={({field: {onChange, value}}) =>
                      <InputTel onChange={onChange} value={value}/>
                    }
                 />

                  {errors.phone && (
                    <span className={s.error}>{errors.phone.message?.toString()}</span>
                    )}
                <p>Пароль</p>
                <Controller 
                    name='password'
                    rules={
                        {required: 'Заполните поле',
                         minLength: {
                            value: 6,
                            message: 'Пароль должен состоять из 6 или более символов'
                         }
                        }
                    }
                    control={control}
                    render={({field: {onChange, value}}) =>
                     <Input placeholder='*******' type={'password'} value={value} onChange={onChange} name='password' isPassword={true}></Input>
                    }
                 />
                 {errors.password && (
                    <span className={s.error}>{errors.password.message?.toString()}</span>
                    )}
                <Button type='submit'>Создать</Button>
            </form>


            <p className={s.anotherWay}>Уже есть аккаунт? <a onClick={() => navigate('/authorization')}>Войти</a></p>
        </div>
    )
}

export default RegistrationPage
