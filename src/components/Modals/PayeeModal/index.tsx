import React, { FC } from 'react'

import { Modal } from '@ui/Modal'

import { PayeeModalProps } from './@types'
import styles from './styles.module.scss'

export const PayeeModal: FC<PayeeModalProps> = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={styles['payee-modal']}>
				<div className={styles.title}>
					<p>Warning! window not all bank</p>
				</div>
				<div className={styles.buttons}>
					<button onClick={onClose} className={styles.btn}>
						cancel
					</button>
					<button className={styles.btn}>proceed</button>
				</div>
			</div>
		</Modal>
	)
}
