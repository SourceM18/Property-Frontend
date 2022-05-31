export type Tenant = {
	id: number
	name: string
	surname: string
	email: string
	phone?: string
	photo?: string
	photo_id?: string | null
}

export type NewTenantType = Pick<Tenant, 'id' | 'name' | 'email' | 'surname' | 'phone'> &
	Partial<Omit<Tenant, 'id' | 'name' | 'surname' | 'email' | 'phone'>>
