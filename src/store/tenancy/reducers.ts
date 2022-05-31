import { createSlice } from '@reduxjs/toolkit'

const tenancySlice = createSlice({
	name: 'tenancy',
	initialState: {
		isTenancyTabActive: false,
		currentTenancy: null as any,
		tenancies: [] as any[],
	},
	reducers: {
		setTenancies: (state, action) => {
			state.tenancies = action.payload
		},
		setCurrentTenancy: (state, action) => {
			state.currentTenancy = action.payload
		},
		addTenancy: (state, action) => {
			state.tenancies.push(action.payload)
		},
		removeTenancy: (state, action) => {
			state.tenancies = state.tenancies.filter((tenancy) => tenancy.id !== action.payload)
		},
		setTenancyTabActive: (state, action) => {
			state.isTenancyTabActive = action.payload
		},
	},
})

export const tenancyReducer = tenancySlice.reducer
export const tenancyActionCreators = tenancySlice.actions

// import { ActionType, TenancyActionsTypes } from 'src/store/rootActionTypes';
// import { Tenancy } from 'src/utils/Types/instances';
//
// const initialState = {
// 	currentTenancy: null as Tenancy,
// 	tenancies: null as Tenancy[],
// 	isTenancyTabActive: false
// };
//
// export const tenancyReducer = ( state = initialState, { type, payload }: ActionType ): typeof initialState => {
// 	switch ( type ) {
//
// 		case TenancyActionsTypes.SET_TENANCY_TAB_ACTIVE: {
// 			return { ...state, isTenancyTabActive: payload };
// 		}
//
// 		case TenancyActionsTypes.SET_TENANCIES: {
// 			return { ...state, tenancies: payload }
// 		}
//
// 		case TenancyActionsTypes.SET_CURRENT: {
// 			return { ...state, currentTenancy: payload }
// 		}
//
// 		default:
// 			return state;
// 	}
// };
//
// export type TenancyReducerType = typeof initialState;
