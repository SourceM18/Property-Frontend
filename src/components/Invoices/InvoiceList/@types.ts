import { Payment } from 'src/utils/Types/instances'

export type InvoiceListProps = {
	invoices: Payment[]
	transactionsClassName?: string
}
