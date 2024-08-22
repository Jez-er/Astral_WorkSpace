import { CircleX, MoveRight } from 'lucide-react'
import style from '../style.module.scss'

import { useMutation } from '@tanstack/react-query'
import { FC } from 'react'
import { IWorkSpace } from '../../../shared/api/interface/workspace'
import WorkSpaceService from '../../../shared/api/WorkSpace.service'

interface SpaceListProps {
	data: IWorkSpace[] | undefined
	isDelete: boolean
	refetch?: () => void
}

const SpaceList: FC<SpaceListProps> = ({ data, isDelete, refetch }) => {
	const getColorStyle = (colorName: string) => {
		const baseStyle =
			'flex w-14 h-14 rounded-xl justify-center items-center text-xl relative'

		switch (colorName) {
			case 'Red':
				return `${baseStyle} bg-red-200 text-red-500`
			case 'Green':
				return `${baseStyle} bg-green-300 text-green-500`
			case 'Blue':
				return `${baseStyle} bg-blue-200 text-blue-500`
			case 'Yellow':
				return `${baseStyle} bg-yellow-200 text-yellow-500`
			case 'Purple':
				return `${baseStyle} bg-purple-200 text-purple-500`
			case 'Orange':
				return `${baseStyle} bg-orange-200 text-orange-500`
			default:
				return `${baseStyle} bg-gray-300 text-gray-500`
		}
	}

	const { mutate } = useMutation({
		mutationKey: ['DeleteSpace'],
		mutationFn: (id: string) => WorkSpaceService.Delete(id),
		onSuccess: () => {
			// Optionally refetch or handle successful deletion
			if (refetch) refetch()
		},
		onError: error => {
			console.error('Error deleting workspace:', error)
		},
	})

	const deleteSpace = (id: string) => {
		mutate(id)
	}

	return (
		<div className={style.frame__main__workspaces}>
			{data?.map(workspace => (
				<div key={workspace.ID}>
					<div className={style.frame__main__workspaces__space}>
						<div className={getColorStyle(workspace.logoColor)}>
							{workspace.title.slice(0, 2).toUpperCase()}
						</div>
						<div className='flex flex-col'>
							<h2 className='font-medium'>{workspace.title}</h2>
							<span className='text-xs text-black/70'>
								{workspace.description}
							</span>
						</div>
						{!isDelete ? (
							<div className={style.frame__main__workspaces__space__btn}>
								<MoveRight size={27} strokeWidth={1.5} />
							</div>
						) : (
							<div
								className={style.frame__main__workspaces__space__btn__delete}
								onClick={() => deleteSpace(workspace.ID)}
							>
								<CircleX size={32} strokeWidth={2} absoluteStrokeWidth />
							</div>
						)}
					</div>
					<div className='flex w-11/12 h-0.5 bg-black/20 rounded-3xl mx-auto mb-5' />
				</div>
			))}
		</div>
	)
}

export default SpaceList
