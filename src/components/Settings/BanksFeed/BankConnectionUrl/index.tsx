import { FC, useEffect, useMemo } from 'react'

import { QRCode } from 'react-qrcode-logo'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { ButtonsBlock } from '@components//Settings/BanksFeed/ButtonsBlock'

import { useSelector } from '@hooks/index'
import { styles } from '@themes/index'

import { bankActions, commonActionCreators, commonActions } from 'src/store/rootAction'

import Wallet from '@assets/images/logo.jpeg'

type BankConnectionUrlProps = {
	setPage: (page: number) => void
	page: number
}

const ConnectWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow: auto;
	flex: 1;
`

const QrCodeWrapper = styled.div`
	height: calc(100vh - 520px);
	justify-content: center;
	overflow: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	font-size: 20px;
	padding: 15px 0;
	border-top: 1px solid var(--line-color);

	@media (max-height: 1030px) {
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

export const BankConnectionUrl: FC<BankConnectionUrlProps> = ({ setPage, page }) => {
	const { bankFeedConnection, theme } = useSelector((state) => state.commonReducer)
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
							setPage(1)
						},
					}),
				)
			}, 1000)

			return () => {
				dispatch(commonActionCreators.setBankFeedConnection(null))
				clearInterval(interval)
				setPage(1)
			}
		}
	}, [bankFeedConnection])

	const disabled = useMemo(() => {
		return !bankFeedConnection
	}, [bankFeedConnection])

	const handleButtonClick = () => {
		window.location.replace(bankFeedConnection.url)
	}

	return (
		<ConnectWrapper>
			<QrCodeWrapper>
				To use your bank mobile app,
				<br />
				please, scan this QR-code
				<br />
				with your mobile device
				<br />
				with the app installed on it.
				<br />
				<br />
				{bankFeedConnection && (
					<QRCode
						value={bankFeedConnection.url}
						bgColor={'transparent'}
						fgColor={theme === 'dark' ? '#ffffff' : '#000000'}
						quietZone={20}
						logoImage={Wallet}
						logoHeight={50}
						logoWidth={50}
						size={250}
					/>
				)}
				<br />
				Alternatively, please, click
				<br />
				“Connect” button below to proceed
				<br />
				with the connection.
				<br />
			</QrCodeWrapper>
			<ButtonsBlock
				onClickBackButton={setPage.bind(this, page - 1)}
				onClickNextButton={handleButtonClick}
				disableNextButton={disabled}
				backButtonText={'Prev'}
				nextButtonText={'Connect'}
			/>
		</ConnectWrapper>
	)
}
