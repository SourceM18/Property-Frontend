import { Partition } from 'src/utils/Types/instances'

export type Transaction = {
	id: string | null
	meta?: any
	amount: string
	external_id?: string
	description: string
	owner_id?: string
	currency?: string
	timestamp: Date | string
	balance?: string
	hidden?: boolean
	in_use?: boolean
	parts?: Partition[]
}
