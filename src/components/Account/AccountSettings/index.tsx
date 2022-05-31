import React, { FC, useEffect, useMemo, useState, useCallback } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import { AccountItem } from '@components/index'

import { usePathSplitter, useInput } from '@hooks/index'
import { history } from '@utils/index'

import { authActions } from 'src/store/rootAction'

import styles from './styles.module.scss'

import Edit from '@assets/icons/edit-icon.svg'
import Settings from '@assets/icons/settings.svg'

export const AccountSettings: FC = () => {
	const { pathSplitter } = usePathSplitter()
	const [oldPassword, setOldPassHandler, setOldPass] = useInput('')
	const [newPassword, setNewPassHandler, setNewPass] = useInput('')
	const [isAccountItemOpen, setAccountItemOpen] = useState(true)
	const dispatch = useDispatch()

	const disabled = useMemo(() => {
		return (
			!oldPassword ||
			!newPassword ||
			oldPassword.trim().length < 8 ||
			newPassword.trim().length < 8 ||
			oldPassword === newPassword
		)
	}, [oldPassword, newPassword])

	const setPassHandler = () => {
		dispatch(authActions.changePassword({ oldPassword, newPassword }))
		setOldPass('')
		setNewPass('')
	}

	const handleResize = () => {
		if (window.innerWidth > 768) {
			setAccountItemOpen(true)
		} else {
			setAccountItemOpen(false)
		}
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleOpenSettings = useCallback(() => {
		if (pathSplitter().includes('/settings')) {
			history.push('/account')
		} else {
			history.push('/account/settings')
		}
	}, [pathSplitter()])

	const handleOpenEditMode = () => {
		history.push('/account/edit')
	}

	return (
		<div className={styles['account-edit']}>
			{isAccountItemOpen && <AccountItem />}

			<div className={styles.password}>
				<div className={styles.name}>Change password</div>

				<div className={styles['inputs-container']}>
					<div className={styles.confirm}>
						<input onChange={setOldPassHandler} type={'password'} value={oldPassword} />
						<label>Last password</label>
					</div>

					<div className={styles['new-pass']}>
						<input onChange={setNewPassHandler} type={'password'} value={newPassword} />
						<label>New password</label>
					</div>
				</div>

				<div className={styles['button-container']}>
					<div className={styles.buttons}>
						{!isAccountItemOpen && (
							<div className={styles['change-buttons']}>
								<button className={styles.button} onClick={handleOpenEditMode}>
									<SVG className={styles.icon} src={Edit} />
								</button>
								<button
									className={classNames(styles.button, { [styles.active]: pathSplitter().includes('/settings') })}
									onClick={handleOpenSettings}
								>
									<SVG className={styles['settings-icon']} src={Settings} />
								</button>
							</div>
						)}
						<button className={styles.button} onClick={setPassHandler} disabled={disabled}>
							Save settings
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
