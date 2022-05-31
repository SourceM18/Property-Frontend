import React, { FC, useMemo, useState } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { ConfirmationModal } from '@components/index'

import { useSelector, useTheme } from '@hooks/index'
import { AppLink, Photo } from '@ui/index'

import { authActions, commonActionCreators } from 'src/store/rootAction'
import { pwaEventSelector, themeSelector, userSelector } from 'src/store/selectors'

import { HeaderPropsTypes } from './@types'

import styles from './styles.module.scss'

import BrushIcon from '@assets/icons/brush-icon.svg'
import FaqIcon from '@assets/icons/faq-icon.svg'
import DarkLogoIcon from '@assets/icons/logoIconBlue_Gold.svg'
import LogoIcon from '@assets/icons/logoIconWhite_Gold.svg'
import LogoutIcon from '@assets/icons/logout-icon.svg'
import Person from '@assets/icons/person-icon.svg'
import PhoneIcon from '@assets/icons/phone-icon.svg'

export const Header: FC<HeaderPropsTypes> = ({ className }) => {
	const pwaEvent = useSelector(pwaEventSelector)
	const theme = useSelector(themeSelector)
	const user = useSelector(userSelector)
	const [openModal, setOpenModal] = useState(false)
	const { toggleTheme } = useTheme()
	const dispatch = useDispatch()

	const logoutHandler = () => {
		dispatch(authActions.logout())
	}

	const handleClick = async () => {
		if (pwaEvent) {
			pwaEvent.prompt()
			const { outcome } = await pwaEvent.userChoice
			outcome === 'accepted' && dispatch(commonActionCreators.setPwaEvent(null))
		} else {
			dispatch(
				commonActionCreators.addToast({
					message: 'The app is already installed on your device. Please tap the logo to open it.',
					isSocialMediaShowed: false,
					doAfterClosed: null,
					status: 'success',
				}),
			)
		}
	}

	const photo = useMemo(() => {
		if (user && user.filesToUsers && user.filesToUsers.length > 0) {
			return user?.filesToUsers[user.filesToUsers?.length - 1]?.file?.url || null
		}
		return null
	}, [user])

	return (
		<header className={classNames(styles.header, className)}>
			<Link to={'/'} className={styles['app-icon']} onClick={handleClick}>
				<SVG src={theme === 'dark' ? LogoIcon : DarkLogoIcon} role={'button'} />
				<span className={styles[`${theme !== 'dark' ? 'text-blue' : null}`]}>RentWallet</span>
			</Link>

			<div className={styles['additional-buttons']}>
				<AppLink
					to={'/account'}
					className={styles['account-link']}
					activeClassName={styles.active}
					title={'Account page'}
					exact={false}
				>
					<span className={styles.name}>{user?.name}</span>
					<span className={styles.surname}>{user?.surname}</span>
					<Photo styles={styles} photo={photo} srcSVG={Person} />
				</AppLink>
				<div className={styles.link} onClick={toggleTheme} title={'Change theme'}>
					<SVG src={BrushIcon} className={styles.icon} />
				</div>
				<AppLink
					to={'/faq'}
					className={styles.link}
					activeClassName={styles.active}
					title={'Information page'}
					exact={false}
				>
					<SVG src={FaqIcon} className={styles.icon} />
				</AppLink>
				<AppLink to={'/contacts'} className={styles.link} activeClassName={styles.active} title={'Contacts page'}>
					<SVG src={PhoneIcon} className={styles.icon} />
				</AppLink>

				<div className={styles.logout}>
					<button className={styles.button} onClick={setOpenModal.bind(null, true)}>
						<SVG src={LogoutIcon} className={styles.icon} />
					</button>
				</div>
			</div>

			<ConfirmationModal
				onClose={setOpenModal.bind(null, false)}
				deleteObject={logoutHandler}
				currentObject={'logout'}
				isOpen={openModal}
			/>
		</header>
	)
}
