import { AxiosResponse } from 'axios'

import http from '@api/index'
import { Tenancy } from '@utils/index'

export default class TenancyService {
	static async getTenanciesByPropertyId(property_id: number): Promise<AxiosResponse> {
		return http.get(`/tenancy/byProperty/${property_id}`)
	}

	static async createTenancy(tenancy: Tenancy): Promise<AxiosResponse> {
		return http.put('/tenancy', tenancy)
	}

	static async deleteTenancy(tenancy_id: number): Promise<AxiosResponse> {
		return http.delete(`/tenancy/${tenancy_id}`)
	}

	static async updateTenancyById(tenancy: Tenancy): Promise<AxiosResponse> {
		return http.post('/tenancy', tenancy)
	}
}
