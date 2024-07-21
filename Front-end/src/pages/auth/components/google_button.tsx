import style from '../style.module.scss'

const GoogleButton = () => {
    return (<button className={style.oauth_button}>
        <img src="../../../../public/google.png" alt="logo" className={style.oauth_button__logo} />
        <span>Google</span>
    </button>)
}

export default GoogleButton