import { createAsyncThunk } from '@reduxjs/toolkit'
import moment from 'moment'

import { dateObjectFormatter, dateToStringFormatter } from '@helpers/index'
import TenantService from '@services/TenantService'

import { history } from '@utils/index'

import { commonActionCreators, propertyActionCreators, tenancyActionCreators } from 'src/store/rootAction'

import { tenantActionCreators } from './reducers'

export const tenantActions = {
	getTenants: createAsyncThunk('tenant/getTenants', async () => {
		const { data } = await TenantService.getTenants()
		return data
	}),

	createTenant: createAsyncThunk(
		'tenant/createTenant',
		async (
			{
				tenant,
				isNewTenantPageOpen,
				currentProperty,
			}: { tenant: any; isNewTenantPageOpen: boolean; currentProperty: any },
			{ dispatch },
		) => {
			const { data } = await TenantService.createTenant(tenant)
			dispatch(tenantActionCreators.addTenant(data))

			if (isNewTenantPageOpen && currentProperty) {
				dispatch(propertyActionCreators.setNewTenantPageOpen(false))
				const date = dateToStringFormatter(dateObjectFormatter(moment(Date.now()).format()))
				dispatch(
					tenancyActionCreators.setCurrentTenancy({
						id: null,
						start: date,
						end: date,
						first: date,
						price: 0,
						tenant_id: data.id,
						property_id: currentProperty.id,
						period: 'monthly',
						currency_id: 1,
					}),
				)
				history.push(`/properties/${currentProperty.id}/tenancy/tenants`)
			} else {
				history.push(`/tenants/${data.id}`)
			}
		},
	),

	updateTenantById: createAsyncThunk('tenant/updateTenantById', async (tenant: any, { dispatch }) => {
		const { data } = await TenantService.updateTenantById(tenant)
		dispatch(tenantActionCreators.setUpdatedTenant(data))
		history.push('/tenants')
	}),

	uploadTenantPhoto: createAsyncThunk(
		'tenant/uploadTenantPhoto',
		async ({ photo }: { photo: FormData }, { dispatch }) => {
			const { data } = await TenantService.uploadTenantPhoto(photo)
			dispatch(tenantActionCreators.setNewPhotoToCurrentTenant(data))
		},
	),

	deleteTenant: createAsyncThunk(
		'tenant/deleteTenant',
		async ({ tenant_id, triggerDeleteModal }: { tenant_id: number; triggerDeleteModal: () => void }, { dispatch }) => {
			try {
				const { data } = await TenantService.deleteTenant(tenant_id)
				dispatch(tenantActionCreators.removeTenant(data.id))
				history.push('/tenants')
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
