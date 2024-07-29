import { Eye, EyeOff } from 'lucide-react'
import { forwardRef, InputHTMLAttributes, useState } from "react"
import style from './style.module.scss'

interface UiInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const UiInput = forwardRef<HTMLInputElement, UiInputProps>((props, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    const isPasswordType = props.type === 'password';

    return (
        <div className={style.inputContainer}>
            <input
                {...props}
                ref={ref}
                type={isPasswordType && showPassword ? 'text' : props.type}
                className={style.input}
            />
            {isPasswordType && (
                <button
                    type="button"
                    onClick={toggleShowPassword}
                    className={style.toggleButton}
                >
                    {showPassword ? <EyeOff width={20} height={20} strokeWidth={1.5} /> : <Eye width={20} height={20} strokeWidth={1.5} />}
                </button>
            )}
        </div>
    );
});

export default UiInput;
