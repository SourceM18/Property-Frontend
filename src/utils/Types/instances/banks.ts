export type BankAccount = {
	id: string
	account: string
	name: string
	currency: string
	icon: string
	iban?: string
	banner?: string
	number?: string
	sort?: string
}

export type Bank = {
	id: string
	name: string
	country: string
	iconUrl: string
}

export type BankData = {
	id: string
	promoCode: string
	subscribe: string
}

export type PaymentData = {
	url: string
	qrCodeUrl: string
}
