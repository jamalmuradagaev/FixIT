import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'

import s from '../styles/pages/_Authorization.module.scss'
import logo from '../../public/logo.png'

import Input from '../components/Input'
import Button from '../components/Button'


import { TokenUtils } from '../utils/TokenUtils'
import { setAccessToken, setIsAuthorized, setRefreshToken } from '../store/userSlice'


type FormData = {
    email: string;
    password: string;
}

const AuthorizationPage = () => {

    const {handleSubmit, control, formState: {errors}} = useForm<FormData>({defaultValues: { email: '', password: ''}})

    const [failed, setFailed] = useState('');
    
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleLogin = async(formData: FormData) => {

        try {
            const response = await fetch('http://188.120.240.237:8000/api/token/', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${TokenUtils.getAccessToken()}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            })
    
            if (!response.ok) {
                setFailed('Неверно введен логин или пароль')
                throw new Error('Не удалось войти в систему');
                
            }
    
            const token = await response.json();
            console.log(token);
            TokenUtils.storeTokens(token.access, token.refresh);

            dispatch(setAccessToken(token.access));
            dispatch(setRefreshToken(token.refresh));

            dispatch(setIsAuthorized(true));
            navigate('/');
        }
        catch (error) {
            setFailed('Неверно введен логин или пароль');
            console.log(error)
        }
    }

    return (
        <div>
            <img src={logo} alt="" className={s.logo}/>

            <h2 className={s.descriptionForm}>Войдите в свою <br /> учетную запись</h2>

            <form className={s.startForm} onSubmit={handleSubmit(handleLogin)}>
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
                     <Input placeholder='e-mail' type={'email'} value={value} onChange={(e) => {onChange(e); setFailed('')}} name='login'></Input> }
                />
                  {errors.email && (
                    <span className={s.error}>{errors.email.message?.toString()}</span>
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
                     <Input placeholder='*******' type={'password'} value={value} onChange={(e) => {onChange(e); setFailed('')}} name='password' isPassword={true}></Input>
                    }
                 />
                 {errors.password && (
                    <span className={s.error}>{errors.password.message?.toString()}</span>
                    )}
               
                <p className={s.lostPassword} onClick={() => navigate('/recovery1')}>Забыли пароль?</p>

                 {!!failed && (
                    <span className={s.failed}>{failed}</span>
                )}
                <Button type='submit'>Войти</Button>
            </form>


            <p className={s.anotherWay}>Нет аккаунта? <a onClick={() => navigate('/registration')}>Зарегистрироваться</a></p>
        </div>
    )
}

export default AuthorizationPage