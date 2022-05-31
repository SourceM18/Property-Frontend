import React, { FC, useEffect, useMemo, useState } from 'react'

import { useDispatch } from 'react-redux'

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

import { KeyLoader } from '@ui/index'

import {
	commonActions,
	bankActions,
	userActions,
	discountActionCreators,
	discountActions,
	commonActionCreators,
} from 'src/store/rootAction'
import { pendingRequestsSelector } from 'src/store/selectors'

import { AlternativeWays } from './AlternativeWays'
import { BankCard } from './BankCard'
import { BanksForPaymentList } from './BanksForPaymentList'
import { BanksForUseList } from './BanksForUseList'
import { FindBankAlert } from './FindBankAlert'
import { PlansList } from './PlansList'
import { Policies } from './Policies'
import { SubscriptionAmount } from './SubscriptionAmount'
import { SubscriptionList } from './SubscriptionList'

import Plus from '@assets/icons/circle-plus.svg'

export const Subscriptions: FC = () => {
	const { subscriptionPage, plan } = useSelector((state) => state.commonReducer)
	const pendingRequests = useSelector(pendingRequestsSelector)
	const [quickPayBankId, setQuickPayBankId] = useState('')
	const [alternativeWay, setAlternativeWay] = useState(1)
	const [code, setCode] = useState('')
	const dispatch = useDispatch()

	const isLoading = useMemo(() => {
		return (
			pendingRequests[commonActions.refreshSubscription.typePrefix] ||
			pendingRequests[commonActions.checkSubscriptionOption.typePrefix] ||
			// pendingRequests[commonActions.getSubscriptions.typePrefix] || общая загрузка колеса
			// pendingRequests[bankActions.getBanksForPayments.typePrefix] || общая загрузка колеса
			// pendingRequests[bankActions.getBanksForGettingData.typePrefix] || общая загрузка колеса
			// pendingRequests[commonActions.getPermissions.typePrefix] || общая загрузка колеса
			// pendingRequests[commonActions.setAgreement.typePrefix] || общая загрузка колеса
			// pendingRequests[commonActions.getAgreements.typePrefix] || общая загрузка колеса
			pendingRequests[userActions.updateBankId.typePrefix] ||
			pendingRequests[commonActions.getPaymentUrl.typePrefix] ||
			pendingRequests[discountActions.checkDiscount.typePrefix]
		)
	}, [pendingRequests])

	useEffect(() => {
		dispatch(commonActions.getSubscriptions())
		dispatch(bankActions.getBanksForGettingData())
		dispatch(commonActions.getAgreements())
		dispatch(bankActions.getBanksForPayments())
	}, [])

	useEffect(() => {
		dispatch(discountActionCreators.setPromoCode(''))
		dispatch(discountActionCreators.setDiscount(0))
	}, [code])

	useEffect(() => {
		switch (plan) {
			case 'Light': {
				dispatch(commonActionCreators.setTotal(1199))
				break
			}
			case 'Smart': {
				dispatch(commonActionCreators.setTotal(1799))
				break
			}
			case 'Advanced': {
				dispatch(commonActionCreators.setTotal(2499))
				break
			}
		}
	}, [plan])

	const setCurrentPage = (page: number) => {
		dispatch(commonActionCreators.setSubscriptionPage(page))
	}

	const setPlan = (currentPlan: string) => {
		dispatch(commonActionCreators.setPlan(currentPlan))
	}

	const checkAccountFields = () => {
		dispatch(commonActions.checkSubscriptionOption())
	}

	return (
		<SettingsColumnWrapper>
			<SettingsColumn>
				<KeyLoader isLoading={isLoading} />
				<ContentWrapper>
					<ContentTitle>Subscriptions</ContentTitle>
					<ContentPart>
						{subscriptionPage === 1 && (
							<>
								<MainButtonWrapper>
									<MainButton onClick={checkAccountFields}>
										<ButtonIcon src={Plus} />
										Subscribe
									</MainButton>
								</MainButtonWrapper>
								<SubscriptionList />
							</>
						)}
						{subscriptionPage === 2 && <Policies setPage={setCurrentPage} page={subscriptionPage} />}
						{subscriptionPage === 3 && <FindBankAlert setPage={setCurrentPage} page={subscriptionPage} />}
						{subscriptionPage === 4 && <BanksForUseList setPage={setCurrentPage} page={subscriptionPage} />}
						{subscriptionPage === 5 && (
							<PlansList setPage={setCurrentPage} page={subscriptionPage} plan={plan} setPlan={setPlan} />
						)}
						{subscriptionPage === 6 && (
							<SubscriptionAmount
								setPage={setCurrentPage}
								setPromoCode={setCode}
								promoCode={code}
								page={subscriptionPage}
								plan={plan}
							/>
						)}
						{subscriptionPage === 7 && <FindBankAlert setPage={setCurrentPage} page={subscriptionPage} />}
						{subscriptionPage === 8 && (
							<BanksForPaymentList
								quickPayBankId={quickPayBankId}
								setQuickPayBankId={setQuickPayBankId}
								promoCode={code}
								setPage={setCurrentPage}
								plan={plan}
								page={subscriptionPage}
							/>
						)}
						{/* {subscriptionPage === 9 && quickPayBankId !== '0' && <PaymentAuth setPage={setCurrentPage} page={subscriptionPage} />} */}
						{subscriptionPage === 9 && quickPayBankId === '0' && (
							<AlternativeWays
								alternativeWay={alternativeWay}
								setAlternativeWay={setAlternativeWay}
								setPage={setCurrentPage}
								plan={plan}
								promoCode={code}
								page={subscriptionPage}
							/>
						)}
						{subscriptionPage === 10 && alternativeWay === 1 && (
							<BankCard setPage={setCurrentPage} page={subscriptionPage} />
						)}
					</ContentPart>
				</ContentWrapper>
			</SettingsColumn>
		</SettingsColumnWrapper>
	)
}
