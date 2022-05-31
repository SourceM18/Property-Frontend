import { FC } from 'react'

import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { Title } from '@components/Settings/styled-components'
import { ButtonsBlock } from '@components/Settings/Subscriptions/ButtonsBlock'

import { useSelector } from '@hooks/index'
import { styles } from '@themes/index'

import { userActions } from 'src/store/rootAction'

import { banksForGettingDataSelector, userSelector } from 'src/store/selectors'

import Bank from '@assets/icons/bank-icon.svg'
import Close from '@assets/icons/close-icon.svg'

type BanksForUseListProps = {
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
	height: calc(100vh - 430px);
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

export const BanksForUseList: FC<BanksForUseListProps> = ({ setPage, page }) => {
	const banksForGettingData = useSelector(banksForGettingDataSelector)
	const user = useSelector(userSelector)
	const dispatch = useDispatch()

	const handleClick = (bank_id: string) => {
		dispatch(userActions.updateBankId({ bank_id }))
	}

	return (
		<BankListContainer>
			<Title>Find Your Bank</Title>
			<BankListWrapper>
				{banksForGettingData.map((bank: any) => (
					<BankItem onClick={handleClick.bind(this, bank.id)} key={bank.id}>
						{bank.iconUrl ? <BankItemIcon src={bank.iconUrl} /> : <BankItemImgPlug src={Bank} />}
						<BankItemData color={bank.id === user.bank_id ? styles.activeColor : ''}>{bank.name}</BankItemData>
					</BankItem>
				))}
				<BankItem onClick={handleClick.bind(this, '0')}>
					<BankItemImgPlug src={Close} />
					<BankItemData color={user.bank_id === '0' ? styles.activeColor : ''}>I cannot find my bank</BankItemData>
				</BankItem>
			</BankListWrapper>
			<ButtonsBlock
				onClickBackButton={setPage.bind(this, page - 1)}
				onClickNextButton={setPage.bind(this, page + 1)}
				disableNextButton={!user.bank_id}
				backButtonText={'Prev'}
				nextButtonText={'Next'}
			/>
		</BankListContainer>
	)
}
