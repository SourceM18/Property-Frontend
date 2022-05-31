import React, { ChangeEvent, FC, useEffect } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'

import { useFileUpload } from '@hooks/index'

import { Photo } from '@ui/index'

import { PhotoInstanceProps } from './@types'
import styles from './styles.module.scss'

import PlusIcon from '@assets/icons/plus-black-icon.svg'

export const PhotoInstance: FC<PhotoInstanceProps> = ({
	className,
	setPhoto,
	photo,
	photoClassName,
	plugClassName,
	mobileIconClassName,
	mobileEditPhotoClassName,
	hoverTexts = { add: 'Add photo', replace: 'Replace photo' },
	plug,
	imgSizeName,
}) => {
	const handleSetPhoto = (e: ChangeEvent<HTMLInputElement>) => {
		setPhoto(useFileUpload(e))
	}

	useEffect(() => {
		return () => URL.revokeObjectURL(photo as string)
	}, [])

	return (
		<label className={classNames(styles['icon-container'], styles[`${className}`])}>
			<input type="file" className={styles.file__input} onChange={handleSetPhoto} value={''} />
			<Photo
				styles={styles}
				photo={photo}
				srcSVG={plug}
				classes={[
					styles[`${plugClassName}`],
					styles[`${photoClassName}`],
					styles[`${imgSizeName}`],
					styles[`${mobileEditPhotoClassName}`],
				]}
			>
				<p className={classNames(styles.text, styles[`${mobileIconClassName}`])}>
					{!photo && <SVG src={PlusIcon} />}
					<span>{photo ? hoverTexts.replace : hoverTexts.add}</span>
				</p>
			</Photo>
		</label>
	)
}
