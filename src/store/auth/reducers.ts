import { createSlice } from '@reduxjs/toolkit'

import { LocalStorage, SessionStorage } from 'src/utils'

import { authActions } from './actions'

const ls = LocalStorage.getInstance()
const ss = SessionStorage.getInstance()

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuthLoading: true,
		isAuth: undefined as boolean | undefined,
		isEmailExist: false,
		isRegistrationErrorMessage: '',
	},
	reducers: {
		setAuth: (state, action) => {
			state.isAuth = action.payload
		},
		setAuthLoading: (state, action) => {
			state.isAuthLoading = action.payload
		},
		setRegistrationErrorMessage: (state, action) => {
			state.isRegistrationErrorMessage = action.payload
		},
		setEmailExist: (state, action) => {
			state.isEmailExist = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(authActions.login.pending, (state) => {
				state.isAuthLoading = true
			})
			.addCase(authActions.login.fulfilled, (state) => {
				state.isAuthLoading = false
			})
			.addCase(authActions.registration.pending, (state) => {
				state.isAuthLoading = true
			})
			.addCase(authActions.registration.fulfilled, (state) => {
				state.isAuthLoading = false
			})
			.addCase(authActions.logout.fulfilled, (state) => {
				ss.remove('accessToken')
				ls.remove('refreshToken')
				state.isAuth = false
			})
			.addCase(authActions.logout.rejected, (state) => {
				ss.remove('accessToken')
				ls.remove('refreshToken')
				state.isAuth = false
			})
	},
})

export const authReducer = authSlice.reducer
export const authActionCreators = authSlice.actions
