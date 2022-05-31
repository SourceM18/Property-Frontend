import React, { FC } from 'react'

import InlineSVG from 'react-inlinesvg'
import { useLocation, NavLink } from 'react-router-dom'

import { GoBackButton } from '@ui/index'

import styles from './styles.module.scss'

import TotalIcon from '@assets/icons/total-icon.svg'

export const DiscountsHeader: FC = () => {
	const { pathname } = useLocation()

	return (
		<div className={styles['discount-header']}>
			<NavLink className={styles.total} activeClassName={styles.active} to={`/discounts/total`} exact={false}>
				<p className={styles.text}>Total</p>
				<InlineSVG src={TotalIcon} />
			</NavLink>

			{/* <NavLink className={styles['payments']} activeClassName={styles['active']} to={`/dashboard/payments`} exact={false}> */}
			{/*	<p className={styles['text']}>Payments</p> */}
			{/*	<InlineSVG src={PaymentsIcon} /> */}
			{/* </NavLink> */}

			{pathname !== '/discount/total' && <GoBackButton className={styles['go-back']} />}
		</div>
	)
}
