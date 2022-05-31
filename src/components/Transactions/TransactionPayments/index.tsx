import React, { FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { TransactionItem, InvoiceList, DashboardProperty } from '@components/index'

import { useSelector } from '@hooks/index'

import { propertyActions, invoiceActions } from 'src/store/rootAction'
import { currentPropertySelector, currentTransactionSelector, unpaidInvoicesSelector } from 'src/store/selectors'

export const TransactionPayments: FC = () => {
	const currentTransaction = useSelector(currentTransactionSelector)
	const currentProperty = useSelector(currentPropertySelector)
	const unpaidInvoices = useSelector(unpaidInvoicesSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(propertyActions.getProperties())
		if (currentProperty) {
			dispatch(invoiceActions.getInvoicesByPropertyId(currentProperty.id))
		}
	}, [currentTransaction])

	return (
		<>
			<TransactionItem transaction={currentTransaction} reconcileClassName={'reconcile-transaction'} />
			<DashboardProperty property={currentProperty} transactionsClassName={'transaction-invoices'} />
			<InvoiceList invoices={unpaidInvoices} transactionsClassName={'transaction-invoices'} />
		</>
	)
}
