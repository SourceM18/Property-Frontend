import React, { FC, useCallback, useMemo } from 'react'

import classNames from 'classnames'
import { useDispatch } from 'react-redux'

import { Decimal } from '@components/index'

import { usePathSplitter, useSelector } from '@hooks/index'

import { Photo } from '@ui/Photo'
import { history } from '@utils/index'

import { propertyActionCreators } from 'src/store/property/reducers'
import { currentTransactionSelector } from 'src/store/selectors'

import { DashboardPropertyProps } from './@types'
import styles from './styles.module.scss'

import PropertyPlug from '@assets/icons/property-photo-icon.svg'

export const DashboardProperty: FC<DashboardPropertyProps> = ({ property, transactionsClassName }) => {
	const currentTransaction = useSelector(currentTransactionSelector)
	const { pathSplitter } = usePathSplitter()
	const dispatch = useDispatch()

	const handleOpenProperty = useCallback(() => {
		if (pathSplitter().includes('/transactions') && currentTransaction) {
			dispatch(propertyActionCreators.setCurrentProperty(property))
			history.push(`/dashboard/transactions/${currentTransaction?.id}/${property.id}`)
		} else if (pathSplitter().includes('/total')) {
			dispatch(propertyActionCreators.setCurrentProperty(property))
			history.push(`/dashboard/total/all/properties/${property.id}/balance`)
		} else {
			history.push(`/properties/${property.id}/balance`)
		}
	}, [pathSplitter()])

	const photo = useMemo(() => {
		if (property && property.filesToProperties && property.filesToProperties.length > 0) {
			return property.filesToProperties[property.filesToProperties?.length - 1]?.file?.url
		}
		return null
	}, [property])

	if (!property) {
		return null
	}

	return (
		<>
			<div className={classNames(styles.property, styles[`${transactionsClassName}`])}>
				<Photo styles={styles} photo={photo} srcSVG={PropertyPlug} />

				<div className={styles.info}>
					<div className={classNames(styles.field, styles.nick)} onClick={handleOpenProperty}>
						<p className={styles.description}>Property Nickname</p>
						<p className={styles.nickname}>{property.title}</p>
					</div>

					<div className={styles.field}>
						<p className={styles.description}>Address</p>
						<p className={styles.content}>
							{property?.address?.country}, {property?.address?.city}, {property?.address?.street},{' '}
							{property?.address?.house_number || property?.address?.house_name}
						</p>
					</div>
				</div>

				<div className={styles.money}>
					<p className={styles.count}>
						<Decimal price={property.income_estimate} />
					</p>
					<p className={styles.description}>Income Estimate</p>
				</div>
			</div>
		</>
	)
}
