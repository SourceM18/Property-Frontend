import React, { FC, useEffect } from 'react'

import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { RouteComponentProps, Route, Switch, Redirect, useLocation } from 'react-router-dom'

import {
	PropertyNewTenant,
	PropertyBalance,
	PropertyTenancy,
	PropertyList,
	PropertyEdit,
	PropertyItem,
	TenancyCard,
	Widgets,
} from '@components/index'

import { HeadingPage, WrapperPage } from '@ui/index'
import { FounderFieldType, NewItemType } from '@utils/Types/localTypes'
import { Founder, NewItem } from 'src/containers'
import { usePathSplitter, useSelector } from 'src/hooks'

import { commonActions } from 'src/store/rootAction'
import { permissionsSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

export const PropertiesPage: FC<RouteComponentProps> = () => {
	const permissions = useSelector(permissionsSelector)
	const { path } = usePathSplitter()
	const { pathname } = useLocation()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(commonActions.getPermissions())
	}, [])

	if (!permissions.includes('properties')) {
		return <WrapperPage accessDeniedClassName>For further use, pay for a subscription</WrapperPage>
	}

	return (
		<WrapperPage>
			<div className={classNames(styles.body, { [styles.list]: pathname === '/properties' })}>
				<Switch>
					<Route exact path={`${path}`}>
						<PropertyList />
					</Route>

					<Route exact path={`${path}/new`}>
						<NewItem item={NewItemType.property} />
					</Route>

					<Route exact path={`${path}/:${FounderFieldType.property}/edit`}>
						<Founder field={FounderFieldType.property} component={PropertyEdit} />
					</Route>

					<Route path={`${path}/:${FounderFieldType.property}`}>
						<Founder field={FounderFieldType.property} component={PropertyItem} />

						<Switch>
							<Route exact path={`${path}/:${FounderFieldType.property}/balance`} component={PropertyBalance} />
							<Route exact path={`${path}/:${FounderFieldType.property}/tenancy`} component={PropertyTenancy} />
							<Route exact path={`${path}/:${FounderFieldType.property}/tenancy/tenants`} component={PropertyTenancy} />
							<Route
								exact
								path={`${path}/:${FounderFieldType.property}/tenancy/tenants/new`}
								component={PropertyNewTenant}
							/>
							<Route
								exact
								path={`${path}/:${FounderFieldType.property}/tenancy/tenants/:${FounderFieldType.newTenancy}`}
							>
								<Founder field={FounderFieldType.newTenancy} component={TenancyCard} />
							</Route>
							<Route exact path={`${path}/:${FounderFieldType.property}/tenancy/:${FounderFieldType.tenancy}`}>
								<Founder field={FounderFieldType.tenancy} component={TenancyCard} />
							</Route>
							<Redirect to={`${path}/:${FounderFieldType.property}/tenancy`} />
						</Switch>
					</Route>

					<Redirect to={`${path}`} />
				</Switch>
			</div>
			<Widgets />
			<HeadingPage text="Properties" />
		</WrapperPage>
	)
}
