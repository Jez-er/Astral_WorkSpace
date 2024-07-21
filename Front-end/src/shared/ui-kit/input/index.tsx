import { FC, InputHTMLAttributes } from "react"
import style from './style.module.scss'

interface UiInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const UiInput: FC<UiInputProps> = (props) => {
    return (<input {...props} className={style.input} />)
}

export default UiInput