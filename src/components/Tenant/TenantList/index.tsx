import React, { FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { TenantItem } from '@components/index'

import { useSelector } from '@hooks/index'

import { LoadingSpinner } from '@ui/LoadingSpinner'

import { tenantActions } from 'src/store/rootAction'
import { isPermissionsAndTenantsLoading, permissionsSelector, sortedTenantsSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

export const TenantList: FC = () => {
	const isLoading = useSelector(isPermissionsAndTenantsLoading)
	const sortedTenants = useSelector(sortedTenantsSelector)
	const permissions = useSelector(permissionsSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		if (permissions.includes('tenants')) {
			dispatch(tenantActions.getTenants())
		}
	}, [permissions])

	return (
		<div className={styles.tenants}>
			{isLoading && <LoadingSpinner />}
			{sortedTenants.map((tenant) => (
				<TenantItem tenant={tenant} key={tenant.id} />
			))}
		</div>
	)
}
