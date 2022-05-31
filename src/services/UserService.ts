import { AxiosResponse } from 'axios'

import http from '@api/index'

export default class UserService {
	static async updateBankId(bank_id: string): Promise<AxiosResponse> {
		return http.post('/user/bank-id', { bank_id })
	}

	static async updateUserData(data: any): Promise<AxiosResponse> {
		return http.post('/user', data)
	}

	static async uploadUserPhoto(photo: FormData): Promise<AxiosResponse> {
		return http.post('/file/user/photo', photo, {
			headers: {
				'Content-type': 'multipart/form-data',
			},
		})
	}

	static async deactivateUserAccount(): Promise<AxiosResponse> {
		return http.post('/user/deactivate')
	}
}
