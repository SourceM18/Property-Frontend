export type InvoiceItemProps = {
	invoice: any
	setSortFormat: (sortFormat: 'date' | 'tenant' | 'property') => void
	triggerIsDesk: () => void
	sortFormat: 'date' | 'tenant' | 'property'
	isInvoiceOpen?: string | null
	setInvoiceOpen?: any
}

export type InvoiceItemButtonProps = {
	onClick: () => void
	style: string
	svg: string
	text: string
	disabled?: boolean
}
