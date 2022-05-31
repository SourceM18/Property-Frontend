import { FC } from 'react'

import styled from 'styled-components'

import { BankFeedItem } from '@components/Settings/BanksFeed/BankFeedItem'

import { useSelector } from '@hooks/index'
import { styles } from '@themes/index'

const BankListContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

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

export const BankFeedList: FC = () => {
	const { bankFeeds } = useSelector((state) => state.bankReducer)

	return (
		<BankListContainer>
			<BankListWrapper>
				{bankFeeds.map((account: any) => (
					<BankFeedItem account={account} />
				))}
			</BankListWrapper>
		</BankListContainer>
	)
}
