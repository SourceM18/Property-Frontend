import React, { FC, useEffect } from 'react'

// import { discountsActions } from 'src/store/rootAction';

import styles from './styles.module.scss'

export const DiscountsList: FC = () => {
	// const { discount } = useSelector( state => state.discountsReducer );
	// const dispatch = useDispatch()

	useEffect(() => {
		// dispatch( discountsActions.getDiscounts() );
	}, [])

	return (
		<div className={styles['discount-list']}>
			{/* { */}
			{/*  discount && discount.map( ( discount: any ) => */}
			{/*    <DiscountsItem key={ discount.id } discount={ discount } /> */}
			{/*  ) */}
			{/* } */}
		</div>
	)
}
