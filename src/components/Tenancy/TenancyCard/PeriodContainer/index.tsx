import React, { FC } from 'react'

import { PeriodContainerProps } from '@components/Tenancy/TenancyCard/@types'
import styles from '@components/Tenancy/TenancyCard/styles.module.scss'

export const PeriodContainer: FC<PeriodContainerProps> = ({ text, children }) => (
	<div className={styles['period-container']}>
		<div className={styles.title}>
			<p className={styles.text}>{text}</p>
		</div>
		<div className={styles.value}>{children}</div>
	</div>
)
