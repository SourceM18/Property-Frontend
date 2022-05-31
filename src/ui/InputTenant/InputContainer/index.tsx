import React, { ChangeEvent } from 'react'

interface InputContainerTypes {
	type: string
	value: string
	placeholder: string
	name: string
	text: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	styles: any
}

export const InputContainer = ({
	type,
	value,
	placeholder,
	name,
	text,
	onChange,
	styles,
}: InputContainerTypes): JSX.Element => (
	<div className={styles.container}>
		<div className={styles.input}>
			<input type={type} value={value} placeholder={placeholder} name={name} onChange={onChange} />
			<label>{text}</label>
		</div>
	</div>
)
