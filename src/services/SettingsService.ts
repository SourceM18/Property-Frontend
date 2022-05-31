import { AxiosResponse } from 'axios'

import http from '@api/index'

export default class SettingsService {
	static async getSubscriptions(): Promise<AxiosResponse> {
		return http.get('/settings/subscriptions')
	}

	static async getPermissions(): Promise<AxiosResponse> {
		return http.get('/settings/permissions')
	}

	static async getDiscount(discount: string, plan: string): Promise<AxiosResponse> {
		return http.post('/settings/discount', { discount, plan })
	}

	static async getAgreements(): Promise<AxiosResponse> {
		return http.get('/settings/agreements')
	}

	static async setAgreement(file_id: number, is_agreed: boolean): Promise<AxiosResponse> {
		return http.post('/settings/set-agree', { file_id, is_agreed })
	}

	static async getPaymentUrl(bank_id: string, promo_code: string, plan: string): Promise<AxiosResponse> {
		return http.post('/settings/payment-url', { bank_id, promo_code, plan })
	}

	static async getRevolutPublicId(promo_code: string, plan: string): Promise<AxiosResponse> {
		return http.post('/settings/revolute-public-id', { promo_code, plan })
	}

	static async setRevolutPaymentAuth(payment_id: string): Promise<AxiosResponse> {
		return http.post('/settings/revolute-payment-auth', { payment_id })
	}

	static async getBanksFeedConnectionUrl(bankIdForBanksFeedConnection: string): Promise<AxiosResponse> {
		return http.post('/settings/banks-feed-connection-url', { bank_id: bankIdForBanksFeedConnection })
	}

	static async setBanksFeedAuthorization(code: string, state: string): Promise<AxiosResponse> {
		return http.post('/settings/set-banks-feed-auth', { code, state })
	}

	static async setPaymentAuthorization(code: string, state: string): Promise<AxiosResponse> {
		return http.post('/settings/set-payment-auth', { code, state })
	}

	static async getAddresses(postcode: string): Promise<AxiosResponse> {
		return http.post('/settings/addresses', { postcode })
	}

	static async sendMailMessage(mail: { message: string; subject: string }): Promise<AxiosResponse> {
		return http.post('/settings/send-message-to-admin', mail)
	}

	static async checkSubscriptionPaymentConnection(connection_id: number): Promise<AxiosResponse> {
		return http.post('/settings/check-payment-auth', { connection_id })
	}

	static async checkSubscription(subscription_id: number): Promise<AxiosResponse> {
		return http.post('/settings/check-subscription', { subscription_id })
	}

	static async checkSubscriptionOption(): Promise<AxiosResponse> {
		return http.get('/settings/check-subscription-option')
	}
}
