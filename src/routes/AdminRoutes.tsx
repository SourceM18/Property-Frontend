import React, { FC } from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

import { AdminAccount, DiscountsPage } from '@pages/index'

import { AdminAppLayout } from '../ui/index'

export const AdminRoutes: FC = () => {
	return (
		<AdminAppLayout>
			<Switch>
				<Route path={'/discount'} component={DiscountsPage} />
				<Route path={'/account'} component={AdminAccount} />
				<Redirect to={'/discount'} />
			</Switch>
		</AdminAppLayout>
	)
}
