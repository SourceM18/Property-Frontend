import { createAsyncThunk } from '@reduxjs/toolkit'

import AuthService from 'src/services/AuthService'
import {
	AuthChangePasswordType,
	AuthResetPasswordType,
	AuthRegistrationType,
	AuthSetNewPassword,
	AuthFacebookType,
	AuthActivateType,
	AuthGoogleType,
	AuthLoginType,
	LocalStorage,
	SessionStorage,
	history,
} from 'src/utils'

import { commonActionCreators } from '../rootAction'
import { userActionCreators } from '../user/reducers'

import { authActionCreators } from './reducers'

const ls = LocalStorage.getInstance()
const ss = SessionStorage.getInstance()

export const authActions = {
	registration: createAsyncThunk(
		'auth/registration',
		async ({ name, surname, email, password }: AuthRegistrationType, { dispatch }) => {
			try {
				const { data } = await AuthService.registration({ name, surname, email, password })
				history.push('/')
				dispatch(
					commonActionCreators.addToast({
						message: data.message,
						isSocialMediaShowed: false,
						doAfterClosed: () => history.push('/login'),
						type: 'success',
					}),
				)
				dispatch(authActionCreators.setEmailExist(false))
			} catch (error) {
				dispatch(authActionCreators.setEmailExist(true))
				dispatch(
					authActionCreators.setRegistrationErrorMessage(
						error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
					),
				)
				// dispatch(
				// commonActionCreators.addToast({
				// 	message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
				// 	isSocialMediaShowed: true,
				// 	doAfterClosed: () => history.push('/login'),
				// 	type: 'error',
				// })
				// );
			}
		},
	),

	activate: createAsyncThunk('auth/activate', async ({ token }: AuthActivateType, { dispatch }) => {
		const { data } = await AuthService.activate({ token })
		dispatch(
			commonActionCreators.addToast({
				message: data.message,
				isSocialMediaShowed: false,
				doAfterClosed: () => history.push('/login'),
				type: 'success',
			}),
		)
	}),

	login: createAsyncThunk('auth/login', async ({ email, password }: AuthLoginType, { dispatch }) => {
		try {
			const { data } = await AuthService.login({ email, password })
			ss.set('accessToken', data.accessToken)
			ls.set('refreshToken', data.refreshToken)
			dispatch(userActionCreators.setUser(data.user))
			dispatch(authActionCreators.setAuth(true))
		} catch (error) {
			dispatch(
				commonActionCreators.addToast({
					message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
					isSocialMediaShowed: true,
					doAfterClosed: () => history.push('/login'),
					type: 'error',
				}),
			)
		}
	}),

	logout: createAsyncThunk('auth/logout', async (_, { dispatch }) => {
		try {
			await AuthService.logout()
		} finally {
			dispatch(authActionCreators.setAuth(false))
			dispatch(authActionCreators.setAuthLoading(false))
			dispatch(commonActionCreators.setClearState())
		}
	}),

	googleAuth: createAsyncThunk('auth/googleAuth', async ({ token, isLogin }: AuthGoogleType, { dispatch }) => {
		try {
			const { data } = await AuthService.googleAuth({ token, isLogin })
			ss.set('accessToken', data.accessToken)
			ls.set('refreshToken', data.refreshToken)
			dispatch(userActionCreators.setUser(data.user))
			dispatch(authActionCreators.setAuth(true))
		} catch (error) {
			dispatch(
				commonActionCreators.addToast({
					message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
					isSocialMediaShowed: true,
					doAfterClosed: isLogin ? () => history.push('/register') : () => history.push('/login'),
					type: 'error',
				}),
			)
		}
	}),

	facebookAuth: createAsyncThunk('auth/facebookAuth', async ({ token, isLogin }: AuthFacebookType, { dispatch }) => {
		try {
			const { data } = await AuthService.facebookAuth({ token, isLogin })
			ss.set('accessToken', data.accessToken)
			ls.set('refreshToken', data.refreshToken)
			dispatch(userActionCreators.setUser(data.user))
			dispatch(authActionCreators.setAuth(true))
		} catch (error) {
			dispatch(
				commonActionCreators.addToast({
					message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
					isSocialMediaShowed: true,
					doAfterClosed: isLogin ? () => history.push('/register') : () => history.push('/login'),
					type: 'error',
				}),
			)
		}
	}),

	changePassword: createAsyncThunk(
		'auth/changePassword',
		async ({ oldPassword, newPassword }: AuthChangePasswordType, { dispatch }) => {
			const { data } = await AuthService.changePassword({ oldPassword, newPassword })
			dispatch(
				commonActionCreators.addToast({
					message: data?.message,
					isSocialMediaShowed: false,
					doAfterClosed: () => history.push('/account'),
					type: 'success',
				}),
			)
		},
	),

	resetPassword: createAsyncThunk('auth/resetPassword', async ({ email }: AuthResetPasswordType, { dispatch }) => {
		try {
			const { data } = await AuthService.resetPassword({ email })
			dispatch(
				commonActionCreators.addToast({
					message: data?.message,
					isSocialMediaShowed: false,
					doAfterClosed: () => history.push('/login'),
					type: 'success',
				}),
			)
		} catch (error) {
			dispatch(
				commonActionCreators.addToast({
					message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
					isSocialMediaShowed: false,
					doAfterClosed: () => history.push('/reset-password'),
					type: 'error',
				}),
			)
		}
	}),

	setNewPassword: createAsyncThunk(
		'auth/setNewPassword',
		async ({ password, token }: AuthSetNewPassword, { dispatch }) => {
			const { data } = await AuthService.setNewPassword({ password, token })
			dispatch(
				commonActionCreators.addToast({
					message: data?.message,
					isSocialMediaShowed: false,
					doAfterClosed: () => history.push('/login'),
					type: 'success',
				}),
			)
		},
	),

	checkAuth: createAsyncThunk('auth/checkAuth', async (_, { dispatch }) => {
		try {
			const refreshToken = ls.get('refreshToken')
			const { data } = await AuthService.refresh(refreshToken)
			ss.set('accessToken', data.accessToken)
			dispatch(userActionCreators.setUser(data.user))
			dispatch(authActionCreators.setAuth(true))
		} catch (error) {
			dispatch(authActionCreators.setAuth(false))
			dispatch(commonActionCreators.setClearState())
		} finally {
			dispatch(authActionCreators.setAuthLoading(false))
		}
	}),

	deactivateAccount: createAsyncThunk('auth/deactivateAccount', async (token: string, { dispatch }) => {
		const { data } = await AuthService.deactivateAccount(token)
		dispatch(
			commonActionCreators.addToast({
				message: data.message,
				isSocialMediaShowed: false,
				doAfterClosed: () => history.push('/login'),
				type: 'error',
			}),
		)
	}),

	activateNewEmail: createAsyncThunk('auth/activateNewEmail', async (token: string, { dispatch }) => {
		const { data } = await AuthService.activateNewEmail(token)
		dispatch(
			commonActionCreators.addToast({
				message: data.message,
				isSocialMediaShowed: false,
				doAfterClosed: () => history.push('/login'),
				type: 'success',
			}),
		)
	}),
}
