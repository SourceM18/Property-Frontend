import React, { FC, useState } from 'react'

import classNames from 'classnames'
import InlineSVG from 'react-inlinesvg'

import { currencyFormatter, dateFormatter } from '@helpers/index'

import { useInput } from '@hooks/index'

import { TransactionPartitionProps } from './@types'

import styles from './styles.module.scss'

import EditIcon from '@assets/icons/edit-icon.svg'

export const TransactionPartition: FC<TransactionPartitionProps> = ({ partition, triggerIsOpen }) => {
	const [note, setNote] = useInput(partition.note || '')
	const [active, setActive] = useState(false)
	// const dispatch = useDispatch()

	const updateNote = () => {
		// dispatch( paymentsActions.setPartitionNote( partition.id, note ) );
		setActive(false)
	}

	return (
		<>
			<div className={classNames(styles.title, styles.trigger)} onClick={triggerIsOpen}>
				<p>{dateFormatter(partition.timestamp.toString())}</p>
			</div>
			<div className={classNames(styles.title, styles.trigger)} onClick={triggerIsOpen}>
				<p>{currencyFormatter(partition.amount)}</p>
			</div>
			<div
				className={classNames(
					styles.arrearsDays,
					{ [styles.yellow]: partition.arrearsDays > 0 && partition.arrearsDays <= 30 },
					{ [styles.red]: partition.arrearsDays > 30 },
				)}
			>
				{partition.arrearsDays > 0 ? partition.arrearsDays : ''}
			</div>
			<div className={styles.title}>
				<input
					className={classNames(styles.input, { [styles.active]: active })}
					onBlur={updateNote}
					onChange={setNote}
					ref={(inp) => inp?.focus()}
					value={note}
					type={'text'}
				/>
				<p className={classNames(styles.text, { [styles.active]: !active })} onClick={setActive.bind(null, true)}>
					{note}
					<InlineSVG src={EditIcon} />
				</p>
			</div>
		</>
	)
}
