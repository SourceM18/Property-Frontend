import React, { FC } from 'react'

import SVG from 'react-inlinesvg'

import { InvoiceItemButtonProps } from '@components/Invoices/InvoiceItem/@types'
import styles from '@components/Invoices/InvoiceItem/styles.module.scss'

const Button: FC<InvoiceItemButtonProps> = ({ onClick, style, svg, text, disabled }) => (
	<button className={styles.button} onClick={onClick} disabled={disabled}>
		<SVG className={style} src={svg} />
		<span>{text}</span>
	</button>
)

export default Button
