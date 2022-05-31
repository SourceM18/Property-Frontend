import { Payment } from 'src/utils/Types/instances'

export type TransactionPartitionProps = {
	partition: any
	triggerIsOpen: () => void
	payment: Payment
}
