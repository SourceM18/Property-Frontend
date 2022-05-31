import React, { useState } from 'react'

import classNames from 'classnames'
import { Link } from 'react-router-dom'

import logo from '@pages/UnAuthPages/LandingPage/img/header-logo.svg'
import user from '@pages/UnAuthPages/LandingPage/img/user.png'

import { LandingPageDocsProps } from '@pages/UnAuthPages/LandingPage/Landing/@types'
import Navigation from '@pages/UnAuthPages/LandingPage/Landing/components/Navigation'
import stylesNav from '@pages/UnAuthPages/LandingPage/Landing/components/Navigation/styles.module.scss'

import styles from './styles.module.scss'

import CloseIcon from '@assets/icons/close-black-icon.svg'

const Header = ({ terms, policy }: LandingPageDocsProps): JSX.Element => {
	const [isShowDropdownLinks, setIsShowDropdownLinks] = useState(true)

	const ToggleShowDropdownLinks = () => {
		setIsShowDropdownLinks(!isShowDropdownLinks)
	}

	return (
		<div className={styles.headerWrapper}>
			<div className={styles.headerContainer}>
				<a href="#main">
					<img className={styles.headerLogo} src={logo} alt="RentWallet" />
				</a>
				{terms && <span className={classNames(stylesNav.navLink, stylesNav.navDocument)}>Service Terms</span>}
				{policy && (
					<span className={classNames(stylesNav.navLink, stylesNav.navDocument)}>Privacy Policy and Cookies</span>
				)}
				{!terms && !policy && <Navigation />}
				<div className={styles.button}>
					<img className={styles.headerUserImg} src={user} alt="" onClick={ToggleShowDropdownLinks} />

					{isShowDropdownLinks && (
						<div className={styles.headerDropdown}>
							<div className={styles.headerDropdownClose}>
								<img src={CloseIcon} alt="close" onClick={ToggleShowDropdownLinks} />
							</div>
							<div className={styles.headerDropdownLinks}>
								<Link to="/login">Log In</Link>
								<Link to="/register">Sign Up</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header
