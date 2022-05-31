import { createSlice } from '@reduxjs/toolkit'

import { LocalStorage } from 'src/utils'

import { commonActions } from './actions'

const ls = LocalStorage.getInstance()

type Toast = {
	isSocialMediaShowed: boolean
	message: null | string
	doAfterClosed: () => void | null
	type: 'success' | 'error' | null
}

const commonSlice = createSlice({
	name: 'common',
	initialState: {
		toasts: [] as Toast[],
		pwaEvent: null as any,
		theme: 'dark',
		period: ls.get('period')
			? {
					start: ls.get('period').start,
					end: ls.get('period').end,
			  }
			: {
					start: `${new Date().getFullYear()}-01-01`,
					end: `${new Date().getFullYear()}-12-31`,
			  },
		permissions: ['account', 'settings', 'properties', 'tenants', 'dashboard'] as String[],
		subscriptions: [] as any[],
		agreements: [] as any[],
		subscriptionPaymentConnection: null as any,
		subscriptionForRefresh: null as any,
		subscriptionPage: 1,
		paymentUrl: null as string,
		bankFeedConnection: null as any,
		revolutPublicId: null as string,
		revolutPaymentId: null as string,
		addresses: [] as any[],
		isFullWidthEmail: false,
		total: 0,
		plan: 'Light',
		successPaymentData: null as any,
	},
	reducers: {
		addToast: (state, action) => {
			state.toasts.push(action.payload)
		},
		setSuccessPaymentData: (state, action) => {
			state.successPaymentData = action.payload
		},
		setTotal: (state, action) => {
			state.total = action.payload
		},
		setPlan: (state, action) => {
			state.plan = action.payload
		},
		setSubscriptionForRefresh: (state, action) => {
			state.subscriptionForRefresh = action.payload
		},
		setSubscriptionPage: (state, action) => {
			state.subscriptionPage = action.payload
		},
		removeToast: (state) => {
			state.toasts.shift()
		},
		setPeriod: (state, action) => {
			ls.set('period', action.payload)
			state.period = action.payload
		},
		setTheme: (state, action) => {
			state.theme = action.payload
		},
		setPermissions: (state, action) => {
			state.permissions = action.payload
		},
		setPwaEvent: (state, action) => {
			state.pwaEvent = action.payload
		},
		setSubscriptions: (state, action) => {
			state.subscriptions = action.payload
		},
		setSubscriptionPaymentConnection: (state, action) => {
			state.subscriptionPaymentConnection = action.payload
		},
		setBankFeedConnection: (state, action) => {
			state.bankFeedConnection = action.payload
		},
		setRevolutPublicId: (state, action) => {
			state.revolutPublicId = action.payload
		},
		setRevolutPaymentId: (state, action) => {
			state.revolutPaymentId = action.payload
		},
		setAgreements: (state, action) => {
			state.agreements = action.payload
		},
		setAddresses: (state, action) => {
			state.addresses = action.payload
		},
		removePwaEvent: (state) => {
			state.pwaEvent = null
		},
		setIsFullWidthEmail: (state, action) => {
			state.isFullWidthEmail = action.payload
		},
		setClearState: (state) => {
			state.subscriptions = []
		},
	},
	extraReducers: (builder) => {
		builder.addCase(commonActions.getRevolutPublicId.fulfilled, (state, action) => {
			state.revolutPaymentId = action.payload.id
			state.revolutPublicId = action.payload.public_id
		})
	},
})

export const commonReducer = commonSlice.reducer
export const commonActionCreators = commonSlice.actions
