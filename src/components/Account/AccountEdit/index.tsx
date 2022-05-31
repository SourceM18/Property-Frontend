import React, { ChangeEvent, FC, useEffect, useState } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import { AddressList, PostcodeInput } from '@components/index'

import { useSelector } from '@hooks/index'
import { User } from '@models/User'

import { LoadingSpinner } from '@ui/LoadingSpinner'
import { history } from '@utils/index'

import { commonActionCreators, propertyActionCreators, userActions } from 'src/store/rootAction'
import { isUserPhotoLoading, isUserDataLoading, userSelector } from 'src/store/selectors'

import { InputAccount } from './InputAccount'
import { PhotoWrapper } from './PhotoWrapper'
import styles from './styles.module.scss'

import Edit from '@assets/icons/edit-icon.svg'
import Settings from '@assets/icons/settings.svg'

export const AccountEdit: FC = () => {
	const isPhotoLoading = useSelector(isUserPhotoLoading)
	const isDataLoading = useSelector(isUserDataLoading)
	const user = useSelector(userSelector)
	const [passport, setPassport] = useState<User>(user)
	const [editLevel, setEditLevel] = useState(1)
	const dispatch = useDispatch()

	const { name, email, surname, company, phone, address }: User = passport

	const changeEditLevelHandler = (direction: 'prev' | 'next') => {
		if (direction === 'prev') {
			setEditLevel((prev) => (prev === 1 ? 3 : prev - 1))
		} else {
			setEditLevel((prev) => (prev === 3 ? 1 : prev + 1))
		}
	}

	const handleResize = () => {
		if (window.innerWidth > 768 && editLevel !== 0) {
			setEditLevel(0)
		} else if (editLevel !== 1) {
			setEditLevel(1)
		}
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleDone = () => {
		dispatch(userActions.updateUserData({ ...passport, filesToUsers: user.filesToUsers }))
		dispatch(commonActionCreators.setAddresses([]))
	}

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setPassport({ ...passport, [e.target.name]: e.target.value })
	}

	const handleChangeAddressInput = (e: ChangeEvent<HTMLInputElement>) => {
		setPassport({ ...passport, address: { ...passport.address, [e.target.name]: e.target.value } })
	}

	const handleChangeAddress = (a: any) => {
		setPassport({ ...passport, address: a })
	}

	const handleChangePostcode = (postcode: string) => {
		setPassport({ ...passport, address: { ...passport.address, postcode } })
	}

	const handleUpdate = (photo: FormData) => {
		dispatch(userActions.updateUserPhoto(photo))
	}

	const handleOpenSettings = () => {
		history.push('/account/settings')
	}

	const handleGoBack = () => {
		history.push('/account')
	}

	return (
		<>
			{(isPhotoLoading || isDataLoading) && <LoadingSpinner />}

			{editLevel === 0 && (
				<div className={styles['account-edit']}>
					<PhotoWrapper user={user} handleUpdate={handleUpdate} />
					<div className={styles.fields}>
						<InputAccount value={name} name={'name'} handleChangeInput={handleChangeInput} placeholder={'Enter Name'} />
						<InputAccount
							value={surname}
							name={'surname'}
							handleChangeInput={handleChangeInput}
							placeholder={'Enter Surname'}
						/>
						<InputAccount
							value={email}
							name={'email'}
							handleChangeInput={handleChangeInput}
							placeholder={'Enter Email'}
						/>
						<InputAccount
							value={phone}
							name={'phone'}
							handleChangeInput={handleChangeInput}
							placeholder={'Enter Phone'}
						/>
						<InputAccount
							value={company}
							name={'company'}
							handleChangeInput={handleChangeInput}
							placeholder={'Enter Company'}
						/>
						<InputAccount>
							<PostcodeInput changePostcode={handleChangePostcode} postcode={address?.postcode} />
						</InputAccount>
						<InputAccount
							value={address?.flat}
							name={'flat'}
							handleChangeInput={handleChangeAddressInput}
							placeholder={'Enter Flat/Room'}
							label={'Flat/Room'}
						/>
						<InputAccount
							value={address?.house_name}
							name={'house_name'}
							handleChangeInput={handleChangeAddressInput}
							placeholder={'Enter House Name'}
							label={'House Name'}
						/>
						<InputAccount
							value={address?.house_number}
							name={'house_number'}
							handleChangeInput={handleChangeAddressInput}
							placeholder={'Enter House Number'}
							label={'House Number'}
						/>
						<InputAccount
							value={address?.street}
							name={'street'}
							handleChangeInput={handleChangeAddressInput}
							placeholder={'Enter Street/Road'}
							label={'Street/Road'}
						/>
						<InputAccount
							value={address?.city}
							name={'city'}
							handleChangeInput={handleChangeAddressInput}
							placeholder={'Enter City/Town'}
							label={'City/Town'}
						/>
						<InputAccount
							value={address?.county}
							name={'county'}
							handleChangeInput={handleChangeAddressInput}
							placeholder={'Enter County/State/Province'}
							label={'County/State/Province'}
						/>
						<InputAccount
							value={address?.country}
							name={'country'}
							label={'Country'}
							placeholder={'Enter Country'}
							handleChangeInput={handleChangeAddressInput}
						/>
					</div>
					<div className={styles.buttons}>
						<div className={styles['change-buttons']}>
							<button className={classNames(styles.button, styles.active)} onClick={handleGoBack}>
								<SVG className={styles.icon} src={Edit} />
							</button>
							<button className={styles.button} onClick={handleOpenSettings}>
								<SVG className={styles['settings-icon']} src={Settings} />
							</button>
						</div>
						<div className={styles['save-button']}>
							<button className={styles.button} onClick={handleDone}>
								Save Changes
							</button>
						</div>
					</div>
				</div>
			)}

			{editLevel === 1 && (
				<div className={styles['account-edit']}>
					<PhotoWrapper user={user} handleUpdate={handleUpdate} />
					<div className={styles.buttons}>
						<button className={classNames(styles.button, styles.active)} onClick={handleGoBack}>
							<SVG className={styles.icon} src={Edit} />
						</button>
						<button className={styles.button} onClick={changeEditLevelHandler.bind(this, 'next')}>
							Next
						</button>
					</div>
				</div>
			)}

			{editLevel === 2 && (
				<div className={styles['account-edit']}>
					<div className={styles.fields}>
						<InputAccount value={name} name={'name'} handleChangeInput={handleChangeInput} />
						<InputAccount value={surname} name={'surname'} handleChangeInput={handleChangeInput} />
						<InputAccount value={email} name={'email'} handleChangeInput={handleChangeInput} />
						<InputAccount value={phone} name={'phone'} handleChangeInput={handleChangeInput} />
						<InputAccount value={company} name={'company'} handleChangeInput={handleChangeInput} />
					</div>
					<div className={styles.buttons}>
						<button className={classNames(styles.button, styles.active)} onClick={handleGoBack}>
							<SVG className={styles.icon} src={Edit} />
						</button>
						<button className={styles.buttonBack} onClick={changeEditLevelHandler.bind(this, 'prev')}>
							Back
						</button>
						<button className={styles.button} onClick={changeEditLevelHandler.bind(this, 'next')}>
							Next
						</button>
					</div>
				</div>
			)}

			{editLevel === 3 && (
				<div className={styles['account-edit']}>
					<div className={styles.fields}>
						<InputAccount
							value={address?.flat}
							name={'flat'}
							label={'Flat/Room'}
							handleChangeInput={handleChangeAddressInput}
						/>
						<InputAccount
							value={address?.house_name}
							name={'house_name'}
							handleChangeInput={handleChangeAddressInput}
							placeholder={'Enter House Name'}
							label={'House Name'}
						/>
						<InputAccount
							value={address?.house_number}
							name={'house_number'}
							handleChangeInput={handleChangeAddressInput}
							placeholder={'Enter House Number'}
							label={'House Number'}
						/>
						<InputAccount
							value={address?.street}
							name={'street'}
							handleChangeInput={handleChangeAddressInput}
							label={'Street/Road'}
						/>
						<InputAccount
							value={address?.city}
							name={'city'}
							handleChangeInput={handleChangeAddressInput}
							label={'City/Town'}
						/>
						<InputAccount
							value={address?.county}
							name={'county'}
							handleChangeInput={handleChangeAddressInput}
							label={'County/State/Province'}
						/>
						<InputAccount
							value={address?.country}
							name={'country'}
							label={'Country'}
							placeholder={'Enter country'}
							handleChangeInput={handleChangeAddressInput}
						/>
						<InputAccount>
							<PostcodeInput changePostcode={handleChangePostcode} postcode={address?.postcode} />
						</InputAccount>

						<div className={classNames(styles.buttons, styles['buttons-mobile'])}>
							<button className={styles.buttonBack} onClick={changeEditLevelHandler.bind(this, 'prev')}>
								Back
							</button>
							<button className={styles.buttonSave} onClick={handleDone}>
								Save Changes
							</button>
						</div>
					</div>
					<div className={styles.buttons}>
						<button className={classNames(styles.button, styles.active)} onClick={handleGoBack}>
							<SVG className={styles.icon} src={Edit} />
						</button>
					</div>
				</div>
			)}

			<AddressList changeAddress={handleChangeAddress} />
		</>
	)
}
