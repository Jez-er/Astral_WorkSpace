import { useMutation } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ModalProps } from '../../../../App/hooks/useModal'
import WorkSpaceService from '../../../../shared/api/WorkSpace.service'
import UiButton from '../../../../shared/ui-kit/button'
import UiInput from '../../../../shared/ui-kit/input'
import Modal from '../../../../widgets/modals/Modal'

interface CreateSpaceProps {
	props: ModalProps
	userID: string
	refetch?: () => void
}

type FormProps = {
	Title: string
	Description: string
}

const CreateSpace: FC<CreateSpaceProps> = ({ props, userID, refetch }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormProps>({
		defaultValues: {
			Title: '',
			Description: '',
		},
		mode: 'onChange',
	})

	const [selectedColor, setSelectedColor] = useState<string>('')

	const mutation = useMutation({
		mutationKey: ['CreateWorkSpace'],
		mutationFn: ({
			userID,
			Title,
			Description,
			color,
		}: {
			userID: string
			Title: string
			Description: string
			color: string
		}) => WorkSpaceService.Create(userID, Title, Description, color),
		onSuccess: () => {
			if (refetch) {
				refetch()
				setTimeout(() => {
					props.onClose()
				}, 100)
			}
		},
	})

	const onSubmit = (formData: FormProps) => {
		if (!selectedColor) {
			alert('Please select a color')
			return
		}

		mutation.mutate({
			userID,
			Title: formData.Title,
			Description: formData.Description,
			color: selectedColor,
		})

		formData.Description = ''
		formData.Title = ''
	}

	type TColor = {
		colorName: string
	}

	const colors: TColor[] = [
		{ colorName: 'Red' },
		{ colorName: 'Green' },
		{ colorName: 'Blue' },
		{ colorName: 'Yellow' },
		{ colorName: 'Purple' },
		{ colorName: 'Orange' },
	]

	const colorStyle = (colorName: string) => {
		let baseStyle = 'relative w-5 h-5 rounded-full cursor-pointer'
		switch (colorName) {
			case 'Red':
				baseStyle += ' bg-red-500'
				break
			case 'Green':
				baseStyle += ' bg-green-500'
				break
			case 'Blue':
				baseStyle += ' bg-blue-500'
				break
			case 'Yellow':
				baseStyle += ' bg-yellow-500'
				break
			case 'Purple':
				baseStyle += ' bg-purple-500'
				break
			case 'Orange':
				baseStyle += ' bg-orange-500'
				break
			default:
				baseStyle += ' bg-gray-500'
		}
		if (colorName === selectedColor) {
			baseStyle +=
				' after:absolute after:top-[-4px] after:left-[-4px] after:w-7 after:h-7 after:border-2 after:border-gray-500 after:rounded-full'
		}
		return baseStyle
	}

	const handleColorClick = (colorName: string) => {
		setSelectedColor(colorName)
	}

	return (
		<Modal {...props}>
			<Modal.Title>Create WorkSpace</Modal.Title>
			<Modal.Body>
				<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
					<div className='mt-3'>
						<span className='text-red-500 text-xs ml-4'>
							{errors.Title?.message}
						</span>
						<UiInput
							{...register('Title', { required: 'Title is required' })}
							placeholder='Title'
						/>
					</div>
					<div className='mt-5'>
						<UiInput {...register('Description')} placeholder='Description' />
					</div>
					<div className='mt-5 mx-auto'>
						<label className='text-gray-400'>Color</label>
						<div className='flex gap-5 '>
							{colors.map(data => (
								<div
									key={data.colorName}
									className={colorStyle(data.colorName)}
									onClick={() => handleColorClick(data.colorName)}
								/>
							))}
						</div>
					</div>
					<div className='mx-auto mt-5'>
						<UiButton type='submit'>Create</UiButton>
					</div>
				</form>
			</Modal.Body>
		</Modal>
	)
}

export default CreateSpace
