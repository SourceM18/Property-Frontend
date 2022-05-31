import React, { FC } from 'react'

import { SumContainerProps } from '@components/Tenancy/TenancyCard/@types'
import styles from '@components/Tenancy/TenancyCard/styles.module.scss'

export const SumContainer: FC<SumContainerProps> = ({ children, text, styleName }) => (
	<div className={styles[styleName]}>
		<div className={styles.title}>{text}</div>
		<div className={styles.value}>{children}</div>
	</div>
)
