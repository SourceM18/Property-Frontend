import React, { useState } from 'react'

import SVG from 'react-inlinesvg'

import { PoweredBY } from '@ui/PoweredBy'

import styles from './styles.module.scss'

import Plus from '@assets/icons/circle-plus.svg'

export const PayeeCentre = (): JSX.Element => {
	const [isMoneyHubVisible, setIsMoneyHubVisible] = useState(false)

	const onMoneyHubVisibleToggle = () => {
		setIsMoneyHubVisible(!isMoneyHubVisible)
	}

	return (
		<div className={styles['payee-center-container']}>
			<div className={styles.title}>Payee Centre</div>

			{!isMoneyHubVisible && (
				<div className={styles['button-container']}>
					<button className={styles.button} onClick={() => {}}>
						<SVG className={styles.icon} src={Plus} />
						<p className={styles.text}>Connect Payee</p>
					</button>
				</div>
			)}

			{!isMoneyHubVisible && <div className={styles['payee-list']}></div>}
			<PoweredBY isMoneyHubVisible={isMoneyHubVisible} onMoneyHubVisibleToggle={onMoneyHubVisibleToggle} />
		</div>
	)
}
