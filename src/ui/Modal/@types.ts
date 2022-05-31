import { FC } from 'react'

export type ModalProps = {
	isOpen: boolean
	onClose?: (...args: any) => any
	closeBtn?: FC<{ close: (...args: any) => any }>
	showCloseBtn?: boolean
	closeOnOverlayClick?: boolean
	contentClassName?: string
}
