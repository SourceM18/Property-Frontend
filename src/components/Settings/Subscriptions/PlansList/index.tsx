import { FC } from 'react'

import styled from 'styled-components'

import { Title, Label, Checkbox } from '@components/Settings/styled-components'
import { ButtonsBlock } from '@components/Settings/Subscriptions/ButtonsBlock'

import { useSelector } from '@hooks/index'
import { styles } from '@themes/index'

import { userSelector } from 'src/store/selectors'

type PlansListProps = {
	setPage: (page: number) => void
	setPlan: (plan: string) => void
	page: number
	plan: string
}

const PlansListContainer = styled.div`
	height: 100%;
`

const PlansListWrapper = styled.div`
	height: calc(100vh - 430px);
	overflow: auto;

	@media (max-width: ${styles.laptopWidth}) {
		height: calc(100vh - 600px);
	}

	@media (max-width: ${styles.mobileWidth}) {
		height: calc(100% - 70px);
	}
`

const PlansItem = styled.div`
	border-bottom: ${styles.thinLine} ${({ theme }) => theme.lineColor};
	border-top: ${styles.thinLine} ${({ theme }) => theme.lineColor};
	height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 10px;

	@media (max-width: ${styles.mobileWidth}) {
		height: 50px;
		border-bottom: none;
	}

	input[type='checkbox']:checked + label span {
		border: ${styles.thinLine} ${styles.greenColor};

		&::after {
			content: '';
			display: block;
			position: absolute;
			left: 7px;
			top: 3px;
			width: 8px;
			height: 12px;
			border: ${styles.boldLine} ${styles.greenColor};
			border-width: 0 2px 2px 0;
			transform: rotate(45deg);
		}
	}

	&:last-child {
		border-bottom: 0;
	}

	&:first-child {
		border-top: 0;
	}
`

export const PlansList: FC<PlansListProps> = ({ setPage, page, plan, setPlan }) => {
	const user = useSelector(userSelector)

	return (
		<PlansListContainer>
			<Title>Choose plan</Title>
			<PlansListWrapper>
				<PlansItem>
					<Checkbox
						id={'lightUser'}
						type={'checkbox'}
						checked={plan === 'Light'}
						onChange={setPlan.bind(this, 'Light')}
					/>
					<Label htmlFor={'lightUser'}>
						<span />
						<div>Light</div>
					</Label>
				</PlansItem>
				{user.bank_id && user.bank_id !== '0' && (
					<>
						<PlansItem>
							<Checkbox
								id={'smartUser'}
								type={'checkbox'}
								checked={plan === 'Smart'}
								onChange={setPlan.bind(this, 'Smart')}
							/>
							<Label htmlFor={'smartUser'}>
								<span />
								<div>Smart</div>
							</Label>
						</PlansItem>
						<PlansItem style={{ opacity: 0.5 }}>
							<Checkbox id={'advancedUser'} type={'checkbox'} checked={plan === 'Advanced'} />
							<Label htmlFor={'advancedUser'}>
								<span />
								<div>Advanced</div>
							</Label>
						</PlansItem>
					</>
				)}
			</PlansListWrapper>
			<ButtonsBlock
				onClickBackButton={setPage.bind(this, page - 1)}
				onClickNextButton={setPage.bind(this, page + 1)}
				disableNextButton={!plan}
				backButtonText={'Prev'}
				nextButtonText={'Next'}
			/>
		</PlansListContainer>
	)
}
