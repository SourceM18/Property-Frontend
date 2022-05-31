import React, { FC } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import { AccountEdit, AccountSettings, AccountItem } from '@components/index'

import { usePathSplitter } from '@hooks/index'

import { HeadingPage } from '@ui/HeadingPage'

import styles from './styles.module.scss'

export const Account: FC = () => {
	const { path } = usePathSplitter()

	return (
		<div className={styles['account-page']}>
			<HeadingPage text="Account" />

			<div className={styles.body}>
				<Switch>
					<Route exact path={`${path}`}>
						<AccountItem />
					</Route>

					<Route exact path={`${path}/edit`}>
						<AccountEdit />
					</Route>

					<Route exact path={`${path}/settings`}>
						<AccountSettings />
					</Route>

					<Redirect to={`${path}`} />
				</Switch>
			</div>
		</div>
	)
}
