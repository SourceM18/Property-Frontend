import React, { FC } from 'react'

import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import { ConfirmationModal } from '@components/index'

import { dateFormatter } from '@helpers/index'
import { useSelector, useTrigger } from '@hooks/index'
import { history } from '@utils/index'

import { tenancyActions, tenancyActionCreators } from 'src/store/rootAction'
import { currentPropertySelector, currentTenancySelector } from 'src/store/selectors'

import { TenancyItemProp } from './@types'
import styles from './styles.module.scss'

import TrashIcon from '@assets/icons/trash-solid.svg'

export const TenancyItem: FC<TenancyItemProp> = ({ tenancy }) => {
	const currentTenancy = useSelector(currentTenancySelector)
	const currentProperty = useSelector(currentPropertySelector)
	const [openModal, setOpenModal] = useTrigger()
	const dispatch = useDispatch()

	const clickHandler = () => {
		history.push(`/properties/${currentProperty.id}/tenancy/${tenancy.id}`)
	}

	const removeHandler = () => {
		dispatch(tenancyActions.deleteTenancyById({ tenancy_id: tenancy.id, setOpenModal }))
		if (currentTenancy && currentTenancy.id === tenancy.id) {
			dispatch(tenancyActionCreators.setCurrentTenancy(null))
		}
	}

	return (
		<div className={styles.tenancy}>
			<div className={styles.information} onClick={clickHandler}>
				<p className={styles.name}>
					{tenancy.tenant.name} <span className={styles.surname}>{tenancy.tenant.surname}</span>
				</p>
				<p className={styles.email}>{tenancy.tenant.email}</p>
			</div>

			<div className={styles.from}>
				<p className={styles.title}>From</p>
				<p className={styles.text}>{dateFormatter(tenancy.start)}</p>
			</div>

			<div className={styles.to}>
				<p className={styles.title}>To</p>
				<p className={styles.text}>{dateFormatter(tenancy.end)}</p>
			</div>

			<div className={styles.trash}>
				<button onClick={setOpenModal} className={styles.button}>
					<SVG src={TrashIcon} />
				</button>
			</div>

			<ConfirmationModal
				onClose={setOpenModal.bind(null, false)}
				deleteObject={removeHandler}
				currentObject={'tenancy'}
				isOpen={openModal}
			/>
		</div>
	)
}
