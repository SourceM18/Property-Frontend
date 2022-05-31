import React, { FC } from 'react'

import { PropertyInvoices } from '@components/index'

import styles from './styles.module.scss'
import { TitleBalance } from './TitleBalance'

export const PropertyBalance: FC<any> = (currentProperty) => {
	if (!currentProperty) {
		return null
	}

	return (
		<div className={styles.balance}>
			<div className={styles.table}>
				<div className={styles.header}>
					<TitleBalance>
						Due
						<br />
						Date
					</TitleBalance>
					<TitleBalance>
						Rent
						<br />
						Due
					</TitleBalance>
					<TitleBalance>
						Payment
						<br />
						Date
					</TitleBalance>
					<TitleBalance>
						Payment
						<br />
						Amount
					</TitleBalance>
					<TitleBalance>
						Arrears
						<br />
						Days
					</TitleBalance>
					<TitleBalance>Notes</TitleBalance>
				</div>

				<PropertyInvoices />
			</div>
		</div>
	)
}
