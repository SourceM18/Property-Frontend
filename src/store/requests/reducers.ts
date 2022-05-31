import { createSlice } from '@reduxjs/toolkit'

const requestsSlice = createSlice({
	name: 'requests',
	initialState: {
		pending: {} as any,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addMatcher(
				(action) => {
					return action.type.endsWith('/pending')
				},
				(state, action) => {
					const actionType = action.type.replaceAll(/\/pending/g, '')
					state.pending[actionType] = state.pending[actionType] ? state.pending[actionType] + 1 : 1
				},
			)
			.addMatcher(
				(action) => {
					return action.type.endsWith('/fulfilled')
				},
				(state, action) => {
					const actionType = action.type.replaceAll(/\/fulfilled/g, '')
					if (state.pending[actionType] === 1) {
						delete state.pending[actionType]
					} else {
						state.pending[actionType]--
					}
				},
			)
			.addMatcher(
				(action) => {
					return action.type.endsWith('/rejected')
				},
				(state, action) => {
					const actionType = action.type.replaceAll(/\/rejected/g, '')
					if (state.pending[actionType] === 1) {
						delete state.pending[actionType]
					} else {
						state.pending[actionType]--
					}
				},
			)
	},
})

export const requestsReducer = requestsSlice.reducer
export const requestsActionCreators = requestsSlice.actions
