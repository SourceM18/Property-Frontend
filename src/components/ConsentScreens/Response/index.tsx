import React, { FC } from 'react'

import ReactLoading from 'react-loading'

import { PaymentError } from '@components/ConsentScreens/Response/PaymentError'
import { PaymentSuccess } from '@components/ConsentScreens/Response/PaymentSuccess'
import { LoadingWrapper } from '@components/ConsentScreens/styled-components'

import { useSelector } from '@hooks/index'
import { styles } from '@themes/index'

import { commonActions } from 'src/store/common/actions'
import { themeSelector } from 'src/store/selectors'

export const Response: FC = () => {
	const isPaymentAuthLoading = useSelector(
		(state) => state.requestsReducer.pending[commonActions.setPaymentAuthorization.typePrefix],
	)
	const { successPaymentData } = useSelector((state) => state.commonReducer)
	const theme = useSelector(themeSelector)

	if (isPaymentAuthLoading) {
		return (
			<LoadingWrapper theme={theme}>
				<ReactLoading type={'spinningBubbles'} color={theme === 'dark' ? '#fff' : styles.blueColor} />
			</LoadingWrapper>
		)
	}

	if (successPaymentData?.consentScreenData) {
		return <PaymentSuccess />
	}

	return <PaymentError />
}
