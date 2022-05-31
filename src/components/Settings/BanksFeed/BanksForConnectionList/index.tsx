import { FC } from 'react'

import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { ButtonsBlock } from '@components/Settings/BanksFeed/ButtonsBlock'
import { Title } from '@components/Settings/styled-components'

import { useSelector } from '@hooks/index'

import { styles } from '@themes/index'

import { history } from '@utils/index'

import { bankActionCreators, commonActions } from 'src/store/rootAction'

import Bank from '@assets/icons/bank-icon.svg'

type BanksForConnectionListProps = {
	setPage: (page: number) => void
	page: number
}

const BankListContainer = styled.div`
	height: 100%;

	@media (max-width: ${styles.mobileWidth}) {
		height: inherit;
	}
`

const BankListWrapper = styled.div`
	height: calc(100vh - 590px);
	overflow: auto;

	@media (max-width: ${styles.laptopWidth}) {
		height: calc(100vh - 400px);
	}

	@media (max-width: ${styles.mobileWidth}) {
		height: inherit;
	}
`

const BankItem = styled.div`
	cursor: pointer;
	padding: 10px;
	height: 70px;
	border-bottom: ${styles.thinLine} ${({ theme }) => theme.lineColor};
	border-top: ${styles.thinLine} ${({ theme }) => theme.lineColor};
	display: flex;
	flex-direction: row;

	&:last-child {
		border-bottom: 0;
	}

	&:first-child {
		border-top: 0;
	}

	@media (max-width: ${styles.mobileWidth}) {
		height: auto;
		border-bottom: none;
	}
`

const BankItemIcon = styled.img`
	width: 50px;
	height: 50px;

	@media (max-width: ${styles.mobileWidth}) {
		width: 30px;
		height: 30px;
	}
`

const BankItemImgPlug = styled(SVG)`
	width: 50px;
	height: 50px;

	@media (max-width: ${styles.mobileWidth}) {
		width: 30px;
		height: 30px;
	}

	& path,
	& line,
	& circle,
	& g,
	& polygon,
	& rect {
		stroke: ${({ theme }) => theme.textColor};
	}
`

const BankItemData = styled.div`
	color: ${(props) => props.color};
	display: flex;
	padding-left: 15px;
	align-items: center;
	height: 50px;
	width: 100%;

	@media (max-width: ${styles.mobileWidth}) {
		height: auto;
		font-size: 14px;
	}
`

export const BanksForConnectionList: FC<BanksForConnectionListProps> = ({ setPage, page }) => {
	const { banksForConnection, bankIdForBanksFeedConnection } = useSelector((state) => state.bankReducer)
	const dispatch = useDispatch()

	const handleClick = (bank_id: string) => {
		dispatch(bankActionCreators.setBankIdForBanksFeedConnection(bank_id))
	}

	const setConnection = () => {
		dispatch(commonActions.getBanksFeedConnectionUrl(bankIdForBanksFeedConnection))
		history.push('/consent-screen/account')
	}

	return (
		<BankListContainer>
			<Title>Find Your Bank</Title>
			<BankListWrapper>
				{banksForConnection.map((bank: any) => (
					<BankItem onClick={handleClick.bind(this, bank.id)} key={bank.id}>
						{bank.iconUrl ? <BankItemIcon src={bank.iconUrl} /> : <BankItemImgPlug src={Bank} />}
						<BankItemData color={bank.id === bankIdForBanksFeedConnection ? styles.activeColor : ''}>
							{bank.name}
						</BankItemData>
					</BankItem>
				))}
			</BankListWrapper>
			<ButtonsBlock
				onClickBackButton={setPage.bind(this, page - 1)}
				onClickNextButton={setConnection}
				disableNextButton={!bankIdForBanksFeedConnection}
				backButtonText={'Prev'}
				nextButtonText={'Connect'}
			/>
		</BankListContainer>
	)
}
