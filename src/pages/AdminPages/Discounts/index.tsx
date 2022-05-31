import React, { FC, useEffect } from 'react'

import InlineSVG from 'react-inlinesvg'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'

// import { discountsActions } from 'src/store/rootAction';
import { DiscountsList } from '@components/index'

import { NewItem } from '@containers/index'
import { usePathSplitter } from '@hooks/index'

import { NewItemType } from '@utils/Types/localTypes'

import { AppLink, GoBackButton } from '../../../ui/index'

import styles from './styles.module.scss'

import Plus from 'src/assets/icons/circle-plus.svg'

export const DiscountsPage: FC = () => {
	const { pathname } = useLocation()
	const { path } = usePathSplitter()
	// const dispatch = useDispatch()

	useEffect(() => {
		// dispatch( discountsActions.getDiscounts() );
	}, [])

	return (
		<div className={styles['discount-page']}>
			<div className={styles['new-discount']}>
				{pathname === '/discount' ? (
					<AppLink to={`${path}/new`} className={styles['add-new']}>
						<InlineSVG className={styles.icon} src={Plus} />
						<p className={styles.text}>Add New Discount</p>
					</AppLink>
				) : (
					<GoBackButton className={styles['go-back']} />
				)}
			</div>

			<Switch>
				<Route exact path={`${path}`}>
					<DiscountsList />
				</Route>

				<Route exact path={`${path}/new`}>
					<NewItem item={NewItemType.discount} />
				</Route>

				{/* <Route exact path={ `${ path }/:${ FounderFieldType.discount }` }> */}
				{/*	<Founder field={ FounderFieldType.discount } component={ DiscountsEdit }/> */}
				{/* </Route> */}

				<Redirect to={'/discount'} />
			</Switch>
		</div>
	)
}
