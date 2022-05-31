import { createAsyncThunk } from '@reduxjs/toolkit'

import BankService from '@services/BankService'

import { commonActionCreators } from '../common/reducers'

import { bankActionCreators } from './reducers'

export const bankActions = {
	getBanksForGettingData: createAsyncThunk('bank/getBanksForGettingData', async (_, { dispatch }) => {
		const { data } = await BankService.getBanksForGettingData()
		dispatch(bankActionCreators.setBanksForGettingData(data))
		dispatch(bankActionCreators.setBanksForConnection(data))
	}),

	getBanksForPayments: createAsyncThunk('bank/getBanksForPayments', async (_, { dispatch }) => {
		const { data } = await BankService.getBanksForPayments()
		dispatch(bankActionCreators.setBanksForPayments(data))
	}),

	getBankFeeds: createAsyncThunk('bank/getBankFeeds', async (_, { dispatch }) => {
		const { data } = await BankService.getBankFeeds()
		dispatch(bankActionCreators.setBankFeeds(data))
	}),

	removeBankById: createAsyncThunk('bank/removeBankById', async (id: string, { dispatch }) => {
		try {
			const { data } = await BankService.removeBankById(id)
			dispatch(
				commonActionCreators.addToast({
					message: data.message,
					isSocialMediaShowed: false,
					doAfterClosed: null,
					type: 'success',
				}),
			)
			dispatch(bankActions.getBankFeeds())
		} catch (error) {
			dispatch(
				commonActionCreators.addToast({
					message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
					isSocialMediaShowed: false,
					doAfterClosed: null,
					type: 'error',
				}),
			)
		}
	}),
}
