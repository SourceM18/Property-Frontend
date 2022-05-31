import React, { FC, useMemo, useState } from 'react'

import classNames from 'classnames'

import { InvoiceItem } from '@components/index'

import { sortFormatters } from '@helpers/index'

import { usePathSplitter, useTrigger } from '@hooks/index'
import { LocalStorage, PaymentType } from '@utils/index'

import { InvoiceListProps } from './@types'

import styles from './styles.module.scss'

const ls = LocalStorage.getInstance()

export const InvoiceList: FC<InvoiceListProps> = ({ invoices, transactionsClassName }) => {
	const [sortFormat, setSortFormat] = useState<'date' | 'tenant' | 'property'>(ls.get('sortType') || 'date')
	const [isDesk, triggerIsDesk] = useTrigger(ls.get('isDesс') === 'true' || false)
	const [isInvoiceOpen, setInvoiceOpen] = useState(null)
	const { pathSplitter } = usePathSplitter()
	const transactionsUrl = pathSplitter().includes('/transactions')

	const sortedInvoices = useMemo(() => {
		if (transactionsUrl) {
			return sortFormatters(
				invoices?.filter((invoice) => invoice.status !== PaymentType.paid) || [],
				sortFormat,
				isDesk,
			)
		}
		return sortFormatters(invoices || [], sortFormat, isDesk)
	}, [invoices, isDesk])

	return (
		<div className={classNames(styles['list-container'], styles[`${transactionsClassName}`])}>
			<div className={styles['invoice-list']}>
				{sortedInvoices.map((i) => (
					<InvoiceItem
						key={i.id}
						invoice={i}
						setSortFormat={setSortFormat}
						triggerIsDesk={triggerIsDesk}
						sortFormat={sortFormat}
						isInvoiceOpen={isInvoiceOpen}
						setInvoiceOpen={setInvoiceOpen}
					/>
				))}
			</div>
		</div>
	)
}
