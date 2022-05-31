import { FC } from 'react'

import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { RemoveBankFeedModal } from '@components/Modals/RemoveBankFeedModal'

import { useTrigger } from '@hooks/index'
import { styles } from '@themes/index'

import { bankActions } from 'src/store/rootAction'

import Delete from '@assets/icons/delete-icon.svg'

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

const RemoveBtn = styled(SVG)`
	background: transparent;
	border: none;
	cursor: pointer;
	font-size: 24px;
	line-height: 28px;

	&:disabled {
		cursor: auto;
		color: ${styles.lineColor};
	}

	&:not(:disabled) {
		color: ${styles.hoverColor};
	}
`

export type BankFeedItemProps = {
	account: any
}

export const BankFeedItem: FC<BankFeedItemProps> = ({ account }) => {
	const [isDeleteModalOpen, triggerDeleteModal] = useTrigger()
	const dispatch = useDispatch()

	const removeAccountHandler = () => {
		dispatch(bankActions.removeBankById(account.id))
		triggerDeleteModal()
	}

	return (
		<BankLine key={account.id}>
			<BankLogo src={account.icon} />
			<BankInfo>
				<BankAccount>{account.name}</BankAccount>
				<BankIBAN>ACCOUNT {account.number}</BankIBAN>
			</BankInfo>
			<RemoveBtn src={Delete} onClick={triggerDeleteModal} />
			<RemoveBankFeedModal
				onClose={triggerDeleteModal}
				deleteObject={removeAccountHandler}
				isOpen={isDeleteModalOpen}
				account_id={account.id}
				connection_id={account.connectionId}
			/>
		</BankLine>
	)
}
