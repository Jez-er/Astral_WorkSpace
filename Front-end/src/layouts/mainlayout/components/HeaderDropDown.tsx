import { FC, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useUserStore } from '../../../App/store/User.store'
import Icon from '../../../shared/common/Icon'
import { Routes } from '../data'
import style from '../style.module.scss'

interface HeaderDropDownProps {
	isOpen: boolean
}

const HeaderDropDown: FC<HeaderDropDownProps> = ({ isOpen }) => {
	const [animate, setAnimate] = useState(isOpen)
	const [animationClass, setAnimationClass] = useState('')

	const user = useUserStore(state => state.user)

	useEffect(() => {
		if (isOpen) {
			setAnimate(true)
			setAnimationClass(style.open)
		} else {
			setAnimationClass(style.close)
			const timer = setTimeout(() => setAnimate(false), 300)
			return () => clearTimeout(timer)
		}
	}, [isOpen])

	if (!animate) return null

	return (
		<div className={`${style.drop_menu} ${animationClass}`}>
			<div>
				<span>
					<b>{`Hello, ${user.DisplayName}!`}</b>
				</span>
			</div>
			<nav className={style.drop_menu__nav}>
				{Routes.map(data => (
					<NavLink
						to={data.Link}
						key={data.Link}
						className={style.drop_menu__nav__element}
					>
						<Icon name={data.Icon} size={19} strokeWidth={1.5} />
						<span>{data.Name}</span>
					</NavLink>
				))}
			</nav>
		</div>
	)
}

export default HeaderDropDown
