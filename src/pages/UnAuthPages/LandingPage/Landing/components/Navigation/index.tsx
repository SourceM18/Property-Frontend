import React from 'react'

import SVG from 'react-inlinesvg'

import navico1 from '@pages/UnAuthPages/LandingPage/img/About.svg'
import navico4 from '@pages/UnAuthPages/LandingPage/img/Contact.svg'
import navico3 from '@pages/UnAuthPages/LandingPage/img/Plans.svg'
import navico2 from '@pages/UnAuthPages/LandingPage/img/Service.svg'

import styles from './styles.module.scss'

const Navigation = (): JSX.Element => {
	return (
		<div className={styles.navWrapper}>
			<ul className={styles.nav}>
				<li className={styles.navLink}>
					<a href="#about">
						<SVG src={navico1} />
						About
					</a>
				</li>
				<li className={styles.navLink}>
					<a href="#services">
						<SVG src={navico2} />
						Service
					</a>
				</li>
				<li className={styles.navLink}>
					<a href="#plans">
						<SVG src={navico3} />
						Plans
					</a>
				</li>
				<li className={styles.navLink}>
					<a href="#contacts">
						<SVG src={navico4} />
						Contact
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Navigation
