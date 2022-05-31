import { createSlice } from '@reduxjs/toolkit'

const invoiceSlice = createSlice({
	name: 'invoice',
	initialState: {
		propertyInvoices: [] as any[],
		currentInvoice: null as any,
		invoices: [] as any[],
	},
	reducers: {
		setPropertyInvoices: (state, action) => {
			state.propertyInvoices = action.payload
		},
		setInvoices: (state, action) => {
			state.invoices = action.payload
		},
		setCurrentInvoice: (state, action) => {
			state.currentInvoice = action.payload
		},
	},
})

export const invoiceReducer = invoiceSlice.reducer
export const invoiceActionCreators = invoiceSlice.actions
