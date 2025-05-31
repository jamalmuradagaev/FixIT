import s from './Button.module.scss'

interface Button {
    children: string
    onClick?: () => void
    type: 'button' | 'submit'
    style?: {}
}

const Button = ({ children, onClick, type, style }: Button) => {
    return <button className={s.button} type={type} onClick={onClick} style={style}>{children}</button>
}

export default Button