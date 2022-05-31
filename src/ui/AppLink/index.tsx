import React, { FC } from 'react'

import classNames from 'classnames'
import { NavLink, NavLinkProps } from 'react-router-dom'

import styles from './styles.module.scss'

export const AppLink: FC<NavLinkProps> = ({ exact = true, className, activeClassName, ...props }) => {
	return (
		<NavLink
			className={classNames(styles.link, className)}
			activeClassName={classNames(styles.active, activeClassName)}
			exact={exact}
			{...props}
		/>
	)
}
