import React, { useState } from 'react'
import TeamSpace from './components/TeamSpace'
import YouSpace from './components/YouSpace'
import style from './style.module.scss'

const WorkSpaces: React.FC = () => {
	const [currentSpace, setCurrentSpace] = useState<'you' | 'team'>('you')
	const [isAnimating, setIsAnimating] = useState(false)
	const [animationDirection, setAnimationDirection] = useState<
		'toTeam' | 'toYou'
	>('toTeam')

	const handleAnimationEnd = () => {
		setCurrentSpace(currentSpace === 'you' ? 'team' : 'you')
		setIsAnimating(false)
	}

	const switchToTeamSpace = () => {
		setAnimationDirection('toTeam')
		setIsAnimating(true)
	}

	const switchToYouSpace = () => {
		setAnimationDirection('toYou')
		setIsAnimating(true)
	}

	return (
		<div className={style.main}>
			<div className={style.bg}>
				{currentSpace === 'you' && !isAnimating ? (
					<YouSpace onSwitch={switchToTeamSpace} />
				) : currentSpace === 'team' && !isAnimating ? (
					<TeamSpace onSwitch={switchToYouSpace} />
				) : (
					<div
						className={`${style.frame} ${
							animationDirection === 'toTeam'
								? style.animateToTeam
								: style.animateToYou
						}`}
						onAnimationEnd={handleAnimationEnd}
					></div>
				)}
			</div>
		</div>
	)
}

export default WorkSpaces
