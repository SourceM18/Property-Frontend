import React, { FC } from 'react'

import styles from '@components/Property/PropertyBalance/styles.module.scss'

import { TitleBalanceProps } from './@types'

export const TitleBalance: FC<TitleBalanceProps> = ({ children }) => (
	<div className={styles.title}>
		<p>{children}</p>
	</div>
)
