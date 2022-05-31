import React, { FC } from 'react'

import moment from 'moment'

import { TenancyItem } from '@components/index'

import { useSelector } from '@hooks/index'

import { LoadingSpinner } from '@ui/LoadingSpinner'

import { isPermissionsAndPropertiesLoading, tenanciesSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

export const TenancyList: FC = () => {
	const tenancies = useSelector(tenanciesSelector)
	const isLoading = useSelector(isPermissionsAndPropertiesLoading)

	return (
		<div className={styles['tenancy-list']}>
			{isLoading && <LoadingSpinner />}
			{tenancies &&
				[...tenancies]
					.sort((a, b) => {
						return moment(a.end).isBefore(b.end) ? -1 : 1
					})
					.map((t) => <TenancyItem tenancy={t} key={t.id} />)}
		</div>
	)
}
