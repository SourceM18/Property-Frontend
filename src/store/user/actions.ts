import { createAsyncThunk } from '@reduxjs/toolkit'

import UserService from '@services/UserService'

import { history } from '@utils/index'

import { authActions, commonActionCreators } from 'src/store/rootAction'

import { userActionCreators } from './reducers'

export const userActions = {
	updateBankId: createAsyncThunk('user/updateBankId', async ({ bank_id }: { bank_id: string }, { dispatch }) => {
		const { data } = await UserService.updateBankId(bank_id)
		dispatch(userActionCreators.setUser(data))
	}),

	updateUserData: createAsyncThunk('user/updateUserData', async (user: any, { dispatch }) => {
		try {
			const { data } = await UserService.updateUserData(user)
			dispatch(userActionCreators.setUser(data.user))
			if (data.message) {
				dispatch(
					commonActionCreators.addToast({
						isSocialMediaShowed: false,
						message: data.message,
						doAfterClosed: null,
						type: 'success',
					}),
				)
			}
			history.push('/account')
		} catch (error) {
			dispatch(
				commonActionCreators.addToast({
					isSocialMediaShowed: false,
					message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
					doAfterClosed: null,
					type: 'error',
				}),
			)
		}
	}),

	updateUserPhoto: createAsyncThunk('user/updateUserPhoto', async (photo: FormData) => {
		const { data } = await UserService.uploadUserPhoto(photo)
		return data
	}),

	deactivateUserAccount: createAsyncThunk('user/deactivateUserAccount', async (_, { dispatch }) => {
		await UserService.deactivateUserAccount()
		dispatch(authActions.logout())
	}),
}
