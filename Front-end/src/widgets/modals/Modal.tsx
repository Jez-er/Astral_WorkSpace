import { FC, PropsWithChildren } from 'react'
import { ModalProps } from '../../App/hooks/useModal.ts'
import ModalBody from './ModalBody.tsx'
import ModalLayout from './ModalLayout.tsx'
import ModalTitle from './ModalTitle.tsx'
interface ModalComponentProps extends PropsWithChildren<ModalProps> {}

const ModalComponent: FC<ModalComponentProps> = ({
	children,
	...layoutProps
}) => {
	return <ModalLayout {...layoutProps}>{children}</ModalLayout>
}

const Modal = Object.assign(ModalComponent, {
	Title: ModalTitle,
	Body: ModalBody,
})
export default Modal
