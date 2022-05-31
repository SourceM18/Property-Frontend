import React, { FC } from 'react'

import classNames from 'classnames'

import { useLocation } from 'react-router-dom'

import { Header, Navbar } from '@components/index'

import { useTheme } from '@hooks/index'

import styles from './styles.module.scss'

export const AuthAppLayout: FC = ({ children }) => {
	const { theme } = useTheme()
	const { pathname } = useLocation()

	let isDashboardPage

	if (pathname !== '/') {
		isDashboardPage = pathname.match(/\/[^\/]+/g)[0] === '/dashboard'
	}

	return (
		<div className={classNames(styles['app-layout'], { [styles.dashboard]: isDashboardPage })} data-theme={theme}>
			<Header className={styles.header} />
			<Navbar className={styles.navbar} />
			<section className={styles.body}>{children}</section>
		</div>
	)
}
