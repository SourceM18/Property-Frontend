import { createSlice } from '@reduxjs/toolkit'

const propertySlice = createSlice({
	name: 'property',
	initialState: {
		isNewTenantPageOpen: false,
		currentProperty: null as any,
		properties: [] as any[],
	},
	reducers: {
		setProperties: (state, action) => {
			state.properties = action.payload
		},
		setCurrentProperty: (state, action) => {
			state.currentProperty = action.payload
		},
		addProperty: (state, action) => {
			state.properties.push(action.payload)
		},
		setUpdatedProperty: (state, action) => {
			state.properties = state.properties.filter((property) => property.id !== action.payload.id)
			state.properties.push(action.payload)
		},
		setNewPhotoToCurrentProperty: (state, action) => {
			state.currentProperty.filesToProperties.push({ file: action.payload })
		},
		removeProperty: (state, action) => {
			state.properties = state.properties.filter((property) => property.id !== action.payload)
		},
		setNewTenantPageOpen: (state, action) => {
			state.isNewTenantPageOpen = action.payload
		},
	},
})

export const propertyReducer = propertySlice.reducer
export const propertyActionCreators = propertySlice.actions
