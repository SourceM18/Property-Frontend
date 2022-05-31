import { AxiosResponse } from 'axios'

import http from '@api/index'
import { Tenant } from '@utils/index'

export default class TenantService {
	static async getTenants(): Promise<AxiosResponse> {
		return http.get('/tenant')
	}

	static async createTenant(tenant: Tenant): Promise<AxiosResponse> {
		return http.put('/tenant', tenant)
	}

	static async deleteTenant(tenant_id: number): Promise<AxiosResponse> {
		return http.delete(`/tenant/${tenant_id}`)
	}

	static async updateTenantById(tenant: Tenant): Promise<AxiosResponse> {
		return http.post('/tenant', { ...tenant })
	}

	static async uploadTenantPhoto(photo: FormData): Promise<AxiosResponse> {
		return http.post('/file/tenant/photo', photo, {
			headers: {
				'Content-type': 'multipart/form-data',
			},
		})
	}
}
