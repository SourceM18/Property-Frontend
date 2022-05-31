import React, { FC, useEffect, useMemo } from 'react'

import { useDispatch } from 'react-redux'

import { PhotoInstance, TenancyButtons } from '@components/index'

import { useSelector } from '@hooks/index'

import { InputTenant } from '@ui/InputTenant'

import { tenantActions, tenantActionCreators } from 'src/store/rootAction'
import { currentPropertySelector, currentTenantSelector, isNewTenantPageOpenSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

import TenantPlug from '@assets/icons/person-icon.svg'

export const PropertyNewTenant: FC = () => {
	const currentProperty = useSelector(currentPropertySelector)
	const isNewTenantPageOpen = useSelector(isNewTenantPageOpenSelector)
	const currentTenant = useSelector(currentTenantSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			tenantActionCreators.setCurrentTenant({
				id: null,
				phone: '',
				email: '',
				name: '',
				surname: '',
				filesToTenants: [],
			}),
		)
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

	const handleUpdatePhoto = (photo: FormData) => {
		dispatch(tenantActions.uploadTenantPhoto({ photo }))
	}

	const handleDone = () => {
		dispatch(tenantActions.createTenant({ tenant: currentTenant, isNewTenantPageOpen, currentProperty }))
	}

	if (!currentTenant) {
		return null
	}

	return (
		<div className={styles.tenancy}>
			<TenancyButtons />

			<div className={styles['new-tenant-card']}>
				<div className={styles['image-container']}>
					<PhotoInstance
						photoClassName={'photo-edit'}
						setPhoto={handleUpdatePhoto}
						className={styles.icon}
						photo={currentTenant.filesToTenants[currentTenant.filesToTenants?.length - 1]?.file?.url}
						plug={TenantPlug}
						plugClassName={'new-tenant'}
						mobileEditPhotoClassName={'photo-edit-mobile'}
					/>
				</div>

				<InputTenant currentTenant={currentTenant} styles={styles} classWrapper={'info'} />

				<div className={styles.save}>
					<button className={styles.button} onClick={handleDone} disabled={disabled}>
						Save tenant
					</button>
				</div>
			</div>
		</div>
	)
}
