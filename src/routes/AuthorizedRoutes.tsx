import React, { FC } from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

import {
	PropertiesPage,
	DashboardPage,
	ContactsPage,
	TenantsPage,
	Settings,
	Account,
	FAQ,
	// NotificationsPage,
} from '@pages/index'

import { AuthAppLayout } from '../ui/index'

export const AuthorizedRoutes: FC = () => {
	return (
		<AuthAppLayout>
			<Switch>
				<Route path={'/properties'} component={PropertiesPage} />
				<Route path={'/dashboard'} component={DashboardPage} />
				<Route path={'/contacts'} component={ContactsPage} />
				<Route path={'/tenants'} component={TenantsPage} />
				<Route path={'/settings'} component={Settings} />
				<Route path={'/account'} component={Account} />
				<Route path={'/faq'} component={FAQ} />
				{/* <Route path={ '/notifications' } component={ NotificationsPage } /> */}
				<Redirect to={'/dashboard'} />
			</Switch>
		</AuthAppLayout>
	)
}
