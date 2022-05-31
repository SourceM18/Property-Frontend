import { createSlice } from '@reduxjs/toolkit'

const discountSlice = createSlice({
	name: 'discount',
	initialState: {
		discount: 0,
		promoCode: '',
	},
	reducers: {
		setDiscount: (state, action) => {
			state.discount = action.payload
		},
		setPromoCode: (state, action) => {
			state.promoCode = action.payload
		},
	},
})

export const discountReducer = discountSlice.reducer
export const discountActionCreators = discountSlice.actions
