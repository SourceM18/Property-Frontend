export type GetAddressListType = {
	postcode: string
}

export type SetAgreementType = {
	file_id: number
	is_agreed: boolean
}

export type GetPaymentUrlType = {
	bank_id: string
	promo_code: string
	plan: string
}

export type GetRevolutPublicIdType = {
	promo_code: string
	plan: string
}

export type SetBanksFeedAuthorizationType = {
	code: string
	state: string
}

export type SetPaymentAuthorizationType = {
	code: string
	state: string
}
