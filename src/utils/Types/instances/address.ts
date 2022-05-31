export interface NewAddressType {
	postcode: string
	county: string
	city: string
	country: string
	flat: string
	house_name: string
	house_number: string
	street: string
	state: null | string
	province: null | string
}

export interface AddressType extends NewAddressType {
	id: number
}

export interface AddressFromIdealPostcodeType {
	administrative_county: string
	building_name: string
	building_number: string
	country: string
	county: string
	delivery_point_suffix: string
	department_name: string
	dependant_locality: string
	dependant_thoroughfare: string
	district: string
	double_dependant_locality: string
	eastings: number
	latitude: number
	line_1: string
	line_2: string
	line_3: string
	longitude: number
	northings: number
	organisation_name: string
	po_box: string
	post_town: string
	postal_county: string
	postcode: string
	postcode_inward: string
	postcode_outward: string
	postcode_type: string
	premise: string
	su_organisation_indicator: string
	sub_building_name: string
	thoroughfare: string
	traditional_county: string
	udprn: number
	umprn: string
	uprn: string
	ward: string
}
