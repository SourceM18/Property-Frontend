import { createSlice } from '@reduxjs/toolkit'

const transactionSlice = createSlice({
	name: 'transaction',
	initialState: {
		currentTransaction: null as any,
		transactions: [] as any[],
	},
	reducers: {
		setTransactions: (state, action) => {
			state.transactions = action.payload
		},
		setCurrentTransaction: (state, action) => {
			state.currentTransaction = action.payload
		},
		addTransaction: (state, action) => {
			state.transactions.push(action.payload)
		},
		deleteTransaction: (state, action) => {
			state.transactions = state.transactions.filter((t) => t.id !== action.payload)
		},
	},
})

export const transactionReducer = transactionSlice.reducer
export const transactionActionCreators = transactionSlice.actions
