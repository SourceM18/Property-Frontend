import { createAsyncThunk } from '@reduxjs/toolkit'

import InvoiceService from '@services/InvoiceService'

import { commonActionCreators, propertyActions } from 'src/store/rootAction'

import { invoiceActionCreators } from './reducers'

export const invoiceActions = {
	getInvoicesByPropertyId: createAsyncThunk(
		'invoice/getInvoicesByPropertyId',
		async (property_id: number, { dispatch }) => {
			const { data } = await InvoiceService.getInvoicesByPropertyId(property_id)
			dispatch(invoiceActionCreators.setPropertyInvoices(data))
		},
	),

	getInvoices: createAsyncThunk('invoice/getInvoices', async (_, { dispatch }) => {
		const { data } = await InvoiceService.getInvoices()
		dispatch(invoiceActionCreators.setInvoices(data))
	}),

	unreconcileInvoice: createAsyncThunk('invoice/unreconcileInvoice', async (invoice: any, { dispatch }) => {
		const { data } = await InvoiceService.unreconcileInvoice(invoice.id)
		dispatch(invoiceActions.getInvoicesByPropertyId(invoice.property.id))
		dispatch(invoiceActions.getInvoices())
		dispatch(propertyActions.getProperties())
		dispatch(
			commonActionCreators.addToast({
				message: data?.message,
				isSocialMediaShowed: false,
				doAfterClosed: null,
				type: 'success',
			}),
		)
	}),
}
