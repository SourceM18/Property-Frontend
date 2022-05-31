import React, { ChangeEvent, FC, useState, useMemo, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import cancelIco from '@pages/UnAuthPages/LandingPage/img/cancel.svg'
import styles from '@pages/UnAuthPages/LandingPage/Landing/Modal/styles.module.scss'
import { history } from '@utils/index'

import { authActions } from 'src/store/rootAction'

export const ResetPassword: FC = () => {
	const [email, setEmail] = useState('')
	const dispatch = useDispatch()

	const disabled = useMemo(() => {
		return !email
	}, [email])

	useEffect(() => {
		const listener = (event: any) => {
			if ((event.code === 'Enter' || event.code === 'NumpadEnter') && email) {
				event.preventDefault()
				onSubmit()
			}
		}

		document.addEventListener('keydown', listener)
		return () => {
			document.removeEventListener('keydown', listener)
		}
	}, [email])

	const onSubmit = () => {
		dispatch(authActions.resetPassword({ email }))
		history.push('/')
		setEmail('')
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	return (
		<div className={styles.modalWrapper}>
			<div className={styles.modal}>
				<p className={styles['call-to-action']}>Please, enter your e-mail</p>
				<input
					className={styles.modalInput}
					type="email"
					placeholder="Your email"
					onChange={handleChange}
					value={email}
				/>
				<button className={styles.modalBtn} onClick={onSubmit} disabled={disabled}>
					Continue
				</button>
				<p className={styles.modalText}>New to RentWallet?</p>
				<button className={styles.signupLink} onClick={() => history.push('/register')}>
					Create your RentWallet account
				</button>
				<button className={styles.closeBtn} onClick={() => history.push('/')}>
					<img src={cancelIco} alt={'cancel'} />
				</button>
			</div>
		</div>
	)
}
