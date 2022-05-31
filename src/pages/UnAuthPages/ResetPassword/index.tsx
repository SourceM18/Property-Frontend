import React, { FC } from 'react'

import { useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'

import { useInput } from '@hooks/index'

import { authActions } from 'src/store/rootAction'

import styles from './styles.module.scss'

export const ResetPassword: FC = () => {
	const history = useHistory()
	const location = useLocation()
	const dispatch = useDispatch()
	const [password, setPassword] = useInput('')
	const token = new URLSearchParams(location.search).get('code')

	const resetPassword = () => {
		dispatch(authActions.setNewPassword({ password, token }))
		history.push('/')
	}

	return (
		<div className={styles['reset-pass']}>
			<p className={styles.title}>Please, enter new password:</p>
			<div className={styles.box}>
				<input type={'password'} name={'NewPass'} value={password} onChange={setPassword} className={styles.input} />
				<button className={styles.button} onClick={resetPassword} disabled={!password || password.trim().length < 8}>
					Confirm
				</button>
			</div>
		</div>
	)
}
