import React, { FC, useEffect, useRef } from 'react'

import { useDispatch } from 'react-redux'

import { ConfirmationModal, PaymentStatistic } from '@components/index'

import { currencyFormatter, dateFormatter, scrollTo } from '@helpers/index'
import { useSelector, useTrigger } from '@hooks/index'

import { invoiceActions } from 'src/store/invoice/actions'
import { currentInvoiceSelector } from 'src/store/selectors'

import { Formatter } from './Formatter'
import styles from './styles.module.scss'

export const PropertyInvoice: FC<{ invoice: any }> = ({ invoice }) => {
	const currentInvoice = useSelector(currentInvoiceSelector)
	const [isModalOpen, triggerIsModalOpen] = useTrigger()
	const [isOpen, triggerIsOpen] = useTrigger()
	const dispatch = useDispatch()
	const ref = useRef()

	useEffect(() => {
		if (currentInvoice?.id === invoice.id) scrollTo(ref.current)
	}, [])

	const unreconcilePaymentParts = () => {
		dispatch(invoiceActions.unreconcileInvoice(invoice))
		triggerIsModalOpen()
	}

	return (
		<div className={styles.invoice} key={invoice.id} ref={ref}>
			<Formatter invoice={invoice} triggerIsModalOpen={triggerIsModalOpen}>
				{dateFormatter(invoice.date.toString())}
			</Formatter>
			<Formatter invoice={invoice} triggerIsModalOpen={triggerIsModalOpen}>
				{currencyFormatter(invoice.price)}
			</Formatter>
			<div className={styles.partitions}>
				<PaymentStatistic triggerIsOpen={triggerIsOpen} invoice={invoice} isOpen={isOpen} />
			</div>
			<ConfirmationModal
				isOpen={isModalOpen}
				onClose={triggerIsModalOpen}
				deleteObject={unreconcilePaymentParts}
				currentObject={'parts'}
			/>
		</div>
	)
}
