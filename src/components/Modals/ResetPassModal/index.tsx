import React, { FC } from 'react'

import { Modal } from '@ui/index'

import { ResetPassModalProps } from './@types'
import styles from './styles.module.scss'

export const ResetPassModal: FC<ResetPassModalProps> = ({ isOpen, onClose, reset, changeEmail, email }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={styles['reset-modal']}>
				<div className={styles.title}>Please, enter your e-mail:</div>
				<input type={'text'} className={styles.input} onChange={changeEmail} placeholder={'Email'} value={email} />
				<div className={styles.buttons}>
					<button className={styles.btn} onClick={reset}>
						Reset
					</button>
				</div>
			</div>
		</Modal>
	)
}
