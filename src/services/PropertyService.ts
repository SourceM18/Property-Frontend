import { AxiosResponse } from 'axios'

import http from '@api/index'
import { dateParamsCreator } from '@helpers/index'
import { Property } from '@utils/index'

export default class PropertyService {
	static async getProperties(): Promise<AxiosResponse> {
		return http.get(`/property?${dateParamsCreator()}`)
	}

	static async createProperty(property: Property): Promise<AxiosResponse> {
		return http.put('/property', property)
	}

	static async deleteProperty(property_id: number): Promise<AxiosResponse> {
		return http.delete(`/property/${property_id}`)
	}

	static async updatePropertyById(property: Property): Promise<AxiosResponse> {
		return http.post('/property', { ...property })
	}

	static async uploadPropertyPhoto(photo: FormData): Promise<AxiosResponse> {
		return http.post('/file/property/photo', photo, {
			headers: {
				'Content-type': 'multipart/form-data',
			},
		})
	}
}
