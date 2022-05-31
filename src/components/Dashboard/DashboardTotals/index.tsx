import React, { FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { DashboardTotal } from '@components/index'

import { useSelector } from '@hooks/index'

import { KeyLoader } from '@ui/index'
import { PaymentType } from '@utils/Types/instances'

import { invoiceActions } from 'src/store/rootAction'
import {
	bigOverdueSelector,
	incomeEstimateSelector,
	invoicesSelector,
	isPermissionsAndInvoicesLoading,
	paidSelector,
	smallOverdueSelector,
} from 'src/store/selectors'

import styles from './styles.module.scss'

export const DashboardTotals: FC = () => {
	const isLoading = useSelector(isPermissionsAndInvoicesLoading)
	const invoices = useSelector(invoicesSelector)
	const incomeEstimate = useSelector(incomeEstimateSelector)
	const bigOverdue = useSelector(bigOverdueSelector)
	const smallOverdue = useSelector(smallOverdueSelector)
	const paid = useSelector(paidSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(invoiceActions.getInvoices())
	}, [])

	return (
		<div className={styles['total-container']}>
			<KeyLoader isLoading={isLoading} />
			<DashboardTotal invoices={paid} type={PaymentType.paid} />
			<DashboardTotal invoices={invoices || []} type={PaymentType.all} />
			<DashboardTotal invoices={smallOverdue} type={PaymentType.smallOverdue} />
			<DashboardTotal invoices={incomeEstimate} type={PaymentType.planned} />
			<DashboardTotal invoices={bigOverdue} type={PaymentType.bigOverdue} />
		</div>
	)
}
