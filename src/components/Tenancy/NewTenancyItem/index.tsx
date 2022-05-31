import React, { FC } from 'react'

import { usePathSplitter } from '@hooks/index'
import { history } from '@utils/index'

import { NewTenancyItemProp } from './@types'
import styles from './styles.module.scss'

export const NewTenancyItem: FC<NewTenancyItemProp> = ({ tenant }) => {
	const { pathSplitter } = usePathSplitter()

	const clickHandler = () => {
		history.push(`${pathSplitter().join('')}/${tenant.id}`)
	}

	return (
		<div className={styles.tenancy} onClick={clickHandler}>
			<div className={styles.information}>
				<p className={styles.name}>
					{tenant.name} <span className={styles.surname}>{tenant.surname}</span>
				</p>
				<p className={styles.email}>{tenant.email}</p>
			</div>
		</div>
	)
}
