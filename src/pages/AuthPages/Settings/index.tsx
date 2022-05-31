import React, { useEffect, useState, FC, useMemo } from 'react'

import { useDispatch } from 'react-redux'

import { Widgets, Subscriptions, BanksFeed, PayeeCentre } from '@components/index'

import { useSelector } from '@hooks/index'

import { HeadingPage, WrapperPage } from '@ui/index'
import { LoadingSpinner } from '@ui/LoadingSpinner'

import { bankActions, commonActions } from 'src/store/rootAction'
import { pendingRequestsSelector, permissionsSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

export const Settings: FC = () => {
	const pendingRequests = useSelector(pendingRequestsSelector)
	const permissions = useSelector(permissionsSelector)
	const [tab, setTabOpen] = useState('banks')
	const dispatch = useDispatch()

	const handleResize = () => {
		if (window.innerWidth > 1200) {
			setTabOpen('')
		} else {
			setTabOpen('banks')
		}
	}

	useEffect(() => {
		dispatch(commonActions.getPermissions())
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const isLoading = useMemo(() => {
		return (
			pendingRequests[bankActions.getBanksForGettingData.typePrefix] ||
			pendingRequests[bankActions.getBankFeeds.typePrefix] ||
			pendingRequests[commonActions.getSubscriptions.typePrefix] ||
			pendingRequests[bankActions.getBanksForPayments.typePrefix] ||
			pendingRequests[bankActions.getBanksForGettingData.typePrefix] ||
			pendingRequests[commonActions.getPermissions.typePrefix] ||
			pendingRequests[commonActions.setAgreement.typePrefix] ||
			pendingRequests[commonActions.getAgreements.typePrefix]
		)
	}, [pendingRequests])

	return (
		<WrapperPage>
			{isLoading && <LoadingSpinner />}
			<div className={styles.body}>
				{(tab === 'subs' || tab === '') && <Subscriptions />}

				{/* <PayeeCentre /> */}

				{(tab === 'payee' || tab === '') && (
					<>
						{permissions && permissions.includes('payee centre') ? (
							<PayeeCentre />
						) : (
							<div className={styles['access-denied']}>
								Please, subscribe to plan "Advanced" to connect Payee centre
							</div>
						)}
					</>
				)}

				{tab === 'banks' && (
					<>
						{permissions && permissions.includes('bank feeds') ? (
							<BanksFeed />
						) : (
							<div className={styles['access-denied']}>
								Please, subscribe to plan "Smart" or "Advanced" to connect Bank Feeds
							</div>
						)}
					</>
				)}
			</div>

			<Widgets active={tab} setActiveTab={setTabOpen} />
			<HeadingPage text="Settings" />
		</WrapperPage>
	)
}
