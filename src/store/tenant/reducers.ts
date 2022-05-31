import { createSlice } from '@reduxjs/toolkit'

import { commonActionCreators } from '../common/reducers'

import { tenantActions } from './actions'

const tenantSlice = createSlice({
	name: 'tenant',
	initialState: {
		isTenantsLoading: false,
		currentTenant: null as any,
		tenants: [] as any[],
	},
	reducers: {
		setTenants: (state, action) => {
			state.tenants = action.payload
		},
		setCurrentTenant: (state, action) => {
			state.currentTenant = action.payload
		},
		addTenant: (state, action) => {
			state.tenants.push(action.payload)
		},
		setUpdatedTenant: (state, action) => {
			state.tenants = state.tenants.filter((tenant) => tenant.id !== action.payload.id)
			state.tenants.push(action.payload)
		},
		setNewPhotoToCurrentTenant: (state, action) => {
			state.currentTenant.filesToTenants.push({ file: action.payload })
		},
		removeTenant: (state, action) => {
			state.tenants = state.tenants.filter((tenant) => tenant.id !== action.payload)
		},
		setShowTenantsLoading: (state, action) => {
			state.isTenantsLoading = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(tenantActions.getTenants.fulfilled, (state, action) => {
				state.tenants = action.payload
			})
			.addCase(commonActionCreators.setClearState, (state) => {
				state.tenants = []
			})
	},
})

export const tenantReducer = tenantSlice.reducer
export const tenantActionCreators = tenantSlice.actions
