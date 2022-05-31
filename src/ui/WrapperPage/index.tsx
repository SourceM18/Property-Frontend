import React, { FC } from 'react'

import classNames from 'classnames'

import { useDispatch } from 'react-redux'

import { usePathSplitter, useSelector } from '@hooks/index'

import { commonActionCreators } from 'src/store/common/reducers'
import { isFullWidthEmailSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

export const WrapperPage: FC<{ accessDeniedClassName?: boolean }> = ({ children, accessDeniedClassName }) => {
	const isFullWidthEmail = useSelector(isFullWidthEmailSelector)
	const { pathSplitter } = usePathSplitter()
	const contactsPage = pathSplitter().includes('/contacts')
	const dispatch = useDispatch()

	if (!contactsPage && isFullWidthEmail) {
		dispatch(commonActionCreators.setIsFullWidthEmail(false))
	}

	return (
		<div
			className={
				accessDeniedClassName
					? styles['access-denied-wrapper']
					: classNames(styles['wrapper-grid'], { [styles['full-width']]: contactsPage && isFullWidthEmail })
			}
		>
			{children}
		</div>
	)
}
