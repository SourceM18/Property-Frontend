import React, { FC, useEffect, useMemo } from 'react'

import moment from 'moment'

import { Dropdown } from '@ui/index'

import { DatePickerPropsType } from './@types'
import styles from './styles.module.scss'

export const DatePicker: FC<DatePickerPropsType> = ({ date, setDate, start, end, disabled = false }) => {
	useEffect(() => {
		if (Number(date.day) > days.length) {
			setDate({ ...date, day: days.length.toString() })
		}
	}, [date])

	const years = useMemo(() => {
		const s = start ? Number(moment(start).format('YYYY')) : 2000
		const e = end ? Number(moment(end).format('YYYY')) : 2040
		const years = []

		for (let i = s; i <= e; i++) years.push({ id: i.toString(), name: i.toString() })

		return years
	}, [date, date.month])

	const months = useMemo(() => {
		const months = []
		for (let i = 1; i <= 12; i++) {
			const date = new Date(`2021-${i < 10 ? `0${i}` : i}`)
			months.push({
				id: moment(date).format('MM'),
				name: moment(date).format('MMM'),
			})
		}
		return months
	}, [date, date.month])

	const days = useMemo(() => {
		const days = []
		if (date.year && date.month) {
			const daysInMonth = 32 - new Date(Number(date.year), Number(date.month.id) - 1, 32).getDate()
			for (let i = 1; i <= daysInMonth; i++) {
				if (i < 10) {
					days.push({ id: `0${i}`, name: `0${i}` })
				} else {
					days.push({ id: `${i}`, name: `${i}` })
				}
			}
		}
		return days
	}, [date, date.month])

	const handleChangeDay = (e: any) => {
		setDate({ ...date, day: e.target.name })
	}

	const handleChangeYear = (e: any) => {
		setDate({ ...date, year: e.target.name })
	}

	const handleChangeMonth = (e: any) => {
		const current = new Date(`2021-${e.target.name}`)
		setDate({ ...date, month: { id: e.target.name, name: moment(current).format('MMM') } })
	}

	return (
		<div className={styles['date-picker']}>
			<Dropdown value={date.day.toString()} items={days} disabled={disabled} changeHandler={handleChangeDay} />
			<Dropdown value={date.month.name} items={months} disabled={disabled} changeHandler={handleChangeMonth} />
			<Dropdown value={date.year.toString()} items={years} disabled={disabled} changeHandler={handleChangeYear} />
		</div>
	)
}
