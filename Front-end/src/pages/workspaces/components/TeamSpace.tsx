import { MoveLeft } from 'lucide-react'
import React from 'react'
import style from '../style.module.scss'

interface TeamSpaceProps {
	onSwitch: () => void
}

const TeamSpace: React.FC<TeamSpaceProps> = ({ onSwitch }) => {
	return (
		<div className={style.frame_team}>
			<div className={style.frame_team__header}>
				<p>Team Space</p>
				<div className={style.frame_team__header__arrow} onClick={onSwitch}>
					<MoveLeft size={27} strokeWidth={1.5} />
				</div>
			</div>
			<div className={style.frame_team__main}>
				<h1 className={style.frame_team__main__title}>
					Welcome to the Team Space
				</h1>
				{/* Добавьте контент для TeamSpace */}
			</div>
		</div>
	)
}

export default TeamSpace
