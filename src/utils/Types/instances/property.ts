export type Property = {
	id: number
	title: string
	photo?: string
	photo_id?: string
	address: string
	income_estimate: number
}

export type NewPropertyType = Pick<Property, 'id' | 'title' | 'address'> &
	Partial<Omit<Property, 'id' | 'title' | 'address'>>
