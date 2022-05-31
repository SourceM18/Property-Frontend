import { FC } from 'react'

import styled from 'styled-components'

import { styles } from '@themes/index'

const ButtonBlockContainer = styled.div`
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	border-top: ${styles.boldLine} ${({ theme }) => theme.lineColor};
	width: 100%;

	@media (max-width: 576px) {
		height: unset;
		padding-top: 20px;
	}
`

const ButtonStyles = styled.button`
	color: ${({ theme }) => theme.textColor};
	background: transparent;
	font-size: 20px;
	transition: 0.2s;
	cursor: pointer;

	@media (max-width: 576px) {
		font-size: 14px;
		line-height: 16px;
	}

	&:hover {
		color: ${styles.hoverColor};
		transition: 0.2s;
	}

	&:disabled {
		color: ${styles.greyColor};
		transition: 0.2s;
	}
`

type ButtonsBlockProps = {
	onClickBackButton: () => void
	onClickNextButton: () => void
	disableNextButton: boolean
	backButtonText: string
	nextButtonText: string
}

export const ButtonsBlock: FC<ButtonsBlockProps> = ({
	onClickNextButton,
	onClickBackButton,
	backButtonText,
	nextButtonText,
	disableNextButton,
}) => {
	return (
		<ButtonBlockContainer>
			<ButtonStyles onClick={onClickBackButton}>{backButtonText}</ButtonStyles>
			<ButtonStyles onClick={onClickNextButton} disabled={disableNextButton}>
				{nextButtonText}
			</ButtonStyles>
		</ButtonBlockContainer>
	)
}
