import { FC } from 'react'

import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { dateFormatter } from '@helpers/index'
import { useSelector } from '@hooks/index'
import { styles } from '@themes/index'
import { Decimal } from 'src/components'

import { commonActions } from 'src/store/rootAction'
import { subscriptionsSelector } from 'src/store/selectors'

import Refresh from '@assets//icons/refresh-icon.svg'
import Download from '@assets/icons/download-icon.svg'

const SubscriptionListContainer = styled.div`
	border-bottom: ${styles.boldLine} ${({ theme }) => theme.lineColor};
	height: calc(100vh - 370px);
	overflow: auto;
	width: 100%;

	@media (max-width: 1200px) {
		height: calc(100vh - 540px);
	}

	@media (max-width: ${styles.mobileWidth}) {
		height: auto;
	}
`

const SubscriptionItem = styled.div`
	border-bottom: ${styles.thinLine} ${({ theme }) => theme.lineColor};
	display: grid;
	padding: 10px;
	justify-content: space-between;
	grid-template-columns: 90px 190px 60px;
	height: 70px;
	width: 100%;

	&:last-child {
		border: none;
	}

	@media (max-width: ${styles.mobileWidth}) {
		grid-template-columns: 60px 1fr 50px;
		padding: 5px 0;
		height: auto;
	}
`

const SubscriptionsAmount = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 24px;

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 18px;
	}
`

const SubscriptionsData = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`

const SubscriptionName = styled.div`
	font-size: 23px;
	text-transform: capitalize;
	margin-bottom: 5px;

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 16px;
	}
`

const SubscriptionDate = styled.div`
	color: ${styles.greyColor};
	font-size: 12px;

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 11px;
	}
`

const SubscriptionsButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const SubscriptionsButton = styled.button`
	cursor: pointer;
	background: transparent;
	height: 25px;
	width: 25px;

	@media (max-width: ${styles.mobileWidth}) {
		height: 20px;
		width: 20px;
	}
`

const SubscriptionButtonIcon = styled(SVG)`
	height: 25px;
	width: 25px;

	@media (max-width: ${styles.mobileWidth}) {
		height: 20px;
		width: 20px;
	}

	& path {
		fill: ${({ theme }) => theme.textColor};
	}
`

export const SubscriptionList: FC = () => {
	const subscriptions = useSelector(subscriptionsSelector)

	return (
		<SubscriptionListContainer>
			{subscriptions &&
				subscriptions.map((subscription: any) => (
					<CurrentSubscriptionItem key={subscription.id} subscription={subscription} />
				))}
		</SubscriptionListContainer>
	)
}

const CurrentSubscriptionItem: FC<{ subscription: any }> = ({ subscription }) => {
	const dispatch = useDispatch()

	const refreshCurrentSubscription = () => {
		dispatch(commonActions.refreshSubscription(subscription.id))
	}

	return (
		<SubscriptionItem key={subscription.id}>
			<SubscriptionsAmount>
				<Decimal price={subscription.total} />
			</SubscriptionsAmount>
			<SubscriptionsData>
				<SubscriptionName>{subscription.tariff.name}</SubscriptionName>
				<SubscriptionDate>
					{dateFormatter(subscription.from)} - {dateFormatter(subscription.before)}
				</SubscriptionDate>
			</SubscriptionsData>
			<SubscriptionsButtonContainer>
				<SubscriptionsButton>
					<SubscriptionButtonIcon src={Download} />
				</SubscriptionsButton>
				<SubscriptionsButton>
					{subscription.tariff.id !== 1 && (
						<SubscriptionButtonIcon src={Refresh} onClick={refreshCurrentSubscription} />
					)}
				</SubscriptionsButton>
			</SubscriptionsButtonContainer>
		</SubscriptionItem>
	)
}
