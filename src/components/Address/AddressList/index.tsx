import React, { FC } from 'react'

import { useSelector } from '@hooks/index'
import { AddressFromIdealPostcodeType } from '@utils/index'

import { addressesSelector } from 'src/store/selectors'

import { AddressListProps } from './@types'
import styles from './styles.module.scss'

export const AddressList: FC<AddressListProps> = ({ changeAddress }) => {
	const addresses = useSelector(addressesSelector)

	const addComma = (addressPart: string, isLast?: boolean) => {
		if (addressPart && addressPart !== '') {
			return isLast ? addressPart : `${addressPart}, `
		}

		return ''
	}

	const getCorrectAddress = (data: AddressFromIdealPostcodeType) => {
		const addressList = [
			addComma(data?.sub_building_name),
			addComma(data?.building_name),
			addComma(data?.building_number),
			addComma(data?.thoroughfare),
			addComma(data?.post_town),
			addComma(data?.county && data.county.toUpperCase() !== data?.post_town.toUpperCase() ? data?.county : ''),
			addComma(data?.postcode),
			addComma(data?.country.toUpperCase() === 'England'.toUpperCase() ? 'United Kingdom' : data?.country, true),
		]

		return addressList.join('')
	}

	const selectPrediction = (data: AddressFromIdealPostcodeType) => {
		changeAddress({
			postcode: data?.postcode || '',
			county: data?.county && data.county.toUpperCase() !== data?.post_town.toUpperCase() ? data?.county : '',
			city: data?.post_town || '',
			country: data?.country.toUpperCase() === 'England'.toUpperCase() ? 'United Kingdom' : data?.country,
			flat: data?.sub_building_name || '',
			house_name: data?.building_name || '',
			house_number: data?.building_number || '',
			street: data?.thoroughfare || '',
			state: null,
			province: null,
		})
	}

	return (
		<>
			{!!addresses.length && (
				<div className={styles['list-container']}>
					<div className={styles['address-list']}>
						{addresses.map((data: any, key: any) => (
							<div onClick={selectPrediction.bind(null, data)} className={styles['address-item']} key={key}>
								{getCorrectAddress(data)}
							</div>
						))}
					</div>
				</div>
			)}
		</>
	)
}
