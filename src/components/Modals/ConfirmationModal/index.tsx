import React, { FC, useMemo } from 'react'

import { Modal } from '@ui/Modal'

import { ConfirmationModalProps } from './@types'
import styles from './styles.module.scss'

export const ConfirmationModal: FC<ConfirmationModalProps> = ({ isOpen, onClose, currentObject, deleteObject }) => {
	const title = useMemo(() => {
		const modalNames: any = {
			parts: 'Would you like to unreconcile invoice?',
			unreconcile: 'Would you like to unreconcile transaction?',
			transaction: 'Would you like to delete transaction?',
			property: 'Would you like to delete property?',
			discount: 'Would you like to delete discount?',
			tenancy: 'Would you like to delete tenancy?',
			account: 'Would you like to delete account?',
			tenant: 'Would you like to delete tenant?',
			logout: 'Would you like to logout?',
		}
		return modalNames[currentObject]
	}, [currentObject])

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={styles['confirmation-modal']}>
				<div className={styles.title}>{title}</div>
				<div className={styles.buttons}>
					<button onClick={deleteObject} className={styles.btn}>
						Yes
					</button>
					<button onClick={onClose} className={styles.btn}>
						No
					</button>
				</div>
			</div>
		</Modal>
	)
}
