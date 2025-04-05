import { useState } from 'react'
import s from './Input.module.scss'

import see from '../../assets/seePassword.png'
import hide from '../../assets/hidePassword.png'

interface InputProps {
    placeholder: string
    value?: string
    onChange: (value: any) => void
    name: string
}

const Input = ({ placeholder, value, onChange, name }: InputProps) => {
    const [showPassword, setShowPassword] = useState(true)

    return (
        <div className={s.inputWrapper}>
            <input type={showPassword ? 'text' : 'password'} placeholder={placeholder} className={s.input} value={value} onChange={onChange}/>
            {name == 'password' &&
                <img src={showPassword ? see : hide} className={s.icon} onClick={() => setShowPassword(!showPassword)} />
            }
        </div>
    )
}

export default Input