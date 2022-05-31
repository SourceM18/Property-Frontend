import React, { FC, useMemo, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { PhotoInstance } from '@components/index'

import { usePathSplitter, useSelector } from '@hooks/index'

import { InputTenant } from '@ui/InputTenant'

import { tenantActions, propertyActionCreators, tenancyActionCreators } from 'src/store/rootAction'
import { currentPropertySelector, currentTenantSelector, isNewTenantPageOpenSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

import TenantPlug from '@assets/icons/person-icon.svg'

export const TenantEdit: FC = () => {
	const currentProperty = useSelector(currentPropertySelector)
	const isNewTenantPageOpen = useSelector(isNewTenantPageOpenSelector)
	const currentTenant = useSelector(currentTenantSelector)
	const { pathSplitter } = usePathSplitter()
	const dispatch = useDispatch()

	useEffect(() => {
		return () => {
			dispatch(propertyActionCreators.setNewTenantPageOpen(false))
			dispatch(tenancyActionCreators.setTenancyTabActive(false))
		}
	}, [])

	const disabled = useMemo(() => {
		return !(
			currentTenant &&
			currentTenant.name.trim() &&
			currentTenant.surname.trim() &&
			currentTenant.phone.trim() &&
			currentTenant.email.trim()
		)
	}, [currentTenant])

	const handleDone = () => {
		if (currentTenant.id) {
			dispatch(tenantActions.updateTenantById(currentTenant))
		} else {
			dispatch(tenantActions.createTenant({ tenant: currentTenant, isNewTenantPageOpen, currentProperty }))
		}
	}

	const handleUpdatePhoto = (photo: FormData) => {
		dispatch(tenantActions.uploadTenantPhoto({ photo }))
	}

	if (!currentTenant) {
		return null
	}

	return (
		<div className={styles.tenant}>
			<PhotoInstance
				photoClassName={'photo-edit'}
				setPhoto={handleUpdatePhoto}
				className={'small-card'}
				photo={currentTenant.filesToTenants[currentTenant.filesToTenants?.length - 1]?.file?.url}
				plug={TenantPlug}
				mobileIconClassName={'text-mobile'}
			/>

			<InputTenant currentTenant={currentTenant} styles={styles} classWrapper={'information'} />

			<div className={styles['btn-container']}>
				<button className={styles.button} onClick={handleDone} disabled={disabled}>
					{pathSplitter().includes('/edit') ? 'Save changes' : 'Save tenant'}
				</button>
			</div>
		</div>
	)
}
