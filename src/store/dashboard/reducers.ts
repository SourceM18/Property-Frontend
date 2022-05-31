import { createSlice } from '@reduxjs/toolkit'

const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState: {
		total: null as any,
	},
	reducers: {
		setTotal: (state, action) => {
			state.total = action.payload
		},
	},
})

export const dashboardReducer = dashboardSlice.reducer
export const dashboardActionCreators = dashboardSlice.actions
