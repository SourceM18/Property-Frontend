import React, { FC } from 'react'

import classNames from 'classnames'

import SVG from 'react-inlinesvg'

import { ButtonProps } from '@components/Tenancy/TenancyButtons/@types'
import styles from '@components/Tenancy/TenancyButtons/styles.module.scss'

export const Button: FC<ButtonProps> = ({ activeStyle, onClick, src, text }) => (
	<button className={classNames(styles.button, { [styles.active]: activeStyle })} onClick={onClick}>
		<SVG className={styles.icon} src={src} />
		<p className={styles.text}>{text}</p>
	</button>
)
