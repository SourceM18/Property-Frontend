import React, { FC } from 'react'

import ReactLoading from 'react-loading'
import styled from 'styled-components'

import { LoadingSpinnerProps } from './@types'

const LoadingWrapper = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 99999;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.6);

	&.mainPage {
		background: #fff;
	}
`

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ color, mainPage }) => {
	return (
		<LoadingWrapper className={mainPage ? 'mainPage' : null}>
			<ReactLoading type={'spinningBubbles'} color={color || '#c4c4c4'} />
		</LoadingWrapper>
	)
}
