import { InputMask } from "@react-input/mask"
import s from './Input.module.scss';

interface InputTelProps  {
  onChange: () => void,
  value: string
}

const InputTel = ({onChange, value} : InputTelProps) => {
  return (
    <div className={s.inputWrapper}>
      <InputMask mask='+7 (___) ___-__-__' replacement={{_: /\d/}} placeholder='+7' className={s.input} value={value} onChange={onChange}/>
    </div>
  )
}

export default InputTel