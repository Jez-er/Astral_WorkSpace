import { useState } from 'react'
import UiButton from '../../shared/ui-kit/button'
import UiInput from '../../shared/ui-kit/input'
import Footer from './components/footer'
import GitHubButton from './components/github_button'
import GoogleButton from './components/google_button'
import style from './style.module.scss'

const Registration = () => {

    const [page, setPage] = useState<number>(1)

    return (
    <div className={style.main}>
        {page === 1 ? 
        <div className={style.registration}>
            <div className={style.registration__logo}></div>
            <h1 className={style.registration__title}>Astral <br /> <span className='font-bold text-2xl'>WorkSpace</span></h1>
            <form className={style.registration__form}>
                <div className={style.registration__form__input}>
                    <UiInput placeholder='login'/>
                </div>
                <div className={style.registration__form__input}>
                    <UiInput placeholder='E-mail'/>
                </div>
                <div className={style.registration__form__input}>
                    <UiInput placeholder='Password'/>
                </div>
                <span className={style.registration__form__warning}>By continuing, you agree to Astral’s Terms of Service <br /> and acknowledge you've read our Privacy Policy.</span>
                <div className={style.registration__form__confirmButton}>
                    <UiButton onClick={() => setPage(2)}>Next</UiButton>
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
            <form className={style.registration2__form}>
                <div className={style.registration2__form__input}>
                    <UiInput placeholder='Display Name'/>
                </div>
                <div className={style.registration2__form__input}>
                    <UiInput placeholder='How did you hear about us?'/>
                </div>
                <span className={style.registration2__form__warning}>By continuing, you agree to Astral’s Terms of Service <br /> and acknowledge you've read our Privacy Policy.</span>
                <div className={style.registration2__form__confirmButton}>
                    <UiButton>Register</UiButton>
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