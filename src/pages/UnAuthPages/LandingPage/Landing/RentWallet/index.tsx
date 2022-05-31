import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'
import ticked from '@pages/UnAuthPages/LandingPage/img/TickedBoxGold.svg'

import RentPlan from '@pages/UnAuthPages/LandingPage/Landing/components/RentPlan'
import styles from '@pages/UnAuthPages/LandingPage/Landing/RentWallet/styles.module.scss'
import stylesLanding from '@pages/UnAuthPages/LandingPage/Landing/styles.module.scss'

const planName = {
	LIGHT: 'LIGHT',
	SMART: 'SMART',
	ADVANCED: 'ADVANCED',
	EXPERT: 'EXPERT',
}

const planPrice = {
	LIGHT: 1199,
	SMART: 1799,
	ADVANCED: 2499,
}

const planText = {
	TEXT: 'a month',
}

const planList = {
	LIGHT: [
		'Manual Bank Account Information',
		'No Instant Rent Payment Tool Available',
		'Manual Reconciliation',
		'Real-time Dashboard',
		'Transactions History',
	],
	SMART: [
		'Automated Bank Account Information*',
		'No Instant Rent Payment Tool Available',
		'Automated Reconciliation**',
		'Real-time Dashboard',
		'Transactions History',
	],
	ADVANCED: [
		'Automated Bank Account Information*',
		'Automated Instant Rent Payment Tool (up to 15 payments a month)***',
		'Automated Reconciliation**',
		'Real-time Dashboard',
		'Transactions History',
	],
	EXPERT: [
		'Automated Bank Account Information*',
		'Automated Instant Rent Payment Tool (15+ payments a month)***',
		'Automated Reconciliation** ',
		'Real-time Dashboard',
		'Transactions History',
	],
}

const rentHeadingList = [
	'As Many Properties as You Wish',
	'No Long Term Commitments',
	'Simple One Month Subscription',
	'No Forgotten Recurring Charges',
]

const RentWallet = (): JSX.Element => {
	return (
		<div id="plans" className={styles.rentPlansWrapper}>
			<h2 className={stylesLanding.landingHeading}>Plans</h2>
			<div className={styles.rentPlansBG}>
				<div className={styles.rentPlansContainer}>
					<ul className={styles.rentHeadingList}>
						{rentHeadingList.map((rent) => (
							<li key={rent}>
								<img src={ticked} alt={'rent-heading'} />
								{rent}
							</li>
						))}
					</ul>
					{window.innerWidth <= 576 ? (
						<Swiper pagination={{ clickable: true }} initialSlide={1}>
							<SwiperSlide>
								<RentPlan
									title={planName.LIGHT}
									listItem={planList.LIGHT}
									priceTrue
									price={planPrice.LIGHT}
									text={planText.TEXT}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<RentPlan
									title={planName.SMART}
									listItem={planList.SMART}
									priceTrue
									price={planPrice.SMART}
									text={planText.TEXT}
									gold={true}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<RentPlan
									title={planName.ADVANCED}
									listItem={planList.ADVANCED}
									priceTrue
									price={planPrice.ADVANCED}
									text={planText.TEXT}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<RentPlan
									title={planName.EXPERT}
									listItem={planList.EXPERT}
									// text={`${<span>Bespoke</span>}Please contact us`}
									text={
										<div>
											<span>Bespoke</span>Please contact us
										</div>
									}
									bold
									priceTrue={false}
								/>
							</SwiperSlide>
						</Swiper>
					) : (
						<div className={styles.rentPlans}>
							<RentPlan
								title={planName.LIGHT}
								listItem={planList.LIGHT}
								priceTrue
								price={planPrice.LIGHT}
								text={planText.TEXT}
							/>
							<RentPlan
								title={planName.SMART}
								listItem={planList.SMART}
								priceTrue
								price={planPrice.SMART}
								text={planText.TEXT}
								gold
							/>
							<RentPlan
								title={planName.ADVANCED}
								listItem={planList.ADVANCED}
								priceTrue
								price={planPrice.ADVANCED}
								text={planText.TEXT}
							/>
							<RentPlan
								title={planName.EXPERT}
								listItem={planList.EXPERT}
								text={
									<div>
										<span>Bespoke</span>Please contact us
									</div>
								}
								bold
								priceTrue={false}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default RentWallet
