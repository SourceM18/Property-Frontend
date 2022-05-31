import React, { FC } from 'react'

import styles from '@components/Account/AccountEdit/styles.module.scss'

import { InputAccountProps } from './@types'

export const InputAccount: FC<InputAccountProps> = ({
	label,
	placeholder,
	value,
	name,
	handleChangeInput,
	children,
}) => {
	return (
		<div className={styles.field}>
			{children || (
				<>
					<input
						placeholder={placeholder || `Enter ${name}`}
						value={value}
						onChange={handleChangeInput}
						name={name}
						type={'text'}
					/>
					<label>{label || name}</label>
				</>
			)}
		</div>
	)
}
