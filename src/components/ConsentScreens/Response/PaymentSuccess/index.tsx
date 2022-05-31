import React, { FC } from 'react'

import { useDispatch } from 'react-redux'

import {
	Wrapper,
	Container,
	CenterBlock,
	Header,
	HeaderSpan,
	Heading,
	Center,
	Button,
	Logo,
	Footer,
} from '@components/ConsentScreens/styled-components'
import { Decimal } from '@components/Decimal'

import { useSelector } from '@hooks/index'
import { history } from '@utils/index'

import { commonActionCreators } from 'src/store/rootAction'
import { themeSelector } from 'src/store/selectors'

import RentLogoWhite from '@assets/icons/fullHorizontalWhiteForDark.svg'
import RentLogoBlue from '@assets/icons/logo-with-name.svg'
import MoneyHub from '@assets/icons/moneyhub-logo.svg'
import Success from '@assets/icons/success-icon.svg'

export const PaymentSuccess: FC = () => {
	const { successPaymentData } = useSelector((state) => state.commonReducer)
	const theme = useSelector(themeSelector)
	const dispatch = useDispatch()

	const closeSuccessConsentScreen = () => {
		history.push('/settings')
		dispatch(
			commonActionCreators.addToast({
				isSocialMediaShowed: false,
				message: successPaymentData.paymentMessage,
				doAfterClosed: null,
				type: 'success',
			}),
		)
		dispatch(
			commonActionCreators.addToast({
				isSocialMediaShowed: false,
				message: successPaymentData.subscriptionMessage,
				doAfterClosed: null,
				type: 'success',
			}),
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
				<CenterBlock>
					<Logo alt="success" src={Success} width={75} style={{ margin: '10px' }} />
				</CenterBlock>
				<Heading>Payment confirmation</Heading>
				<Center>You have successfully initiated the following payment:</Center>
				<CenterBlock>
					<p>
						Payee name: {successPaymentData?.consentScreenData?.payeeName}
						<br />
						Payee account number: {successPaymentData?.consentScreenData?.payeeAccountNumber}
						<br />
						Payee account sort code: {successPaymentData?.consentScreenData?.payeeAccountSortCode}
						<br />
						Invoice Reference: {successPaymentData?.consentScreenData?.invoiceReference}
						<br />
						Amount: <Decimal price={successPaymentData?.consentScreenData?.amount} bold fontSize={18} />
					</p>
				</CenterBlock>

				<Center>
					* you will need a payment reference should you wish to discuss this payment with your payment provider. <br />
					<br />
					Thank you for using RentWallet.
				</Center>

				<Center>
					<Button onClick={closeSuccessConsentScreen} style={{ margin: '10px' }}>
						Got it!
					</Button>
				</Center>

				<Footer>
					Moneyhub Financial Technology Limited who is authorised and regulated by the Financial Conduct Authority under
					the Payment Service Regulations 2017 (reg. no. 809360) for the provision of payment services. Head office:
					Regus House, 1 Friary, Temple Way, Bristol BS1 6EA, United Kingdom. Email: support@moneyhub.co.uk
				</Footer>
			</Container>
		</Wrapper>
	)
}
