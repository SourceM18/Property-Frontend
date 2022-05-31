import React, { ChangeEvent } from 'react'

export type InputAccountProps = {
	value?: string
	name?: string
	handleChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void
	children?: React.ReactNode
	placeholder?: string
	label?: string
}
