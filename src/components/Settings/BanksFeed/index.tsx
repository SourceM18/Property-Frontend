import React, { FC, useEffect, useMemo, useState } from 'react'

import { useDispatch } from 'react-redux'

import { BankFeedList } from '@components/Settings/BanksFeed/BankFeedList'
import { BanksForConnectionList } from '@components/Settings/BanksFeed/BanksForConnectionList'
import {
	SettingsColumnWrapper,
	MainButtonWrapper,
	SettingsColumn,
	ContentWrapper,
	ContentTitle,
	ContentPart,
	MainButton,
	ButtonIcon,
} from '@components/Settings/styled-components'

import { useSelector } from '@hooks/index'

import { KeyLoader, PoweredBY } from '@ui/index'

import { bankActions, commonActions } from 'src/store/rootAction'
import { pendingRequestsSelector } from 'src/store/selectors'

import Plus from '@assets/icons/circle-plus.svg'

export const BanksFeed: FC = () => {
	const pendingRequests = useSelector(pendingRequestsSelector)
	const [isMoneyHubVisible, setIsMoneyHubVisible] = useState(false)
	const [page, setPage] = useState(1)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(bankActions.getBanksForGettingData())
		dispatch(bankActions.getBankFeeds())
	}, [])

	const isLoading = useMemo(() => {
		return (
			// pendingRequests[bankActions.getBanksForGettingData.typePrefix] || // на общее колесо загрузки
			pendingRequests[commonActions.getBanksFeedConnectionUrl.typePrefix] ||
			pendingRequests[bankActions.removeBankById.typePrefix]
			// pendingRequests[bankActions.getBankFeeds.typePrefix] // на общее колесо загрузки
		)
	}, [pendingRequests])

	const onMoneyHubVisibleToggle = () => {
		setIsMoneyHubVisible(!isMoneyHubVisible)
	}

	return (
		<SettingsColumnWrapper>
			<SettingsColumn>
				<KeyLoader isLoading={isLoading} />
				<ContentWrapper>
					<ContentTitle>Bank Feeds</ContentTitle>
					<ContentPart>
						{page === 1 && (
							<>
								{!isMoneyHubVisible && (
									<>
										<MainButtonWrapper>
											<MainButton onClick={setPage.bind(this, page + 1)}>
												<ButtonIcon src={Plus} />
												Add New Bank Feed
											</MainButton>
										</MainButtonWrapper>
										<BankFeedList />
									</>
								)}

								<PoweredBY isMoneyHubVisible={isMoneyHubVisible} onMoneyHubVisibleToggle={onMoneyHubVisibleToggle} />
							</>
						)}
						{page === 2 && <BanksForConnectionList setPage={setPage} page={page} />}
						{/* {page === 3 && <BankConnectionUrl setPage={setPage} page={page} />} */}
					</ContentPart>
				</ContentWrapper>
			</SettingsColumn>
		</SettingsColumnWrapper>
	)
}
