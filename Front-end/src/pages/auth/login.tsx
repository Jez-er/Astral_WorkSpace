import { useNavigate} from 'react-router-dom'
import UiButton from '../../shared/ui-kit/button'
import UiInput from '../../shared/ui-kit/input'
import Footer from './components/footer'
import GitHubButton from './components/github_button'
import GoogleButton from './components/google_button'
import style from './style.module.scss'

const Login = () => {

    const go = useNavigate()

    return (
    <div className={style.main}>
        <div className={style.login}>
            <div className={style.login__logo}></div>
            <h1 className={style.login__title}>Astral <br /> <span className='font-bold text-2xl'>WorkSpace</span></h1>
            <form className={style.login__form}>
                <div className={style.login__form__input}>
                    <UiInput placeholder='login | E-mail'/>
                </div>
                <div className={style.login__form__input}>
                    <UiInput placeholder='Password'/>
                    <span className='text-xs text-gray-500 ml-3.5 mt-1 hover:text-black cursor-pointer' onClick={() => go('/auth/password/reset')}>Forgot you password?</span>
                </div>
                <span className={style.login__form__warning}>By continuing, you agree to Astral’s Terms of Service <br /> and acknowledge you've read our Privacy Policy.</span>
                <div className={style.login__form__confirmButton}>
                    <UiButton>Login</UiButton>
                </div>
                <div className='flex gap-3 mt-4'>
                    <GoogleButton />
                    <GitHubButton />
                </div>
            </form>
            <div className='mt-4 flex items-center'>
                <Footer><span className='text-xs text-gray-500 hover:text-black cursor-pointer' onClick={() => go('/auth/registration')}>You are not registred?</span></Footer>
            </div>
        </div>
    </div>
    )    
}

export default Login