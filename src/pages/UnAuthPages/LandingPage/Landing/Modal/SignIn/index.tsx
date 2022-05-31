import React, { ChangeEvent, FC, useState, useMemo, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { AuthWith } from '@components/index'

import cancelIco from '@pages/UnAuthPages/LandingPage/img/cancel.svg'
import styles from '@pages/UnAuthPages/LandingPage/Landing/Modal/styles.module.scss'
import { history } from '@utils/index'

import { authActions } from 'src/store/rootAction'

export const SignIn: FC = () => {
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const dispatch = useDispatch()

	const disabled = useMemo(() => {
		return !email || !password || password.length < 8
	}, [email, password])

	useEffect(() => {
		const listener = (event: any) => {
			if ((event.code === 'Enter' || event.code === 'NumpadEnter') && email && password && password.length >= 8) {
				event.preventDefault()
				onSubmit()
			}
		}

		document.addEventListener('keydown', listener)
		return () => {
			document.removeEventListener('keydown', listener)
		}
	}, [email, password])

	const onSubmit = () => {
		dispatch(authActions.login({ email, password }))
		history.push('/')
		setPassword('')
		setEmail('')
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const targetName = e.target.name
		const targetValue = e.target.value

		if (targetName === 'password') setPassword(targetValue)
		if (targetName === 'email') setEmail(targetValue)
	}

	return (
		<div className={styles.modalWrapper}>
			<div className={styles.modal}>
				<h1 className={styles.heading}>Log in</h1>
				<input
					className={styles.modalInput}
					type="email"
					name={'email'}
					placeholder="Your email"
					onChange={handleChange}
					value={email}
				/>
				<input
					className={styles.modalInput}
					type="password"
					name={'password'}
					placeholder="Password"
					onChange={handleChange}
					value={password}
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
				<p className={styles.modalText}>Forgot your password?</p>
				<button className={styles.signupLink} onClick={() => history.push('/reset-password')}>
					Reset password
				</button>
				<AuthWith isLogin />
			</div>
		</div>
	)
}
