import React from 'react'

import classNames from 'classnames'

import services3 from '@pages/UnAuthPages/LandingPage/img/GAINS-01.svg'
import services4 from '@pages/UnAuthPages/LandingPage/img/GAINS-02.svg'
import services1 from '@pages/UnAuthPages/LandingPage/img/HOW-01.svg'
import services2 from '@pages/UnAuthPages/LandingPage/img/HOW-02.svg'
import ServicesItem from '@pages/UnAuthPages/LandingPage/Landing/components/ServicesItem'
import stylesLanding from '@pages/UnAuthPages/LandingPage/Landing/styles.module.scss'

import styles from './styles.module.scss'

const Services = (): JSX.Element => {
	return (
		<div id="services" className={stylesLanding.landingContainer}>
			<h2 className={stylesLanding.landingHeading}>Service</h2>
			<div className={styles.servicesContent}>
				<div className={styles.servicesContentGrid}>
					<div>
						<h3 className={classNames(stylesLanding.landingTitle, styles.serviceTitle)}>HOW</h3>
						<ServicesItem
							ico={services1}
							content={['RentWallet is a system to control, to collect and to reconcile rent payments']}
						/>
						<ServicesItem
							ico={services2}
							content={[
								'It offers information dashboard and full automation of rent demands, collections, receipts, reconciliations, transactions and communication history',
							]}
						/>
					</div>
					<div className={styles.tick}>
						<h3 className={classNames(stylesLanding.landingTitle, styles.serviceTitle)}>GAINS</h3>
						<ServicesItem ico={services3} content={['Security & Automation', 'Realtime Data']} />
						<ServicesItem
							ico={services4}
							content={['Superior Banking Experience', 'Accuracy & Simplicity', 'Usability & Time Saver']}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
