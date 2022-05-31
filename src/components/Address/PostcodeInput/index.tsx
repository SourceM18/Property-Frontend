import React, { FC, ChangeEvent, MouseEvent } from 'react'

import { useDispatch } from 'react-redux'

import { commonActionCreators } from 'src/store/common/reducers'
import { commonActions } from 'src/store/rootAction'

import { PostcodeInputProps } from './@types'
import styles from './styles.module.scss'

export const PostcodeInput: FC<PostcodeInputProps> = ({ changePostcode, postcode }) => {
	const dispatch = useDispatch()

	const findAddresses = async (e: MouseEvent) => {
		e.preventDefault()
		dispatch(commonActionCreators.setAddresses([]))

		if (postcode) {
			dispatch(commonActions.getAddressList({ postcode }))
		}
	}

	const changePostCode = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(commonActionCreators.setAddresses([]))
		changePostcode(e.target.value)
	}

	return (
		<div className={styles.address}>
			<div className={styles.title}>Postcode</div>
			<div className={styles['postcode-input']}>
				<input
					onChange={changePostCode}
					placeholder={'Enter Postcode'}
					className={styles.input}
					value={postcode}
					name={'first'}
					type={'text'}
				/>
				<button className={styles.find} onClick={findAddresses} type={'submit'} value={'Find'}>
					Find
				</button>
			</div>
		</div>
	)
}
