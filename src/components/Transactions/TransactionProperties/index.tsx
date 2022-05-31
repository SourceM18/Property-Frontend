import React, { FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { TransactionItem, TransactionPropertyList } from '@components/index'

import { useSelector } from '@hooks/index'

import { propertyActions, transactionActions } from 'src/store/rootAction'
import { currentTransactionSelector } from 'src/store/selectors'

export const TransactionProperties: FC = () => {
	const currentTransaction = useSelector(currentTransactionSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(propertyActions.getProperties())
		dispatch(transactionActions.getTransactions())
	}, [])

	return (
		<>
			<TransactionItem transaction={currentTransaction} reconcileClassName={'reconcile-transaction'} />
			<TransactionPropertyList />
		</>
	)
}
