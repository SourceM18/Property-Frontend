import React, { ChangeEvent, FC, useEffect, useMemo, useState } from 'react'

import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import { AuthWith } from '@components/index'

import { useSelector } from '@hooks/index'

import cancelIco from '@pages/UnAuthPages/LandingPage/img/cancel.svg'
import styles from '@pages/UnAuthPages/LandingPage/Landing/Modal/styles.module.scss'
import { history } from '@utils/index'

import { authActionCreators, authActions } from 'src/store/rootAction'
import { isRegistrationErrorSelector, isEmailExistSelector } from 'src/store/selectors'

import errorIcon from '@assets/icons/error-icon.svg'

export const SignUp: FC = () => {
	const isEmailExist = useSelector(isEmailExistSelector)
	const registrationErrorMessage = useSelector(isRegistrationErrorSelector)
	const [password, setPassword] = useState('')
	const [policy, setPolicy] = useState(false)
	const [surname, setSurname] = useState('')
	const [terms, setTerms] = useState(false)
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [unCheckedPolicy, setUnCheckedPolicy] = useState(true)
	const [unCheckedTerms, setUnCheckedTerms] = useState(true)
	const dispatch = useDispatch()

	const disabled = useMemo(() => {
		return !email || !surname || !name || !password || password.length < 8 || !terms || !policy
	}, [name, surname, email, password, terms, policy])

	useEffect(() => {
		const listener = (event: any) => {
			if (
				(event.code === 'Enter' || event.code === 'NumpadEnter') &&
				email &&
				surname &&
				name &&
				password &&
				password.length >= 8
			) {
				event.preventDefault()
				onSubmit()
			}
		}

		document.addEventListener('keydown', listener)
		return () => {
			document.removeEventListener('keydown', listener)
		}
	}, [name, surname, email, password])

	const onSubmit = () => {
		dispatch(authActions.registration({ name, surname, email, password }))
		// history.push('/');
		// 	setPassword('');
		// 	setSurname('');
		// 	setEmail('');
		// 	setName('');
	}
	const onClose = () => {
		dispatch(authActionCreators.setEmailExist(false))
		history.push('/')
	}

	const handleChecked = () => {
		if (terms === false || policy === false) {
			if (terms === false) {
				setUnCheckedTerms(false)
			}
			if (policy === false) {
				setUnCheckedPolicy(false)
			} else {
				setUnCheckedTerms(false)
				setUnCheckedPolicy(false)
			}
		} else {
			setUnCheckedPolicy(true)
			setUnCheckedTerms(true)
		}
	}
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const targetName = e.target.name
		const targetValue = e.target.value

		if (targetName === 'password') setPassword(targetValue)
		if (targetName === 'email') setEmail(targetValue)
		if (targetName === 'name') setName(targetValue)
		if (targetName === 'surname') setSurname(targetValue)
	}

	const changeAgreeCheck = (e: ChangeEvent<HTMLInputElement>) => {
		const targetId = e.target.id

		if (targetId === 'termsUser') setTerms(!terms)
		if (targetId === 'policyUser') setPolicy(!policy)
	}

	return (
		<div className={styles.modalWrapper}>
			<div className={styles.modal}>
				<h1 className={styles.heading}>Sign up</h1>
				<input
					className={styles.modalInput}
					type="name"
					name={'name'}
					placeholder="Your Name"
					onChange={handleChange}
					value={name}
				/>
				<input
					className={styles.modalInput}
					type="surname"
					name={'surname'}
					placeholder="Your Surname"
					onChange={handleChange}
					value={surname}
				/>
				<input
					className={styles.modalInput}
					type="email"
					name={'email'}
					placeholder="Your Email"
					onChange={handleChange}
					value={email}
				/>
				{isEmailExist === true && (
					<div className={styles.modalInputError}>
						{' '}
						<SVG className={styles.modalInputErrorIcon} src={errorIcon} /> <span>{registrationErrorMessage}</span>{' '}
					</div>
				)}
				<input
					className={styles.modalInput}
					type="password"
					name={'password'}
					placeholder="Password"
					onChange={handleChange}
					value={password}
				/>

				<div className={styles.modalCheckedWrapper}>
					<input
						className={styles.modalChecked}
						id={'termsUser'}
						type={'checkbox'}
						checked={terms}
						onChange={changeAgreeCheck}
					/>
					<label className={styles.modalLabel} htmlFor={'termsUser'}>
						<span></span>

						<div>
							I agree with{' '}
							<a href="/terms" target={'_blank'}>
								RentWallet Service Terms
							</a>
						</div>
					</label>
					{unCheckedTerms === false ? (
						<p className={styles.modalErrorText}>
							<SVG className={styles.modalInputErrorIcon} src={errorIcon} /> Agree with Service Terms
						</p>
					) : (
						''
					)}
				</div>

				<div className={styles.modalCheckedWrapper}>
					<input
						className={styles.modalChecked}
						id={'policyUser'}
						type={'checkbox'}
						checked={policy}
						onChange={changeAgreeCheck}
					/>
					<label className={styles.modalLabel} htmlFor={'policyUser'}>
						<span></span>
						<div>
							I agree with{' '}
							<a href="/policy" target={'_blank'}>
								RentWallet Privacy Policy and Cookies
							</a>
						</div>
					</label>
					{unCheckedPolicy === false ? (
						<p className={styles.modalErrorText}>
							{' '}
							<SVG className={styles.modalInputErrorIcon} src={errorIcon} /> Agree with Privacy Policy and Cookies
						</p>
					) : (
						''
					)}
				</div>

				<button className={styles.modalBtn} onClick={onSubmit} disabled={disabled}>
					Continue
				</button>
				<p className={styles.modalText}>or</p>
				<button className={styles.signupLink} onClick={() => history.push('/login')}>
					Log in
				</button>
				<button className={styles.closeBtn} onClick={onClose}>
					<SVG src={cancelIco} />
				</button>
				<AuthWith
					isValid={policy && terms}
					unCheckedPolicy={unCheckedPolicy}
					unCheckedTerms={unCheckedTerms}
					handleChecked={handleChecked}
				/>
			</div>
		</div>
	)
}
