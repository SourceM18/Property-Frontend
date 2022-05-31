import React, { useState, useRef, FC, MouseEvent } from 'react'

import classNames from 'classnames'

import { useOnClickOutside } from '@hooks/index'

import { DropdownButton } from './Button/DropdownButton'
import styles from './styles.module.scss'

export const Dropdown: FC<{ value: string; items: any[]; changeHandler: any; disabled: boolean }> = ({
	value,
	items,
	changeHandler,
	disabled,
}) => {
	const [open, setOpen] = useState(false)
	const ref = useRef(null)

	const handleItemClick = (e: MouseEvent<HTMLButtonElement>) => {
		changeHandler(e)
		setOpen(false)
	}

	const handleToggleDateList = () => {
		setOpen(!open)
	}

	const cursorStyle = disabled ? styles['disable-date'] : null

	useOnClickOutside(ref, setOpen.bind(null, false))

	return (
		<div className={classNames(styles.wrapper, cursorStyle)} ref={ref}>
			<div
				onKeyPress={!disabled && handleToggleDateList}
				onClick={!disabled && handleToggleDateList}
				className={styles.header}
				role={'button'}
				tabIndex={0}
			>
				<div className={styles['header-title']}>
					<p className={styles['title-bold']}>{value}</p>
				</div>
			</div>
			{open && (
				<div className={styles.list}>
					{items.map((item) => (
						<DropdownButton item={item} handleItemClick={handleItemClick} key={item.id} value={value} />
					))}
				</div>
			)}
		</div>
	)
}
