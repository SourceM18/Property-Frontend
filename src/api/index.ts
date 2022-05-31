import axios from 'axios'

import { LocalStorage, SessionStorage } from 'src/utils'

const ls = LocalStorage.getInstance()
const ss = SessionStorage.getInstance()

export const API_URL = `${process.env.REACT_APP_BASE_URL}`

const http = axios.create({
	withCredentials: true,
	baseURL: `${API_URL}/api`,
})

http.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${ss.get('accessToken')}`
	return config
})

http.interceptors.response.use(
	(config) => config.data,
	async (error) => {
		const originalRequest = error.config
		if (error.response.status === 401 && error.config && !error.config._isRetry) {
			originalRequest._isRetry = true
			const refreshToken = ls.get('refreshToken')
			try {
				const response = await axios.get(`${API_URL}/api/auth/refresh/${refreshToken}`, { withCredentials: true })
				ss.set('accessToken', response.data.data.accessToken)
				return await http.request(originalRequest)
			} catch (e) {
				console.log('Not Auth')
			}
		}
		throw error
	},
)

export default http
