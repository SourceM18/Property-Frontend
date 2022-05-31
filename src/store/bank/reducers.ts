import { createSlice } from '@reduxjs/toolkit'

const bankSlice = createSlice({
	name: 'bank',
	initialState: {
		bankIdForBanksFeedConnection: null as string,
		banksForGettingData: [] as any[],
		banksForConnection: [] as any[],
		banksForPayments: [] as any[],
		bankFeeds: [] as any[],
	},
	reducers: {
		setBankIdForBanksFeedConnection: (state, action) => {
			state.bankIdForBanksFeedConnection = action.payload
		},
		setBanksForGettingData: (state, action) => {
			state.banksForGettingData = action.payload
		},
		setBanksForConnection: (state, action) => {
			state.banksForConnection = action.payload
		},
		setBanksForPayments: (state, action) => {
			state.banksForPayments = action.payload
		},
		setBankFeeds: (state, action) => {
			state.bankFeeds = action.payload
		},
	},
})

export const bankReducer = bankSlice.reducer
export const bankActionCreators = bankSlice.actions
