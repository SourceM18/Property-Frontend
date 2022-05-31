import React, { ChangeEvent, FC, useMemo, useState } from 'react'

import moment from 'moment'
import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import { DatePicker } from '@components/index'

import { dateFormatter, dateObjectFormatter, dateToStringFormatter } from '@helpers/index'

import { transactionActions } from 'src/store/rootAction'

import styles from './styles.module.scss'

import Plus from '@assets/icons/circle-plus.svg'
import FrankIcon from '@assets/icons/currency-icon.svg'

export const NewTransaction: FC = () => {
	const [timestamp, seTimestamp] = useState(dateObjectFormatter(moment(Date.now()).format('YYYY-MM-DD')))
	const [amount, setAmount] = useState('0.00')
	const [note, setNote] = useState('')
	const dispatch = useDispatch()

	const disabled = useMemo(() => {
		return !amount || isNaN(Number(amount)) || Number(amount) <= 0
	}, [amount])

	const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.toString().includes('.') && e.target.value.toString().split('.').pop().length < 3) {
			setAmount(e.target.value)
		}

		if (e.target.value.toString().length <= 7) {
			setAmount(e.target.value)
		}
	}

	const handleChangeNote = (e: ChangeEvent<HTMLInputElement>) => {
		setNote(e.target.value)
	}

	const handleCreateTransaction = () => {
		dispatch(
			transactionActions.createCustomTransaction({
				id: null,
				timestamp: moment(dateToStringFormatter(timestamp)).toJSON(),
				amount: Number(amount) * 100,
				description: note.trim() ? note : `Manual Entry on ${dateFormatter(moment(Date.now()).format('YYYY-MM-DD'))}`,
			}),
		)
		seTimestamp(dateObjectFormatter(moment(Date.now()).format('YYYY-MM-DD')))
		setAmount('0.00')
		setNote('')
	}

	return (
		<div className={styles['new-transaction']}>
			<div className={styles.header}>
				<div className={styles.label}>
					<SVG className={styles.icon} src={Plus} />
					Add New Transaction
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.info}>
					<div className={styles['info-container']}>
						<div className={styles['info-input']}>
							<SVG src={FrankIcon} className={styles.icon} />
							<input
								type={'number'}
								value={amount}
								placeholder={'Enter Amount'}
								onChange={handleChangeAmount}
								name={'amount'}
							/>
							<label>Entry Amount</label>
						</div>
					</div>

					<div className={styles['date-container']}>
						<div className={styles.title}>Entry Date</div>
						<div className={styles.value}>
							<DatePicker setDate={seTimestamp} date={timestamp} />
						</div>
					</div>
				</div>

				<div className={styles.ref}>
					<div className={styles['ref-container']}>
						<div className={styles['ref-input']}>
							<input
								type={'text'}
								value={note}
								placeholder={'Enter Reference'}
								onChange={handleChangeNote}
								name={'reference'}
							/>
							<label>Entry Reference</label>
						</div>
					</div>
				</div>
				<div className={styles.buttons}>
					<button className={styles.button} onClick={handleCreateTransaction} disabled={disabled}>
						Confirm
					</button>
				</div>
			</div>
		</div>
	)
}
