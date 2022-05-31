import React, { FC } from 'react'

import styles from './styles.module.scss'

const ServicesItem: FC<{
	ico: string
	content: string[]
}> = ({ ico, content }) => {
	return (
		<div className={styles.servicesItemContainer}>
			<img className={styles.servicesItemIco} src={ico} alt={'service-item'} />
			<div className={styles.servicesItemRight}>
				{content.map((i) => (
					<p className={styles.servicesItemText} key={i}>
						{i}
					</p>
				))}
			</div>
		</div>
	)
}

export default ServicesItem
