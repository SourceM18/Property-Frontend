import React, { ChangeEvent, FC, useEffect, useMemo, useState } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import { Decimal as MyDecimalComponent } from '@components/index'

import { colorFormatters, dateFormatter } from '@helpers/index'
import { usePathSplitter, useSelector } from '@hooks/index'
import { history } from '@utils/index'

import { propertyActions, transactionActions } from 'src/store/rootAction'

import { currentPropertySelector, currentTransactionSelector } from 'src/store/selectors'

import { InvoiceItemProps } from './@types'

import Button from './Button'

import styles from './styles.module.scss'

import Confirm from '@assets/icons/confirm-icon.svg'

import Currency from '@assets/icons/currency-icon.svg'

import Return from '@assets/icons/return.svg'

export const InvoiceItem: FC<InvoiceItemProps> = ({
	invoice,
	setSortFormat,
	triggerIsDesk,
	sortFormat,
	isInvoiceOpen,
	setInvoiceOpen,
}) => {
	const currentProperty = useSelector(currentPropertySelector)
	const currentTransaction = useSelector(currentTransactionSelector)
	const [amount, setAmount] = useState('0.00')
	const { pathHead } = usePathSplitter()
	const dispatch = useDispatch()

	useEffect(() => {
		const amount =
			currentTransaction?.balance < invoice?.price - invoice?.balance
				? currentTransaction?.balance
				: invoice.price - invoice.balance

		setAmount((amount / 100).toString())
	}, [currentTransaction, invoice])

	const handleClick = () => {
		if (pathHead(2) === '/dashboard/transactions') {
			setInvoiceOpen(invoice?.id)
		} else {
			history.push(`${pathHead(3)}/${invoice.id}`)
		}
	}

	const disabled = useMemo(() => {
		const integerAmount = (Number(amount) * 100).toFixed()
		return (
			!amount ||
			isNaN(Number(amount)) ||
			Number(amount) <= 0 ||
			Number(integerAmount) > currentTransaction?.balance ||
			invoice.price - invoice.balance < Number(integerAmount)
		)
	}, [amount, invoice, currentTransaction])

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setAmount(e.target.value.split(' ').join(''))
	}

	const handleLinkTransactionToPayment = () => {
		dispatch(
			transactionActions.reconcileTransaction({
				property_id: currentProperty.id,
				invoice_id: invoice.id,
				transaction_id: currentTransaction.id,
				amount: Math.round(Number(amount) * 100),
			}),
		)
		setAmount('0.00')
		setInvoiceOpen(null)
		dispatch(propertyActions.getProperties())
		dispatch(transactionActions.getTransactions())
	}

	const handleTurn = () => {
		setInvoiceOpen(null)
	}

	return (
		<>
			{isInvoiceOpen && isInvoiceOpen === invoice.id ? (
				<div className={styles['reconcile-invoice']}>
					<div className={styles['balance-container']}>
						<p className={styles.balance}>
							Balance to Pay: <SVG className={styles.icon} src={Currency} />
							{(invoice.price - invoice.balance) / 100}
						</p>
					</div>
					<div className={styles['input-container']}>
						<p className={styles.text}>Pay</p>
						<SVG className={styles.icon} src={Currency} />
						<input className={styles.input} onChange={handleChangeInput} value={amount} type={'text'} />
					</div>
					<div className={styles['buttons-container']}>
						<Button
							onClick={handleLinkTransactionToPayment}
							style={styles.confirm}
							svg={Confirm}
							text={'Confirm'}
							disabled={disabled}
						/>
						<Button onClick={handleTurn} style={styles.return} svg={Return} text={'Back'} />
					</div>
				</div>
			) : (
				<div className={classNames(styles['invoice-item'], styles[colorFormatters(invoice.status)])}>
					<div className={styles.price} onClick={handleClick}>
						<p className={styles.value}>
							<MyDecimalComponent
								price={pathHead(2) === '/dashboard/transactions' ? invoice.price - invoice.balance : invoice.price}
								color={colorFormatters(invoice.status)}
							/>
						</p>
					</div>

					<div
						className={styles.date}
						onClick={sortFormat === 'date' ? triggerIsDesk : setSortFormat.bind(null, 'date')}
					>
						{dateFormatter(invoice.status === 'paid' ? invoice.paid_at?.toString() : invoice.date?.toString())}
					</div>

					<div
						className={styles.property}
						onClick={sortFormat === 'property' ? triggerIsDesk : setSortFormat.bind(null, 'property')}
					>
						{invoice.property.title}
					</div>

					<div
						className={styles.tenant}
						onClick={sortFormat === 'tenant' ? triggerIsDesk : setSortFormat.bind(null, 'tenant')}
					>
						{invoice.tenant.name} {invoice.tenant.surname}
					</div>
				</div>
			)}
		</>
	)
}
