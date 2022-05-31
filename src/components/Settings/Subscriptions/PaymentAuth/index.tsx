import { FC, useEffect } from 'react'

import { QRCode } from 'react-qrcode-logo'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { Title } from '@components/Settings/styled-components'
import { ButtonsBlock } from '@components/Settings/Subscriptions/ButtonsBlock'

import { useSelector } from '@hooks/index'
import { styles } from '@themes/index'

import { commonActionCreators } from 'src/store/common/reducers'
import { commonActions } from 'src/store/rootAction'
import { themeSelector } from 'src/store/selectors'

import Wallet from '@assets/images/logo.jpeg'

type PaymentAuthProps = {
	setPage: (page: number) => void
	page: number
}

const PaymentAuthContainer = styled.div`
	height: 100%;
`

const PaymentAuthWrapper = styled.div`
	height: calc(100vh - 430px);
	justify-content: center;
	overflow: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	font-size: 20px;
	padding: 15px 0;

	@media (max-height: 920px) {
		justify-content: flex-start;
	}

	@media (max-width: ${styles.laptopWidth}) {
		height: calc(100vh - 600px);
		display: block;
		font-size: 17px;
	}

	@media (max-width: ${styles.mobileWidth}) {
		height: calc(100% - 70px);
	}
`

export const PaymentAuth: FC<PaymentAuthProps> = ({ setPage, page }) => {
	const theme = useSelector(themeSelector)
	const { subscriptionPaymentConnection, subscriptionForRefresh } = useSelector((state) => state.commonReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		if (subscriptionPaymentConnection && subscriptionPaymentConnection.id) {
			const interval = setInterval(() => {
				dispatch(
					commonActions.checkSubscriptionPaymentConnection({
						connection_id: subscriptionPaymentConnection.id,
						doAfterSuccess: () => {
							dispatch(commonActionCreators.setSubscriptionPaymentConnection(null))
							dispatch(commonActions.getSubscriptions())
							dispatch(commonActions.getPermissions())
							clearInterval(interval)
							setPage(1)
						},
					}),
				)
			}, 1000)

			return () => {
				dispatch(commonActionCreators.setSubscriptionPaymentConnection(null))
				clearInterval(interval)
			}
		}
	}, [subscriptionPaymentConnection])

	const handlePayButtonClick = () => {
		if (subscriptionPaymentConnection) {
			window.location.assign(subscriptionPaymentConnection.url)
		}
	}

	const handleClickPrevPage = () => {
		if (subscriptionForRefresh) {
			dispatch(commonActionCreators.setSubscriptionForRefresh(null))
			setPage(1)
		} else {
			setPage(page - 1)
		}
	}

	return (
		<PaymentAuthContainer>
			<Title>Payment Authorisation</Title>
			<PaymentAuthWrapper>
				To use your bank mobile app,
				<br />
				please, scan this QR-code
				<br />
				with your mobile device
				<br />
				with the app installed on it.
				{subscriptionPaymentConnection && (
					<QRCode
						value={subscriptionPaymentConnection.url}
						bgColor={'transparent'}
						fgColor={theme === 'dark' ? '#ffffff' : '#000000'}
						quietZone={20}
						logoImage={Wallet}
						logoHeight={50}
						logoWidth={50}
						size={250}
					/>
				)}
				Alternatively, please, click
				<br />
				“Pay” button below to proceed
				<br />
				with the payment.
			</PaymentAuthWrapper>
			<ButtonsBlock
				onClickBackButton={handleClickPrevPage}
				onClickNextButton={handlePayButtonClick}
				disableNextButton={false}
				backButtonText={'Prev'}
				nextButtonText={'Pay'}
			/>
		</PaymentAuthContainer>
	)
}
