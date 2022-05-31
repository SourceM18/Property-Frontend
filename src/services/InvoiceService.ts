import { AxiosResponse } from 'axios'

import http from '@api/index'
import { dateParamsCreator } from '@helpers/index'

export default class InvoiceService {
	static async getInvoicesByPropertyId(property_id: number): Promise<AxiosResponse> {
		return http.get(`/invoice/${property_id}?${dateParamsCreator()}`)
	}

	static async getInvoices(): Promise<AxiosResponse> {
		return http.get(`/invoice?${dateParamsCreator()}`)
	}

	static async unreconcileInvoice(invoice_id: number): Promise<AxiosResponse> {
		return http.post('/invoice', { invoice_id })
	}
}
