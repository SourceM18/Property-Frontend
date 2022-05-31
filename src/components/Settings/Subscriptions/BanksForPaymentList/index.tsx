import { FC } from 'react'

import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { Title } from '@components/Settings/styled-components'
import { ButtonsBlock } from '@components/Settings/Subscriptions/ButtonsBlock'

import { useSelector } from '@hooks/index'
import { styles } from '@themes/index'
import { history } from '@utils/history'

import { commonActions } from 'src/store/rootAction'
import { banksForPaymentsSelector } from 'src/store/selectors'

import Bank from '@assets/icons/bank-icon.svg'
import Close from '@assets/icons/close-icon.svg'

type BanksForUseListProps = {
	quickPayBankId: string
	promoCode: string
	setQuickPayBankId: (bank_id: string) => void
	setPage: (page: number) => void
	page: number
	plan: string
}

const BankListContainer = styled.div`
	height: 100%;
`

const BankListWrapper = styled.div`
	height: calc(100vh - 430px);
	overflow: auto;

	@media (max-width: ${styles.laptopWidth}) {
		height: calc(100vh - 600px);
	}

	@media (max-width: ${styles.mobileWidth}) {
		height: calc(100% - 70px);
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

export const BanksForPaymentList: FC<BanksForUseListProps> = ({
	setPage,
	page,
	quickPayBankId,
	setQuickPayBankId,
	plan,
	promoCode,
}) => {
	const banksForPayments = useSelector(banksForPaymentsSelector)
	const dispatch = useDispatch()

	const handleClick = () => {
		if (quickPayBankId && quickPayBankId !== '0') {
			dispatch(commonActions.getPaymentUrl({ bank_id: quickPayBankId, promo_code: promoCode, plan }))
			history.push('/consent-screen/payment')
		}
	}

	return (
		<BankListContainer>
			<Title>Select your payment bank</Title>
			<BankListWrapper>
				{banksForPayments.map((bank: any) => (
					<BankItem onClick={setQuickPayBankId.bind(this, bank.id)} key={bank.id}>
						{bank.iconUrl ? <BankItemIcon src={bank.iconUrl} /> : <BankItemImgPlug src={Bank} />}
						<BankItemData color={bank.id === quickPayBankId ? styles.activeColor : ''}>{bank.name}</BankItemData>
					</BankItem>
				))}
				<BankItem onClick={setQuickPayBankId.bind(this, '0')}>
					<BankItemImgPlug src={Close} />
					<BankItemData color={quickPayBankId === '0' ? styles.activeColor : ''}>Pay another way</BankItemData>
				</BankItem>
			</BankListWrapper>
			<ButtonsBlock
				onClickBackButton={setPage.bind(this, page - 1)}
				onClickNextButton={quickPayBankId && quickPayBankId !== '0' ? handleClick : setPage.bind(this, page + 1)}
				disableNextButton={quickPayBankId === ''}
				backButtonText={'Prev'}
				nextButtonText={'Next'}
			/>
		</BankListContainer>
	)
}
