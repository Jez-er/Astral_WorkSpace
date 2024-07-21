import { ButtonHTMLAttributes, FC } from "react";
import style from './style.module.scss';

interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const UiButton: FC<UiButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props} className={style.button}>
            {children}
        </button>
    );
};

export default UiButton;
