interface File {
	file: {
		id: number
		timestamp: Date
		title: string
		type: string
		url: string
	}
}

interface Address {
	id?: number
	city: string
	country: string
	county: string | null
	flat: string | null
	house_name: string | null
	house_number: string
	postcode: string
	province: string | null
	state: string | null
	street: string
}

export interface User {
	id: number
	name: string
	surname: string
	password: string
	email: string
	role: string
	activated_at: string | null
	bank_id: string | null
	company: string | null
	mh_connection_id: string | null
	phone: string | null
	filesToUsers: File[]
	address: Address
}
