import React, { FC } from 'react'

import classNames from 'classnames'

import { Decimal } from '@components/Decimal'

import stylesLanding from '@pages/UnAuthPages/LandingPage/Landing/styles.module.scss'

import styles from './styles.module.scss'

const RentPlan: FC<{
	gold?: boolean
	title: string
	listItem: string[]
	price?: number
	text: object | string
	bold?: boolean
	priceTrue: boolean
}> = ({ gold, title, listItem, priceTrue, price, text, bold }) => {
	return (
		<div className={gold ? classNames(styles.rentPlanBlock, styles.blockGold) : styles.rentPlanBlock}>
			<p className={classNames(styles.heading, stylesLanding.landingTitle)}>{title}</p>
			<ul className={styles.list}>
				{listItem.map((i) => (
					<li key={i}>{i}</li>
				))}
			</ul>
			<p className={styles.price}>{priceTrue && <Decimal price={price} />}</p>
			<div className={bold ? classNames(styles.title, styles.titleBold) : styles.title}>{text}</div>
		</div>
	)
}

export default RentPlan
