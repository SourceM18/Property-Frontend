import React, { FC, useMemo } from 'react'

import classNames from 'classnames'
import moment from 'moment'

import { TransactionPartition } from '@components/index'

import { currencyFormatter, dateFormatter } from '@helpers/index'

import { PaymentStatisticsProps } from './@types'
import styles from './styles.module.scss'

export const PaymentStatistic: FC<PaymentStatisticsProps> = ({ invoice, isOpen, triggerIsOpen }) => {
	const paymentParts = useMemo(() => {
		if (invoice.status === 'paid') {
			return [...invoice.partitions]
				.sort((a: any, b: any) => {
					return moment(a.timestamp).isAfter(b.timestamp) ? -1 : 1
				})
				.map((part: any, i: number) => {
					if (i === 0) {
						return {
							...part,
							arrearsDays: moment(part.timestamp).diff(invoice.date, 'days'),
						}
					}
					return {
						...part,
						arrearsDays: 0,
					}
				})
		}
		return [...invoice.partitions]
			.sort((a: any, b: any) => {
				return moment(a.timestamp).isAfter(b.timestamp) ? -1 : 1
			})
			.map((part: any) => ({
				...part,
				arrearsDays: 0,
			}))
	}, [invoice])

	const arrearsDays = useMemo(() => {
		if (invoice.paid_at && moment(invoice.date).isAfter(invoice.paid_at)) {
			return 0
		}
		if (invoice.paid_at) {
			return moment(invoice.paid_at).diff(invoice.date, 'days') || 0
		}
		return moment(Date.now()).diff(invoice.date, 'days') || 0
	}, [invoice])

	if (!invoice) {
		return null
	}

	return (
		<div className={styles.statistic}>
			{isOpen && paymentParts.length > 0 ? (
				paymentParts.map((part: any) => (
					<TransactionPartition key={part.id} partition={part} payment={invoice} triggerIsOpen={triggerIsOpen} />
				))
			) : (
				<>
					<div className={classNames(styles.title, styles.trigger)} onClick={triggerIsOpen}>
						<p>{invoice.last_pay && invoice.paid_at && dateFormatter(invoice.last_pay.toString())}</p>
					</div>
					<div className={classNames(styles.title, styles.trigger)} onClick={triggerIsOpen}>
						<p>{currencyFormatter(invoice.balance)}</p>
					</div>
					<div
						className={classNames(
							styles.arrearsDays,
							{ [styles.yellow]: arrearsDays > 0 && arrearsDays <= 30 },
							{ [styles.red]: arrearsDays > 30 },
						)}
					>
						{arrearsDays > 0 ? arrearsDays : ''}
					</div>
					<div className={styles.title} />
				</>
			)}
		</div>
	)
}
