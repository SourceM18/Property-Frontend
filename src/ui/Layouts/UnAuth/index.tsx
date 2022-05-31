import React, { FC } from 'react'

import SVG from 'react-inlinesvg'
import { Link } from 'react-router-dom'

import { useTheme } from '@hooks/index'

import styles from './styles.module.scss'

import DarkLogoIcon from '@assets/icons/fullHorizontal.svg'
import LogoIcon from '@assets/icons/fullHorizontalWhiteForDark.svg'

export const UnAuthAppLayout: FC = ({ children }) => {
	const { theme } = useTheme()

	return (
		<div className={styles['app-layout']} data-theme={theme}>
			<Link to={'/'} className={styles['app-icon']}>
				<SVG src={theme === 'dark' ? LogoIcon : DarkLogoIcon} role={'button'} />
			</Link>
			<section className={styles.body}>{children}</section>
		</div>
	)
}
