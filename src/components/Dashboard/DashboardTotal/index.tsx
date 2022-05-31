import React, { FC, useCallback, useMemo } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'
import { useHistory } from 'react-router-dom'

import { colorFormatters } from '@helpers/index'
import { PaymentType } from '@utils/Types/instances'

import styles from './styles.module.scss'

import CurrencyIcon from '@assets/icons/currency-icon.svg'

type DashboardTotalProps = {
	invoices: any[]
	type?: PaymentType
}

export const DashboardTotal: FC<DashboardTotalProps> = ({ invoices = [], type }) => {
	const { location, ...history } = useHistory()

	const totalPrice = useMemo(() => {
		if (invoices && type === PaymentType.planned) {
			return invoices?.filter((i) => i.status !== PaymentType.paid).reduce((acc, invoice) => acc + invoice.price, 0)
		}
		return invoices?.reduce((acc, invoice) => acc + invoice.price, 0)
	}, [invoices])

	const uniquePropertyCount = useMemo(() => {
		if (invoices && type === PaymentType.planned) {
			return invoices
				.filter((i) => i.status !== PaymentType.paid)
				.reduce((acc, invoice) => {
					if (acc.filter((id: any) => id === invoice.property.id).length === 0) {
						return [...acc, invoice.property.id]
					}
					return acc
				}, []).length
		}
		return invoices?.reduce((acc, invoice) => {
			if (acc.filter((id: any) => id === invoice.property.id).length === 0) {
				return [...acc, invoice.property.id]
			}
			return acc
		}, []).length
	}, [invoices])

	const description = useMemo(() => {
		switch (type) {
			case PaymentType.all:
				return <>Income Estimate</>
			case PaymentType.paid:
				return <>Payments</>
			case PaymentType.smallOverdue:
				return <>Rent Overdue 1-30 Days</>
			case PaymentType.bigOverdue:
				return <>Rent Overdue 30+ Days</>
			default:
				return <>Rent Receivables</>
		}
	}, [type])

	const handleOpenInvoices = useCallback(() => {
		const path =
			location.pathname === `/dashboard/total/${type}` && type !== PaymentType.all
				? '/dashboard/total'
				: `/dashboard/total/${type}`
		history.push(path)
	}, [location.pathname, type])

	const handleOpenProperties = useCallback(() => {
		const path =
			location.pathname === `/dashboard/total/${type}/properties`
				? `/dashboard/total`
				: `/dashboard/total/${type}/properties`
		history.push(path)
	}, [location.pathname, type])

	return (
		<div className={classNames(styles['dashboard-total'], styles[colorFormatters(type)])}>
			<div
				className={styles['price-container']}
				onClick={type === PaymentType.all ? handleOpenProperties : handleOpenInvoices}
			>
				<div className={styles.amount}>
					<SVG className={styles.icon} src={CurrencyIcon} />
					<p className={styles.value}>{(totalPrice / 100).toFixed()}</p>
				</div>
				<div className={styles.description}>{description}</div>
			</div>

			<div
				className={classNames(styles['count-container'], styles[colorFormatters(type)], {
					[styles.active]: location.pathname.includes(`/dashboard/total/${type}/properties`),
				})}
				onClick={handleOpenProperties}
			>
				<p className={styles.count}>{uniquePropertyCount}</p>
				<p className={styles.text}>Properties</p>
			</div>
		</div>
	)
}
