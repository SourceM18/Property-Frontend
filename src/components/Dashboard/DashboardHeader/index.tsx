import React, { FC, useMemo } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'
import { NavLink } from 'react-router-dom'

import { usePathSplitter } from 'src/hooks'

import styles from './styles.module.scss'

import PaymentsIcon from '@assets/icons/payments-icon.svg'
import TotalIcon from '@assets/icons/total-icon.svg'
import TransactionIcon from '@assets/icons/transaction-icon.svg'

export const DashboardHeader: FC = () => {
	const { pathSplitter } = usePathSplitter()

	const showSmallDashboardHeader = useMemo(() => {
		return !(
			(pathSplitter().includes('/total') && pathSplitter()[pathSplitter().length - 1] === '/total') ||
			(pathSplitter().includes('/total') && pathSplitter()[pathSplitter().length - 1] === '/properties')
		)
	}, [pathSplitter()])

	return (
		<div className={classNames(styles['dashboard-header'], { [styles['small-header']]: showSmallDashboardHeader })}>
			<div className={styles['link-container']}>
				<NavLink className={styles.link} activeClassName={styles.active} to={`/dashboard/total`} exact={false}>
					<p className={styles.text}>Total</p>
					<SVG className={styles.icon} src={TotalIcon} />
				</NavLink>

				<NavLink className={styles.link} activeClassName={styles.active} to={`/dashboard/payments`} exact={false}>
					<p className={styles.text}>Payments</p>
					<SVG className={styles.icon} src={PaymentsIcon} />
				</NavLink>

				{pathSplitter().includes('/hidden') ? (
					<NavLink
						className={classNames(styles.link, styles.hidden)}
						activeClassName={styles.active}
						to={`/dashboard/hidden`}
						exact={false}
					>
						<p className={styles.text}>Hidden Transactions</p>
						<SVG className={styles.icon} src={TransactionIcon} />
					</NavLink>
				) : (
					<NavLink className={styles.link} activeClassName={styles.active} to={`/dashboard/transactions`} exact={false}>
						<p className={styles.text}>Transactions</p>
						<SVG className={styles.icon} src={TransactionIcon} />
					</NavLink>
				)}
			</div>
		</div>
	)
}
