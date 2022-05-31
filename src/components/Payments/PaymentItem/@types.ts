export type PaymentItemProps = {
	payment: any
	setSortFormat: (sortFormat: 'pay-day' | 'tenant' | 'property') => void
	triggerIsDesk: () => void
	sortFormat: 'pay-day' | 'tenant' | 'property'
}
