import { Property, Tenant } from '.'

export type Payment = {
	id: string
	price: string
	date: Date
	paid_at: null | Date
	property_id?: string
	tenant_id?: string
	owner_id: string
	dates_id: string
	status: string
	type: string
	property?: Property
	tenant?: Tenant
	balance?: string
	parts?: Partition[]
	last_pay?: Date
}

export type Partition = {
	id: string
	payments_id: string
	transactions_id: string
	price: string
	note: string
	timestamp: Date
	arrearsDays?: number
}

export enum PaymentType {
	smallOverdue = 'smallOverdue',
	bigOverdue = 'bigOverdue',
	planned = 'planned',
	paid = 'paid',
	all = 'all',
}
