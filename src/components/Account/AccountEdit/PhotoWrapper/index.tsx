import React, { FC } from 'react'

import styles from '@components/Account/AccountEdit/styles.module.scss'
import { PhotoInstance } from '@components/index'

import { PhotoWrapperProps } from './@types'

import Plug from '@assets/icons/person-icon.svg'

export const PhotoWrapper: FC<PhotoWrapperProps> = ({ user, handleUpdate }) => (
	<PhotoInstance
		className={'account-photo'}
		photoClassName={styles['photo-edit']}
		setPhoto={handleUpdate}
		photo={user?.filesToUsers[user?.filesToUsers?.length - 1]?.file?.url}
		plug={Plug}
	/>
)
