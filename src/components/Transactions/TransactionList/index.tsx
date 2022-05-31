import React, { FC, useEffect, useMemo, useState } from 'react'

import classNames from 'classnames'
import { useDispatch } from 'react-redux'

import { TransactionItem } from '@components/index'

import { usePathSplitter, useSelector } from '@hooks/index'

import { PoweredBY } from '@ui/index'
import { LoadingSpinner } from '@ui/LoadingSpinner'
import { history } from '@utils/index'

import { transactionActions } from 'src/store/rootAction'
import {
	freeUnhiddenTransactionSelector,
	hiddenTransactionSelector,
	inUseUnhiddenTransactionSelector,
	isPermissionsAndTransactionsLoading,
} from 'src/store/selectors'

import styles from './styles.module.scss'

export const TransactionList: FC = () => {
	const isLoading = useSelector(isPermissionsAndTransactionsLoading)
	const freeUnhiddenTransaction = useSelector(freeUnhiddenTransactionSelector)
	const inUseUnhiddenTransaction = useSelector(inUseUnhiddenTransactionSelector)
	const hiddenTransaction = useSelector(hiddenTransactionSelector)
	const [isMoneyHubVisible, setIsMoneyHubVisible] = useState(false)
	const [showButtons, setShowButtons] = useState(null)
	const { pathSplitter } = usePathSplitter()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(transactionActions.getTransactions())
	}, [])

	const showTransactionButton = useMemo(() => {
		if (pathSplitter().includes('/hidden')) {
			return (
				<button className={styles.button} onClick={() => history.push('/dashboard/transactions')}>
					Transactions
				</button>
			)
		}
		return (
			<button className={styles.button} onClick={() => history.push('/dashboard/hidden')}>
				Hidden Transactions
			</button>
		)
	}, [pathSplitter()])

	const onMoneyHubVisibleToggle = () => {
		setIsMoneyHubVisible(!isMoneyHubVisible)
	}

	const showTransactionList = useMemo(() => {
		if (pathSplitter().includes('/hidden')) {
			return hiddenTransaction.map((tr: any) => (
				<TransactionItem key={tr.id} transaction={tr} showButtons={showButtons} setShowButtons={setShowButtons} />
			))
		}
		return [...freeUnhiddenTransaction, ...inUseUnhiddenTransaction].map((tr) => (
			<TransactionItem key={tr.id} transaction={tr} showButtons={showButtons} setShowButtons={setShowButtons} />
		))
	}, [pathSplitter()])

	const TransactionsTitle = ({ title }: { title: string }) => <p className={styles.title}>{title}</p>

	return (
		<div className={classNames(styles['transactions-page'], { [styles.flex]: isMoneyHubVisible })}>
			{isLoading && <LoadingSpinner />}
			{!isMoneyHubVisible && (
				<div className={styles['list-header']}>
					<TransactionsTitle title={'Status'} />
					<TransactionsTitle title={'Amount'} />
					<TransactionsTitle title={'Balance'} />
					<TransactionsTitle title={'Date'} />
					<TransactionsTitle title={'Reference'} />
				</div>
			)}
			{!isMoneyHubVisible && <div className={styles.list}>{showTransactionList}</div>}
			{!isMoneyHubVisible && <div className={styles['list-footer']}>{showTransactionButton}</div>}
			<PoweredBY
				isMoneyHubVisible={isMoneyHubVisible}
				onMoneyHubVisibleToggle={onMoneyHubVisibleToggle}
				addClass={'dashboard'}
			/>
		</div>
	)
}
