import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../../App/store/User.store'
import UiButton from '../../../shared/ui-kit/button'
import style from '../style.module.scss'
import HeaderDropDown from './HeaderDropDown'

const ProfileButton = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const isAuth = useUserStore(state => state.isAuth)
	const user = useUserStore(state => state.user)
	const navigate = useNavigate()

	return (
		<>
			{isAuth ? (
				<div className={style.header__btn__container}>
					<div
						className={style.header__btn__logo}
						onClick={() => setIsOpen(!isOpen)}
					>
						{user.Image.length !== 0 ? (
							<img src={user.Image} alt='User Avatar' className='rounded-3xl' />
						) : (
							<span>{user.DisplayName[0].toUpperCase()}</span>
						)}
					</div>
					<HeaderDropDown isOpen={isOpen} />
				</div>
			) : (
				<UiButton onClick={() => navigate('/auth/login')}>Login</UiButton>
			)}
		</>
	)
}

export default ProfileButton
