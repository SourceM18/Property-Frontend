import { FC } from 'react'

import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { Decimal } from '@components/index'
import { Title } from '@components/Settings/styled-components'
import { ButtonsBlock } from '@components/Settings/Subscriptions/ButtonsBlock'

import { useSelector } from '@hooks/index'
import { styles } from '@themes/index'

import { commonActionCreators, commonActions, discountActionCreators, discountActions } from 'src/store/rootAction'

const SubscriptionAmountContainer = styled.div`
	height: 100%;
`

const PromoCodeWrapper = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 25px 10px 10px;

	@media (max-width: ${styles.mobileWidth}) {
		height: auto;
	}
`

const PromoCodeInput = styled.input`
	background: transparent;
	height: 30px;
	font-size: 20px;
	border-bottom: ${styles.thinLine} ${({ theme }) => theme.lineColor};

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 14px;
	}
`

const PromoCodeButton = styled.button`
	color: ${({ theme }) => theme.textColor};
	height: 30px;
	font-size: 20px;
	background: transparent;
	cursor: pointer;
	transition: 0.2s;

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 14px;
	}

	&:hover {
		transition: 0.2s;
		color: ${styles.hoverColor};
	}

	&:disabled {
		transition: 0.2s;
		color: ${({ theme }) => theme.passiveColor};
	}
`

const SubscriptionAmountWrapper = styled.div`
	height: calc(100vh - 430px);
	overflow: auto;

	@media (max-width: ${styles.laptopWidth}) {
		height: calc(100vh - 600px);
	}

	@media (max-width: ${styles.mobileWidth}) {
		height: calc(100% - 70px);
	}
`

const SubscriptionAmountTotal = styled.div`
	height: 70px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 10px;

	@media (max-width: ${styles.mobileWidth}) {
		height: auto;
	}
`

const TitleSpan = styled.span`
	color: ${styles.activeColor};
	font-size: 20px;

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 14px;
	}
`

const TotalSpan = styled.span`
	color: ${({ theme }) => theme.textColor};
	padding-left: 10px;
	font-size: 24px;

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 14px;
	}
`

type SubscriptionAmountProps = {
	setPromoCode: (promoCode: string) => void
	setPage: (page: number) => void
	promoCode: string
	plan: string
	page: number
}

export const SubscriptionAmount: FC<SubscriptionAmountProps> = ({ setPage, page, plan, promoCode, setPromoCode }) => {
	const { subscriptionForRefresh, total } = useSelector((state) => state.commonReducer)
	const dispatch = useDispatch()

	const handleCheckPromoCode = () => {
		dispatch(discountActions.checkDiscount({ promo_code: promoCode, plan }))
	}

	const handleClickNextPage = () => {
		if (
			subscriptionForRefresh &&
			subscriptionForRefresh.payment_bank_id &&
			subscriptionForRefresh.payment_bank_id !== '0'
		) {
			dispatch(
				commonActions.getPaymentUrl({ bank_id: subscriptionForRefresh.payment_bank_id, promo_code: promoCode, plan }),
			)
			setPage(9)
		} else {
			setPage(page + 1)
		}
	}

	const handleClickPrevPage = () => {
		dispatch(discountActionCreators.setDiscount(0))
		dispatch(discountActionCreators.setPromoCode(''))

		if (subscriptionForRefresh) {
			dispatch(commonActionCreators.setSubscriptionForRefresh(null))
			setPage(1)
		} else {
			setPage(page - 1)
		}
	}

	return (
		<SubscriptionAmountContainer>
			<Title>{plan}</Title>
			<SubscriptionAmountWrapper>
				<PromoCodeWrapper>
					<PromoCodeInput
						value={promoCode}
						onChange={(e) => setPromoCode(e.target.value)}
						placeholder={'Enter Promo Code'}
					/>
					<PromoCodeButton onClick={handleCheckPromoCode} disabled={promoCode === ''}>
						Apply
					</PromoCodeButton>
				</PromoCodeWrapper>
				<SubscriptionAmountTotal>
					<TitleSpan>Total:</TitleSpan>
					<TotalSpan>
						<Decimal price={total} />
					</TotalSpan>
				</SubscriptionAmountTotal>
			</SubscriptionAmountWrapper>
			<ButtonsBlock
				onClickBackButton={handleClickPrevPage}
				onClickNextButton={handleClickNextPage}
				disableNextButton={false}
				backButtonText={'Prev'}
				nextButtonText={'Next'}
			/>
		</SubscriptionAmountContainer>
	)
}
