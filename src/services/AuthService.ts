import { AxiosResponse } from 'axios'

import http from '@api/index'

import {
	AuthChangePasswordType,
	AuthResetPasswordType,
	AuthRegistrationType,
	AuthSetNewPassword,
	AuthActivateType,
	AuthFacebookType,
	AuthGoogleType,
	AuthLoginType,
} from '@utils/index'

export default class AuthService {
	static async login({ email, password }: AuthLoginType): Promise<AxiosResponse> {
		return http.post<AuthLoginType>('/auth/sign-in', { email, password })
	}

	static async registration({ name, surname, email, password }: AuthRegistrationType): Promise<AxiosResponse> {
		return http.post<AuthRegistrationType>('/auth/sign-up', { name, surname, email, password })
	}

	static async activate({ token }: AuthActivateType): Promise<AxiosResponse> {
		return http.get(`/auth/activate/${token}`)
	}

	static async logout(): Promise<void> {
		return http.post('/auth/logout')
	}

	static async googleAuth({ token, isLogin }: AuthGoogleType): Promise<any> {
		return http.post(`/auth/google/${token}`, { isLogin })
	}

	static async facebookAuth({ token, isLogin }: AuthFacebookType): Promise<any> {
		return http.post(`/auth/facebook/${token}`, { isLogin })
	}

	static async changePassword({ oldPassword, newPassword }: AuthChangePasswordType): Promise<any> {
		return http.post<AuthChangePasswordType>('/auth/change-password', { oldPassword, newPassword })
	}

	static async resetPassword({ email }: AuthResetPasswordType): Promise<any> {
		return http.post('/auth/reset', { email })
	}

	static async setNewPassword({ token, password }: AuthSetNewPassword): Promise<any> {
		return http.post(`/auth/set-new-password/${token}`, { password })
	}

	static async deactivateAccount(token: string): Promise<any> {
		return http.post(`/auth/deactivate/${token}`)
	}

	static async activateNewEmail(token: string): Promise<any> {
		return http.post(`/auth/activate-new-email/${token}`)
	}

	static async refresh(refreshToken: string): Promise<any> {
		return http.get(`/auth/refresh/${refreshToken}`)
	}
}
