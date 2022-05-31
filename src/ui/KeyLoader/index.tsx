import React, { FC, useEffect, useState } from 'react'

import SVG from 'react-inlinesvg'
import styled, { css, keyframes } from 'styled-components'

import { styles } from '@themes/index'

import KeyMask from '@assets/icons/horizontalKeyForAnimation.svg'
import Star from '@assets/icons/star.png'
import Gold from '@assets/images/gold.jpg'

const opacityAnimation = keyframes`
  0% {
    background: transparent;
  }
  50% {
    background: rgba(0, 0, 0, 0.6);
  }
`

const starAnimation = keyframes`
  0% {
    opacity: 0;
    padding-top: 20px;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    padding-top: 0;
  }
`

const emergence = keyframes`
  from {
    background-position: 200% 0;
  }
  to {
    background-position: 100% 0;
  }
`

const rotation = keyframes`
  0% {
    animation-timing-function: ease-in;
    transform: rotateX(0deg);
  }
  25% {
    animation-timing-function: ease-out;
    transform: rotateX(180deg);
  }
  50%,
  100% {
    transform: rotateX(360deg);
  }
`

const LoaderWrapper = styled.div<{ $isLoading: boolean }>`
  transition: opacity 0.5s ease-in-out, background 0.5s ease-in-out;
  animation: ${opacityAnimation} 1s;
  position: absolute;
  text-align: center;
  font-size: 32px;
  z-index: 10002;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  ${({ $isLoading }) =>
		!$isLoading &&
		css`
			opacity: 0;
			pointer-events: none;
		`}}
  ${({ $isLoading }) =>
		!!$isLoading &&
		css`
			background: rgba(0, 0, 0, 0.6);
			opacity: 1;
		`}}
`

const LoaderContainer = styled.div<{ $isAuthLoading: boolean }>`
  transform: translate(-50%, -50%);
  position: relative;
  display: block;
  height: 150px;
  width: 250px;
  left: 50%;
  ${({ $isAuthLoading }) =>
		!!$isAuthLoading &&
		css`
			top: 50vh;
		`}}
  ${({ $isAuthLoading }) =>
		!$isAuthLoading &&
		css`
			top: 50%;
		`}}

  @media (max-width: ${styles.mobileWidth}) {
    height: 100px;
    width: 200px;
  }
`

const LoaderStars = styled.div`
	position: absolute;
	height: 100px;
	width: 100px;
`

const LoaderKey = styled.div`
	width: 200px;
	height: 100px;
	margin-left: 50px;
	background: url(${Gold}) no-repeat;
	-webkit-mask-image: url(${KeyMask});
	-webkit-mask-size: contain;
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	animation: ${emergence} 1s forwards, ${rotation} 1s infinite forwards;

	@media (max-width: ${styles.mobileWidth}) {
		margin-left: auto;
	}
`

const StarWrapper = styled.div`
	opacity: 0;
	animation: ${starAnimation} infinite;
`

const StarIcon = styled(SVG)`
	width: 30px;
	height: 30px;
`

type KeyLoaderProps = { isLoading?: boolean; isAuthLoading?: boolean }

const firstStarStyles = {
	width: '18px',
	height: '18px',
	margin: '2px 0 0 4px',
	animationDuration: '1s',
	animationDelay: '0.3s',
}

const secondStarStyles = {
	width: '30px',
	height: '30px',
	margin: '15px 0 0 15px',
	animationDuration: '0.9s',
	animationDelay: '0.5s',
}

const thirdStarStyles = {
	width: '20px',
	height: '20px',
	animationDuration: '0.8s',
	animationDelay: '0.7s',
}

export const KeyLoader: FC<KeyLoaderProps> = ({ isLoading, isAuthLoading }) => {
	const [fakeLoading, setFakeLoading] = useState(false)
	let duration: any

	useEffect(() => {
		if (isLoading || isAuthLoading) {
			setFakeLoading(true)
			duration = setTimeout(() => {
				if (isLoading) {
					clearTimeout(duration)
				}
				setFakeLoading(false)
			}, 1200)
		}
	}, [isLoading])

	return (
		<LoaderWrapper $isLoading={fakeLoading || isLoading}>
			<LoaderContainer $isAuthLoading={isAuthLoading}>
				<LoaderStars>
					<StarWrapper style={firstStarStyles}>
						<StarIcon src={Star} />
					</StarWrapper>
					<StarWrapper style={secondStarStyles}>
						<StarIcon src={Star} />
					</StarWrapper>
					<StarWrapper style={thirdStarStyles}>
						<StarIcon src={Star} />
					</StarWrapper>
				</LoaderStars>
				<LoaderKey />
			</LoaderContainer>
		</LoaderWrapper>
	)
}
