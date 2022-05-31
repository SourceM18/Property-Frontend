import { FC, useEffect } from 'react'

import RevolutCheckout from '@revolut/checkout'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { Title } from '@components/Settings/styled-components'

import { useSelector } from '@hooks/index'
import { styles } from '@themes/variables'

import { commonActionCreators, commonActions } from 'src/store/rootAction'

import { revolutPaymentIdSelector, revolutPublicIdSelector, themeSelector, userSelector } from 'src/store/selectors'

type BankCardProps = {
	setPage: (page: number) => void
	page: number
}

const BankCardContainer = styled.div`
	height: 100%;
`

const BankCardWrapper = styled.div`
	height: calc(100vh - 430px);
	padding-top: 10px;

	@media (max-width: ${styles.laptopWidth}) {
		height: calc(100vh - 600px);
	}

	@media (max-width: ${styles.mobileWidth}) {
		height: calc(100% - 70px);
	}
`

const ButtonBlockContainer = styled.div`
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	border-top: ${styles.boldLine} ${({ theme }) => theme.lineColor};
	width: 100%;
`

const ButtonStyles = styled.button`
	color: ${({ theme }) => theme.textColor};
	background: transparent;
	font-size: 20px;
	transition: 0.2s;
	cursor: pointer;

	&:hover {
		color: ${styles.hoverColor};
		transition: 0.2s;
	}

	&:disabled {
		color: ${styles.greyColor};
		transition: 0.2s;
	}
`

export const BankCard: FC<BankCardProps> = ({ page, setPage }) => {
	const revolutPublicId = useSelector(revolutPublicIdSelector)
	const revolutPaymentId = useSelector(revolutPaymentIdSelector)
	const theme = useSelector(themeSelector)
	const user = useSelector(userSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		return () => {
			dispatch(commonActionCreators.setRevolutPublicId(null))
			dispatch(commonActionCreators.setRevolutPaymentId(null))
		}
	}, [])

	const handleSuccessPayment = () => {
		dispatch(commonActions.setRevolutPaymentAuth(revolutPaymentId))
	}

	const handleRejectPayment = (error: string) => {
		console.log(error)
	}

	useEffect(() => {
		if (revolutPublicId) {
			RevolutCheckout(revolutPublicId).then((instance) => {
				const payButton = document.getElementById('pay-button')
				const card = instance.createCardField({
					target: document.querySelector('#card'),
					onSuccess: handleSuccessPayment,
					onError: (error) => handleRejectPayment.bind(this, error),
					locale: 'en',
					styles: {
						default: {
							color: theme === 'dark' ? '#ffffff' : '#000000',
						},
					},
				})

				// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
				payButton.addEventListener('click', (event) => {
					card.submit({
						name: `${user.name} ${user.surname}`,
					})
				})
			})
		}
	}, [revolutPublicId, theme])

	return (
		<BankCardContainer>
			<Title>Bank Card</Title>
			<BankCardWrapper>
				<div id={'card'} />
			</BankCardWrapper>
			<ButtonBlockContainer>
				<ButtonStyles onClick={setPage.bind(this, page - 1)}>Prev</ButtonStyles>
				<ButtonStyles id={'pay-button'} disabled={!revolutPublicId}>
					Pay
				</ButtonStyles>
			</ButtonBlockContainer>
		</BankCardContainer>
	)
}
