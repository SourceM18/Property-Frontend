import moment from 'moment'

import { LocalStorage } from '@utils/index'
import { Payment } from '@utils/Types/instances'

const ls = LocalStorage.getInstance()

type SortFormattersTypes = (
	payments: Payment[],
	sortType: 'property' | 'tenant' | 'date' | 'pay-day',
	isDesc: boolean,
) => Array<Payment>

export const sortFormatters: SortFormattersTypes = (payments, sortType, isDesc) => {
	ls.set('sortType', sortType)
	ls.set('isDesс', isDesc.toString())

	switch (sortType) {
		case 'date': {
			return payments.sort((a, b) => {
				return moment(a.date).isBefore(b.date)
					? !isDesc
						? -1
						: 1
					: moment(b.date).isBefore(a.date)
					? !isDesc
						? 1
						: -1
					: 0
			})
		}
		case 'pay-day': {
			return payments.sort((a, b) => {
				return moment(a.paid_at).isBefore(b.paid_at)
					? !isDesc
						? -1
						: 1
					: moment(b.paid_at).isBefore(a.paid_at)
					? !isDesc
						? 1
						: -1
					: 0
			})
		}
		case 'tenant': {
			return payments.sort((a, b) => {
				return a.tenant.name.toLocaleLowerCase() > b.tenant.name.toLocaleLowerCase()
					? isDesc
						? -1
						: 1
					: a.tenant.name.toLocaleLowerCase() < b.tenant.name.toLocaleLowerCase()
					? isDesc
						? 1
						: -1
					: 0
			})
		}
		case 'property': {
			return payments.sort((a, b) => {
				return a.property.title.toLocaleLowerCase() > b.property.title.toLocaleLowerCase()
					? isDesc
						? -1
						: 1
					: a.property.title.toLocaleLowerCase() < b.property.title.toLocaleLowerCase()
					? isDesc
						? 1
						: -1
					: 0
			})
		}
		default: {
			return payments
		}
	}
}
