import React from 'react'

import mail from '@pages/UnAuthPages/LandingPage/img/mail.svg'
import tg from '@pages/UnAuthPages/LandingPage/img/telegram.svg'
import wa from '@pages/UnAuthPages/LandingPage/img/whatsapp.svg'
import stylesLanding from '@pages/UnAuthPages/LandingPage/Landing/styles.module.scss'
import { socialLinks } from '@utils/constants'

import styles from './styles.module.scss'

const Contacts = (): JSX.Element => {
	return (
		<div id="contacts" className={stylesLanding.landingContainer}>
			<h2 className={stylesLanding.landingHeading}>Contact</h2>
			<div className={styles.contactsContent}>
				<div className={styles.landingContacts}>
					<a href={`mailto: ${socialLinks.Email}`}>
						<img src={mail} alt="email" />
					</a>
					<a href={socialLinks.Telegram}>
						<img src={tg} alt="telegram" />
					</a>
					<a href={socialLinks.Whatsapp}>
						<img src={wa} alt="whatsapp" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Contacts
