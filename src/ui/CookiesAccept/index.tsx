import { FC, useState, useEffect } from 'react'

import ReactDOM from 'react-dom'
import styled from 'styled-components'

const NotificationItem = styled.div`
	display: flex;
	background: rgba(0, 0, 0, 0.4);
	justify-content: center;
	align-items: flex-end;
	z-index: 10000;
	position: fixed;
	height: 100vh;
	width: 100%;
	bottom: 0;
	right: 0;
	left: 0;
	top: 0;

	@media (max-width: 576px) {
		align-items: center;
	}
`

const NotificationContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.5);
	border-radius: 5px;
	background: #ffffff;
	margin: 40px;
	min-height: 100px;
	width: 350px;
	padding: 20px;

	@media (max-width: 576px) {
		margin: 15px;
		max-width: 350px;
		width: 100%;
	}
`

const NotificationMessage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`

const NotificationText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #000000;
	height: 100%;
	text-align: center;
	margin: 15px 10px 15px 0;
	font-size: 18px;
	width: 290px;

	@media (max-width: 576px) {
		margin: 15px 0 15px;
		font-size: 18px;
		max-width: 290px;
		width: 100%;
	}
`

const NotificationButton = styled.button`
	background: #10069f;
	font-size: 18px;
	cursor: pointer;
	color: #ffffff;
	transition: 0.2s;
	margin-top: 20px;
	height: 40px;
	opacity: 0.4;
	border-radius: 5px;

	&:hover {
		background-color: #343aeb;
		transition: 0.2s;
	}
`

export const CookiesAccept: FC = () => {
	const [showCookiesAccept, setShowCookiesAccept] = useState(false)

	useEffect(() => {
		const cookies: any = document.cookie
			.split(';')
			.map((cookie) => cookie.split('='))
			.reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {})

		if (!cookies.jdc_consent) {
			setShowCookiesAccept(true)
		}
	}, [])

	const acceptCookies = () => {
		document.cookie = `jdc_consent=true;`
		setShowCookiesAccept(false)
	}

	return (
		showCookiesAccept &&
		ReactDOM.createPortal(
			<NotificationItem>
				<NotificationContainer>
					<NotificationMessage>
						<NotificationText>We use cookies to make it easy to use our website.</NotificationText>
					</NotificationMessage>
					<NotificationButton onClick={acceptCookies}>Got it!</NotificationButton>
				</NotificationContainer>
			</NotificationItem>,
			document.getElementById('cookies'),
		)
	)
}
