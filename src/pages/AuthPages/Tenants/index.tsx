import React, { FC, useEffect } from 'react'

import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { RouteComponentProps, Redirect, Route, Switch, useLocation } from 'react-router-dom'

import { TenantList, TenantEdit, Widgets } from '@components/index'

import { Founder, NewItem } from '@containers/index'
import { usePathSplitter, useSelector } from '@hooks/index'

import { HeadingPage, WrapperPage } from '@ui/index'
import { FounderFieldType, NewItemType } from '@utils/Types/localTypes'

import { commonActions } from 'src/store/rootAction'
import { permissionsSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

export const TenantsPage: FC<RouteComponentProps> = () => {
	const permissions = useSelector(permissionsSelector)
	const { path } = usePathSplitter()
	const { pathname } = useLocation()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(commonActions.getPermissions())
	}, [])

	if (!permissions.includes('tenants')) {
		return <WrapperPage accessDeniedClassName>For further use, pay for a subscription</WrapperPage>
	}

	return (
		<WrapperPage>
			<div className={classNames(styles.body, { [styles.list]: pathname === '/tenants' })}>
				<Switch>
					<Route exact path={`${path}`}>
						<TenantList />
					</Route>

					<Route exact path={`${path}/new`}>
						<NewItem item={NewItemType.tenant} />
					</Route>

					<Route exact path={`${path}/:${FounderFieldType.tenant}/edit`}>
						<Founder field={FounderFieldType.tenant} component={TenantEdit} />
					</Route>

					<Redirect to={`${path}`} />
				</Switch>
			</div>
			<Widgets />
			<HeadingPage text="Tenants" />
		</WrapperPage>
	)
}
