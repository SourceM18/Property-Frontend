import React from 'react'

import classNames from 'classnames'

import { socialLinks } from '@utils/constants'
import { history } from '@utils/index'

import styles from './styles.module.scss'

const Footer = (): JSX.Element => {
	return (
		<div className={styles.footerBG}>
			<div className={styles.footerWrapper}>
				<div className={classNames(styles.footerContainer)}>
					<div className={styles.footerBlock}>
						{/* <a>
							<img className={styles['user']} src={userIco} alt='' />
						</a> */}
						<div>
							<p className={styles.title}>My account</p>
							<ul className={styles.list}>
								<button className={styles.button} onClick={() => history.push('/login')}>
									Log in
								</button>
								<button className={styles.button} onClick={() => history.push('/register')}>
									Create account
								</button>
							</ul>
						</div>
					</div>
					<div className={styles.footerBlock3}>
						<p className={styles.title}>Terms and Policies</p>
						<ul className={styles.list}>
							<a href={'/terms'} target={'_blank'} className={styles.button}>
								RentWallet Service Terms
							</a>
							<a href={'/policy'} target={'_blank'} className={styles.button}>
								RentWallet Privacy Policy and Cookies
							</a>
						</ul>
					</div>
				</div>
				<p className={styles.footerText}>
					RentWallet™ is a trading style of RentWallet.net Limited, company incorporated in England and Wales, company
					number 13089273, registered address at Lygon House, 50 London Road, Bromley, Kent BR1 3RA.
					<br />
					Email:<a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>
					<br />
					RentWallet.net Limited is registered with the Financial Conduct Authority, firm reference number (FRN) 960723.
					<br />
					RentWallet.net Limited is registered with the Information Commissioner's Office, with registration number:
					ZA858955
					<br />
					RentWallet.net Limited is the registered agent of Moneyhub Financial Technology Ltd (“Moneyhub”) who is
					authorised and regulated by the Financial Conduct Authority under the Payment Services Regulations 2017 (reg.
					no. 809360) for the provision of payment services. Head office: Regus House, 1 Friary, Temple Way, Bristol,
					BS1 6EA. Email: <a href={`mailto: ${socialLinks.EmailSecond}`}>{socialLinks.EmailSecond}</a>
				</p>
			</div>
		</div>
	)
}

export default Footer
