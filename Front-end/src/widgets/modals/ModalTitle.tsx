import { FC, PropsWithChildren } from 'react'
const ModalTitle: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={'text-lg font-medium flex mx-auto gap-2.5'}>
			<div style={{ marginTop: '-1px', marginLeft: 'auto' }}>{children}</div>
		</div>
	)
}

export default ModalTitle
