import React, { FC, useEffect, useState } from 'react'

import moment from 'moment'
import { useDispatch } from 'react-redux'

import { PropertyEdit, TenantEdit, DiscountsEdit, NewTransaction } from '@components/index'

import { dateObjectFormatter, dateToStringFormatter } from '@helpers/index'
import { useSelector } from '@hooks/index'
import { Transaction } from '@utils/Types/instances'
import { NewItemType } from '@utils/Types/localTypes'

import { propertyActionCreators } from 'src/store/property/reducers'
import { currentPropertySelector, currentTenantSelector, currentTransactionSelector } from 'src/store/selectors'
import { tenantActionCreators } from 'src/store/tenant/reducers'

import { NewItemProps } from './@types'

export const NewItem: FC<NewItemProps> = ({ item }): JSX.Element => {
	const dispatch = useDispatch()
	const currentTransaction = useSelector(currentTransactionSelector)
	const currentProperty = useSelector(currentPropertySelector)
	// const {currentDiscount} = useSelector(state => state.discountsReducer);
	const currentTenant = useSelector(currentTenantSelector)
	const [property, setProperty] = useState({
		id: null,
		title: '',
		filesToProperties: [],
		address: null,
	})
	const [tenant, setTenant] = useState({
		id: null,
		phone: '',
		email: '',
		name: '',
		surname: '',
		filesToTenants: [],
	})
	// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
	const [discount, setDiscount] = useState({
		id: null,
		discount: '',
		promo_code: '',
		from: dateToStringFormatter(dateObjectFormatter(moment(Date.now()).format('YYYY-MM-DD'))),
		to: dateToStringFormatter(dateObjectFormatter(moment(Date.now()).format('YYYY-MM-DD'))),
		description: '',
		balance: '',
		user_ids: [],
	})
	// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
	const [transaction, setTransaction] = useState<Transaction>({
		id: null,
		amount: '',
		description: '',
		timestamp: dateToStringFormatter(dateObjectFormatter(moment(Date.now()).format('YYYY-MM-DD'))),
	})

	useEffect(() => {
		switch (item) {
			case NewItemType.property: {
				dispatch(propertyActionCreators.setCurrentProperty(property))
				break
			}

			case NewItemType.tenant: {
				dispatch(tenantActionCreators.setCurrentTenant(tenant))
				break
			}

			case NewItemType.discount: {
				// dispatch(discountsActions.setCurrent(discount));
				break
			}

			case NewItemType.transaction: {
				// dispatch(discountsActions.setCurrent(discount));
				break
			}
			default:
				break
		}

		return () => {
			// dispatch(transactionsActions.closeCurrent());
			dispatch(propertyActionCreators.setCurrentProperty(null))
			// dispatch(discountsActions.closeCurrent());
			dispatch(tenantActionCreators.setCurrentTenant(null))
		}
	}, [])

	useEffect(() => {
		switch (item) {
			case NewItemType.property: {
				setProperty(currentProperty)
				break
			}

			case NewItemType.tenant: {
				setTenant(currentTenant)
				break
			}

			case NewItemType.discount: {
				// setDiscount(currentDiscount);
				break
			}

			case NewItemType.transaction: {
				setTransaction(currentTransaction)
				break
			}
			default:
				break
		}
	}, [currentProperty, currentTenant, currentTransaction])

	if (item === NewItemType.property) {
		return <PropertyEdit />
	}

	if (item === NewItemType.discount) {
		return <DiscountsEdit />
	}

	if (item === NewItemType.tenant) {
		return <TenantEdit />
	}

	if (item === NewItemType.transaction) {
		return <NewTransaction />
	}
}
