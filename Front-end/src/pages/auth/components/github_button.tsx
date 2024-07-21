import style from '../style.module.scss'

const GitHubButton = () => {
    return (<button className={style.oauth_button}>
        <img src="../../../../public/github.png" alt="logo" className={style.oauth_button__logo} />
        <span>GitHub</span>
    </button>)
}

export default GitHubButton