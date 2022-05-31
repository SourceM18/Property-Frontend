import React, { FC } from 'react'

import classNames from 'classnames'

import stylesLanding from '@pages/UnAuthPages/LandingPage/Landing/styles.module.scss'

import styles from './styles.module.scss'

const MainItem: FC<{
	bgSlide: string
	mainHeading: string
	mainText: string
}> = ({ bgSlide, mainHeading, mainText }) => {
	return (
		<div className={styles.mainWrapper} style={{ backgroundImage: `url(${bgSlide})` }}>
			<div className={classNames(styles.mainContainer, stylesLanding.landingContainer)}>
				<h1 className={styles.mainHeading}>{mainHeading}</h1>
				<p className={styles.mainText}>{mainText}</p>
			</div>
		</div>
	)
}

export default MainItem
