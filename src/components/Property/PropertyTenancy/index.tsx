import React, { FC, useMemo, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { TenancyButtons, TenancyList, NewTenancyList } from '@components/index'

import { usePathSplitter, useSelector } from '@hooks/index'

import { propertyActions, tenancyActions } from 'src/store/rootAction'

import { currentPropertySelector } from 'src/store/selectors'

import styles from './styles.module.scss'

export const PropertyTenancy: FC = () => {
	const currentProperty = useSelector(currentPropertySelector)
	const { pathTail } = usePathSplitter()
	const dispatch = useDispatch()

	useEffect(() => {
		if (currentProperty) {
			dispatch(tenancyActions.getTenancyByPropertyId(currentProperty.id))
		}
	}, [currentProperty])

	useEffect(() => {
		dispatch(propertyActions.getProperties())
	}, [])

	const tenancy = useMemo(() => {
		if (pathTail === '/tenants') {
			return <NewTenancyList />
		}
		return <TenancyList />
	}, [pathTail])

	return (
		<div className={styles.tenancy}>
			<TenancyButtons />
			{tenancy}
		</div>
	)
}
