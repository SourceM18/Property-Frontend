import { createAsyncThunk } from '@reduxjs/toolkit'

import BankService from '@services/BankService'
import SettingsService from '@services/SettingsService'

import {
	SetBanksFeedAuthorizationType,
	SetPaymentAuthorizationType,
	GetRevolutPublicIdType,
	GetAddressListType,
	GetPaymentUrlType,
	SetAgreementType,
	history,
} from 'src/utils'

import { bankActions } from '../rootAction'

import { commonActionCreators } from './reducers'

export const commonActions = {
	getPermissions: createAsyncThunk('common/getPermissions', async (_, { dispatch }) => {
		const { data } = await SettingsService.getPermissions()
		dispatch(commonActionCreators.setPermissions(data))
	}),

	getAddressList: createAsyncThunk('common/getAddressList', async ({ postcode }: GetAddressListType, { dispatch }) => {
		try {
			const { data } = await SettingsService.getAddresses(postcode)
			dispatch(commonActionCreators.setAddresses(data))
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

	getSubscriptions: createAsyncThunk('common/getSubscriptions', async (_, { dispatch }) => {
		const { data } = await SettingsService.getSubscriptions()
		dispatch(commonActionCreators.setSubscriptions(data))
	}),

	setAgreement: createAsyncThunk(
		'common/setAgreement',
		async ({ file_id, is_agreed }: SetAgreementType, { dispatch }) => {
			const { data } = await SettingsService.setAgreement(file_id, is_agreed)
			dispatch(commonActionCreators.setAgreements(data))
		},
	),

	getPaymentUrl: createAsyncThunk(
		'common/getPaymentUrl',
		async ({ bank_id, promo_code, plan }: GetPaymentUrlType, { dispatch }) => {
			const { data } = await SettingsService.getPaymentUrl(bank_id, promo_code, plan)
			dispatch(
				commonActionCreators.setSubscriptionPaymentConnection({
					id: data.connectionId,
					url: data.url,
					consentScreenData: data.consentScreenData,
				}),
			)
		},
	),

	getRevolutPublicId: createAsyncThunk(
		'common/getRevolutPublicId',
		async ({ promo_code, plan }: GetRevolutPublicIdType) => {
			const { data } = await SettingsService.getRevolutPublicId(promo_code, plan)
			return data
		},
	),

	getBanksFeedConnectionUrl: createAsyncThunk(
		'common/getBanksFeedConnectionUrl',
		async (bankIdForBanksFeedConnection: string, { dispatch }) => {
			const { data } = await SettingsService.getBanksFeedConnectionUrl(bankIdForBanksFeedConnection)
			dispatch(commonActionCreators.setBankFeedConnection(data))
		},
	),

	checkBankFeedConnection: createAsyncThunk(
		'common/checkBankFeedConnection',
		async (data: { connection_id: number; doAfterSuccess: () => void }, { dispatch }) => {
			const res = await BankService.checkBankFeedConnection(data.connection_id)
			if (res.data.status !== 'pending') {
				data.doAfterSuccess()
				dispatch(
					commonActionCreators.addToast({
						isSocialMediaShowed: res.data.status !== 'success',
						message: res.data.message,
						doAfterClosed: null,
						type: res.data.status === 'success' ? 'success' : 'error',
					}),
				)
			}
		},
	),

	checkSubscriptionPaymentConnection: createAsyncThunk(
		'common/checkBankFeedConnection',
		async (data: { connection_id: number; doAfterSuccess: () => void }, { dispatch }) => {
			const res = await SettingsService.checkSubscriptionPaymentConnection(data.connection_id)
			if (res.data.status === 'success') {
				dispatch(
					commonActionCreators.setSuccessPaymentData({
						paymentMessage: res.data.message.paymentMessage,
						subscriptionMessage: res.data.message.subscriptionMessage,
						consentScreenData: res.data.message.consentScreenData,
					}),
				)
				data.doAfterSuccess()
			} else if (res.data.status === 'error') {
				dispatch(
					commonActionCreators.addToast({
						isSocialMediaShowed: false,
						message: res.data.message,
						doAfterClosed: data.doAfterSuccess,
						type: 'error',
					}),
				)
			}
		},
	),

	setBanksFeedAuthorization: createAsyncThunk(
		'common/setBanksFeedAuthorization',
		async ({ code, state }: SetBanksFeedAuthorizationType, { dispatch }) => {
			try {
				const { data } = await SettingsService.setBanksFeedAuthorization(code, state)
				dispatch(bankActions.getBankFeeds())
				dispatch(
					commonActionCreators.addToast({
						isSocialMediaShowed: false,
						message: data,
						doAfterClosed: null,
						type: 'success',
					}),
				)
			} catch (error) {
				dispatch(
					commonActionCreators.addToast({
						message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
						isSocialMediaShowed: true,
						doAfterClosed: null,
						type: 'error',
					}),
				)
			}
		},
	),

	setRevolutPaymentAuth: createAsyncThunk('common/setRevolutPaymentAuth', async (payment_id: string, { dispatch }) => {
		const { data } = await SettingsService.setRevolutPaymentAuth(payment_id)
		dispatch(
			commonActionCreators.addToast({
				isSocialMediaShowed: false,
				message: data.paymentMessage,
				doAfterClosed: null,
				type: 'success',
			}),
		)
		dispatch(
			commonActionCreators.addToast({
				isSocialMediaShowed: false,
				message: data.subscriptionMessage,
				doAfterClosed: null,
				type: 'success',
			}),
		)
	}),

	setPaymentAuthorization: createAsyncThunk(
		'common/setPaymentAuthorization',
		async ({ code, state }: SetPaymentAuthorizationType, { dispatch }) => {
			const { data } = await SettingsService.setPaymentAuthorization(code, state)
			dispatch(commonActions.getSubscriptions())
			dispatch(commonActions.getPermissions())
			dispatch(commonActionCreators.setSuccessPaymentData(data))
		},
	),

	getAgreements: createAsyncThunk('common/getAgreements', async (_, { dispatch }) => {
		const { data } = await SettingsService.getAgreements()
		dispatch(commonActionCreators.setAgreements(data))
	}),

	sendEmail: createAsyncThunk(
		'common/getAgreements',
		async (mail: { message: string; subject: string }, { dispatch }) => {
			try {
				const { data } = await SettingsService.sendMailMessage(mail)
				dispatch(
					commonActionCreators.addToast({
						isSocialMediaShowed: false,
						message: data.message,
						doAfterClosed: null,
						type: 'success',
					}),
				)
			} catch (error) {
				dispatch(
					commonActionCreators.addToast({
						message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
						isSocialMediaShowed: true,
						doAfterClosed: null,
						type: 'error',
					}),
				)
			}
		},
	),

	checkSubscriptionOption: createAsyncThunk('common/checkSubscriptionOption', async (_, { dispatch }) => {
		try {
			await SettingsService.checkSubscriptionOption()
			dispatch(commonActionCreators.setSubscriptionPage(2))
		} catch (error) {
			dispatch(
				commonActionCreators.addToast({
					message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
					isSocialMediaShowed: false,
					doAfterClosed: () => history.push('/account/edit'),
					type: 'error',
				}),
			)
		}
	}),

	refreshSubscription: createAsyncThunk('common/refreshSubscription', async (subscription_id: number, { dispatch }) => {
		const { data } = await SettingsService.checkSubscription(subscription_id)
		if (data.paymentUrlData && data.page && data.subscription) {
			dispatch(commonActionCreators.setSubscriptionPage(data.page))
			dispatch(commonActionCreators.setSubscriptionForRefresh(data.subscription))
			dispatch(
				commonActionCreators.setSubscriptionPaymentConnection({
					id: data.paymentUrlData.connectionId,
					url: data.paymentUrlData.url,
				}),
			)
		} else if (data.revolutData && data.page && data.subscription) {
			dispatch(commonActionCreators.setSubscriptionPage(data.page))
			dispatch(commonActionCreators.setSubscriptionForRefresh(data.subscription))
			dispatch(commonActionCreators.setRevolutPaymentId(data.revolutData.id))
			dispatch(commonActionCreators.setRevolutPublicId(data.revolutData.public_id))
		} else if (data.page && data.subscription) {
			dispatch(commonActionCreators.setSubscriptionPage(data.page))
			dispatch(commonActionCreators.setPlan(data.subscription.tariff.name))
			dispatch(commonActionCreators.setSubscriptionForRefresh(data.subscription))
		}
	}),
}
