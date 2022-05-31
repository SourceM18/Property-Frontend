import React, { FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { DashboardProperty } from '@components/index'

import { useSelector } from '@hooks/index'

import { propertyActions } from 'src/store/rootAction'
import { propertiesSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

export const TransactionPropertyList: FC = () => {
	const properties = useSelector(propertiesSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		if (!properties.length) {
			dispatch(propertyActions.getProperties())
		}
	}, [])

	return (
		<div className={styles['transaction-property-list']}>
			{properties &&
				[...properties]
					.sort((a, b) => {
						return a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase() ? 1 : -1
					})
					.map((property) => (
						<DashboardProperty property={property} key={property.id} transactionsClassName={'transaction-property'} />
					))}
		</div>
	)
}
