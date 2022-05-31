import React, { FC, useCallback } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'
import { useHistory } from 'react-router-dom'

import { GoBackButtonProps } from './@types'
import styles from './styles.module.scss'

import GoBackIcon from '@assets/icons/go-back-icon.svg'

export const GoBackButton: FC<GoBackButtonProps> = ({ className }) => {
	const history = useHistory()
	const handleGoBack = useCallback(() => {
		history.goBack()
	}, [])

	return (
		<button className={classNames(styles['go-back__btn'], className)} onClick={handleGoBack} title={'Go back'}>
			<SVG src={GoBackIcon} />
		</button>
	)
}
