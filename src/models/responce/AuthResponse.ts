import { User } from '@models/User'

export interface CheckResponse {
	accessToken: string
	user: User
}

export interface AuthResponse extends CheckResponse {
	refreshToken: string
}

export type RegisterResponse = User
