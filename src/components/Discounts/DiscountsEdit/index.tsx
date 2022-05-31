import React, { ChangeEvent, FC, useEffect, useState } from 'react'

import classNames from 'classnames'
import moment from 'moment'

import { DatePicker, DiscountUsersModal } from '@components/index'

import { dateObjectFormatter, dateToStringFormatter } from '@helpers/index'
// import { discountsActions } from 'src/store/rootAction';
import { history } from '@utils/index'

import styles from './styles.module.scss'

export const DiscountsEdit: FC = () => {
	// const { currentDiscount } = useSelector( state => state.discountsReducer );
	const [startDate, setStartDate] = useState(dateObjectFormatter(moment(Date.now()).format('YYYY-MM-DD')))
	const [endDate, setEndDate] = useState(dateObjectFormatter(moment(Date.now()).format('YYYY-MM-DD')))
	const [isModalOpen, setModalOpen] = useState(false)
	// const dispatch = useDispatch()

	// const disabled = useMemo(() => {
	// 	return !(
	// 		currentDiscount &&
	// 		currentDiscount?.discount?.trim() &&
	// 		currentDiscount?.promo_code?.trim() &&
	// 		currentDiscount?.description?.trim() &&
	// 		currentDiscount?.balance?.trim()
	// 	);
	// }, [ currentDiscount ] );

	useEffect(() => {
		// dispatch( discountsActions.getAllUsers() );
	}, [])

	useEffect(() => {
		// dispatch( discountsActions.updateCurrent({ from: dateToStringFormatter( startDate ) } ) );
		// dispatch( discountsActions.updateCurrent({ to: dateToStringFormatter( endDate ) } ) );
	}, [startDate, endDate])

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

	const handleDone = () => {
		// dispatch( discountsActions.createDiscount( currentDiscount ) );
		history.push('/discount')
	}

	const handleUpdateFieldByName = (e: ChangeEvent<HTMLInputElement>) => {
		if ((e.target.name === 'balance' || e.target.name === 'discount') && isNaN(Number(e.target.value))) {
			return
		}
		// eslint-disable-next-line
		if (e.target.name === 'discount' && (Number(e.target.value) < 0 || Number(e.target.value) > 100)) {
		}

		// dispatch( discountsActions.updateCurrent({ [ e.target.name ]: e.target.value } ) );
	}

	// if( !currentDiscount ) {
	// 	return null;
	// }

	return (
		<div className={classNames(styles.discount)}>
			<div className={classNames(styles.information)}>
				<div className={styles['title-container']}>
					<div className={styles.title__input}>
						<input
							type={'text'}
							// value={ currentDiscount.discount }
							placeholder={'Enter Discount In %'}
							onChange={handleUpdateFieldByName}
							name={'discount'}
						/>
						<label>Discount in %</label>
					</div>
				</div>

				<div className={styles['title-container']}>
					<div className={styles.title__input}>
						<input
							type={'text'}
							// value={ currentDiscount.promo_code }
							placeholder={'Enter Promo-code'}
							onChange={handleUpdateFieldByName}
							name={'promo_code'}
						/>
						<label>Promo-code</label>
					</div>
				</div>

				<div className={styles['title-container']}>
					<div className={styles.title__input}>
						<input
							type={'text'}
							// value={ currentDiscount.description }
							placeholder={'Enter Description'}
							onChange={handleUpdateFieldByName}
							name={'description'}
						/>
						<label>Description</label>
					</div>
				</div>

				<div className={styles['title-container']}>
					<div className={styles.title__input}>
						<input
							type={'text'}
							// value={ currentDiscount.balance }
							placeholder={'Enter Number Of Uses'}
							onChange={handleUpdateFieldByName}
							name={'balance'}
						/>
						<label>Number of uses</label>
					</div>
				</div>

				<div className={styles.users}>
					<button className={styles.btn} onClick={setModalOpen.bind(null, true)}>
						Users
					</button>
				</div>

				<div className={styles.calendar}>
					<div className={styles['date-picker']}>
						<p className={styles.label}>From</p>
						<DatePicker date={startDate} setDate={setStartDate} />
					</div>
					<div className={styles['date-picker']}>
						<p className={styles.label}>To</p>
						<DatePicker date={endDate} setDate={setEndDate} />
					</div>
				</div>
			</div>

			<button
				className={styles.create__btn}
				onClick={handleDone}
				// disabled={ disabled }
			>
				Save discount
			</button>

			<DiscountUsersModal onClose={setModalOpen.bind(null, false)} isOpen={isModalOpen} />
		</div>
	)
}
