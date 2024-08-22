import { FC } from 'react'
import { UiButtonProps } from '../../../shared/ui-kit/button'
import style from '../style.module.scss'

const GoogleButton: FC<UiButtonProps> = ({ ...props }) => {
	return (
		<button className={style.oauth_button} {...props}>
			<img
				src='../../../../public/google.png'
				alt='logo'
				className={style.oauth_button__logo}
			/>
			<span>Google</span>
		</button>
	)
}

export default GoogleButton
