import React, { FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { PropertyBalance, PropertyItem } from '@components/index'

import { useSelector } from '@hooks/index'

import { invoiceActions, propertyActionCreators, propertyActions } from 'src/store/rootAction'

import { currentPropertySelector, propertiesSelector } from 'src/store/selectors'

export const DashboardBalance: FC = () => {
	const currentProperty = useSelector(currentPropertySelector)
	const properties = useSelector(propertiesSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(propertyActions.getProperties())
	}, [])

	useEffect(() => {
		if (currentProperty) {
			dispatch(propertyActionCreators.setCurrentProperty(properties.find((p: any) => p.id === currentProperty.id)))
			dispatch(invoiceActions.getInvoicesByPropertyId(currentProperty.id))
		}
	}, [properties])

	if (!currentProperty) {
		return null
	}

	return (
		<>
			<PropertyItem property={currentProperty} optionClassName={'dashboard'} />
			<PropertyBalance currentProperty={currentProperty} />
		</>
	)
}
