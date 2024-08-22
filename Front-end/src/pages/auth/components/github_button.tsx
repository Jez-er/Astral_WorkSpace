import { FC } from 'react'
import { UiButtonProps } from '../../../shared/ui-kit/button'
import style from '../style.module.scss'

const GitHubButton: FC<UiButtonProps> = ({ ...props }) => {
	return (
		<button {...props} className={style.oauth_button}>
			<img
				src='../../../../public/github.png'
				alt='logo'
				className={style.oauth_button__logo}
			/>
			<span>GitHub</span>
		</button>
	)
}

export default GitHubButton
