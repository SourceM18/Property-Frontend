import { AxiosResponse } from 'axios'

import http from '@api/index'
import { dateParamsCreator } from '@helpers/index'
import { Transaction } from '@utils/index'

export default class TransactionService {
	static async getTransactions(): Promise<AxiosResponse> {
		return http.get(`/transaction?${dateParamsCreator()}`)
	}

	static async createCustomTransaction(transaction: Transaction): Promise<AxiosResponse> {
		return http.put('/transaction', transaction)
	}

	static async createPartition(partition: any): Promise<AxiosResponse> {
		return http.put('/transaction/partition', partition)
	}

	static async deleteTransaction(transaction_id: number): Promise<AxiosResponse> {
		return http.delete(`/transaction/${transaction_id}`)
	}

	static async unreconcileTransaction(transaction_id: number): Promise<AxiosResponse> {
		return http.post(`/transaction/unlink/${transaction_id}`)
	}

	static async hideTransaction(transaction_id: number, hidden: boolean): Promise<AxiosResponse> {
		return http.post(`/transaction/hide`, { transaction_id, hidden })
	}
}
