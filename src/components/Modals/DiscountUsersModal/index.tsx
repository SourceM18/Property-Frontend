import React, { FC } from 'react'

// import { discountsActions } from 'src/store/rootAction';
import { Modal } from '@ui/Modal'

import { DiscountUsersModalProps } from './@types'
import styles from './styles.module.scss'

export const DiscountUsersModal: FC<DiscountUsersModalProps> = ({ isOpen, onClose }) => {
	// const { currentDiscount, users } = useSelector( state => state.discountsReducer );
	// const dispatch = useDispatch()

	// const selectedUser = useMemo( () => {
	//   if ( currentDiscount && currentDiscount.user_ids ) {
	//     return users?.map( ( user: any ) => ( {
	//       ...user,
	//       selected: currentDiscount.user_ids.includes( Number( user.id ) )
	//     } ) )
	//   } else {
	//     return []
	//   }
	// }, [ users, currentDiscount ] );

	// const handleSelect = (id: number) => {
	// 	// if ( currentDiscount.user_ids.includes( Number( id ) ) ) {
	// 	//   const filteredIds = currentDiscount.user_ids.filter( ( user_id: any ) => user_id !== id );
	// 	// dispatch( discountsActions.updateCurrent( { user_ids: filteredIds } ) )
	// 	// } else {
	// 	// dispatch( discountsActions.updateCurrent( { user_ids: [ ...currentDiscount.user_ids, id ] } ) )
	// 	// }
	// }

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={styles['users-modal']}>
				{/* <div className={ styles['users-list'] }> */}
				{/*  { */}
				{/*    selectedUser && selectedUser.map( user => ( */}
				{/*      <div */}
				{/*        onClick={ handleSelect.bind( null, Number( user.id ) ) } */}
				{/*        className={ classNames( */}
				{/*          styles['users-item'], */}
				{/*          { [styles['active']]: user.selected }, */}
				{/*        ) } */}
				{/*        key={ user.id } */}
				{/*      > */}
				{/*        <div className={ styles['name'] }>{ user.name } { user.surname }</div> */}
				{/*        <div className={ styles['email'] }>{ user.email }</div> */}
				{/*      </div> */}
				{/*    ) ) */}
				{/*  } */}
				{/* </div> */}
			</div>
		</Modal>
	)
}
