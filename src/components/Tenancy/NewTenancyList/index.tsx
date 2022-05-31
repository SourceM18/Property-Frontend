import React, { FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { NewTenancyItem } from '@components/index'

import { usePathSplitter, useSelector } from '@hooks/index'

import { tenantActions } from 'src/store/rootAction'
import { sortedTenantsSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

export const NewTenancyList: FC = () => {
	const sortedTenants = useSelector(sortedTenantsSelector)
	const { pathSplitter } = usePathSplitter()
	const dispatch = useDispatch()

	useEffect(() => {
		if (
			pathSplitter().includes('/tenancy') &&
			pathSplitter().includes('/tenants') &&
			pathSplitter()[pathSplitter().length - 1] === '/tenants'
		) {
			dispatch(tenantActions.getTenants())
		}
	}, [])

	return (
		<div className={styles['tenancy-list']}>
			{sortedTenants.map((t) => (
				<NewTenancyItem key={t.id} tenant={t} />
			))}
		</div>
	)
}
