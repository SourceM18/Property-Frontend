import React, { FC } from 'react'

import classNames from 'classnames'

import { Decimal } from '@components/index'

import { colorFormatters, dateFormatter } from '@helpers/index'

import { history } from '@utils/index'

import { PaymentItemProps } from './@types'

import styles from './styles.module.scss'

export const PaymentItem: FC<PaymentItemProps> = ({ payment, setSortFormat, triggerIsDesk, sortFormat }) => {
	const handleClick = () => {
		history.push(`/dashboard/total/paid/${payment.id}`)
	}

	return (
		<div className={classNames(styles['payment-item'], styles[colorFormatters(payment.status)])}>
			<div className={styles.price} onClick={handleClick}>
				<p className={styles.value}>
					<Decimal price={payment.price} color={'green'} />
				</p>
			</div>

			<div
				className={styles.date}
				onClick={sortFormat === 'pay-day' ? triggerIsDesk : setSortFormat.bind(null, 'pay-day')}
			>
				{dateFormatter(payment?.status === 'paid' ? payment?.paid_at?.toString() : payment?.date?.toString())}
			</div>

			<div
				className={styles.property}
				onClick={sortFormat === 'property' ? triggerIsDesk : setSortFormat.bind(null, 'property')}
			>
				{payment.property.title}
			</div>

			<div
				className={styles.tenant}
				onClick={sortFormat === 'tenant' ? triggerIsDesk : setSortFormat.bind(null, 'tenant')}
			>
				{payment.tenant.name} {payment.tenant.surname}
			</div>
		</div>
	)
}
