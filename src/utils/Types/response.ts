export type ResponseType<D = any> = {
	success: boolean
	code: number
	meta: object
	data?: {
		data: D
	}
}
