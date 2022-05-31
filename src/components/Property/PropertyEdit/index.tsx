import React, { ChangeEvent, FC, useEffect, useMemo } from 'react'

import { useDispatch } from 'react-redux'

import { PostcodeInput, PhotoInstance, AddressList } from '@components/index'

import { usePathSplitter, useSelector } from '@hooks/index'

import { commonActionCreators } from 'src/store/common/reducers'
import { propertyActionCreators } from 'src/store/property/reducers'
import { propertyActions } from 'src/store/rootAction'
import { currentPropertySelector } from 'src/store/selectors'

import styles from './styles.module.scss'

import PropertyPlug from '@assets/icons/property-photo-icon.svg'

export const PropertyEdit: FC = () => {
	const currentProperty = useSelector(currentPropertySelector)
	const { pathSplitter } = usePathSplitter()
	const dispatch = useDispatch()

	useEffect(() => {
		return () => {
			dispatch(commonActionCreators.setAddresses([]))
		}
	}, [])

	const disabled = useMemo(() => {
		return !(currentProperty && currentProperty.title.trim() && currentProperty.address)
	}, [currentProperty])

	const handleDone = () => {
		if (currentProperty.id) {
			dispatch(propertyActions.updatePropertyById(currentProperty))
		} else {
			dispatch(propertyActions.createProperty(currentProperty))
		}
	}

	const handleUpdatePhoto = (photo: FormData) => {
		dispatch(propertyActions.uploadPropertyPhoto(photo))
	}

	const handleUpdateFieldByName = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(propertyActionCreators.setCurrentProperty({ ...currentProperty, [e.target.name]: e.target.value }))
	}

	const handleChangePostcode = (postcode: string) => {
		dispatch(
			propertyActionCreators.setCurrentProperty({
				...currentProperty,
				address: { ...currentProperty.address, postcode },
			}),
		)
	}

	const handleChangeAddressInput = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(
			propertyActionCreators.setCurrentProperty({
				...currentProperty,
				address: { ...currentProperty.address, [e.target.name]: e.target.value },
			}),
		)
	}

	const handleChangeAddress = (address: any) => {
		dispatch(propertyActionCreators.setCurrentProperty({ ...currentProperty, address }))
	}

	if (!currentProperty) {
		return null
	}

	return (
		<>
			<div className={styles.property}>
				<PhotoInstance
					photoClassName={'photo-edit'}
					setPhoto={handleUpdatePhoto}
					className={styles.icon}
					photo={currentProperty.filesToProperties[currentProperty.filesToProperties?.length - 1]?.file?.url}
					plug={PropertyPlug}
					imgSizeName={'property'}
				/>

				<div className={styles.information}>
					<div className={styles['title-container-wrapper']}>
						<div className={styles['title-container']}>
							<div className={styles.title__input}>
								<input
									type={'text'}
									value={currentProperty.title || ''}
									placeholder={'Enter Nickname'}
									onChange={handleUpdateFieldByName}
									name={'title'}
								/>
								<label>Property Nickname</label>
							</div>
						</div>
						<div className={styles['title-container']}>
							<div className={styles.title__input}>
								<input
									type={'text'}
									value={currentProperty?.address?.flat || ''}
									placeholder={'Enter Flat/Room'}
									onChange={handleChangeAddressInput}
									name={'flat'}
								/>
								<label>Flat/Room</label>
							</div>
						</div>
						<div className={styles['title-container']}>
							<div className={styles.title__input}>
								<input
									type={'text'}
									value={currentProperty?.address?.house_number || ''}
									placeholder={'Enter House Number'}
									onChange={handleChangeAddressInput}
									name={'house_number'}
								/>
								<label>House Number</label>
							</div>
						</div>
						<div className={styles['title-container']}>
							<div className={styles.title__input}>
								<input
									type={'text'}
									value={currentProperty?.address?.house_name || ''}
									placeholder={'Enter House Name'}
									onChange={handleChangeAddressInput}
									name={'house_name'}
								/>
								<label>House Name</label>
							</div>
						</div>
						<div className={styles['title-container']}>
							<div className={styles.title__input}>
								<input
									type={'text'}
									value={currentProperty?.address?.street || ''}
									placeholder={'Enter Street/Road'}
									onChange={handleChangeAddressInput}
									name={'street'}
								/>
								<label>Street/Road</label>
							</div>
						</div>
						<div className={styles['title-container']}>
							<div className={styles.title__input}>
								<input
									type={'text'}
									value={currentProperty?.address?.city || ''}
									placeholder={'Enter City/Town'}
									onChange={handleChangeAddressInput}
									name={'city'}
								/>
								<label>City/Town</label>
							</div>
						</div>
						<div className={styles['title-container']}>
							<div className={styles.title__input}>
								<input
									type={'text'}
									value={currentProperty?.address?.county || ''}
									placeholder={'Enter County/State/Province'}
									onChange={handleChangeAddressInput}
									name={'county'}
								/>
								<label>County/State/Province</label>
							</div>
						</div>
						<div className={styles['title-container']}>
							<div className={styles.title__input}>
								<input
									type={'text'}
									value={currentProperty?.address?.country || ''}
									placeholder={'Enter Country'}
									onChange={handleChangeAddressInput}
									name={'country'}
								/>
								<label>Country</label>
							</div>
						</div>

						<div className={styles['title-container']}>
							<PostcodeInput changePostcode={handleChangePostcode} postcode={currentProperty.address?.postcode || ''} />
						</div>
					</div>
					<button className={styles.create__btn} onClick={handleDone} disabled={disabled}>
						{pathSplitter().includes('/edit') ? 'Save changes' : 'Save property'}
					</button>
				</div>
			</div>

			<AddressList changeAddress={handleChangeAddress} />
		</>
	)
}
