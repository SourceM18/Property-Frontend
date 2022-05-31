import React from 'react'

import { useDispatch } from 'react-redux'

import { useSelector } from '@hooks/index'
import downloadImg from '@pages/UnAuthPages/LandingPage/img/logo.png'
import stylesLanding from '@pages/UnAuthPages/LandingPage/Landing/styles.module.scss'

import { commonActionCreators } from 'src/store/common/reducers'
import { pwaEventSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

const Download = (): JSX.Element => {
	const pwaEvent = useSelector(pwaEventSelector)
	const dispatch = useDispatch()

	const handleClick = async () => {
		if (pwaEvent) {
			pwaEvent.prompt()
			const { outcome } = await pwaEvent.userChoice

			if (outcome === 'accepted') {
				dispatch(commonActionCreators.setPwaEvent(null))
			}
		}
	}

	if (!pwaEvent) {
		return null
	}

	return (
		<div className={stylesLanding.landingContainer}>
			<a className={styles.downloadLink}>
				<div className={styles.downloadLinkImg}>
					<img src={downloadImg} alt={'download'} />
				</div>
			</a>
			<a className={styles.downloadLink}>
				<div className={styles.link} onClick={handleClick}>
					Download
				</div>
			</a>
		</div>
	)
}

export default Download
