import { createAsyncThunk } from '@reduxjs/toolkit'

import PropertyService from '@services/PropertyService'

import { history } from '@utils/index'

import { commonActionCreators } from '../common/reducers'

import { propertyActionCreators } from './reducers'

export const propertyActions = {
	getProperties: createAsyncThunk('property/getProperties', async (_, { dispatch }) => {
		const { data } = await PropertyService.getProperties()
		dispatch(propertyActionCreators.setProperties(data))
	}),

	createProperty: createAsyncThunk('property/createProperty', async (property: any, { dispatch }) => {
		const { data } = await PropertyService.createProperty(property)
		dispatch(propertyActionCreators.addProperty(data))
		history.push(`/properties/${data.id}`)
	}),

	updatePropertyById: createAsyncThunk('property/updatePropertyById', async (property: any, { dispatch }) => {
		const { data } = await PropertyService.updatePropertyById(property)
		dispatch(propertyActionCreators.setUpdatedProperty(data))
		history.push('/properties')
	}),

	uploadPropertyPhoto: createAsyncThunk('property/uploadPropertyPhoto', async (photo: FormData, { dispatch }) => {
		const { data } = await PropertyService.uploadPropertyPhoto(photo)
		dispatch(propertyActionCreators.setNewPhotoToCurrentProperty(data))
	}),

	deleteProperty: createAsyncThunk(
		'property/deleteProperty',
		async (
			{ property_id, triggerDeleteModal }: { property_id: number; triggerDeleteModal: () => void },
			{ dispatch },
		) => {
			try {
				const { data } = await PropertyService.deleteProperty(property_id)
				dispatch(propertyActionCreators.removeProperty(data.id))
				history.push('/properties')
			} catch (error) {
				dispatch(
					commonActionCreators.addToast({
						message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
						isSocialMediaShowed: false,
						doAfterClosed: triggerDeleteModal,
						type: 'error',
					}),
				)
			}
		},
	),
}
