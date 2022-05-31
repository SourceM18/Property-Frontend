import React, { ChangeEvent } from 'react'

import { useDispatch } from 'react-redux'

import { tenantActionCreators } from 'src/store/tenant/reducers'

import { InputContainer } from './InputContainer'

interface InputTenantTypes {
	currentTenant?: {
		email: string
		filesToTenants: []
		id?: null
		name: string
		phone: string
		surname: string
	}
	styles: any
	classWrapper: string
}

export const InputTenant = ({ currentTenant, styles, classWrapper }: InputTenantTypes): JSX.Element => {
	const dispatch = useDispatch()

	const handleUpdateFieldByName = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(tenantActionCreators.setCurrentTenant({ ...currentTenant, [e.target.name]: e.target.value }))
	}

	return (
		<div className={styles[classWrapper]}>
			<InputContainer
				type={'text'}
				value={currentTenant.name}
				placeholder={'Enter Name'}
				name={'name'}
				text={"Tenant's Name"}
				onChange={handleUpdateFieldByName}
				styles={styles}
			/>
			<InputContainer
				type={'text'}
				value={currentTenant.surname}
				placeholder={'Enter Surname'}
				name={'surname'}
				text={"Tenant's Surname"}
				onChange={handleUpdateFieldByName}
				styles={styles}
			/>
			<InputContainer
				type={'text'}
				value={currentTenant.email}
				placeholder={'Enter Email'}
				name={'email'}
				text={"Tenant's Email"}
				onChange={handleUpdateFieldByName}
				styles={styles}
			/>
			<InputContainer
				type={'number'}
				value={currentTenant.phone}
				placeholder={'Enter Phone'}
				name={'phone'}
				text={"Tenant's Phone"}
				onChange={handleUpdateFieldByName}
				styles={styles}
			/>
		</div>
	)
}
