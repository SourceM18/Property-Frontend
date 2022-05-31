import React, { FC, useState } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import { AppLink } from '@ui/index'
import { LinksTypes } from '@utils/Types/instances'
import { ConfirmationModal } from 'src/components'

import { authActions } from 'src/store/rootAction'

import { AdminNavbarPropsTypes } from './@types'

import styles from './styles.module.scss'

import AccountIcon from '@assets/icons/accounts-icon.svg'

import DiscountIcon from '@assets/icons/discount.svg'

export const AdminNavbar: FC<AdminNavbarPropsTypes> = ({ className }) => {
	const [openModal, setOpenModal] = useState(false)
	const dispatch = useDispatch()

	const logoutHandler = () => {
		dispatch(authActions.logout())
	}

	const links: any[] = [LinksTypes.discounts, LinksTypes.account]

	const icon = (type: string) => {
		switch (type) {
			case LinksTypes.discounts:
				return <SVG src={DiscountIcon} className={styles['discount-icon']} />
			case LinksTypes.account:
				return <SVG src={AccountIcon} className={styles.icon} />
			default:
				return <SVG src={AccountIcon} className={styles.icon} />
		}
	}

	const layout = (type: string) => (
		<AppLink activeClassName={styles.active} className={styles.link} to={`/${type}`} exact={false} key={type}>
			<p className={styles.text}>{type}</p>
			{icon(type)}
		</AppLink>
	)

	return (
		<nav className={classNames(styles.navbar, className)}>
			{links.map(layout)}
			<div className={styles.logout}>
				<button className={styles.button} onClick={setOpenModal.bind(null, true)}>
					Logout
				</button>
			</div>
			<ConfirmationModal
				onClose={setOpenModal.bind(null, false)}
				deleteObject={logoutHandler}
				currentObject={'logout'}
				isOpen={openModal}
			/>
		</nav>
	)
}
