import React, { FC, useEffect } from 'react'

import moment from 'moment'
import { useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import { dateObjectFormatter, dateToStringFormatter } from '@helpers/index'
import { useSelector } from '@hooks/index'
import { PaymentType } from '@utils/Types/instances'
import { FounderFieldType } from '@utils/Types/localTypes'

import {
	transactionActionCreators,
	dashboardActionCreators,
	propertyActionCreators,
	invoiceActionCreators,
	tenancyActionCreators,
	tenantActionCreators,
} from 'src/store/rootAction'

import {
	currentPropertySelector,
	invoicesSelector,
	propertiesSelector,
	propertyInvoicesSelector,
	tenanciesSelector,
	tenantsSelector,
	transactionsSelector,
} from 'src/store/selectors'

import { FounderProps } from './@types'

export const Founder: FC<FounderProps> = ({ field, component: Component }) => {
	const properties = useSelector(propertiesSelector)
	const currentProperty = useSelector(currentPropertySelector)
	const propertyInvoices = useSelector(propertyInvoicesSelector)
	const invoices = useSelector(invoicesSelector)
	const transactions = useSelector(transactionsSelector)
	// const {discount} = useSelector(state => state.discountsReducer);
	const tenancies = useSelector(tenanciesSelector)
	const tenants = useSelector(tenantsSelector)
	const params = useParams<{ [key: string]: string }>()
	const dispatch = useDispatch()
	const history = useHistory()

	useEffect(() => {
		if (
			(field === FounderFieldType.partitions && properties && transactions) ||
			(field === FounderFieldType.transaction && transactions) ||
			(field === FounderFieldType.newTenancy && tenancies) ||
			// (field === FounderFieldType.discount && discount) ||
			(field === FounderFieldType.property && properties) ||
			(field === FounderFieldType.tenancy && tenancies) ||
			(field === FounderFieldType.payment && invoices) ||
			(field === FounderFieldType.total && invoices) ||
			(field === FounderFieldType.tenant && tenants)
		) {
			handleRedirect()
		}
	}, [properties, tenants, transactions, invoices, field])

	useEffect(() => {
		return () => {
			// dispatch(discountsActions.closeCurrent());
			dispatch(dashboardActionCreators.setTotal(null))
			dispatch(transactionActionCreators.setCurrentTransaction(null))
			dispatch(invoiceActionCreators.setPropertyInvoices([]))
			dispatch(invoiceActionCreators.setCurrentInvoice(null))
			dispatch(tenantActionCreators.setCurrentTenant(null))
		}
	}, [])

	const handleRedirect = () => {
		switch (field) {
			case FounderFieldType.tenancy: {
				const founded = tenancies?.find((p: any) => p.id === parseInt(params[field]))

				if (founded && currentProperty) {
					dispatch(tenancyActionCreators.setCurrentTenancy(founded))
				} else if (currentProperty && !founded) {
					history.push(`/properties/${currentProperty.id}/tenancy`)
				} else {
					history.push('/properties')
				}
				break
			}

			case FounderFieldType.newTenancy: {
				const date = dateToStringFormatter(dateObjectFormatter(moment(Date.now()).format()))
				const foundedTenant = tenants?.find((p: any) => p.id === parseInt(params[field]))

				if (foundedTenant && currentProperty) {
					dispatch(
						tenancyActionCreators.setCurrentTenancy({
							id: null,
							price: 0,
							start: date,
							end: date,
							first: date,
							tenant: foundedTenant,
							property_id: currentProperty.id,
							period: 'monthly',
							currency_id: 1,
						}),
					)
				} else if (currentProperty && !foundedTenant) {
					history.push(`/properties/${currentProperty.id}/tenancy`)
				} else {
					history.push('/properties')
				}
				break
			}

			case FounderFieldType.property: {
				const founded = properties?.find((p: any) => p.id === parseInt(params[field]))

				if (founded) {
					dispatch(propertyActionCreators.setCurrentProperty(founded))
					// dispatch(tenancyActions.getAll(founded.id));
				} else {
					history.push('/properties')
				}
				break
			}

			case FounderFieldType.tenant: {
				const founded = tenants?.find((t: any) => t.id === parseInt(params[field]))

				if (founded) {
					dispatch(tenantActionCreators.setCurrentTenant(founded))
				} else {
					history.push('/tenants')
				}
				break
			}

			case FounderFieldType.discounts: {
				// const founded = discount?.find((d: any) => d.id === params[field]);

				// if (founded) {
				//   dispatch(discountsActions.setCurrent(founded));
				// } else {
				//   history.push('/discount');
				// }
				break
			}

			case FounderFieldType.total: {
				const types: string[] = [...Object.values(PaymentType)]
				const param: string = params[field]

				if (types.includes(param)) {
					dispatch(dashboardActionCreators.setTotal(param))
				} else {
					history.push('/dashboard/total')
				}
				break
			}

			case FounderFieldType.payment: {
				const foundedInvoice = invoices?.find((i: any) => i.id === parseInt(params[field]))

				if (foundedInvoice) {
					dispatch(invoiceActionCreators.setCurrentInvoice(foundedInvoice))
					dispatch(propertyActionCreators.setCurrentProperty(foundedInvoice.property))
				} else {
					history.push('/dashboard/total')
				}
				break
			}

			case FounderFieldType.transaction: {
				const founded = transactions?.find((t: any) => t.id === parseInt(params[field]))

				if (founded) {
					dispatch(transactionActionCreators.setCurrentTransaction(founded))
				} else {
					history.push('/dashboard/transactions')
				}
				break
			}

			case FounderFieldType.partitions: {
				const foundedTransaction = transactions?.find(
					(p: any) => p.id === parseInt(params[FounderFieldType.transaction]),
				)
				const foundedProperty = properties?.find((p: any) => p.id === parseInt(params[FounderFieldType.property]))

				if (foundedTransaction && foundedProperty) {
					dispatch(transactionActionCreators.setCurrentTransaction(foundedTransaction))
					dispatch(propertyActionCreators.setCurrentProperty(foundedProperty))
					dispatch(invoiceActionCreators.setPropertyInvoices(propertyInvoices))
				} else {
					history.push(`/dashboard/transactions/${foundedTransaction?.id}`)
				}
				break
			}
		}
	}

	return <Component />
}
