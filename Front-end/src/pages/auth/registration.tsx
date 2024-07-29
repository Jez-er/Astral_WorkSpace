import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../shared/api/AuthService'
import UiButton from '../../shared/ui-kit/button'
import UiInput from '../../shared/ui-kit/input'
import { RegisterForm, registrationSchema } from './components/auth_schemas'
import Footer from './components/footer'
import GitHubButton from './components/github_button'
import GoogleButton from './components/google_button'
import style from './style.module.scss'

const Registration = () => {
    const [page, setPage] = useState<number>(1)

    const {register, handleSubmit, formState} = useForm<RegisterForm>({
        defaultValues: {
            Login: '',
            Email: '',
            Password: '',
            DisplayName: '',
            HowDid: '',
        },
        resolver: zodResolver(registrationSchema)
    })

    const {errors, isValid} =  formState

    const go = useNavigate()

    const {mutate} = useMutation({
        mutationKey: ['Registration'],
        mutationFn: (props: RegisterForm) => AuthService.registration(props.Login, props.Email, props.Password, props.DisplayName, props.HowDid) 
    })

    const onSubmit = (props: RegisterForm) => {
        mutate(props)
        go('/auth/login')
    }

    const next = () => {
        if (isValid) {
            setPage(2)
        }
    }

    return (
    <div className={style.main}>
        {page === 1 ? 
        <div className={style.registration}>
            <div className={style.registration__logo}></div>
            <h1 className={style.login__title}>PlanIT</h1>
            <form onSubmit={handleSubmit(next)} className={style.registration__form}>
                <div className={style.registration__form__input}>
                    <span className='text-red text-xs ml-4'>{errors.Login?.message}</span>
                    <UiInput {...register('Login')} type='login' placeholder='login'/>
                </div>
                <div className={style.registration__form__input}>
                    <span className='text-red text-xs ml-4'>{errors.Email?.message}</span>
                    <UiInput {...register('Email')} type='e-mail' placeholder='E-mail'/>
                </div>
                <div className={style.registration__form__input}>
                    <span className='text-red text-xs ml-4'>{errors.Password?.message}</span>
                    <UiInput {...register('Password')} type='password' placeholder='Password'/>
                </div>
                <span className={style.registration__form__warning}>By continuing, you agree to Astral’s Terms of Service <br /> and acknowledge you've read our Privacy Policy.</span>
                <div className={style.registration__form__confirmButton}>
                    <UiButton type='submit'>Next</UiButton>
                </div>
                <div className='flex gap-3 mt-4'>
                    <GoogleButton />
                    <GitHubButton />
                </div>
            </form>
            <div className='mt-4 flex items-center'>
                <Footer><span className='text-xs text-gray-500'><div className='flex w-6 h-6 rounded-2xl border-2 border-gray-500 justify-center items-center font-medium'>1</div></span></Footer>
            </div>
        </div>
        : null }

        {page === 2 ? 
        <div className={style.registration2}>
            <div className={style.registration2__logo}></div>
            <h1 className={style.registration2__title}>Astral <br /> <span className='font-bold text-2xl'>WorkSpace</span></h1>
            <form onSubmit={handleSubmit(onSubmit)} className={style.registration2__form}>
                <div className={style.registration2__form__input}>
                    <span className='text-red text-xs ml-4' >{errors.DisplayName?.message}</span>
                    <UiInput {...register('DisplayName')} placeholder='Display Name'/>
                </div>
                <div className={style.registration2__form__input}>
                    <span className='text-red text-xs ml-4'>{errors.HowDid?.message}</span>
                    <UiInput {...register('HowDid')} placeholder='How did you hear about us?'/>
                </div>
                <span className={style.registration2__form__warning}>By continuing, you agree to Astral’s Terms of Service <br /> and acknowledge you've read our Privacy Policy.</span>
                <div className={style.registration2__form__confirmButton}>
                    <UiButton type='submit'>Register</UiButton>
                </div>
            </form>
            <div className='mt-4 flex items-center'>
                <Footer><span className='text-xs text-gray-500'><div className='flex w-6 h-6 rounded-2xl border-2 border-gray-500 justify-center items-center font-medium'>2</div></span></Footer>
            </div>
        </div>
        : null }
        
    </div>
    )    
}

export default Registration