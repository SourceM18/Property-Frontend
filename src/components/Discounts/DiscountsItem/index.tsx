import React, { FC, useState } from 'react'

import InlineSVG from 'react-inlinesvg'

// import { discountsActions } from 'src/store/rootAction';
import { ConfirmationModal } from '@components/index'

import { dateFormatter } from '@helpers/index'

import styles from './styles.module.scss'

import TrashIcon from '@assets/icons/trash-solid.svg'

export const DiscountsItem: FC<{ discount: any }> = ({ discount }) => {
	const [openModal, setOpenModal] = useState(false)
	// const dispatch = useDispatch()

	const removeHandler = () => {
		setOpenModal(false)
		// dispatch( discountsActions.removeDiscountById( discount.id ) );
	}

	return (
		<div className={styles['discount-item']}>
			<div
				// onClick={ () => { history.push( `/discount/${ discount.id }`) } }
				className={styles.discount}
			>
				<p>{discount.discount}%</p>
			</div>

			<div className={styles.code}>
				<p>{discount.promo_code}</p>
			</div>

			<div className={styles.balance}>
				<p>{discount.balance}</p>
			</div>

			<div className={styles.dates}>
				<div className={styles.from}>{dateFormatter(discount.from)}</div>
				<div className={styles.to}>{dateFormatter(discount.to)}</div>
			</div>

			<div className={styles.description}>
				<p>{discount.description}</p>
			</div>

			<div className={styles.remove}>
				<button onClick={setOpenModal.bind(null, true)} className={styles.btn}>
					<InlineSVG src={TrashIcon} />
				</button>
			</div>

			<ConfirmationModal
				onClose={setOpenModal.bind(null, false)}
				deleteObject={removeHandler}
				currentObject={'discount'}
				isOpen={openModal}
			/>
		</div>
	)
}
