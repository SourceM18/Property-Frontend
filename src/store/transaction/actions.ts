import { createAsyncThunk } from '@reduxjs/toolkit'

import TransactionService from '@services/TransactionService'

import { history } from '@utils/index'

import { invoiceActions } from 'src/store/rootAction'

import { transactionActionCreators } from './reducers'

export const transactionActions = {
	getTransactions: createAsyncThunk('transaction/getTransactions', async (_, { dispatch }) => {
		const { data } = await TransactionService.getTransactions()
		dispatch(transactionActionCreators.setTransactions(data))
	}),

	reconcileTransaction: createAsyncThunk(
		'transaction/reconcileTransaction',
		async (
			{
				invoice_id,
				transaction_id,
				amount,
				property_id,
			}: { invoice_id: number; transaction_id: number; amount: number; property_id: number },
			{ dispatch },
		) => {
			await TransactionService.createPartition({ invoice_id, transaction_id, amount })
			dispatch(invoiceActions.getInvoicesByPropertyId(property_id))
		},
	),

	createCustomTransaction: createAsyncThunk(
		'transaction/createCustomTransaction',
		async (transaction: any, { dispatch }) => {
			const { data } = await TransactionService.createCustomTransaction(transaction)
			if (data) {
				history.push('/dashboard/transactions')
				dispatch(transactionActionCreators.addTransaction(data))
			}
		},
	),

	deleteCustomTransaction: createAsyncThunk(
		'transaction/deleteCustomTransaction',
		async (transaction_id: number, { dispatch }) => {
			const { data } = await TransactionService.deleteTransaction(transaction_id)
			dispatch(transactionActionCreators.deleteTransaction(data.id))
		},
	),

	unreconcileCustomTransaction: createAsyncThunk(
		'transaction/unreconcileCustomTransaction',
		async (transaction_id: number, { dispatch }) => {
			const { data } = await TransactionService.unreconcileTransaction(transaction_id)
			dispatch(transactionActionCreators.setTransactions(data))
			dispatch(transactionActions.getTransactions())
		},
	),
	hideTransaction: createAsyncThunk(
		'transaction/hideTransaction',
		async ({ transaction_id, hidden }: { transaction_id: number; hidden: boolean }, { dispatch }) => {
			await TransactionService.hideTransaction(transaction_id, hidden)
			dispatch(transactionActions.getTransactions())
		},
	),

	// hideBankTransaction:
	// 	(transaction: Transaction): AsyncAction =>
	// 	async (dispatch) => {
	// 		await dispatch(
	// 			commonActions.loadingWrapper(async () => {
	// 				const { data } = await transactionsRequests.hideBankTransaction(transaction, dateParamsCreator())
	// 				dispatch(transactionsActions.setTransactions(data))
	// 			}),
	// 		)
	// 	},
	//
	// unreconcileTransaction: ( transaction: Transaction ): AsyncAction => async dispatch => {
	// 	await dispatch( commonActions.loadingWrapper( async () => {
	// 		const { data } = await transactionsRequests.unreconcileTransaction( transaction, dateParamsCreator() );
	// 		dispatch( transactionsActions.setTransactions( data.transactions ) );
	// 		dispatch( transactionsActions.setCurrent( data.transaction ) );
	// 		dispatch( paymentsActions.setPropertyPayments( data.payments ) );
	// 	} ) );
	// },
	//
	// setTransactionNote: ( id: Transaction['id'], note: Transaction['description'] ): AsyncAction => async dispatch => {
	// 	await dispatch( commonActions.loadingWrapper( async () => {
	// 		const { data } = await transactionsRequests.setTransactionNote( id, note, dateParamsCreator() );
	// 		dispatch( transactionsActions.setTransactions( data ) );
	// 	} ) );
	// },
	//
	// setTransactions: ( transactions: Transaction[] ): SyncAction <Transaction[]> => ( {
	// 	type: TransactionsActionsTypes.SET_TRANSACTIONS,
	// 	payload: transactions
	// } ),
	//
	// setCurrent: ( transaction: Transaction ): SyncAction <Transaction> => ( {
	// 	type: TransactionsActionsTypes.SET_CURRENT,
	// 	payload: transaction
	// } ),
	//
	// closeCurrent: (): SyncAction<null> => ( {
	// 	type: TransactionsActionsTypes.SET_CURRENT,
	// 	payload: null
	// } )
}
