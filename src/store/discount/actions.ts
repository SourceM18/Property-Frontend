import { createAsyncThunk } from '@reduxjs/toolkit'

import SettingsService from '@services/SettingsService'

import { commonActionCreators } from '../common/reducers'
import { discountActionCreators } from '../rootAction'

export const discountActions = {
	checkDiscount: createAsyncThunk(
		'discount/checkDiscount',
		async ({ promo_code, plan }: { promo_code: string; plan: string }, { dispatch }) => {
			try {
				const { data } = await SettingsService.getDiscount(promo_code, plan)
				dispatch(discountActionCreators.setDiscount(data.discount))
				dispatch(discountActionCreators.setPromoCode(promo_code))
				dispatch(commonActionCreators.setTotal(data.total))
			} catch (error) {
				dispatch(
					commonActionCreators.addToast({
						message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
						isSocialMediaShowed: false,
						doAfterClosed: null,
						type: 'error',
					}),
				)
			}
		},
	),
}
