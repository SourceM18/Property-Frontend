import React, { FC, useEffect, useState, useMemo } from 'react'

import { useDispatch } from 'react-redux'

import { PaymentItem } from '@components/index'

import { sortFormatters } from '@helpers/index'
import { useSelector, useTrigger } from '@hooks/index'

import { LoadingSpinner } from '@ui/LoadingSpinner'
import { LocalStorage } from '@utils/index'

import { invoiceActions } from 'src/store/rootAction'
import { invoicesSelector, isPermissionsAndInvoicesLoading, paidSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

const ls = LocalStorage.getInstance()

export const PaymentList: FC = () => {
	const [sortFormat, setSortFormat] = useState<'pay-day' | 'tenant' | 'property'>(ls.get('sortType') || 'pay-day')
	const [isDesk, triggerIsDesk] = useTrigger(ls.get('isDesс') === 'true' || false)
	const invoices = useSelector(invoicesSelector)
	const isLoading = useSelector(isPermissionsAndInvoicesLoading)
	const paidFilter = useSelector(paidSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(invoiceActions.getInvoices())
	}, [])

	const paid = useMemo(() => {
		return sortFormatters(paidFilter || [], sortFormat, isDesk)
	}, [invoices, isDesk])

	return (
		<div className={styles['list-container']}>
			{isLoading && <LoadingSpinner />}
			<div className={styles['payment-list']}>
				{paid &&
					paid.map((payment) => (
						<PaymentItem
							key={payment.id}
							payment={payment}
							setSortFormat={setSortFormat}
							triggerIsDesk={triggerIsDesk}
							sortFormat={sortFormat}
						/>
					))}
			</div>
		</div>
	)
}
