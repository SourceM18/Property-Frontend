import React, { FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { PropertyInvoice } from '@components/index'

import { useSelector } from '@hooks/index'

import { invoiceActions, propertyActions } from 'src/store/rootAction'
import { currentPropertySelector, propertiesSelector, sortedPaymentsSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

export const PropertyInvoices: FC = () => {
	const sortedPayments = useSelector(sortedPaymentsSelector)

	const currentProperty = useSelector(currentPropertySelector)
	const properties = useSelector(propertiesSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(propertyActions.getProperties())
	}, [])

	useEffect(() => {
		if (currentProperty) {
			dispatch(invoiceActions.getInvoicesByPropertyId(currentProperty.id))
		}
	}, [properties])

	return (
		<div className={styles.invoices}>
			{sortedPayments && sortedPayments.map((invoice) => <PropertyInvoice invoice={invoice} key={invoice.id} />)}
		</div>
	)
}
