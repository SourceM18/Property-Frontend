import { FC } from 'react'

import { useDispatch } from 'react-redux'

import { useSelector } from '@hooks/index'

import { commonActionCreators } from 'src/store/common/reducers'

import { AccountData } from './AccountData'
import { PaymentData } from './PaymentData'

export const Request: FC<{ path: 'account' | 'payment' }> = ({ path }) => {
	const { subscriptionPage } = useSelector((state) => state.commonReducer)
	const dispatch = useDispatch()

	const setCurrentPage = (page: number) => {
		dispatch(commonActionCreators.setSubscriptionPage(page))
	}

	if (path === 'account') {
		return <AccountData />
	}
	return <PaymentData page={subscriptionPage} setPage={setCurrentPage} />
}
