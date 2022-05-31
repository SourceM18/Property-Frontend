import { createSlice } from '@reduxjs/toolkit'

import { User } from '@models/User'

import { commonActionCreators } from '../common/reducers'

import { userActions } from './actions'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {} as User,
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(userActions.updateUserPhoto.fulfilled, (state, action) => {
				state.user.filesToUsers.push({
					file: {
						id: action.payload.id,
						timestamp: action.payload.timestamp,
						title: action.payload.title,
						type: action.payload.type,
						url: action.payload.url,
					},
				})
			})
			.addCase(commonActionCreators.setClearState, (state) => {
				state.user = {} as User
			})
	},
})

export const userReducer = userSlice.reducer
export const userActionCreators = userSlice.actions
