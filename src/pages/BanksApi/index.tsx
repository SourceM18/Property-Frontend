import { useEffect, FC } from 'react'

import { useDispatch } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'

import { Response } from '@components/index'

import { commonActions } from 'src/store/rootAction'

export const BanksApi: FC = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const code = new URLSearchParams(location.search).get('code')
	const state = new URLSearchParams(location.search).get('state')

	const [operationState] = state.split('/')
	const currentState = operationState.split('=')[0]

	useEffect(() => {
		if (currentState === 'subscription-payment') {
			dispatch(commonActions.setPaymentAuthorization({ code, state }))
		} else {
			dispatch(commonActions.setBanksFeedAuthorization({ code, state }))
		}
	}, [])

	if (currentState === 'subscription-payment') {
		return <Response />
	}

	return <Redirect to={'/settings'} />
}
