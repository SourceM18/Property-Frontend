import React from 'react'

import SVG from 'react-inlinesvg'

import styles from './styles.module.scss'

import DownloadIcon from '@assets/icons/download-icon.svg'

export const Documents = (): JSX.Element => {
	return (
		<div className={styles.documents}>
			<div className={styles['documents-title']}>Documents</div>
			<div className={styles['documents-list']}>
				<div className={styles['documents-item']}>
					<span>RentWallet service terms</span>
					<a
						target={'_blank'}
						href="https://firebasestorage.googleapis.com/v0/b/nomadic-buffer-291910.appspot.com/o/docs%2FRentWalletServiceTerms.pdf?alt=media&token=ab8fc993-ceb2-4a03-afdc-4ca032d9592f"
						rel="noreferrer"
					>
						<SVG src={DownloadIcon} />
					</a>
				</div>

				<div className={styles['documents-item']}>
					<span>RentWallet privacy policy and cookies</span>
					<a
						target={'_blank'}
						href="https://firebasestorage.googleapis.com/v0/b/nomadic-buffer-291910.appspot.com/o/docs%2FRentWalletPrivacyPolicy.pdf?alt=media"
						download
						rel="noreferrer"
					>
						<SVG src={DownloadIcon} />
					</a>
				</div>
			</div>
		</div>
	)
}
