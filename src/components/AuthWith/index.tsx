import React, { FC } from 'react'

import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login'
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login'
import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import { authActions } from 'src/store/rootAction'

import { AuthWithProps } from './@types'

import styles from './styles.module.scss'

import GoogleIcon from '@assets/icons/social-networks/google.svg'

const facebookId = process.env.REACT_APP_FACEBOOK_AUTH_ID
const googleId = process.env.REACT_APP_GOOGLE_AUTH_ID

export const AuthWith: FC<AuthWithProps> = ({ isLogin = false, isValid, handleChecked }) => {
	const dispatch = useDispatch()

	const onSuccessGoogle = (res: GoogleLoginResponse) => {
		dispatch(authActions.googleAuth({ token: res.tokenId, isLogin }))
	}

	const onSuccessFacebook = (res: ReactFacebookLoginInfo) => {
		dispatch(authActions.facebookAuth({ token: res.accessToken, isLogin }))
	}

	return (
		<div className={styles.social}>
			<div className={styles.text}>{isLogin ? 'Log in with' : 'Sign up with'}</div>
			<div style={{ position: 'relative' }}>
				<div
					onClick={handleChecked}
					style={{
						position: 'absolute',
						height: '100%',
						width: isLogin || isValid ? '0' : '100%',
					}}
				/>
				<FacebookLogin
					appId={facebookId}
					containerStyle={{
						width: 45,
						height: 45,
						opacity: 1,
					}}
					buttonStyle={{
						width: 45,
						height: 45,
						background: '#4a71ff',
						color: 'white',
						borderRadius: '50%',
						fontSize: 22,
					}}
					textButton={''}
					icon={'fa-facebook'}
					cssClass={styles.fb}
					callback={onSuccessFacebook}
					isDisabled={false}
				/>
			</div>
			<div className={styles.text}>or</div>
			<div style={{ position: 'relative' }}>
				<div
					onClick={handleChecked}
					style={{
						position: 'absolute',
						height: '100%',
						width: isLogin || isValid ? '0' : '100%',
					}}
				/>
				<GoogleLogin
					buttonText={''}
					onSuccess={onSuccessGoogle}
					cookiePolicy={'single_host_origin'}
					clientId={googleId}
					render={(renderProps) => <SVG className={styles.icon} onClick={renderProps.onClick} src={GoogleIcon} />}
				/>
			</div>
		</div>
	)
}
