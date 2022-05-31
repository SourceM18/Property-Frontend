import React, { FC, useMemo } from 'react'

import { useDispatch } from 'react-redux'

import { usePathSplitter, useSelector } from '@hooks/index'
import { history } from '@utils/index'

import { commonActionCreators, propertyActionCreators } from 'src/store/rootAction'
import { currentPropertySelector, sortedTenantsSelector } from 'src/store/selectors'

import { Button } from './Button'

import styles from './styles.module.scss'

import Plus from '@assets/icons/circle-plus.svg'

import Return from '@assets/icons/return.svg'

export const TenancyButtons: FC = () => {
	const currentProperty = useSelector(currentPropertySelector)
	const sortedTenants = useSelector(sortedTenantsSelector)
	const { pathSplitter, pathTail } = usePathSplitter()
	const dispatch = useDispatch()

	const setActiveTenancyButton = useMemo(() => {
		return !!pathSplitter().includes('/tenants') && pathTail !== '/new'
	}, [pathSplitter(), pathTail])

	const setActiveTenantButton = useMemo(() => {
		return !!pathSplitter().includes('/tenants') && !!pathSplitter().includes('/new')
	}, [pathSplitter()])

	const addNewTenancy = () => {
		history.push(`/properties/${currentProperty?.id}/tenancy/tenants`)

		if (setActiveTenancyButton) {
			if (sortedTenants.length) {
				dispatch(
					commonActionCreators.addToast({
						message:
							'Please choose the Tenant from the list.\nThe Tenancy can be created only when the Tenant is linked up.',
						isSocialMediaShowed: false,
						doAfterClosed: null,
						type: null,
					}),
				)
			} else {
				dispatch(
					commonActionCreators.addToast({
						message:
							'Please press "Add New Tenant" first to enter Tenant’s details.\nThe Tenancy can be created only when the Tenant is available.',
						isSocialMediaShowed: false,
						doAfterClosed: null,
						type: null,
					}),
				)
			}
		}
	}

	const addNewTenant = () => {
		dispatch(propertyActionCreators.setNewTenantPageOpen(true))
		history.push(`/properties/${currentProperty?.id}/tenancy/tenants/new`)
	}

	const goBack = () => {
		history.goBack()
	}

	return (
		<div className={styles.buttons}>
			<Button activeStyle={setActiveTenancyButton} src={Plus} text={'Add Tenancy'} onClick={addNewTenancy} />
			<Button activeStyle={setActiveTenantButton} src={Plus} text={'Add New Tenant'} onClick={addNewTenant} />

			{pathSplitter().length >= 4 && <Button src={Return} text={'Back'} onClick={goBack} />}
		</div>
	)
}
