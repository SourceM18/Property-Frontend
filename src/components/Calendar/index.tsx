import React, { FC, useEffect, useState } from 'react'

import moment from 'moment'
import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import { DatePicker } from '@components/index'

import { dateObjectFormatter, dateToStringFormatter } from '@helpers/index'
import { usePathSplitter, useSelector } from '@hooks/index'
import { DatePicker as DatePickerType } from '@utils/Types/localTypes'

import { commonActionCreators, transactionActions, propertyActions, invoiceActions } from 'src/store/rootAction'
import { periodSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

import clockIcon from '@assets/icons/clock-icon.svg'

export const Calendar: FC = () => {
	const period = useSelector(periodSelector)
	const [startDate, setStartDate] = useState(dateObjectFormatter(period.start))
	const [endDate, setEndDate] = useState(dateObjectFormatter(period.end))
	const { pathSplitter } = usePathSplitter()
	const dispatch = useDispatch()

	useEffect(() => {
		if (moment(dateToStringFormatter(startDate)).isAfter(dateToStringFormatter(endDate))) {
			const nextDay = moment(dateToStringFormatter(startDate)).add(1, 'day').format('YYYY-MM-DD')
			setEndDate(dateObjectFormatter(nextDay))
		}

		if (dateToStringFormatter(startDate) !== period.start || dateToStringFormatter(endDate) !== period.end) {
			handleSetDateRange({
				start: dateToStringFormatter(startDate),
				end: dateToStringFormatter(endDate),
			})
		}
	}, [startDate])

	useEffect(() => {
		if (moment(dateToStringFormatter(startDate)).isAfter(dateToStringFormatter(endDate))) {
			const prevDay = moment(dateToStringFormatter(endDate)).subtract(1, 'day').format('YYYY-MM-DD')
			setStartDate(dateObjectFormatter(prevDay))
		}

		if (dateToStringFormatter(startDate) !== period.start || dateToStringFormatter(endDate) !== period.end) {
			handleSetDateRange({
				start: dateToStringFormatter(startDate),
				end: dateToStringFormatter(endDate),
			})
		}
	}, [endDate])

	const handleSetDateRange = (range: DatePickerType) => {
		dispatch(commonActionCreators.setPeriod(range))
		if (pathSplitter().includes('/dashboard')) {
			dispatch(invoiceActions.getInvoices())
		}
		if (pathSplitter().includes('/transactions')) {
			dispatch(transactionActions.getTransactions())
		}
		if (pathSplitter().includes('/properties')) {
			dispatch(propertyActions.getProperties())
		}
	}

	return (
		<div className={styles.calendar}>
			<SVG src={clockIcon} className={styles.icon} />
			<div className={styles['date-picker']}>
				<div className={styles.date}>
					<p className={styles.label}>From</p>
					<DatePicker date={startDate} setDate={setStartDate} />
				</div>
				<div className={styles.date}>
					<p className={styles.label}>To</p>
					<DatePicker date={endDate} setDate={setEndDate} />
				</div>
			</div>
		</div>
	)
}
