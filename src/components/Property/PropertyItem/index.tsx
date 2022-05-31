import React, { FC, useMemo } from 'react'

import classNames from 'classnames'
import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import { NavLink } from 'react-router-dom'

import { ConfirmationModal, Decimal } from '@components/index'

import { usePathSplitter, useSelector, useTrigger } from '@hooks/index'

import { Photo } from '@ui/Photo'
import { history } from '@utils/index'

import { commonActionCreators, propertyActions } from 'src/store/rootAction'

import { currentPropertySelector } from 'src/store/selectors'

import { PropertyItemProps } from './@types'

import styles from './styles.module.scss'

import EditIcon from '@assets/icons/edit-icon.svg'

import PropertyPlug from '@assets/icons/property-photo-icon.svg'

export const PropertyItem: FC<PropertyItemProps> = ({ property, optionClassName }) => {
	const currentProperty = useSelector(currentPropertySelector)
	const [isDeleteModal, triggerDeleteModal] = useTrigger()
	const { pathSplitter } = usePathSplitter()
	const dispatch = useDispatch()

	const addComma = (addressPart: string, isLast?: boolean) => {
		if (addressPart && addressPart !== '') {
			return isLast ? `${addressPart} ` : `${addressPart}, `
		}

		return ''
	}

	// const balanceColor: string = useMemo(() => {
	// 	const haveBigOverdue = propertyInvoices?.some((elem: any) => elem.type && elem.type === 'bigOverdue');
	// 	const haveSmallOverdue = propertyInvoices?.some((elem: any) => elem.type && elem.type === 'smallOverdue');
	//
	// 	if (haveBigOverdue) {
	// 		return 'red';
	// 	} else if (haveSmallOverdue) {
	// 		return 'orange';
	// 	}
	//
	// 	return 'green';
	// }, [propertyInvoices]);

	const pathTail = useMemo(() => {
		return pathSplitter()[pathSplitter().length - 1]
	}, [pathSplitter()])

	const showTenants = useMemo(() => {
		return !!pathSplitter().includes('/tenants')
	}, [pathSplitter(), pathTail])

	const showTenancy = useMemo(() => {
		return !!pathSplitter().includes('/tenancy')
	}, [pathSplitter(), pathTail])

	const showBalance = useMemo(() => {
		return !!pathSplitter().includes('/balance')
	}, [pathSplitter(), pathTail])

	const showDashboard = useMemo(() => {
		return !!pathSplitter().includes('/dashboard')
	}, [pathSplitter(), pathTail])

	// const hidePropertyItem = useMemo(() => {
	// 	return (
	// 		pathSplitter().includes('/tenancy') &&
	// 		pathSplitter().includes('/tenants') &&
	// 		pathSplitter()[pathSplitter().length - 1] !== '/tenants'
	// 	)
	// }, [pathSplitter()])

	const prop = useMemo(() => {
		return property || currentProperty
	}, [property, currentProperty])

	const showedAddress = useMemo(() => {
		const array = [
			addComma(prop?.address?.flat) && addComma(prop?.address?.flat),
			addComma(prop?.address?.house_number, true),
			addComma(prop?.address?.house_name),
			addComma(prop?.address?.street),
			addComma(`\n${prop?.address?.city}`),
			addComma(prop?.address?.county, true),
			addComma(prop?.address?.postcode),
			addComma(prop?.address?.country, true),
		]

		return array.join('')
	}, [prop?.address])

	const arrearsColor: string = useMemo(() => {
		if (prop?.arrears > 30) {
			return 'red'
		}
		if (prop?.arrears > 0 && prop?.arrears <= 30) {
			return 'orange'
		}
		return 'green'
	}, [prop])

	const photo = useMemo(() => {
		if (prop && prop.filesToProperties && prop.filesToProperties.length > 0) {
			return prop.filesToProperties[prop.filesToProperties?.length - 1]?.file?.url
		}
		return null
	}, [currentProperty])

	const handleDelete = () => {
		dispatch(propertyActions.deleteProperty({ property_id: prop.id, triggerDeleteModal }))
	}

	const handleBalanceOpen = () => {
		if (!showBalance) {
			history.push(`/properties/${prop.id}/balance`)
		} else {
			history.push('/properties')
		}
	}

	const handleTenancyOpen = () => {
		if (!showTenancy) {
			history.push(`/properties/${prop.id}/tenancy`)
		} else {
			history.push('/properties')
		}
	}

	const handleEditMode = () => {
		history.push(`/properties/${prop.id}/edit`)
	}

	const emptyTenancies = () => {
		dispatch(
			commonActionCreators.addToast({
				message: 'This property cannot be deleted.\nPlease remove all related tenancies first.',
				isSocialMediaShowed: false,
				doAfterClosed: null,
				type: 'error',
			}),
		)
	}

	if (!prop) {
		return null
	}

	return (
		<>
			<div className={classNames(styles.property, styles[`${optionClassName}`])}>
				<Photo styles={styles} photo={photo} srcSVG={PropertyPlug} />

				<div className={styles.info}>
					<div className={styles.field}>
						<p className={styles.description}>Property Nickname</p>
						<div className={styles['title-container']}>
							<p className={styles.title}>{prop.title}</p>
							{!pathSplitter().includes('/dashboard') && (
								<button className={styles.edit} onClick={handleEditMode}>
									<SVG src={EditIcon} />
								</button>
							)}
						</div>
					</div>

					<div className={styles.field}>
						<p className={styles.description}>Address</p>
						<p className={styles.address}>{showedAddress}</p>
					</div>

					{!pathSplitter().includes('/dashboard') && (
						<div className={styles['button-field']}>
							<button
								className={classNames(styles.button, { [styles.disabled]: prop.tenancies && !!prop.tenancies.length })}
								onClick={prop.tenancies && !!prop.tenancies.length ? emptyTenancies : triggerDeleteModal}
							>
								Delete property
							</button>
						</div>
					)}
				</div>

				<div className={styles.money}>
					{(!isNaN(prop.balance) && showBalance) || (!isNaN(prop.balance) && showDashboard) ? (
						<>
							<div className={styles.paid}>
								<p className={styles.title}>Total Paid</p>
								<p className={styles.amount}>
									<Decimal price={prop.balance} color={prop.balance > 0 && 'green'} />
								</p>
							</div>
							<div className={styles.sum}>
								<p className={styles.title}>Arrears</p>
								<p className={styles.amount}>
									<Decimal price={prop.total_amount} color={arrearsColor} />
								</p>
							</div>
						</>
					) : (
						<>
							<p className={styles.count}>
								<Decimal price={prop.income_estimate} />
							</p>
							<p className={styles.description}>Income Estimate</p>
						</>
					)}
				</div>

				{!pathSplitter().includes('/dashboard') && (
					<div className={styles.buttons}>
						<button
							className={classNames(styles.tenancy, { [styles.active]: showTenancy }, { [styles.active]: showTenants })}
							onClick={handleTenancyOpen}
						>
							Tenancy
						</button>

						{pathSplitter().includes(`/${prop.id}`) && (
							<NavLink to={`/dashboard/transactions`} className={styles.tenancy} exact={false}>
								<p className={styles.text}>Transactions</p>
							</NavLink>
						)}

						<button
							className={classNames(styles.balance, { [styles.active]: showBalance })}
							onClick={handleBalanceOpen}
						>
							Balance
						</button>
					</div>
				)}
			</div>

			<ConfirmationModal
				isOpen={isDeleteModal}
				currentObject={'property'}
				onClose={triggerDeleteModal}
				deleteObject={handleDelete}
			/>
		</>
	)
}
