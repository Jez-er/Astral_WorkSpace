import { useNavigate } from 'react-router-dom'
import UiButton from '../../shared/ui-kit/button'
import UiInput from '../../shared/ui-kit/input'
import Footer from './components/footer'
import style from './style.module.scss'

const ForgotPass = () => {

    const go = useNavigate()

    return (
    <div className={style.main}>
        <div className={style.password}>
            <div className={style.password__logo}></div>
            <h1 className={style.password__title}>Astral <br /> <span className='font-bold text-2xl'>WorkSpace</span></h1>
            <form className={style.password__form}>
                <div className={style.password__form__input}>
                    <UiInput placeholder='E-mail'/>
                </div>
                <span className={style.password__form__warning}>Write your email and a recovery letter will be sent to it.</span>
                <div className={style.password__form__confirmButton}>
                    <UiButton>Send</UiButton>
                </div>
            </form>
            <div className='mt-4 flex items-center'>
                <Footer><span className='text-xs text-gray-500 hover:text-black cursor-pointer' onClick={() => go('/auth/login')}>Back to login</span></Footer>
            </div>
        </div>
    </div>
    )    
}

export default ForgotPass