import React, { FC, useEffect, useRef } from 'react'

import { scrollTo } from '@helpers/index'

import styles from '../styles.module.scss'

import { DropdownButtonProps } from './@types'

export const DropdownButton: FC<DropdownButtonProps> = ({ item, handleItemClick, value }) => {
	const ref = useRef()

	useEffect(() => {
		if (item.name === value) scrollTo(ref.current)
	}, [value, item])

	return (
		<button className={styles['list-item']} name={item.id} onClick={handleItemClick} ref={ref}>
			{item.name}
		</button>
	)
}
