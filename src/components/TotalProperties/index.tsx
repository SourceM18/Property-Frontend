import React, { FC, useMemo } from 'react'

import { DashboardProperty } from '@components/index'

import { useSelector } from '@hooks/index'
import { PaymentType, Property } from '@utils/Types/instances'

import { invoicesSelector, totalSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

export const TotalProperties: FC = () => {
	const invoices = useSelector(invoicesSelector)
	const total = useSelector(totalSelector)

	const properties: Property[] = useMemo(() => {
		if (invoices && total === PaymentType.bigOverdue) {
			return invoices
				.filter((i: any) => i.status === PaymentType.bigOverdue)
				.reduce((acc: any, invoice: any) => {
					if (acc.filter((property: any) => property.id === invoice.property.id).length === 0) {
						return [...acc, invoice.property]
					}
					return acc
				}, [])
		}

		if (invoices && total === PaymentType.smallOverdue) {
			return invoices
				.filter((i: any) => i.status === PaymentType.smallOverdue)
				.reduce((acc: any, invoice: any) => {
					if (acc.filter((property: any) => property.id === invoice.property.id).length === 0) {
						return [...acc, invoice.property]
					}
					return acc
				}, [])
		}

		if (invoices && total === PaymentType.paid) {
			return invoices
				.filter((i: any) => i.status === PaymentType.paid)
				.reduce((acc: any, invoice: any) => {
					if (acc.filter((property: any) => property.id === invoice.property.id).length === 0) {
						return [...acc, invoice.property]
					}
					return acc
				}, [])
		}

		if (invoices && total === PaymentType.planned) {
			return invoices
				.filter((i: any) => i.status !== PaymentType.paid)
				.reduce((acc: any, invoice: any) => {
					if (acc.filter((property: any) => property.id === invoice.property.id).length === 0) {
						return [...acc, invoice.property]
					}
					return acc
				}, [])
		}

		if (invoices && total === PaymentType.all) {
			return invoices.reduce((acc: any, invoice: any) => {
				if (acc.filter((property: any) => property.id === invoice.property.id).length === 0) {
					return [...acc, invoice.property]
				}
				return acc
			}, [])
		}

		return []
	}, [total, invoices])

	return (
		<div className={styles['property-list']}>
			{properties.map((property) => (
				<DashboardProperty property={property} key={property.id} />
			))}
		</div>
	)
}
