import React, { FC, useEffect } from 'react'

import classNames from 'classnames'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { RouteComponentProps, Route, Switch, Redirect, useLocation } from 'react-router-dom'

import { HeadingPage, WrapperPage } from '@ui/index'
import { LocalStorage } from '@utils/index'
import { FounderFieldType, NewItemType } from '@utils/Types/localTypes'
import {
	TransactionProperties,
	TransactionPayments,
	DashboardBalance,
	DashboardHeader,
	DashboardTotals,
	TransactionList,
	TotalProperties,
	PaymentList,
	SingleTotal,
	Widgets,
} from 'src/components'
import { Founder, NewItem } from 'src/containers'
import { usePathSplitter, useSelector } from 'src/hooks'

import { commonActionCreators, commonActions } from 'src/store/rootAction'
import { permissionsSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

const ls = LocalStorage.getInstance()

export const DashboardPage: FC<RouteComponentProps> = () => {
	const permissions = useSelector(permissionsSelector)
	const { path } = usePathSplitter()
	const { pathname } = useLocation()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(commonActions.getPermissions())
		if (!ls.get('period')) {
			dispatch(
				commonActionCreators.setPeriod({
					start: `${moment().format('YYYY')}-01-01T00:00:00+00:00`,
					end: `${moment().format('YYYY')}-12-31T00:00:00+00:00`,
				}),
			)
		}
	}, [])

	if (!permissions.includes('dashboard')) {
		return <WrapperPage accessDeniedClassName>For further use, pay for a subscription</WrapperPage>
	}

	return (
		<WrapperPage>
			<div className={classNames(styles.body, { [styles.list]: pathname === '/dashboard' })}>
				<DashboardHeader />
				<Switch>
					<Route exact path={`${path}/total`}>
						<DashboardTotals />
					</Route>

					<Route exact path={`${path}/payments`}>
						<PaymentList />
					</Route>

					<Route exact path={`${path}/transactions`}>
						<TransactionList />
					</Route>

					<Route exact path={`${path}/hidden`}>
						<TransactionList />
					</Route>

					<Route exact path={`${path}/total/:${FounderFieldType.total}`}>
						<Founder field={FounderFieldType.total} component={SingleTotal} />
					</Route>

					<Route exact path={`${path}/total/:${FounderFieldType.total}/properties`}>
						<Founder field={FounderFieldType.total} component={TotalProperties} />
					</Route>

					<Route
						exact
						path={`${path}/total/:${FounderFieldType.total}/:properties/:${FounderFieldType.property}/balance`}
						component={DashboardBalance}
					/>

					<Route exact path={`${path}/total/:${FounderFieldType.total}/:${FounderFieldType.payment}`}>
						<Founder field={FounderFieldType.payment} component={DashboardBalance} />
					</Route>

					<Route exact path={`${path}/transactions/new`}>
						<NewItem item={NewItemType.transaction} />
					</Route>

					<Route exact path={`${path}/transactions/:${FounderFieldType.transaction}`}>
						<Founder field={FounderFieldType.transaction} component={TransactionProperties} />
					</Route>

					<Route exact path={`${path}/transactions/:${FounderFieldType.transaction}/:${FounderFieldType.property}`}>
						<Founder field={FounderFieldType.partitions} component={TransactionPayments} />
					</Route>

					<Redirect to={`${path}/total`} />
				</Switch>
			</div>
			<Widgets />
			<HeadingPage text="Dashboard" />
		</WrapperPage>
	)
}
