import React, { FC, useMemo } from 'react'

import { InvoiceList } from '@components/index'

import { useSelector } from '@hooks/index'
import { PaymentType } from '@utils/Types/instances'

import {
	invoicesBigOverdueSelector,
	invoicesPaidSelector,
	invoicesPlannedSelector,
	invoicesSelector,
	invoicesSmallOverdueSelector,
	totalSelector,
} from 'src/store/selectors'

export const SingleTotal: FC = () => {
	const invoices = useSelector(invoicesSelector)
	const invoicesBigOverdue = useSelector(invoicesBigOverdueSelector)
	const invoicesSmallOverdue = useSelector(invoicesSmallOverdueSelector)
	const invoicesPaid = useSelector(invoicesPaidSelector)
	const invoicesPlanned = useSelector(invoicesPlannedSelector)
	const total = useSelector(totalSelector)

	const invoicesByStatus = useMemo(() => {
		if (invoices && total === PaymentType.bigOverdue) {
			return invoicesBigOverdue
		}

		if (invoices && total === PaymentType.smallOverdue) {
			return invoicesSmallOverdue
		}

		if (invoices && total === PaymentType.paid) {
			return invoicesPaid
		}

		if (invoices && total === PaymentType.planned) {
			return invoicesPlanned
		}

		if (invoices && total === PaymentType.all) {
			return invoices
		}

		return []
	}, [total, invoices])

	return <InvoiceList invoices={invoicesByStatus} />
}
