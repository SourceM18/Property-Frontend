import React, { FC } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'

export type PhotoProps = {
	styles: { [className: string]: string }
	photo?: string
	srcSVG: string
	classes?: any[]
	children?: React.ReactNode
}

export const Photo: FC<PhotoProps> = ({ styles, photo, srcSVG, classes, children }) => {
	return (
		<div className={classNames(styles.photo, { [styles.plug]: !photo }, classes)}>
			{photo ? (
				<img className={styles.icon} src={photo} alt={'photo-icon'} />
			) : (
				<SVG className={styles.image} src={srcSVG} />
			)}
			{children}
		</div>
	)
}
