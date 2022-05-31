import React, { FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { PropertyItem } from '@components/index'

import { useSelector } from '@hooks/index'

import { LoadingSpinner } from '@ui/LoadingSpinner'

import { propertyActions } from 'src/store/rootAction'
import {
	isPermissionsAndPropertiesLoading,
	periodSelector,
	permissionsSelector,
	propertiesSelector,
} from 'src/store/selectors'

import styles from './styles.module.scss'

export const PropertyList: FC = () => {
	const period = useSelector(periodSelector)
	const permissions = useSelector(permissionsSelector)
	const properties = useSelector(propertiesSelector)
	const isLoading = useSelector(isPermissionsAndPropertiesLoading)
	const dispatch = useDispatch()

	useEffect(() => {
		if (permissions.includes('properties')) {
			dispatch(propertyActions.getProperties())
		}
	}, [permissions, period.start, period.end])

	// useEffect(() => {
	// if (fetching) {
	// dispatch(propertiesActions.getAll(properties, currentPage));
	// }
	// }, [fetching]);

	// const handleScroll = (e: any) => {
	// 	if ( e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 50 && totalCount > properties.length) {
	// dispatch(propertiesActions.setFetching(true));
	// }
	// }

	return (
		<div className={styles.properties}>
			{/* onScroll={handleScroll} */}
			{isLoading && <LoadingSpinner />}
			{properties && properties.map((property: any) => <PropertyItem property={property} key={property.id} />)}
		</div>
	)
}
