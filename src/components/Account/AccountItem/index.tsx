import React, { useState, FC, useCallback, useMemo } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import { ConfirmationModal } from '@components/index'

import { usePathSplitter, useSelector } from '@hooks/index'

import { Photo } from '@ui/index'
import { history } from '@utils/index'

import { userActions } from 'src/store/rootAction'
import { userSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

import Edit from '@assets/icons/edit-icon.svg'
import Person from '@assets/icons/person-icon.svg'
import Settings from '@assets/icons/settings.svg'

export const AccountItem: FC = () => {
	const user = useSelector(userSelector)
	const [isModalOpen, setModalOpen] = useState(false)
	const { pathSplitter } = usePathSplitter()
	const dispatch = useDispatch()
	const { name, surname, email, phone, company, address } = user

	const addComma = (addressPart: string, isLast?: boolean) => {
		if (addressPart && addressPart !== '') {
			return isLast ? `${addressPart} ` : `${addressPart}, `
		}

		return ''
	}

	const showedAddress = useMemo(() => {
		const array = [
			addComma(address?.flat),
			addComma(address?.house_number, true),
			addComma(address?.house_name),
			addComma(address?.street),
			addComma(`\n${address?.city}`),
			addComma(address?.county, true),
			addComma(address?.postcode),
			addComma(address?.country, true),
		]

		return address?.postcode ? array.join('') : ''
	}, [address])

	const handleOpenSettings = useCallback(() => {
		if (pathSplitter().includes('/settings')) {
			history.push('/account')
		} else {
			history.push('/account/settings')
		}
	}, [pathSplitter()])

	const photo = useMemo(() => {
		if (user && user.filesToUsers && user.filesToUsers.length > 0) {
			return user?.filesToUsers[user.filesToUsers?.length - 1]?.file?.url || null
		}
		return null
	}, [user])

	const removeAccountHandler = () => {
		dispatch(userActions.deactivateUserAccount())
		setModalOpen(false)
	}

	const handleOpenEditMode = () => {
		history.push('/account/edit')
	}

	const AccountItemField = ({ children, styleName }: { children?: React.ReactNode; styleName?: string }) => (
		<p className={styles[styleName || 'field']}>{children}</p>
	)

	return (
		<div className={styles['account-item']}>
			<Photo styles={styles} photo={photo} srcSVG={Person} />

			<div className={styles.info}>
				<AccountItemField styleName={'name'}>
					{name} {surname}
				</AccountItemField>
				<AccountItemField>{email}</AccountItemField>
				<AccountItemField>{phone}</AccountItemField>
				<AccountItemField>{company}</AccountItemField>
				<AccountItemField styleName={'address'}>{showedAddress}</AccountItemField>
			</div>

			<div className={styles.buttons}>
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
				<div className={styles['delete-button']}>
					<button className={styles.button} onClick={setModalOpen.bind(null, true)}>
						Delete Account
					</button>
				</div>
			</div>

			<ConfirmationModal
				onClose={setModalOpen.bind(null, false)}
				deleteObject={removeAccountHandler}
				currentObject={'account'}
				isOpen={isModalOpen}
			/>
		</div>
	)
}
