import React, { FC } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import { ResetPassword, LandingPage, Activate } from '@pages/index'

import { ResetPassword as ResetPasswordModal } from '@pages/UnAuthPages/LandingPage/Landing/Modal/ResetPassword'
import { SignIn } from '@pages/UnAuthPages/LandingPage/Landing/Modal/SignIn'
import { SignUp } from '@pages/UnAuthPages/LandingPage/Landing/Modal/SignUp'

import { UnAuthAppLayout } from '../ui/index'

export const UnAuthorizedRoutes: FC = () => {
	return (
		<Switch>
			<Route exact path={'/terms'}>
				<LandingPage terms />
			</Route>
			<Route exact path={'/policy'}>
				<LandingPage policy />
			</Route>
			<Route path={'/reset'}>
				<UnAuthAppLayout>
					<ResetPassword />
				</UnAuthAppLayout>
			</Route>
			<Route path={'/activate'}>
				<UnAuthAppLayout>
					<Activate />
				</UnAuthAppLayout>
			</Route>
			<Route path={'/'}>
				<LandingPage />
				<Switch>
					<Route exact path={'/login'}>
						<SignIn />
					</Route>
					<Route exact path={'/register'}>
						<SignUp />
					</Route>
					<Route exact path={'/reset-password'}>
						<ResetPasswordModal />
					</Route>
					<Redirect to={'/'} />
				</Switch>
			</Route>
			<Redirect to={'/'} />
		</Switch>
	)
}
