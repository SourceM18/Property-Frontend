import React, { FC } from 'react'

import ReactLoading from 'react-loading'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { ConsentScreens } from '@components/index'

import { useSelector } from '@hooks/index'
import { ActivateNewEmail, BanksApi, DeactivateAccount } from '@pages/index'

import { isAuthLoadingSelector, isAuthSelector } from 'src/store/selectors'

import { AuthorizedRoutes } from './AuthorizedRoutes'
import { UnAuthorizedRoutes } from './UnAuthorizedRoutes'

const LoadingWrapper = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Routes: FC = () => {
	const checkAuthLoading = useSelector(isAuthLoadingSelector)
	const isAuth = useSelector(isAuthSelector)

	if (checkAuthLoading) {
		return (
			<LoadingWrapper>
				<ReactLoading type={'spinningBubbles'} color="#000" />
			</LoadingWrapper>
		)
	}

	return (
		<Switch>
			<Route path={'/activate-new-email'} component={ActivateNewEmail} />
			<Route path={'/deactivate-account'} component={DeactivateAccount} />
			<Route path={'/callback'} component={BanksApi} />
			<Route path={'/consent-screen/account'}>
				<ConsentScreens path={'account'} type={'req'} />
			</Route>
			<Route path={'/consent-screen/payment'}>
				<ConsentScreens path={'payment'} type={'req'} />
			</Route>
			{isAuth ? <AuthorizedRoutes /> : <UnAuthorizedRoutes />}
		</Switch>
	)
}
