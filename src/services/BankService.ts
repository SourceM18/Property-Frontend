import { AxiosResponse } from 'axios'

import http from '@api/index'

export default class BankService {
	static async getBanksForGettingData(): Promise<AxiosResponse> {
		return http.get('/bank/data')
	}

	static async getBanksForPayments(): Promise<AxiosResponse> {
		return http.get('/bank/payments')
	}

	static async getBankFeeds(): Promise<AxiosResponse> {
		return http.get('/bank/bank-feeds')
	}

	static async removeBankById(account_id: string): Promise<AxiosResponse> {
		return http.post('/bank/bank-feeds', { account_id })
	}

	static async checkBankFeedConnection(connection_id: number): Promise<AxiosResponse> {
		return http.post('/bank/bank-feeds/check', { connection_id })
	}
}
