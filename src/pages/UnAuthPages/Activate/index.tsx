import React, { useEffect, FC } from 'react'

import { useDispatch } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'

import { authActions } from 'src/store/rootAction'

export const Activate: FC = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const code = new URLSearchParams(location.search).get('code')

	useEffect(() => {
		dispatch(authActions.activate({ token: code }))
	}, [])

	return <Redirect to={'/'} />
}
