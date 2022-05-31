import { FC } from 'react'

import styled from 'styled-components'

import { Title } from '@components/Settings/styled-components'
import { ButtonsBlock } from '@components/Settings/Subscriptions/ButtonsBlock'

import { styles } from '@themes/index'

type FindBankAlertProps = {
	setPage: (page: number) => void
	page: number
}

const FindBankAlertContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`

const FindBankAlertText = styled.div`
	display: flex;
	color: ${({ theme }) => theme.textColor};
	height: calc(100vh - 430px);
	justify-content: center;
	align-items: center;
	font-size: 20px;
	text-align: center;
	padding: 15px 20px;
	flex-direction: column;
	flex: 1 1;

	& > p {
		padding: 10px 0;
	}

	@media (max-width: 1200px) {
		height: auto;
	}

	@media (max-width: ${styles.mobileWidth}) {
		height: calc(100% - 70px);
		font-size: 13px;
		overflow-y: scroll;
	}
`

export const FindBankAlert: FC<FindBankAlertProps> = ({ setPage, page }) => {
	return (
		<FindBankAlertContainer>
			<Title>{page === 3 ? 'Find your bank' : 'Select your payment bank'}</Title>
			<FindBankAlertText>
				{page === 3 ? (
					<>
						<p>Please find your bank in the list.</p>
						<p>Not all banks currently provide connection to your accounts or payment initiation services.</p>
						<p>If your bank is not in the list you will be able to subscribe to plan “Light” only.</p>
					</>
				) : (
					<>
						Please select your bank for instant and secure payment for subscription.
						<br />
						<br />
						<br />
						No bank card or personal details are required.
						<br />
						<br />
						<br />
						Note! This payment option may still not be supported by your bank.
						<br />
						<br />
						<br />
						If your bank is not in the list, please, select “Pay another way” at the bottom of the list to use different
						payment option.
					</>
				)}
			</FindBankAlertText>
			<ButtonsBlock
				onClickBackButton={setPage.bind(this, page - 1)}
				onClickNextButton={setPage.bind(this, page + 1)}
				disableNextButton={false}
				backButtonText={'Back'}
				nextButtonText={'I Understand'}
			/>
		</FindBankAlertContainer>
	)
}
