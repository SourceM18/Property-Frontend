import React, { FC, useState } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'

import { ModalProps } from './@types'
import styles from './styles.module.scss'

import CloseIcon from '@assets/icons/close-icon.svg'

export const Modal: FC<ModalProps> = ({
	children,
	isOpen,
	onClose,
	showCloseBtn = true,
	closeBtn: CloseBtn,
	closeOnOverlayClick = true,
	contentClassName,
}) => {
	const [isOverlay, setIsOverlay] = useState(false)

	const handleClose = () => {
		if (isOverlay) {
			onClose()
		}
	}

	return (
		<>
			{isOpen ? (
				<div className={styles.overlay} onClick={closeOnOverlayClick && handleClose}>
					<div
						className={classNames(styles.content, contentClassName)}
						onMouseEnter={setIsOverlay.bind(null, false)}
						onMouseLeave={setIsOverlay.bind(null, true)}
					>
						{children}
						{CloseBtn ? (
							<CloseBtn close={onClose} />
						) : (
							showCloseBtn && <SVG className={styles.close_btn} onClick={onClose} src={CloseIcon} />
						)}
					</div>
				</div>
			) : null}
		</>
	)
}
