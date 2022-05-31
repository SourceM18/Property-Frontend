import React, { FC, useMemo } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import { ConfirmationModal } from '@components/index'

import { useTrigger } from '@hooks/index'

import { Photo } from '@ui/index'
import { history } from '@utils/index'

import { tenantActions } from 'src/store/rootAction'

import { TenantItemProps } from './@types'

import styles from './styles.module.scss'

import EditIcon from '@assets/icons/edit-icon.svg'

import Person from '@assets/icons/person-icon.svg'

export const TenantItem: FC<TenantItemProps> = ({ tenant }) => {
	const { name, surname, email, phone } = tenant
	const [isDeleteModal, triggerDeleteModal] = useTrigger()
	const dispatch = useDispatch()

	const handleDelete = () => {
		dispatch(tenantActions.deleteTenant({ tenant_id: tenant.id, triggerDeleteModal }))
	}

	const handleEditMode = () => {
		history.push(`/tenants/${tenant.id}/edit`)
	}

	const TenantField = ({ field, fieldName }: any) => {
		return (
			<div className={classNames(styles.field, styles[field])}>
				<p className={styles.description}>{fieldName}</p>
				<p className={styles.content}>{field}</p>
			</div>
		)
	}

	const photo = useMemo(() => {
		if (tenant && tenant.filesToTenants && tenant.filesToTenants.length > 0) {
			return tenant?.filesToTenants[tenant.filesToTenants?.length - 1]?.file?.url || null
		}
		return null
	}, [tenant])

	return (
		<>
			<div className={styles.tenant}>
				<Photo styles={styles} photo={photo} srcSVG={Person} />

				<div className={styles.info}>
					<TenantField field={name} fieldName={"Tenant's Name"} />
					<TenantField field={surname} fieldName={"Tenant's Surname"} />
					<TenantField field={email} fieldName={"Tenant's Email"} />
					<TenantField field={phone} fieldName={"Tenant's Phone"} />
				</div>

				<div className={styles.buttons}>
					<div className={styles['button-field']}>
						<button className={styles.edit} onClick={handleEditMode}>
							<SVG src={EditIcon} />
						</button>
					</div>
					<div className={styles['button-field']}>
						<button className={styles.button} onClick={triggerDeleteModal}>
							Delete tenant
						</button>
					</div>
				</div>
			</div>

			<ConfirmationModal
				isOpen={isDeleteModal}
				currentObject={'tenant'}
				onClose={triggerDeleteModal}
				deleteObject={handleDelete}
			/>
		</>
	)
}
