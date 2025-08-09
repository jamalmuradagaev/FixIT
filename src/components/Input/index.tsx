import { useState } from 'react'
import s from './Input.module.scss'

import see from '../../assets/seePassword.png'
import hide from '../../assets/hidePassword.png'

interface InputProps {
    placeholder: string
    type: string
    value?: string
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    isPassword?: boolean
}

const Input = ({ placeholder, type, value, onChange, isPassword }: InputProps) => {
    const [showPassword, setShowPassword] = useState(false)

    if (isPassword) {
        return (
            <div className={s.inputWrapper}>
                <input type={showPassword ? 'text' : 'password'} placeholder={placeholder} className={s.input} value={value} onChange={onChange} />
                <img src={showPassword ? see : hide} className={s.icon} onClick={() => setShowPassword(!showPassword)} />
            </div>
        )
    } else {
        return (
            <div className={s.inputWrapper}>
                <input type={type} placeholder={placeholder} className={s.input} value={value} onChange={onChange} />
            </div>
        )
    }
}

export default Input