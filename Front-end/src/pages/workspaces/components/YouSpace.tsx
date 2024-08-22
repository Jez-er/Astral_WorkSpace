import { useQuery } from '@tanstack/react-query'
import { MoveRight, Plus, Trash, Undo2 } from 'lucide-react'
import React, { useState } from 'react'
import useModal from '../../../App/hooks/useModal'
import { useUserStore } from '../../../App/store/User.store'
import WorkSpaceService from '../../../shared/api/WorkSpace.service'
import style from '../style.module.scss'
import SpaceList from './SpaceList'
import CreateSpace from './modals/createSpace'

interface YouSpaceProps {
	onSwitch: () => void
}

const YouSpace: React.FC<YouSpaceProps> = ({ onSwitch }) => {
	const [isDelete, setIsDelete] = useState<boolean>(false)
	const userID = useUserStore(state => state.user.UserID)
	const modalProps = useModal()

	const { data, refetch } = useQuery({
		queryKey: ['allWorkSpaces'],
		queryFn: () => WorkSpaceService.Get(userID),
		select: data => data?.data.WorkSpaces,
	})

	return (
		<div className={style.frame}>
			<div className={style.frame__header}>
				<p>You WorkSpace</p>
				<div className={style.frame__header__arrow} onClick={onSwitch}>
					<MoveRight size={27} strokeWidth={1.5} />
				</div>
			</div>
			<div className={style.frame__main}>
				<h1 className={style.frame__main__title}>
					Select the workspace you want to work
				</h1>
				<SpaceList data={data} isDelete={isDelete} refetch={refetch} />
				<div className={style.frame__main__add_btn__wrapper}>
					<div
						className={style.frame__main__add_btn}
						onClick={() => modalProps.onOpen()}
					>
						<Plus size={32} strokeWidth={2} absoluteStrokeWidth />
					</div>
					<div className='w-0.5 h-7 bg-black' />
					<div
						className={style.frame__main__add_btn}
						onClick={() => setIsDelete(!isDelete)}
					>
						{!isDelete ? (
							<Trash size={32} strokeWidth={2} absoluteStrokeWidth />
						) : (
							<Undo2 size={32} strokeWidth={2} absoluteStrokeWidth />
						)}
					</div>
				</div>
			</div>
			<CreateSpace props={modalProps} userID={userID} refetch={refetch} />
		</div>
	)
}

export default YouSpace
