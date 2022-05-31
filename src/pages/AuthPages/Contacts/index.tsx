import React, { useEffect, useState } from 'react'

import SVG from 'react-inlinesvg'

// import Facebook from '../../../assets/icons/social-contacts/facebook.svg';
// import FacebookBlack from '../../../assets/icons/social-contacts/facebook-black.svg';
import { Widgets } from '@components/index'

import { usePathSplitter, useTheme } from '@hooks/index'

import { socialLinks } from '@utils/constants'

import { HeadingPage, WrapperPage } from 'src/ui/index'

import styles from './styles.module.scss'

import EmailBlack from '@assets/icons/social-contacts/email-black.svg'
import Email from '@assets/icons/social-contacts/email.svg'
import TelegramBlack from '@assets/icons/social-contacts/telegram-black.svg'
import Telegram from '@assets/icons/social-contacts/telegram.svg'
import WhatsappBlack from '@assets/icons/social-contacts/whatsapp-black.svg'
import Whatsapp from '@assets/icons/social-contacts/whatsapp.svg'

// import Twitter from '../../../assets/icons/social-contacts/twitter.svg';
// import TwitterBlack from '../../../assets/icons/social-contacts/twitter-black.svg';
// import LinkedIn from '../../../assets/icons/social-contacts/linkedIn.svg';
// import LinkedInBlack from '../../../assets/icons/social-contacts/linkedIn-black.svg';

export const ContactsPage = (): JSX.Element => {
	const { pathSplitter } = usePathSplitter()
	const [showContactsFeed, setShowContactsFeed] = useState(false)
	const { theme } = useTheme()

	const handleResize = () => {
		if (window.innerWidth > 1200) {
			setShowContactsFeed(true)
		} else if (!showContactsFeed) {
			setShowContactsFeed(true)
		}
	}

	useEffect(() => {
		if (pathSplitter().includes('/contacts')) {
			handleResize()
			window.addEventListener('resize', handleResize)

			return () => {
				window.removeEventListener('resize', handleResize)
			}
		}
	}, [])

	const handleShowSendForm = () => {
		setShowContactsFeed(!showContactsFeed)
	}

	const toggleIconTheme = (iconWhite: string, iconBlack: string) => {
		return theme === 'dark' ? iconWhite : iconBlack
	}

	return (
		<WrapperPage>
			{showContactsFeed && (
				<div className={styles.contact}>
					<h2 className={styles['contact-name']}>
						<a href="https://rentwallet.net/" target={'_blank'}>
							Rentwallet.net
						</a>{' '}
						Limited
					</h2>

					<div className={styles['contact-list']}>
						<p>
							<span>Address:</span>
							<span>
								Lygon House, 50 London Road,
								<br />
								Bromley, Kent BR1 3RA, United Kingdom
							</span>
						</p>
						<p>
							<span>Email:</span>
							<a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>
						</p>
						{/* <p>
							<a href='tel:+737389383838'>+737389383838</a>
						</p>						 */}
					</div>

					<div className={styles['contact-socials']}>
						{/* <div className={styles['contact-socials-wrapper']}> */}
						{/*	<p>Find us:</p> */}
						{/*	<div className={styles['contact-socials-list']}> */}
						{/*		<a href='#'> */}
						{/*			<SVG src={toggleIconTheme(Facebook, FacebookBlack)} /> */}
						{/*		</a> */}
						{/*		<a href='#'> */}
						{/*			<SVG src={toggleIconTheme(Twitter, TwitterBlack)} /> */}
						{/*		</a> */}
						{/*		<a href='#'> */}
						{/*			<SVG src={toggleIconTheme(LinkedIn, LinkedInBlack)} /> */}
						{/*		</a> */}
						{/*	</div> */}
						{/* </div> */}

						<div className={styles['contact-socials-wrapper']}>
							<p>Contact by us:</p>
							<div className={styles['contact-socials-list']}>
								<a href={`mailto: ${socialLinks.Email}`}>
									<SVG src={toggleIconTheme(Email, EmailBlack)} />
								</a>
								<a href={socialLinks.Telegram}>
									<SVG src={toggleIconTheme(Telegram, TelegramBlack)} />
								</a>
								<a href={socialLinks.Whatsapp}>
									<SVG src={toggleIconTheme(Whatsapp, WhatsappBlack)} />
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
			<Widgets handleShowSendForm={handleShowSendForm} showContactsFeed={showContactsFeed} />
			<HeadingPage text="Contacts" />
		</WrapperPage>
	)
}
