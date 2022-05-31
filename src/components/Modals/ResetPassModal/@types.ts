import { ChangeEvent } from 'react'

export type ResetPassModalProps = {
	isOpen: boolean
	onClose?: any
	reset?: () => void
	email: string
	changeEmail: (e: ChangeEvent<HTMLInputElement>) => void
}
