import React from 'react'

import classNames from 'classnames'

import styles from '@components/Property/PropertyInvoice/styles.module.scss'

import { colorFormatters } from '@helpers/index'

export const Formatter = (props: any): JSX.Element => (
	<div
		className={classNames(styles.title, styles[colorFormatters(props.invoice.status)])}
		onClick={props.invoice.partitions.length > 0 ? props.triggerIsModalOpen : () => {}}
	>
		{props.children}
	</div>
)
