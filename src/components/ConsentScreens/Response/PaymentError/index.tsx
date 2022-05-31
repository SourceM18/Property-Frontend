import React, { FC } from 'react'

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

import { themeSelector } from 'src/store/selectors'

import Error from '@assets/icons/error-icon.svg'
import RentLogoWhite from '@assets/icons/fullHorizontalWhiteForDark.svg'
import RentLogoBlue from '@assets/icons/logo-with-name.svg'
import MoneyHub from '@assets/icons/moneyhub-logo.svg'

export const PaymentError: FC = () => {
	const { successPaymentData } = useSelector((state) => state.commonReducer)
	const theme = useSelector(themeSelector)

	return (
		<Wrapper theme={theme}>
			<Container theme={theme}>
				<Header>
					<Logo alt="rent-logo" src={theme === 'dark' ? RentLogoWhite : RentLogoBlue} width={110} />
					<HeaderSpan>Powered by</HeaderSpan>
					<Logo alt="moneyhub" src={MoneyHub} width={180} />
				</Header>
				<CenterBlock>
					<Logo alt="success" src={Error} width={75} style={{ margin: '10px' }} />
				</CenterBlock>
				<Heading>OOPS! Something went wrong.</Heading>
				<Heading style={{ marginBottom: '15px' }}>You payment has not been initiated.</Heading>
				<Center style={{ marginBottom: '15px' }}>
					No worries, it happens sometimes for security reasons.
					<br />
					Please try again later or use different bank or payment method.
				</Center>
				<CenterBlock>
					<p>
						Payment Reference: {successPaymentData?.invoiceReference}
						<br />
						Amount: <Decimal price={successPaymentData?.amount} bold fontSize={18} />
					</p>
				</CenterBlock>

				<Center>
					* you will need a payment reference should you wish to investigate the reason with your payment provider.{' '}
					<br />
					<br />
					Thank you for using RentWallet.
				</Center>

				<Center>
					<Button onClick={() => history.push('/settings')} style={{ margin: '10px' }}>
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
