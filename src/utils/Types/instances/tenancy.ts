import { Tenant } from './tenant'

export type Tenancy = {
	id?: string
	start: string
	end: string
	first: string
	price: string
	tenant_id?: string
	property_id?: string
	period: string
	currency: string
	tenant?: Tenant
}

export type NewTenancyType = Pick<Tenancy, 'id'> & Partial<Omit<Tenancy, 'id'>>
