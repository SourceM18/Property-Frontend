import styled from 'styled-components'

import { styles } from 'src/themes'

export const LoadingWrapper = styled.div`
	background: ${({ theme }) => (theme === 'dark' ? '#2b2828' : '#ffffff')};
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Wrapper = styled.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	background: ${({ theme }) => (theme === 'dark' ? '#2b2828' : '#ffffff')};
	height: 100vh;
`

export const Container = styled.div`
	max-width: 840px;
	margin: auto;
	color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : styles.blueColor)};
	padding: 25px 22px;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 20px;
`

export const Header = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 15px;

	@media (max-width: 600px) {
		margin-bottom: 25px;
	}
`

export const HeaderSpan = styled.span`
	font-weight: bold;
	font-size: 13px;
	margin-left: auto;
	margin-right: 5px;
	display: block;
`

export const Logo = styled.img`
	width: ${({ width }) => (width ? `${width}px` : '110px')};
	height: auto;
	display: block;
`

export const Heading = styled.p`
	font-weight: bold;
	font-size: 14px;
	line-height: 23px;
	text-align: center;
`

export const CenterBlock = styled.div`
	width: fit-content;
	margin: 0 auto 5px;
`

export const Bold = styled.span`
	font-weight: bold;
`

export const ListCenter = styled.ul`
	width: fit-content;
	margin: auto;
`

export const Center = styled.p`
	text-align: center;
`

export const BankLogo = styled.img`
	display: block;
	width: auto;
	height: auto;
	margin: 10px auto;
	max-height: 20px;
`

export const QRCodeBlock = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 5px;
	margin-bottom: 5px;

	&:nth-child(1) {
		max-width: 505px;
	}
`

export const QRCodeWrapper = styled.div`
	display: block;
	width: 163px;
	height: 163px;
	margin-left: 20px;

	@media (max-width: 600px) {
		display: none;
	}
`

export const List = styled.ul`
	padding-left: 20px;
`

export const Li = styled.li``

export const BtnBlock = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 270px;
	margin: 20px auto;
`

export const Button = styled.button`
	font-weight: 700 !important;
	font-size: 15px !important;
	line-height: 24px !important;
	text-align: center;
	background: transparent;
	border: none;
	font: inherit;
	cursor: pointer;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	color: ${({ color }) => color};
`

export const Footer = styled.p`
	font-size: 11px;
	line-height: 18px;
`
