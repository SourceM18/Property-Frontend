import React, { useEffect, FC } from 'react'

import { useDispatch } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'

import { authActions } from 'src/store/rootAction'

export const ActivateNewEmail: FC = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const code = new URLSearchParams(location.search).get('code')

	useEffect(() => {
		dispatch(authActions.activateNewEmail(code))
		dispatch(authActions.logout())
	}, [])

	return <Redirect to={'/'} />
}
