import { FC } from 'react'

import { useDispatch } from 'react-redux'
import styled from 'styled-components'

// import Mastercard from 'src/assets/icons/mastercard.svg';
// import Visa from 'src/assets/icons/visa.svg';
import { Title, Label, Checkbox } from '@components/Settings/styled-components'
import { ButtonsBlock } from '@components/Settings/Subscriptions/ButtonsBlock'

import { styles } from '@themes/index'

import { commonActions } from 'src/store/rootAction'

type AlternativeWaysProps = {
	setAlternativeWay: (page: number) => void
	setPage: (page: number) => void
	alternativeWay: number
	promoCode: string
	page: number
	plan: string
}

const AlternativeWaysContainer = styled.div`
	height: 100%;
`

const AlternativeWaysWrapper = styled.div`
	height: calc(100vh - 430px);

	@media (max-width: 1200px) {
		height: calc(100vh - 600px);
	}
`

const AlternativeWaysItem = styled.div`
	border-bottom: ${styles.thinLine} ${({ theme }) => theme.lineColor};
	border-top: ${styles.thinLine} ${({ theme }) => theme.lineColor};
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;

	&:last-child {
		border-bottom: 0;
	}

	&:first-child {
		border-top: 0;
	}
`

const Block = styled.div`
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

// const Icon = styled(SVG)`
// 	width: 50px;
// 	height: 50px;
// 	padding-left: 10px;
// `

export const AlternativeWays: FC<AlternativeWaysProps> = ({
	page,
	setPage,
	setAlternativeWay,
	alternativeWay,
	plan,
	promoCode,
}) => {
	const dispatch = useDispatch()

	const handleClickNextButton = () => {
		dispatch(commonActions.getRevolutPublicId({ promo_code: promoCode, plan }))
		setPage(page + 1)
	}

	return (
		<AlternativeWaysContainer>
			<Title>Choose way</Title>
			<AlternativeWaysWrapper>
				<AlternativeWaysItem>
					<Block>
						<Checkbox
							id={'termsUser'}
							type={'checkbox'}
							checked={alternativeWay === 1}
							onChange={setAlternativeWay.bind(this, 1)}
						/>
						<Label>Bank Card</Label>
					</Block>
					<Block>
						{/* <Icon src={Visa}/> */}
						{/* <Icon src={Mastercard}/> */}
					</Block>
				</AlternativeWaysItem>
				<AlternativeWaysItem style={{ opacity: 0.3 }}>
					<Block>
						<Checkbox id={'termsUser'} type={'checkbox'} checked={alternativeWay === 2} onChange={() => {}} />
						<Label>Bank Transfer</Label>
					</Block>
				</AlternativeWaysItem>
			</AlternativeWaysWrapper>
			<ButtonsBlock
				onClickBackButton={setPage.bind(this, page - 1)}
				onClickNextButton={handleClickNextButton}
				disableNextButton={false}
				backButtonText={'Prev'}
				nextButtonText={'Pay'}
			/>
		</AlternativeWaysContainer>
	)
}
