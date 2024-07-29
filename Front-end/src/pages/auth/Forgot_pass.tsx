import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import UiButton from '../../shared/ui-kit/button'
import UiInput from '../../shared/ui-kit/input'
import { PassForm, passSchema } from './components/auth_schemas'
import Footer from './components/footer'
import style from './style.module.scss'

const ForgotPass = () => {

    const go = useNavigate()


    const {register, handleSubmit, formState} = useForm<PassForm>({
        defaultValues: {
            Email: '',
        },
        resolver: zodResolver(passSchema)
    })

    const {errors} =  formState

    const onSubmit = (props: PassForm) => {
        console.log(props)
    }

    return (
    <div className={style.main}>
        <div className={style.password}>
            <div className={style.password__logo}></div>
            <h1 className={style.login__title}>PlanIT</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={style.password__form}>
                <div className={style.password__form__input}>
                    <span className='text-red text-xs ml-4'>{errors.Email?.message}</span>
                    <UiInput {...register('Email')} placeholder='E-mail'/>
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