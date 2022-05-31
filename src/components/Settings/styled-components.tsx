import SVG from 'react-inlinesvg'
import styled from 'styled-components'

import { styles } from '@themes/index'

export const SettingsColumnWrapper = styled.div`
	box-shadow: 0 0 12px 3px rgba(128, 128, 128, 0.51);
	height: inherit;
`

export const SettingsColumn = styled.div`
	background-color: ${({ theme }) => theme.cardColor};
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	height: 100%;
	overflow-y: auto;

	@media (max-width: ${styles.mobileWidth}) {
		overflow: hidden;
	}
`

export const WidgetsColumn = styled.div`
	background-color: ${({ theme }) => theme.cardColor};
`

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 25px;
	height: 100%;
	width: 100%;

	@media (max-width: 576px) {
		padding: 17px;
	}
`

export const ContentTitle = styled.div`
	display: flex;
	min-height: 70px;
	align-items: center;
	padding-left: 15px;
	color: ${styles.activeColor};
	font-size: 24px;

	@media (max-width: ${styles.mobileWidth}) {
		min-height: inherit;
		font-size: 14px;
		line-height: 16px;
		height: unset;
		padding: 0;
		margin-bottom: 10px;
	}
`

export const Title = styled.div`
	display: flex;
	border-top: ${styles.boldLine} ${({ theme }) => theme.lineColor};
	border-bottom: ${styles.boldLine} ${({ theme }) => theme.lineColor};
	color: ${styles.activeColor};
	justify-content: center;
	align-items: center;
	font-size: 20px;
	height: 70px;

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 14px;
		line-height: 16px;
		height: unset;
		padding: 10px;
	}
`

export const MainButtonWrapper = styled.div`
	height: 70px;
	display: flex;
	align-items: center;
	padding-left: 15px;
	border-top: ${styles.boldLine} ${({ theme }) => theme.lineColor};
	border-bottom: ${styles.boldLine} ${({ theme }) => theme.lineColor};

	@media (max-width: ${styles.mobileWidth}) {
		min-height: 42px;
		height: auto;
	}
`

export const ButtonIcon = styled(SVG)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 0 10px 0 4px;
	height: 24px;
	width: 24px;

	& path {
		fill: ${({ theme }) => theme.textColor};
		stroke-width: 1;
	}

	@media (max-width: ${styles.mobileWidth}) {
		margin: 0 5px 0 0;
		height: 15px;
		width: 15px;
	}
`

export const MainButton = styled.button`
	display: flex;
	cursor: pointer;
	transition: 0.2s;
	font-size: 20px;
	background: transparent;
	flex-direction: row;
	align-items: center;

	&:hover {
		transition: 0.2s;
		color: ${styles.hoverColor};
	}

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 10px;
		align-items: center;
	}
`

export const WidgetsWrapper = styled.div`
	background: ${({ theme }) => theme.bgColor};
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: min-content 1fr;
	grid-gap: 25px;
	height: 100%;
	width: 100%;
`

export const CalendarWrapper = styled.div`
	box-shadow: 0 0 12px 3px rgba(128, 128, 128, 0.51);
	background: ${({ theme }) => theme.cardColor};
	height: 150px;
	width: 100%;
`

export const ContentPart = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: space-between;

	@media (max-width: ${styles.mobileWidth}) {
		height: calc(100% - 37px);
		justify-content: flex-start;
	}
`

export const PayeeCentreContentPart = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 445px);

	@media (max-width: 1200px) {
		height: calc(100vh - 620px);
	}
`

export const BanksFeedContentPart = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 620px);
`

export const PoweredByMoneyHub = styled.div`
	display: flex;
	height: 70px;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	border-top: ${styles.boldLine} ${({ theme }) => theme.lineColor};
	border-bottom: ${styles.boldLine} ${({ theme }) => theme.lineColor};
	font-size: 18px;
`

export const Input = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 10px;

	input[type='checkbox']:checked + label span {
		border: ${styles.thinLine} ${styles.greenColor};

		&::after {
			content: '';
			display: block;
			position: absolute;
			left: 7px;
			top: 3px;
			width: 8px;
			height: 12px;
			border: ${styles.boldLine} ${styles.greenColor};
			border-width: 0 2px 2px 0;
			transform: rotate(45deg);
		}
	}

	@media (max-width: ${styles.mobileWidth}) {
		height: 42px;
	}
`

export const Checkbox = styled.input`
	display: none;
`

export const Label = styled.label`
	font-size: 18px;
	position: relative;
	display: flex;
	align-items: center;
	cursor: pointer;

	span {
		content: '';
		display: inline-block;
		width: 24px;
		height: 24px;
		border: ${styles.thinLine} ${({ theme }) => theme.textColor};
		background-color: transparent;
		border-radius: 50%;
		position: absolute;
		left: 0;
	}

	div {
		margin-left: 35px;
	}

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 12px;
	}
`
