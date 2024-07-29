import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../App/store/User.store'
import UiButton from '../../shared/ui-kit/button'
import UiInput from '../../shared/ui-kit/input'
import { LoginForm, loginSchema } from './components/auth_schemas'
import Footer from './components/footer'
import GitHubButton from './components/github_button'
import GoogleButton from './components/google_button'
import style from './style.module.scss'

const Login = () => {

    const go = useNavigate()

    const {register, handleSubmit, formState} = useForm<LoginForm>({
        defaultValues: {
            Email: '',
            Password: '',
        },
        resolver: zodResolver(loginSchema)
    })

    const {errors} =  formState

    const lgoinFn = useUserStore(state => state.login)

    const onSubmit = (props: LoginForm) => {
        console.log(props)
        lgoinFn(props.Email, props.Password)
    }

    return (
    <div className={style.main}>
        <div className={style.login}>
            <div className={style.login__logo}></div>
            <h1 className={style.login__title}>PlanIT</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={style.login__form}>
                <div className={style.login__form__input}>
                    <span className='text-red text-xs ml-4'>{errors.Email?.message}</span>
                    <UiInput {...register('Email')} placeholder='E-mail'/>
                </div>
                <div className={style.login__form__input}>
                    <span className='text-red text-xs ml-4'>{errors.Password?.message}</span>
                    <UiInput {...register('Password')} type='password' placeholder='Password'/>
                    <span className='text-xs text-gray-500 ml-3.5 mt-1 hover:text-black cursor-pointer' onClick={() => go('/auth/password/reset')}>Forgot you password?</span>
                </div>
                <span className={style.login__form__warning}>By continuing, you agree to Astral’s Terms of Service <br /> and acknowledge you've read our Privacy Policy.</span>
                <div className={style.login__form__confirmButton}>
                    <UiButton type='submit'>Login</UiButton>
                </div>
                <div className='flex gap-3 mt-4'>
                    <GoogleButton />
                    <GitHubButton />
                </div>
            </form>
            <div className='mt-4 flex items-center'>
                <Footer><span className='text-xs text-gray-500 hover:text-black cursor-pointer flex items-center text-center' onClick={() => go('/auth/registration')}>You are not registred?</span></Footer>
            </div>
        </div>
    </div>
    )    
}

export default Login