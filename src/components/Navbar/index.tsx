import React, { FC } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'

import { AppLink } from '@ui/index'
import { LinksTypes } from '@utils/Types/instances'

import { NavbarPropsTypes } from './@types'

import styles from './styles.module.scss'

import DashboardIcon from '@assets/icons/dashboard-icon.svg'
import TenantsIcon from '@assets/icons/group-icon.svg'
import NotificationsIcon from '@assets/icons/notifications-icon.svg'
import PropertiesIcon from '@assets/icons/properties-icon.svg'
import SettingsIcon from '@assets/icons/settings.svg'

export const Navbar: FC<NavbarPropsTypes> = ({ className }) => {
	const links = [
		LinksTypes.dashboard,
		LinksTypes.properties,
		LinksTypes.tenants,
		LinksTypes.notifications,
		LinksTypes.settings,
	]

	const SVGIcon = ({ icon }: any) => {
		return <SVG src={icon} className={styles.icon} />
	}

	const iconType = (type: string) => {
		const icon: any = {
			[LinksTypes.notifications]: NotificationsIcon,
			[LinksTypes.properties]: PropertiesIcon,
			[LinksTypes.dashboard]: DashboardIcon,
			[LinksTypes.tenants]: TenantsIcon,
			[LinksTypes.settings]: SettingsIcon,
		}
		return icon[type]
	}

	const layout = (type: string) => (
		<AppLink activeClassName={styles.active} className={styles.link} to={`/${type}`} exact={false} key={type}>
			<p className={styles.text}>{type}</p>
			<SVGIcon icon={iconType(type)} />
		</AppLink>
	)

	return <nav className={classNames(styles.navbar, className)}>{links.map(layout)}</nav>
}
