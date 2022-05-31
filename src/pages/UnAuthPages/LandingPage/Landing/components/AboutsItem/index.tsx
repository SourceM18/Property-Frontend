import React, { FC } from 'react'

import classNames from 'classnames'

import stylesLanding from '@pages/UnAuthPages/LandingPage/Landing/styles.module.scss'

import styles from './styles.module.scss'

const AboutItem: FC<{
	ico: string
	heading: string
	text: string
	icons: string
	img: string
	revers?: boolean
}> = ({ ico, heading, text, icons, img, revers }) => {
	return (
		<div
			className={
				revers ? classNames(styles.aboutItemContainer, styles.aboutItemContainerRevers) : styles.aboutItemContainer
			}
		>
			<div className={styles.aboutItemblock}>
				<div className={styles.aboutItemHeader}>
					<img className={styles.aboutItemHeaderIco} src={ico} alt={'about'} />
					<h3 className={stylesLanding.landingTitle}>{heading}</h3>
				</div>
				<p className={styles.aboutItemText}>{text}</p>
				<div className={styles.aboutItemIco}>
					<img src={icons} alt={'about-item'} />
				</div>
			</div>
			<div>
				<img className={styles.aboutImg} src={img} alt="" />
			</div>
		</div>
	)
}

export default AboutItem
