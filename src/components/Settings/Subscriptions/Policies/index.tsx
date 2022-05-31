import React, { FC, useState, useRef, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { Title, Input, Label, Checkbox } from '@components/Settings/styled-components'
import { ButtonsBlock } from '@components/Settings/Subscriptions/ButtonsBlock'

import { useSelector } from '@hooks/index'

import { styles } from '@themes/index'

import { commonActions } from 'src/store/rootAction'
import { privacyAgreementsSelector, serviceAgreementsSelector } from 'src/store/selectors'

const PoliciesContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	justify-content: space-between;
`
const Link = styled.a`
	text-decoration: underline;
	display: inline;
	line-height: 1.2;
`

const AgreementInputContainer = styled.div`
	width: 100%;
	position: relative;

	@media (max-width: 576px) {
		height: unset;
	}
`

type PoliciesProps = {
	setPage: (page: number) => void
	page: number
}

export const Policies: FC<PoliciesProps> = ({ setPage, page }) => {
	const service = useSelector(serviceAgreementsSelector)
	const privacy = useSelector(privacyAgreementsSelector)
	const dispatch = useDispatch()
	const ref = useRef()

	const setAgreedHandler = (file_id: number, is_agreed: boolean) => {
		dispatch(commonActions.setAgreement({ file_id, is_agreed }))
	}

	return (
		<PoliciesContainer>
			<Title>Terms and Policies</Title>
			<AgreementInputContainer>
				<Input>
					<Checkbox
						id={'termsUser'}
						type={'checkbox'}
						checked={service.is_agreed || false}
						onChange={setAgreedHandler.bind(this, 1, !service.is_agreed)}
					/>
					<Label htmlFor={'termsUser'}>
						<span></span>
						<div>
							I agree with{' '}
							<Link
								href="https://firebasestorage.googleapis.com/v0/b/nomadic-buffer-291910.appspot.com/o/docs%2FRentWalletServiceTerms.pdf?alt=media&token=ab8fc993-ceb2-4a03-afdc-4ca032d9592f"
								target={'_blank'}
							>
								RentWallet Service Terms
							</Link>
						</div>
					</Label>
				</Input>

				<Input>
					<Checkbox
						id={'policyUser'}
						type={'checkbox'}
						checked={privacy.is_agreed || false}
						onChange={setAgreedHandler.bind(this, 2, !privacy.is_agreed)}
					/>
					<Label htmlFor={'policyUser'}>
						<span></span>
						<div>
							I agree with{' '}
							<Link
								href="https://firebasestorage.googleapis.com/v0/b/nomadic-buffer-291910.appspot.com/o/docs%2FRentWalletPrivacyPolicy.pdf?alt=media"
								target={'_blank'}
							>
								RentWallet Privacy Policy and Cookies
							</Link>
						</div>
					</Label>
				</Input>
			</AgreementInputContainer>
			<ButtonsBlock
				onClickBackButton={setPage.bind(this, page - 1)}
				onClickNextButton={setPage.bind(this, page + 1)}
				disableNextButton={!privacy.is_agreed || !service.is_agreed}
				backButtonText={'Prev'}
				nextButtonText={'Next'}
			/>
		</PoliciesContainer>
	)
}
