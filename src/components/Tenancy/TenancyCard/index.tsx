import React, { ChangeEvent, FC, useEffect, useMemo, useState } from 'react'

import moment from 'moment'
import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import { DatePicker, TenancyButtons } from '@components/index'

import { dateObjectFormatter, dateToStringFormatter } from '@helpers/index'
import { useSelector } from '@hooks/index'

import { Photo } from '@ui/Photo'

import { tenancyActions, tenancyActionCreators } from 'src/store/rootAction'
import { currentPropertySelector, currentTenancySelector } from 'src/store/selectors'

import { PeriodContainer } from './PeriodContainer'
import { PeriodList } from './PeriodList'
import styles from './styles.module.scss'
import { SumContainer } from './SumContainer'

import FrankIcon from '@assets/icons/currency-icon.svg'
import TenantPlug from '@assets/icons/person-icon.svg'

export const TenancyCard: FC = () => {
	const currentTenancy = useSelector(currentTenancySelector)
	const currentProperty = useSelector(currentPropertySelector)

	const [startDate, setStartDate] = useState(dateObjectFormatter(moment(Date.now()).format('YYYY-MM-DD')))
	const [firstPayment, setFirstPayment] = useState(dateObjectFormatter(moment(Date.now()).format('YYYY-MM-DD')))
	const [endDate, setEndDate] = useState(dateObjectFormatter(moment(Date.now()).format('YYYY-MM-DD')))
	const [period, setPeriod] = useState('')
	const [amount, setAmount] = useState('')
	const dispatch = useDispatch()

	const periodList: string[] = ['daily', 'weekly', 'monthly']

	useEffect(() => {
		if (currentTenancy && currentTenancy.start) {
			setStartDate(dateObjectFormatter(currentTenancy.start))
		}
		if (currentTenancy && currentTenancy.end) {
			setEndDate(dateObjectFormatter(currentTenancy.end))
		}
		if (currentTenancy && currentTenancy.first) {
			setFirstPayment(dateObjectFormatter(currentTenancy.first))
		}
		if (currentTenancy && currentTenancy.period) {
			setPeriod(currentTenancy.period)
		}
		if (currentTenancy && currentTenancy.price) {
			setAmount((currentTenancy.price / 100).toFixed(2))
		}
	}, [currentTenancy])

	const disabled = useMemo(() => {
		return !amount || isNaN(Number(amount)) || Number(amount) <= 0
	}, [amount])

	useEffect(() => {
		if (moment(dateToStringFormatter(startDate)).isAfter(dateToStringFormatter(endDate))) {
			const nextDay = moment(dateToStringFormatter(startDate)).add(1, 'day').format('YYYY-MM-DD')
			setEndDate(dateObjectFormatter(nextDay))
		}
	}, [startDate])

	useEffect(() => {
		if (moment(dateToStringFormatter(startDate)).isAfter(dateToStringFormatter(endDate))) {
			const prevDay = moment(dateToStringFormatter(endDate)).subtract(1, 'day').format('YYYY-MM-DD')
			setStartDate(dateObjectFormatter(prevDay))
		}
	}, [endDate])

	const handleUpdateRental = () => {
		if (
			dateToStringFormatter(startDate) === dateToStringFormatter(dateObjectFormatter(currentTenancy.start)) &&
			dateToStringFormatter(endDate) === dateToStringFormatter(dateObjectFormatter(currentTenancy.end)) &&
			dateToStringFormatter(firstPayment) === dateToStringFormatter(dateObjectFormatter(currentTenancy.first)) &&
			amount === currentTenancy.price &&
			period === currentTenancy.period
		) {
			dispatch(tenancyActionCreators.setCurrentTenancy(null))
		}

		if (!currentTenancy.id) {
			dispatch(
				tenancyActions.createTenancy({
					currency_id: 1,
					tenant_id: currentTenancy.tenant.id,
					property_id: currentProperty.id,
					start: dateToStringFormatter(startDate),
					end: dateToStringFormatter(endDate),
					first: dateToStringFormatter(firstPayment),
					price: amount,
					period,
				}),
			)
		} else {
			dispatch(
				tenancyActions.updateTenancyById({
					...currentTenancy,
					currency_id: 1,
					tenant_id: currentTenancy.tenant.id,
					property_id: currentProperty.id,
					start: dateToStringFormatter(startDate),
					end: dateToStringFormatter(endDate),
					first: dateToStringFormatter(firstPayment),
					price: amount,
					period,
				}),
			)
		}
	}

	const handleChangePeriod = (e: ChangeEvent<HTMLSelectElement>) => {
		setPeriod(e.target.value)
	}

	const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.toString().includes('.') && e.target.value.toString().split('.').pop().length < 3) {
			setAmount(e.target.value)
		}

		if (e.target.value.toString().length <= 7) {
			setAmount(e.target.value)
		}
	}

	const photo = useMemo(() => {
		if (currentTenancy && currentTenancy?.tenant?.filesToTenants && currentTenancy?.tenant?.filesToTenants.length > 0) {
			return currentTenancy?.tenant.filesToTenants[currentTenancy?.tenant.filesToTenants?.length - 1]?.file?.url || null
		}
		return null
	}, [currentTenancy])

	if (!currentTenancy) {
		return null
	}

	return (
		<div className={styles['tenancy-card']}>
			<TenancyButtons />

			<div className={styles.card}>
				<div className={styles.info}>
					<Photo styles={styles} photo={photo} srcSVG={TenantPlug} />
					<div className={styles['name-container']}>
						<div className={styles.name}>
							{currentTenancy.tenant?.name} {currentTenancy.tenant?.surname}
						</div>
						<div className={styles.email}>{currentTenancy.tenant?.email}</div>
					</div>
				</div>

				<div className={styles.time}>
					<PeriodContainer text={'From'}>
						<DatePicker date={startDate} setDate={setStartDate} />
					</PeriodContainer>

					<PeriodContainer text={'First payment'}>
						<DatePicker date={firstPayment} setDate={setFirstPayment} />
					</PeriodContainer>

					<PeriodContainer text={'To'}>
						<DatePicker date={endDate} setDate={setEndDate} />
					</PeriodContainer>
				</div>

				<div className={styles.sum}>
					<SumContainer styleName={'amount'} text={'Amount'}>
						<SVG src={FrankIcon} className={styles.icon} />
						<input type={'number'} onChange={handleChangeAmount} className={styles.input} value={amount} />
					</SumContainer>

					<SumContainer styleName={'period'} text={'Period'}>
						<select name={'period'} value={period} onChange={handleChangePeriod}>
							<PeriodList periodList={periodList} />
						</select>
					</SumContainer>
				</div>

				<div className={styles.confirm}>
					<button onClick={handleUpdateRental} className={styles.button} disabled={disabled}>
						Confirm
					</button>
				</div>
			</div>
		</div>
	)
}
