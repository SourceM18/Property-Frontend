import React, { FC } from 'react'

import { LandingPageDocsProps } from './@types'
import About from './About'
import Contacts from './Contacts'
import Policy from './Documents/Policy'
import Terms from './Documents/Terms'
import Download from './Download'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import RentWallet from './RentWallet'
import Services from './Services'
import styles from './styles.module.scss'

export const LandingPage: FC<LandingPageDocsProps> = ({ terms, policy }) => {
	return (
		<div className={styles.landingGrid}>
			<div className={styles.headerBlock}>
				<Header terms={terms} policy={policy} />
			</div>
			<div className={styles.contentBlock}>
				{terms && <Terms />}
				{policy && <Policy />}
				{!policy && !terms && (
					<>
						<Main />
						<About />
						<Services />
						<RentWallet />
						<Contacts />
						<Download />
					</>
				)}
				<Footer />
			</div>
		</div>
	)
}
