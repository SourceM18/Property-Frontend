import { createSelector } from '@reduxjs/toolkit'

import moment from 'moment'

import { PaymentType } from '@utils/index'

import { bankActions } from '../bank/actions'
import { commonActions } from '../common/actions'
import { invoiceActions } from '../invoice/actions'
import { propertyActions } from '../property/actions'
import { userActions } from '../rootAction'
import { tenantActions } from '../tenant/actions'
import { transactionActions } from '../transaction/actions'

export const isUserPhotoLoading = (state: any): any =>
	state.requestsReducer.pending[userActions.updateUserPhoto.typePrefix]
export const isUserDataLoading = (state: any): any =>
	state.requestsReducer.pending[userActions.updateUserData.typePrefix]
export const isAuthLoadingSelector = (state: any): any => state.authReducer.isAuthLoading
export const userSelector = (state: any): any => state.userReducer.user
export const isAuthSelector = (state: any): any => state.authReducer.isAuth
export const isEmailExistSelector = (state: any): any => state.authReducer.isEmailExist
export const isRegistrationErrorSelector = (state: any): any => state.authReducer.isRegistrationErrorMessage
export const propertyInvoicesSelector = (state: any): any => state.invoiceReducer.propertyInvoices
export const currentTransactionSelector = (state: any): any => state.transactionReducer.currentTransaction
export const transactionsSelector = (state: any): any => state.transactionReducer.transactions
export const currentPropertySelector = (state: any): any => state.propertyReducer.currentProperty
export const isNewTenantPageOpenSelector = (state: any): any => state.propertyReducer.isNewTenantPageOpen
export const addressesSelector = (state: any): any => state.commonReducer.addresses
export const periodSelector = (state: any): any => state.commonReducer.period
export const permissionsSelector = (state: any): any => state.commonReducer.permissions
export const invoicesSelector = (state: any): any => state.invoiceReducer.invoices
export const currentInvoiceSelector = (state: any): any => state.invoiceReducer.currentInvoice
export const isPermissionsLoadingSelector = (state: any): any =>
	state.requestsReducer.pending[commonActions.getPermissions.typePrefix]
export const isInvoicesLoadingSelector = (state: any): any =>
	state.requestsReducer.pending[invoiceActions.getInvoices.typePrefix]
export const isPropertiesLoadingSelector = (state: any): any =>
	state.requestsReducer.pending[propertyActions.getProperties.typePrefix]
export const pwaEventSelector = (state: any): any => state.commonReducer.pwaEvent
export const themeSelector = (state: any): any => state.commonReducer.theme
export const isFullWidthEmailSelector = (state: any): any => state.commonReducer.isFullWidthEmail
export const propertiesSelector = (state: any): any => state.propertyReducer.properties
export const currentTenantSelector = (state: any): any => state.tenantReducer.currentTenant
export const pendingRequestsSelector = (state: any): any => state.requestsReducer.pending
export const isBanksFeedLoadingSelector = (state: any): any =>
	state.requestsReducer.pending[bankActions.getBankFeeds.typePrefix]
export const isBankFeedUrlLoadingSelector = (state: any): any =>
	state.requestsReducer.pending[commonActions.getBanksFeedConnectionUrl.typePrefix]
export const isTenantsLoadingSelector = (state: any): any =>
	state.requestsReducer.pending[tenantActions.getTenants.typePrefix]
export const isTransactionsLoadingSelector = (state: any): any =>
	state.requestsReducer.pending[transactionActions.getTransactions.typePrefix]
export const bankFeedUrlSelector = (state: any): any => state.commonReducer.bankFeedUrl
export const bankFeedsSelector = (state: any): any => state.bankReducer.bankFeeds
export const banksForPaymentsSelector = (state: any): any => state.bankReducer.banksForPayments
export const banksForGettingDataSelector = (state: any): any => state.bankReducer.banksForGettingData
export const revolutPublicIdSelector = (state: any): any => state.commonReducer.revolutPublicId
export const revolutPaymentIdSelector = (state: any): any => state.commonReducer.revolutPaymentId
export const paymentUrlSelector = (state: any): any => state.commonReducer.paymentUrl
export const agreementsSelector = (state: any): any => state.commonReducer.agreements
export const subscriptionsSelector = (state: any): any => state.commonReducer.subscriptions
export const discountSelector = (state: any): any => state.discountReducer.discount
export const totalSelector = (state: any): any => state.dashboardReducer.total
export const tenantsSelector = (state: any): any => state.tenantReducer.tenants
export const currentTenancySelector = (state: any): any => state.tenancyReducer.currentTenancy
export const tenanciesSelector = (state: any): any => state.tenancyReducer.tenancies
export const toastsSelector = (state: any): any => state.commonReducer.toasts

export const unpaidInvoicesSelector = createSelector(
	propertyInvoicesSelector,
	(propertyInvoices) => propertyInvoices.filter((p: any) => p.type !== PaymentType.paid) || [],
)
export const sortedPaymentsSelector = createSelector(propertyInvoicesSelector, (propertyInvoices) =>
	[...propertyInvoices]?.sort((a, b) => {
		return moment(a.date).isBefore(b.date) ? -1 : 1
	}),
)
export const incomeEstimateSelector = createSelector(invoicesSelector, (invoices) =>
	invoices?.filter((invoice: any) => invoice.price - invoice.balance > 0),
)
export const bigOverdueSelector = createSelector(invoicesSelector, (invoices) =>
	invoices?.filter((invoice: any) => invoice.status === PaymentType.bigOverdue),
)
export const smallOverdueSelector = createSelector(invoicesSelector, (invoices) =>
	invoices?.filter((invoice: any) => invoice.status === PaymentType.smallOverdue),
)
export const paidSelector = createSelector(invoicesSelector, (invoices) =>
	invoices?.filter((invoice: any) => invoice.status === PaymentType.paid),
)
export const plannedSelector = createSelector(invoicesSelector, (invoices) =>
	invoices.filter((invoice: any) => invoice.status !== PaymentType.paid),
)
export const isPermissionsAndInvoicesLoading = createSelector(
	isPermissionsLoadingSelector,
	isInvoicesLoadingSelector,
	(isPermissionsLoading, isInvoicesLoading) => isPermissionsLoading || isInvoicesLoading,
)
export const isPermissionsAndPropertiesLoading = createSelector(
	isPermissionsLoadingSelector,
	isPropertiesLoadingSelector,
	(isPermissionsLoading, isPropertiesLoading) => isPermissionsLoading || isPropertiesLoading,
)

export const isPermissionsAndTenantsLoading = createSelector(
	isPermissionsLoadingSelector,
	isTenantsLoadingSelector,
	(isPermissionsLoading, isTenantsLoading) => isPermissionsLoading || isTenantsLoading,
)

export const isPermissionsAndTransactionsLoading = createSelector(
	isPermissionsLoadingSelector,
	isTransactionsLoadingSelector,
	(isPermissionsLoading, isTransactionsLoading) => isPermissionsLoading || isTransactionsLoading,
)

export const serviceAgreementsSelector = createSelector(
	agreementsSelector,
	(agreements) => agreements.filter((agreement: any) => agreement.file_id === 1)[0],
)

export const privacyAgreementsSelector = createSelector(
	agreementsSelector,
	(agreements) => agreements.filter((agreement: any) => agreement.file_id === 2)[0],
)

export const invoicesBigOverdueSelector = createSelector(invoicesSelector, (invoices) =>
	invoices.filter((i: any) => i.status === PaymentType.bigOverdue),
)

export const invoicesSmallOverdueSelector = createSelector(invoicesSelector, (invoices) =>
	invoices.filter((i: any) => i.status === PaymentType.smallOverdue),
)

export const invoicesPaidSelector = createSelector(invoicesSelector, (invoices) =>
	invoices.filter((i: any) => i.status === PaymentType.paid),
)
export const invoicesPlannedSelector = createSelector(invoicesSelector, (invoices) =>
	invoices.filter((i: any) => i.status !== PaymentType.paid),
)

export const sortedTenantsSelector = createSelector(
	tenantsSelector,
	(tenants) =>
		[...tenants]?.sort((a, b) => {
			const aSize = a.surname.toLocaleLowerCase()
			const bSize = b.surname.toLocaleLowerCase()
			const aLow = a.name.toLocaleLowerCase()
			const bLow = b.name.toLocaleLowerCase()

			if (aSize === bSize) {
				return aLow < bLow ? -1 : aLow > bLow ? 1 : 0
			}
			return aSize < bSize ? -1 : 1
		}) || [],
)

export const freeUnhiddenTransactionSelector = createSelector(
	transactionsSelector,
	(transactions) =>
		transactions
			?.filter((tr: any) => !tr.is_hidden && !tr.in_use)
			.sort((a: any, b: any) => {
				return moment(a.timestamp).isAfter(b.timestamp) ? -1 : 1
			}) || [],
)

export const inUseUnhiddenTransactionSelector = createSelector(
	transactionsSelector,
	(transactions) =>
		transactions
			?.filter((tr: any) => !tr.is_hidden && tr.in_use)
			.sort((a: any, b: any) => {
				return moment(a.timestamp).isAfter(b.timestamp) ? -1 : 1
			}) || [],
)

export const hiddenTransactionSelector = createSelector(
	transactionsSelector,
	(transactions) =>
		transactions
			?.filter((tr: any) => tr.is_hidden)
			.sort((a: any, b: any) => {
				return moment(a.timestamp).isAfter(b.timestamp) ? -1 : 1
			}) || [],
)
