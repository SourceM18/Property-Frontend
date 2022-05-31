import React, { FC } from 'react'

import SVG from 'react-inlinesvg'

import { ButtonProps } from './@types'

import styles from './styles.module.scss'

export const BigButton: FC<ButtonProps> = ({ onClick, icon, disabled, text }) => {
	return (
		<button disabled={disabled && disabled} className={styles['btn-component']} onClick={onClick}>
			<SVG src={icon} className={styles.icon} />
			<p className={styles['btn-text']}>{text}</p>
		</button>
	)
}
