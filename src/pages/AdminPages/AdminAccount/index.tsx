import React, { useEffect, useMemo, useState, FC } from 'react'

import { useDispatch } from 'react-redux'

import { ConfirmationModal } from '@components/index'

import { useTrigger } from '@hooks/index'
import { User } from '@utils/Types/instances'

import { authActions, userActions } from 'src/store/rootAction'

import styles from './styles.module.scss'

export const AdminAccount: FC = () => {
	const dispatch = useDispatch()
	const [mode, setMode] = useTrigger()
	const [active, setActiveTab] = useState(1)
	const [openModal, setOpenModal] = useState(false)
	// const user = useSelector(userSelector)
	const tabs = useMemo(() => ['Account', 'Banks', 'Settings'], [])
	// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
	const [passport, setPassport] = useState<Omit<User, 'id'>>({
		phone: '',
		company: '',
		email: '',
		name: '',
		address: '',
		photo: '',
		surname: '',
	})

	useEffect(() => {
		// dispatch( userActions.getPassport() );
		// dispatch( bankActions.getBankAccounts() );
		const updateSize = (e: any) => {
			if (e.target.innerWidth > 576) {
				setActiveTab(1)
			}
		}

		window.addEventListener('resize', updateSize)
		return () => {
			window.removeEventListener('resize', updateSize)
		}
	}, [])

	// useEffect( () => {
	// 	if( userPassport ) setPassport( userPassport );
	// }, [ userPassport ] );

	const handleDone = () => {
		dispatch(userActions.updateUserData(passport))
		setMode()
	}

	const logoutHandler = () => {
		dispatch(authActions.logout())
	}

	const changeActiveHandler = (direction: 'right' | 'left') => {
		if (direction === 'left') {
			setActiveTab((prev) => (prev === 0 ? 2 : prev - 1))
		} else {
			setActiveTab((prev) => (prev === 2 ? 0 : prev + 1))
		}
	}

	return (
		<div className={styles['account-page']}>
			<div className={styles['mobile-heading']}>Account</div>

			<div className={styles['mobile-slider']}>
				<button className={styles['button-left']} onClick={changeActiveHandler.bind(null, 'left')} />
				<div className={styles.name}>{tabs.filter((_, id) => id === active)}</div>
				<button className={styles['button-right']} onClick={changeActiveHandler.bind(null, 'right')} />
			</div>

			{mode ? (
				<button className={styles.done__btn} onClick={handleDone}>
					Save changes
				</button>
			) : (
				<button className={styles.logout__btn} onClick={setOpenModal.bind(null, true)}>
					Logout
				</button>
			)}

			<ConfirmationModal
				onClose={setOpenModal.bind(null, false)}
				deleteObject={logoutHandler}
				currentObject={'logout'}
				isOpen={openModal}
			/>
		</div>
	)
}
