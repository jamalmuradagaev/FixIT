import s from './CodeInput.module.scss';
import { useRef } from 'react';

const CodeInput = ({values, setValues}: {values: string[], setValues: (s: string[]) => void}) => {
    const inputs = useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (value: string, index: number) => {
        if (!/^[0-9]?$/.test(value)) return;

        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);

        if (inputs.current[index] !== null) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !values[index] && index > 0) {
            inputs.current[index - 1]?.focus();
            inputs.current[index - 1] = null
        }
    };

    return ( 
        <div className={s.input}>
            {values.map((value, index) => (
                <input
                    key={index}
                    ref={(el: never) => (inputs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                />
            ))}
        </div>
    )
}

export default CodeInput