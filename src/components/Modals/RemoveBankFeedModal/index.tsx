import React, { FC, useMemo } from 'react'

import styled from 'styled-components'

import { useSelector } from '@hooks/index'

import { Modal } from '@ui/Modal'

import styles from './styles.module.scss'

const BankLine = styled.div`
	min-height: 75px;
	display: grid;
	border-top: ${styles.thinLine} ${({ theme }) => theme.lineColor};
	border-bottom: ${styles.thinLine} ${({ theme }) => theme.lineColor};
	grid-template-columns: max-content 1fr 40px;
	padding: 0 5px;
	align-items: center;
	grid-column-gap: 15px;
	height: fit-content;
`

const BankLogo = styled.img`
	width: 50px;
	height: 50px;
`

const BankInfo = styled.div`
	display: grid;
	grid-gap: 5px;
`

const BankAccount = styled.div`
	font-size: 20px;
	font-weight: 500;
`

const BankIBAN = styled.div`
	font-size: 14px;
`

export type RemoveBankFeedModalProps = {
	isOpen: boolean
	onClose?: any
	connection_id: string
	account_id: string
	deleteObject?: () => void
}

export const RemoveBankFeedModal: FC<RemoveBankFeedModalProps> = ({
	account_id,
	connection_id,
	isOpen,
	onClose,
	deleteObject,
}) => {
	const { bankFeeds } = useSelector((state) => state.bankReducer)

	const currentAccounts = useMemo(() => {
		return bankFeeds
			.filter((account) => account.connectionId === connection_id)
			.filter((account) => account.id !== account_id)
	}, [bankFeeds, connection_id])

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={styles['confirmation-modal']}>
				{currentAccounts.length > 0 && (
					<>
						<div className={styles.warning}>You have accounts associated with the account you want to delete!</div>
						{currentAccounts.map((account) => (
							<BankLine>
								<BankLogo src={account.icon} />
								<BankInfo>
									<BankAccount>{account.name}</BankAccount>
									<BankIBAN>ACCOUNT {account.number}</BankIBAN>
								</BankInfo>
							</BankLine>
						))}
					</>
				)}

				<div className={styles.title}>Would you like to delete account ?</div>
				<div className={styles.buttons}>
					<button onClick={deleteObject} className={styles.btn}>
						Yes
					</button>
					<button onClick={onClose} className={styles.btn}>
						No
					</button>
				</div>
			</div>
		</Modal>
	)
}
