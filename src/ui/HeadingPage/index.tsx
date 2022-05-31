import React, { FC } from 'react'

import styles from './styles.module.scss'

export const HeadingPage: FC<{ text: string }> = ({ text }) => {
	return (
		<>
			<h2 className={styles['title-container']}>{text}</h2>
		</>
	)
}
