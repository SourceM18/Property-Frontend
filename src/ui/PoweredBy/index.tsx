import React from 'react'

import styled from 'styled-components'

import { styles } from '@themes/index'
import { socialLinks } from '@utils/constants'

const PoweredByMoneyHub = styled.div`
	border-top: ${styles.boldLine} ${({ theme }) => theme.lineColor};
	border-bottom: ${styles.boldLine} ${({ theme }) => theme.lineColor};

	&.active {
		flex: 1 1;
		overflow: auto;
	}
`

const PoweredByMoneyHubTitle = styled.div`
	height: 70px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	cursor: pointer;

	&:hover {
		color: ${styles.hoverColor};
	}

	&.dashboard {
		font-size: 24px;
	}

	@media (max-width: ${styles.mobileWidth}) {
		height: 27px;
		font-size: 12px !important;
		padding: 5px;
	}
`

const PoweredByMoneyHubText = styled.div`
	border-top: ${styles.boldLine} ${({ theme }) => theme.lineColor};
	padding: 15px 10px;
	font-size: 12px;
	line-height: 14px;

	&.dashboard {
		padding: 25px 10px;
	}

	p {
		margin-bottom: 10px;

		&:last-child {
			margin: 0;
		}
	}
`

const PoweredByMoneyHubButton = styled.button`
	background: ${styles.activeColor};
	height: 45px;
	font-size: 16px;
	cursor: pointer;
	color: #ffffff;
	transition: 0.2s;
	margin-top: 20px;
	width: 100%;

	&:hover {
		background: #9f9bd9;
		transition: 0.2s;
	}

	&.dashboard {
		max-width: 260px;

		@media (max-width: ${styles.mobileWidth}) {
			max-width: 150px;
			height: 35px;
		}
	}

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 12px;
		max-width: 150px;
		height: 35px;
	}
`

const PoweredByMoneyHubButtonWrapper = styled.div`
	text-align: center;
`

export const PoweredBY = ({ onMoneyHubVisibleToggle, isMoneyHubVisible, addClass }: any): JSX.Element => {
	return (
		<PoweredByMoneyHub className={isMoneyHubVisible ? 'active' : null}>
			<PoweredByMoneyHubTitle className={addClass} onClick={onMoneyHubVisibleToggle}>
				Powered by MoneyHub
			</PoweredByMoneyHubTitle>
			{isMoneyHubVisible && (
				<PoweredByMoneyHubText className={addClass}>
					<p>
						Rentwallet.net Limited, company incorporated in England and Wales, company number 13089273, registered
						address at Lygon House, 50 London Road, Bromely, Kent BR1 3RA, United Kingdom. Email:{' '}
						<a href={`mailto: ${socialLinks.Email}`}>{socialLinks.Email}</a>
					</p>
					<p>
						Rentwallet.net Limited is the registered agent of Moneyhub Financial Technology Limited (“Moneyhub”) who is
						authorised and regulated by the Financial Conduct Authority under the Payment Service Regulations 2017 (reg.
						no. 809360) for the provision of payment services.
					</p>
					<p>
						Head office: Regus House, 1 Friary, Temple Way, Bristol BS1 6EA, United Kingdom. Email:{' '}
						<a href={`mailto: ${socialLinks.EmailSecond}`}>{socialLinks.EmailSecond}</a>
					</p>

					<PoweredByMoneyHubButtonWrapper>
						<PoweredByMoneyHubButton className={addClass} onClick={onMoneyHubVisibleToggle}>
							Got it!
						</PoweredByMoneyHubButton>
					</PoweredByMoneyHubButtonWrapper>
				</PoweredByMoneyHubText>
			)}
		</PoweredByMoneyHub>
	)
}
