import { createAsyncThunk } from '@reduxjs/toolkit'

import TenancyService from '@services/TenancyService'

import { history } from '@utils/index'

import { commonActionCreators, propertyActions, tenancyActionCreators } from 'src/store/rootAction'

export const tenancyActions = {
	getTenancyByPropertyId: createAsyncThunk(
		'property/getTenancyByPropertyId',
		async (property_id: number, { dispatch }) => {
			const { data } = await TenancyService.getTenanciesByPropertyId(property_id)
			dispatch(tenancyActionCreators.setTenancies(data))
		},
	),

	createTenancy: createAsyncThunk('property/createTenancy', async (tenancy: any, { dispatch }) => {
		try {
			const { data } = await TenancyService.createTenancy(tenancy)
			dispatch(tenancyActionCreators.addTenancy(data))
			dispatch(propertyActions.getProperties())
			history.push(`/properties/${tenancy.property_id}/tenancy`)
		} catch (error) {
			dispatch(
				commonActionCreators.addToast({
					message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
					isSocialMediaShowed: false,
					type: 'error',
				}),
			)
		}
	}),

	updateTenancyById: createAsyncThunk('property/updateTenancyById', async (tenancy: any, { dispatch }) => {
		try {
			await TenancyService.updateTenancyById(tenancy)
			dispatch(tenancyActionCreators.setCurrentTenancy(null))
			history.push(`/properties/${tenancy.property_id}/tenancy`)
		} catch (error) {
			dispatch(
				commonActionCreators.addToast({
					message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
					isSocialMediaShowed: false,
					type: 'error',
				}),
			)
		}
	}),

	deleteTenancyById: createAsyncThunk(
		'property/deleteTenancyById',
		async ({ tenancy_id, setOpenModal }: { tenancy_id: number; setOpenModal: () => void }, { dispatch }) => {
			try {
				const { data } = await TenancyService.deleteTenancy(tenancy_id)
				dispatch(tenancyActionCreators.removeTenancy(data.id))
				dispatch(propertyActions.getProperties())
			} catch (error) {
				dispatch(
					commonActionCreators.addToast({
						message: error?.response?.data?.message || error?.response?.data?.error || 'Something went wrong!',
						isSocialMediaShowed: false,
						doAfterClosed: setOpenModal,
						type: 'error',
					}),
				)
			}
		},
	),
}
