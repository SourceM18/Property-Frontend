import { PaymentType } from '@utils/Types/instances'

type ColorFormattersTypes = (value: string) => string | undefined

export const colorFormatters: ColorFormattersTypes = (req) => {
	switch (req) {
		case PaymentType.paid:
			return 'green'
		case PaymentType.smallOverdue:
			return 'orange'
		case PaymentType.bigOverdue:
			return 'red'
		case PaymentType.planned:
			return 'grey'
		default:
			return undefined
	}
}
