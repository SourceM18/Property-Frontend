import React, { FC, useEffect, useMemo } from 'react'

import ReactLoading from 'react-loading'
import { QRCode } from 'react-qrcode-logo'
import { useDispatch } from 'react-redux'

import {
	LoadingWrapper,
	Wrapper,
	Container,
	CenterBlock,
	Header,
	HeaderSpan,
	Heading,
	Bold,
	Li,
	List,
	Center,
	BtnBlock,
	Button,
	QRCodeBlock,
	Logo,
	QRCodeWrapper,
	Footer,
	BankLogo,
} from '@components/ConsentScreens/styled-components'
import { Decimal } from '@components/Decimal'

import { useSelector } from '@hooks/index'
import { styles } from '@themes/index'
import { history } from '@utils/index'

import { commonActions } from 'src/store/common/actions'
import { commonActionCreators } from 'src/store/common/reducers'
import { themeSelector } from 'src/store/selectors'

import RentLogoWhite from '@assets/icons/fullHorizontalWhiteForDark.svg'
import RentLogoBlue from '@assets/icons/logo-with-name.svg'
import MoneyHub from '@assets/icons/moneyhub-logo.svg'
import Wallet from '@assets/images/logo.jpeg'

type PaymentDataProps = {
	setPage: (page: number) => void
	page: number
}

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export const PaymentData: FC<PaymentDataProps> = ({ setPage, page }) => {
	const { subscriptionPaymentConnection, subscriptionForRefresh } = useSelector((state) => state.commonReducer)
	const theme = useSelector(themeSelector)
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
							history.push('/settings')
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

	const handleClickPrevPage = () => {
		if (subscriptionForRefresh) {
			dispatch(commonActionCreators.setSubscriptionForRefresh(null))
			history.goBack()
			setPage(1)
		} else {
			history.goBack()
		}
	}

	const disabled = useMemo(() => {
		return false
	}, [])

	const handleButtonClick = () => {
		window.location.replace(subscriptionPaymentConnection.url)
	}

	if (!subscriptionPaymentConnection) {
		return (
			<LoadingWrapper theme={theme}>
				<ReactLoading type={'spinningBubbles'} color={theme === 'dark' ? '#fff' : styles.blueColor} />
			</LoadingWrapper>
		)
	}

	return (
		<Wrapper theme={theme}>
			<Container theme={theme}>
				<Header>
					<Logo alt="rent-logo" src={theme === 'dark' ? RentLogoWhite : RentLogoBlue} width={110} />
					<HeaderSpan>Powered by</HeaderSpan>
					<Logo alt="moneyhub" src={MoneyHub} width={180} />
				</Header>
				<Heading>Consent to make a payment</Heading>
				<Center>You are about to initiate the following payment:</Center>
				<CenterBlock>
					<p>
						Payee name: {subscriptionPaymentConnection?.consentScreenData.payeeName}
						<br />
						Payee account number: {subscriptionPaymentConnection?.consentScreenData.payeeAccountNumber}
						<br />
						Payee account sort code: {subscriptionPaymentConnection?.consentScreenData.payeeAccountSortCode}
						<br />
						Invoice Reference: {subscriptionPaymentConnection?.consentScreenData.invoiceReference}
						<br />
						Amount: <Decimal price={subscriptionPaymentConnection?.consentScreenData.amount} bold fontSize={18} />
					</p>
				</CenterBlock>
				<p>
					You are paying for <Bold>RentWallet</Bold> subscription for plan{' '}
					{subscriptionPaymentConnection?.consentScreenData.tariffName} from your account at
					<Center>
						<BankLogo alt="bank logo" src={subscriptionPaymentConnection?.consentScreenData.bankIcon} />
						<Bold>{subscriptionPaymentConnection?.consentScreenData.bankName}</Bold>
					</Center>
				</p>
				<p>
					If you agree we will securely redirect you to{' '}
					<Bold>{subscriptionPaymentConnection?.consentScreenData.bankName}</Bold> where you can log in, authenticate
					and initiate the payment.
					<br />
					If you scan QR code below with your phone we will redirect you directly into your bank mobile app, if it is
					installed.
				</p>
				<QRCodeBlock>
					<div>
						<p>By clicking “Next” or scaning QR code you consent to:</p>
						<List>
							<Li>
								the execution of the payment transaction or series of payment transactions of which that payment
								transaction forms part;
							</Li>
							<Li>
								Moneyhub accessing, processing and retaining your personal data for the provision of the payment
								initiation service, subject to Moneyhub Privacy Policy; and
							</Li>
							<Li>the Moneyhub Terms of Use.</Li>
						</List>
						<BtnBlock>
							<Button color={styles.lightRedColor} onClick={handleClickPrevPage}>
								CANCEL
							</Button>
							<Button color={styles.greenColor} onClick={handleButtonClick} disabled={disabled}>
								NEXT
							</Button>
						</BtnBlock>
					</div>
					<QRCodeWrapper>
						{subscriptionPaymentConnection && (
							<QRCode
								value={subscriptionPaymentConnection.url}
								bgColor={'transparent'}
								fgColor={theme === 'dark' ? '#ffffff' : '#000000'}
								quietZone={20}
								logoImage={Wallet}
								logoHeight={30}
								logoWidth={30}
								size={143}
							/>
						)}
					</QRCodeWrapper>
				</QRCodeBlock>
				<Footer>
					Moneyhub Financial Technology Limited who is authorised and regulated by the Financial Conduct
					<br />
					Authority under the Payment Service Regulations 2017 (reg. no. 809360) for the provision of payment services.
					Head office: Regus House, 1 Friary, Temple Way, Bristol BS1 6EA, United Kingdom.
					<br />
					Email: support@moneyhub.co.uk
				</Footer>
			</Container>
		</Wrapper>
	)
}
