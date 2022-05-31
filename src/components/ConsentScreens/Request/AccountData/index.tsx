import React, { FC, useEffect, useMemo } from 'react'

import moment from 'moment'
import ReactLoading from 'react-loading'
import { QRCode } from 'react-qrcode-logo'
import { useDispatch } from 'react-redux'

import {
	LoadingWrapper,
	Wrapper,
	Container,
	Header,
	HeaderSpan,
	Heading,
	Bold,
	Li,
	List,
	ListCenter,
	Center,
	BtnBlock,
	Button,
	QRCodeBlock,
	Logo,
	QRCodeWrapper,
	Footer,
	BankLogo,
} from '@components/ConsentScreens/styled-components'

import { useSelector } from '@hooks/index'
import { styles } from '@themes/index'
import { history } from '@utils/index'

import { bankActions, commonActionCreators, commonActions } from 'src/store/rootAction'
import { themeSelector } from 'src/store/selectors'

import RentLogoWhite from '@assets/icons/fullHorizontalWhiteForDark.svg'
import RentLogoBlue from '@assets/icons/logo-with-name.svg'
import MoneyHub from '@assets/icons/moneyhub-logo.svg'
import Wallet from '@assets/images/logo.jpeg'

export const AccountData: FC = () => {
	const isBankFeedConnectionLoading = useSelector(
		(state) => state.requestsReducer.pending[commonActions.getBanksFeedConnectionUrl.typePrefix],
	)
	const { bankFeedConnection } = useSelector((state) => state.commonReducer)
	const theme = useSelector(themeSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		if (bankFeedConnection && bankFeedConnection.id) {
			const interval = setInterval(() => {
				dispatch(
					commonActions.checkBankFeedConnection({
						connection_id: bankFeedConnection.id,
						doAfterSuccess: () => {
							dispatch(bankActions.getBankFeeds())
							clearInterval(interval)
							history.push('/settings')
						},
					}),
				)
			}, 1000)

			return () => {
				dispatch(commonActionCreators.setBankFeedConnection(null))
				clearInterval(interval)
			}
		}
	}, [bankFeedConnection])

	const disabled = useMemo(() => {
		return !bankFeedConnection
	}, [bankFeedConnection])

	const handleButtonClick = () => {
		window.location.replace(bankFeedConnection.url)
	}

	if (isBankFeedConnectionLoading) {
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

				<Heading>Consent to access account information</Heading>

				<Center>
					To provide you with the service
					<Bold>RentWallet</Bold> need to access information from your account at:
				</Center>

				<Center>
					<BankLogo alt="bank logo" src={bankFeedConnection?.consentScreenData.bankIcon} />
					<Bold>{bankFeedConnection?.consentScreenData.bankName}</Bold>
				</Center>

				<Center>
					No other parties will have access to this information.
					<br />
					To enable this Moneyhub needs to access the following information from the last 12 months:
				</Center>

				<ListCenter>
					<li>
						<Bold>Your account balance</Bold>
					</li>
					<li>
						<Bold>Your transactions</Bold>
					</li>
				</ListCenter>

				<Center>
					Moneyhub will access this information until{' '}
					<Bold>{moment(bankFeedConnection?.consentScreenData.bankConnectionUntilDate).format('DD MMM YYYY')}</Bold>
				</Center>

				<p>
					If you click APPROVE we will redirect you to <Bold>{bankFeedConnection?.consentScreenData.bankName}</Bold>{' '}
					where you can log in and select which accounts to share. <br />
					If you scan QR code below with your phone we will redirect you directly into your bank mobile app, if it is
					installed.
				</p>

				<QRCodeBlock>
					<div>
						<p>By clicking “Approve” or scanning QR code you consent to:</p>
						<List>
							<Li>the provision of the RentWallet account information service;</Li>
							<Li>
								RentWallet and Moneyhub accessing, processing and retaining your personal data for the provision of the
								account information service, subject to Moneyhub Privacy Policy; and
							</Li>
							<Li>Moneyhub Terms of Use.</Li>
						</List>
						<BtnBlock>
							<Button color={styles.lightRedColor} onClick={() => history.push('/settings')}>
								CANCEL
							</Button>
							<Button color={styles.greenColor} onClick={handleButtonClick} disabled={disabled}>
								APPROVE
							</Button>
						</BtnBlock>
					</div>
					<QRCodeWrapper>
						<QRCode
							value={bankFeedConnection?.url}
							bgColor={'transparent'}
							fgColor={theme === 'dark' ? '#ffffff' : '#000000'}
							logoImage={Wallet}
							logoHeight={30}
							logoWidth={30}
							size={143}
						/>
					</QRCodeWrapper>
				</QRCodeBlock>

				<Footer>
					RentWallet™ is a trading style of Rentwallet.net Limited, company incorporated in England and Wales, company
					number 13089273, registered address at Lygon House, 50 London Road, Bromley, Kent BR1 3RA, United Kingdom.
					Email: connected@rentwallet.net
					<br />
					<br />
					Rentwallet.net Limited is the registered agent of Moneyhub Financial Technology Limited (“Moneyhub”) who is
					authorised and regulated by the Financial Conduct Authority under the Payment Service Regulations 2017 (reg.
					no. 809360) for the provision of payment services.
					<br />
					Head office: Regus House, 1 Friary, Temple Way, Bristol BS1 6EA, United Kingdom.
					<br />
					Email: support@moneyhub.co.uk
				</Footer>
			</Container>
		</Wrapper>
	)
}
