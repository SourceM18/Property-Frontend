import React, { FC, useMemo } from 'react'

import styled from 'styled-components'

import { currencyFormatter } from '@helpers/index'
import { styles } from '@themes/variables'

const DecimalSum = styled.span`
	color: ${({ theme }) => theme.color};
	white-space: nowrap;
`

const DecimalSpan = styled.span`
	font-size: 0.5em;
	color: inherit;
`

type DecimalProps = {
	symbol?: string
	color?: string
	price: number
	bold?: boolean
	fontSize?: number
}

export const Decimal: FC<DecimalProps> = ({ price, symbol, color, bold, fontSize }) => {
	const formatPrice = currencyFormatter(price, symbol)
	const [firstPart, secondPart] = formatPrice.split('.')
	const currentColor = useMemo(() => {
		switch (color) {
			case 'orange':
				return styles.orangeColor
			case 'green':
				return styles.greenColor
			case 'grey':
				return styles.greyColor
			case 'red':
				return styles.redColor
			default:
				break
		}
	}, [])

	return (
		<DecimalSum
			style={{ color: currentColor, fontWeight: bold ? 'bold' : 'normal', fontSize: fontSize ?? `${fontSize}px` }}
		>
			{firstPart}
			<DecimalSpan style={{ fontWeight: bold ? 'bold' : 'normal' }}>.{secondPart}</DecimalSpan>
		</DecimalSum>
	)
}
