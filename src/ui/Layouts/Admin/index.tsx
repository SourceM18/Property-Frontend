import React, { FC } from 'react'

import { AdminNavbar, Header } from '@components/index'

import { useTheme } from '@hooks/index'

import styles from './styles.module.scss'

export const AdminAppLayout: FC = ({ children }) => {
	const { theme } = useTheme()

	return (
		<div className={styles['app-layout']} data-theme={theme}>
			<Header className={styles.header} />
			<AdminNavbar className={styles.navbar} />
			<section className={styles.body}>{children}</section>
		</div>
	)
}
