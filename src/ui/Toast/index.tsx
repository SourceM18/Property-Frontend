import { FC } from 'react'

import ReactDOM from 'react-dom'
import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { useSelector } from '@hooks/index'

import { styles } from '@themes/variables'

import { socialLinks } from '@utils/constants'

import { commonActionCreators } from 'src/store/rootAction'

import { toastsSelector } from 'src/store/selectors'

import Error from '@assets/icons/error-icon.svg'
import Email from '@assets/icons/social-networks/email.svg'
import Telegram from '@assets/icons/social-networks/telegram.svg'
import Whatsapp from '@assets/icons/social-networks/whatsapp.svg'
import Success from '@assets/icons/success-icon.svg'

const NotificationItem = styled.div`
	display: flex;
	background: rgba(0, 0, 0, 0.4);
	justify-content: center;
	align-items: center;
	z-index: 10000;
	position: fixed;
	height: 100vh;
	width: 100%;
	bottom: 0;
	right: 0;
	left: 0;
	top: 0;
`

const NotificationContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 0 0 50px 20px ${({ theme }) => theme.toastShadow};
	background: ${({ theme }) => theme.cardColor};
	min-height: 100px;
	max-width: 350px;
	width: 100%;
	padding: 20px;

	&.notype {
		max-width: 380px;
	}

	@media (max-width: ${styles.mobileWidth}) {
		margin: 40px 20px;
	}
`

// const NotificationBorder = styled.div`
// 	width: 100%;
// 	height: 5px;
// 	border-radius: 2.5px;
// 	background: ${({ theme }) => theme.lineColor};
// `

const NotificationSocialMedia = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: space-between;
	margin: 10px 0 0;
`

const NotificationMessage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	//border-top: ${styles.thinLine} ${({ theme }) => theme.lineColor};
	//border-bottom: ${styles.thinLine} ${({ theme }) => theme.lineColor};
`

const NotificationText = styled.div`
	white-space: pre-line;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.textColor};
	height: 100%;
	text-align: center;
	margin: 15px 10px 15px 0;
	font-size: 18px;
	max-width: 290px;
	width: 100%;

	&.notype {
		max-width: 380px;
	}
`

const NotificationIcon = styled(SVG)`
	height: 40px;
	width: 40px;
`

// const NotificationBar = styled.div`
// 	background: ${({ theme }) => theme.cardColor};
// 	height: 5px;
// `

const NotificationButton = styled.button`
	background: ${styles.activeColor};
	height: 45px;
	font-size: 18px;
	cursor: pointer;
	color: #ffffff;
	transition: 0.2s;
	margin-top: 20px;

	&:hover {
		background: #9f9bd9;
		transition: 0.2s;
	}

	@media (max-width: ${styles.mobileWidth}) {
		margin-top: 10px;
	}
`

const NotificationLandingButton = styled.button`
	background: #10069f;
	font-size: 18px;
	cursor: pointer;
	color: #ffffff;
	transition: 0.2s;
	margin-top: 20px;
	height: 40px;

	&:hover {
		background: #9f9bd9;
		transition: 0.2s;
	}
`

export const Toast: FC = () => {
	const toasts = useSelector(toastsSelector)
	const dispatch = useDispatch()

	const hideToast = () => {
		if (toasts && toasts.length > 0 && toasts[toasts.length - 1].doAfterClosed) {
			toasts[toasts.length - 1].doAfterClosed()
		}
		dispatch(commonActionCreators.removeToast())
	}

	return (
		toasts.length > 0 &&
		toasts[0]?.message &&
		ReactDOM.createPortal(
			<NotificationItem>
				<NotificationContainer className={!toasts[0].type ? 'notype' : null}>
					<NotificationMessage>
						<NotificationText className={!toasts[0].type ? 'notype' : null}>{toasts[0].message}</NotificationText>
						{toasts[0].type && <NotificationIcon src={toasts[0].type === 'error' ? Error : Success} />}
					</NotificationMessage>

					{toasts[0].isSocialMediaShowed ? (
						<>
							<NotificationSocialMedia>
								{/* <NotificationIcon src={Facebook} cursor={'pointer'} /> */}
								<a href={`mailto: ${socialLinks.Email}`}>
									<NotificationIcon src={Email} cursor={'pointer'} />
								</a>
								<a href={socialLinks.Telegram}>
									<NotificationIcon src={Telegram} cursor={'pointer'} />
								</a>
								<a href={socialLinks.Whatsapp} target={'_blank'} rel="noreferrer">
									<NotificationIcon src={Whatsapp} cursor={'pointer'} />
								</a>

								{/* <NotificationIcon src={Twitter} cursor={'pointer'} /> */}
								{/* <NotificationIcon src={Viber} cursor={'pointer'} /> */}
							</NotificationSocialMedia>
							<NotificationLandingButton onClick={hideToast}>Got it!</NotificationLandingButton>
						</>
					) : (
						<NotificationButton onClick={hideToast}>Got it!</NotificationButton>
					)}
				</NotificationContainer>
			</NotificationItem>,
			document.getElementById('toast'),
		)
	)
}
