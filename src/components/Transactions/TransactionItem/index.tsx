import React, { FC, useMemo, useState } from 'react'

import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'

import { ConfirmationModal, Decimal } from '@components/index'

import { dateFormatter } from '@helpers/index'

import { useTrigger } from '@hooks/index'

import { styles } from '@themes/variables'

import { history } from '@utils/index'

import { transactionActions } from 'src/store/rootAction'

import { TransactionItemProps } from './@types'

import Delete from '@assets/icons/delete-icon.svg'
import Hide from '@assets/icons/hide-icon.svg'
import Lock from '@assets/icons/keyhole.svg'
import Key from '@assets/icons/keyHorizontalLeft.svg'
import Reconcile from '@assets/icons/reconcilation-icon.svg'
import Back from '@assets/icons/return.svg'
import UnReconcile from '@assets/icons/unreconcilation-icon.svg'

// DefaultButton - дефолтные стили для всех button
// TODO вынести в ОБЩИЕ стили
// const DefaultButton = styled.div`
// 	background: transparent;
// 	border: none;
// 	cursor: pointer;
// 	font-size: 24px;
// 	line-height: 28px;
//
// 	&:disabled {
// 		cursor: auto;
// 		color: ${({ theme }) => theme.passiveColor};
// 	}
//
// 	&:not(:disabled) {
// 		&:hover {
// 			color: ${styles.hoverColor};
// 		}
// 	}
// `

const Transaction = styled.div`
	height: 60px;
	display: grid;
	border-bottom: 1px solid var(--line-color);
	grid-template-columns: 50px 165px 165px 85px 1fr;
	background: ${({ theme }) => theme.cardColor};
	grid-gap: 10px;
	padding: 10px;
	cursor: pointer;

	&.reconcile-transaction {
		padding: 10px 25px;
	}

	@media (max-width: ${styles.mobileWidth}) {
		grid-template-columns: 30px 50px 50px 30px 1fr;
		min-height: 27px;
		height: auto;
	}
`

const TransactionStatus = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`

const TransactionAmount = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;

	@media (max-width: ${styles.tabletWidth}) {
		font-size: 20px;
	}

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 8px;
	}
`

const TransactionBalance = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;

	@media (max-width: ${styles.tabletWidth}) {
		font-size: 20px;
	}

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 8px;
	}
`

const TransactionDate = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;

	@media (max-width: ${styles.tabletWidth}) {
		font-size: 12px;
		font-weight: 300;
		text-align: center;
	}

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 8px;
		line-height: 1.2;
		font-weight: 300;
	}
`

const TransactionReference = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	font-size: 14px;
	overflow: hidden;

	span {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	@media (max-width: ${styles.tabletWidth}) {
		font-size: 12px;
		font-weight: 300;
		text-align: right;
	}

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 8px;
		font-weight: 300;
	}
`
const BackContainer = styled.div`
	order: 3;
`
const BackIcon = styled(SVG)`
	margin: 0 5px 0 0;
	height: 20px;
	width: 20px;
	path {
		fill: ${({ theme }) => theme.textColor};
	}
	@media (max-width: ${styles.tabletWidth}) {
		height: 12px;
		width: 12px;
	}
`
const DeleteIcon = styled(SVG)`
	margin: 0 5px 0 0;
	height: 20px;
	width: 20px;
	path {
		stroke: ${({ theme }) => theme.textColor};
	}
	@media (max-width: ${styles.tabletWidth}) {
		height: 12px;
		width: 12px;
	}
`
const ReconcileContainer = styled.div`
	order: 0;
`
const UnreconcileContainer = styled.div`
	order: 1;
`
const UnreconcileIcon = styled(SVG)`
	margin: 0 5px 0 0;
	height: 20px;
	width: 20px;
	path {
		fill: ${({ theme }) => theme.textColor};
		stroke: ${({ theme }) => theme.textColor};
	}
	@media (max-width: ${styles.tabletWidth}) {
		height: 12px;
		width: 12px;
	}
`
const ControlContainer = styled.div`
	order: 2;
`
const ControlIcon = styled(SVG)`
	margin: 0 5px 0 0;
	height: 20px;
	width: 20px;
	fill: ${({ theme }) => theme.textColor};
	@media (max-width: ${styles.tabletWidth}) {
		height: 12px;
		width: 12px;
	}
`
const TransactionIcon = styled(SVG)`
	height: 40px;
	width: 40px;

	&:hover {
		& > path {
			opacity: 0.6;
		}
	}

	@media (max-width: ${styles.tabletWidth}) {
		height: auto;
		width: 25px;
	}

	@media (max-width: ${styles.mobileWidth}) {
		height: auto;
		width: 14px;
	}
`

const BtnContainer = styled.div`
	height: 60px;
	padding: 15px;
	border-bottom: ${styles.thinLine} ${({ theme }) => theme.lineColor};

	@media (max-width: ${styles.tabletWidth}) {
		height: auto;
		padding: 15px;
	}

	@media (max-width: ${styles.mobileWidth}) {
		padding: 5px 10px;
	}
`

const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const Button = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	font-size: 20px;
	line-height: 28px;

	&:disabled {
		cursor: auto;
		color: ${({ theme }) => theme.passiveColor};
	}

	&:not(:disabled) {
		&:hover {
			color: ${styles.hoverColor};
			svg path {
				fill: ${styles.hoverColor};
				stroke: ${styles.hoverColor};
			}
		}
	}

	@media (max-width: ${styles.tabletWidth}) {
		font-size: 18px;
	}

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 8px;
		line-height: 20px;
	}
`

const DeleteButton = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	font-size: 20px;
	line-height: 28px;

	&:disabled {
		cursor: auto;
		color: ${({ theme }) => theme.passiveColor};
	}

	&:not(:disabled) {
		&:hover {
			color: ${styles.hoverColor};
			svg path {
				stroke: ${styles.hoverColor};
			}
		}
	}

	@media (max-width: ${styles.tabletWidth}) {
		font-size: 18px;
	}

	@media (max-width: ${styles.mobileWidth}) {
		font-size: 8px;
		line-height: 20px;
	}
`

export const TransactionItem: FC<TransactionItemProps> = ({
	transaction,
	showButtons,
	setShowButtons,
	reconcileClassName,
}) => {
	const [isDeleteModal, triggerDeleteModal] = useTrigger()
	const [typeModal, setTypeModal] = useState('')
	const [deleteFunc, setDeleteFunc] = useState<() => void>()
	const dispatch = useDispatch()

	const linkTransaction = () => {
		history.push(`/dashboard/transactions/${transaction.id}`)
	}

	const unlinkTransaction = () => {
		dispatch(transactionActions.unreconcileCustomTransaction(transaction.id))
		setShowButtons(null)
	}

	const hideTransaction = (hidden: boolean) => {
		const transaction_id = transaction.id
		dispatch(transactionActions.hideTransaction({ transaction_id, hidden }))
		setShowButtons(null)
	}
	const unShowTransaction = () => {
		setShowButtons(null)
	}

	const deleteTransaction = () => {
		dispatch(transactionActions.deleteCustomTransaction(transaction.id))
	}

	const openUnreconcile = () => {
		triggerDeleteModal()
		setTypeModal('unreconcile')
		setDeleteFunc(() => unlinkTransaction)
	}

	const openDeleteTransaction = () => {
		triggerDeleteModal()
		setTypeModal('transaction')
		setDeleteFunc(() => deleteTransaction)
	}

	const currentButtons = useMemo(() => {
		return (
			<Buttons>
				{!transaction?.is_hidden && !transaction?.in_use ? (
					<ReconcileContainer>
						<Button onClick={linkTransaction}>
							<ControlIcon src={Reconcile} />
							Reconcile
						</Button>
					</ReconcileContainer>
				) : (
					<ReconcileContainer style={{ marginLeft: '115px' }}></ReconcileContainer>
				)}

				{transaction?.partitions?.length !== 0 && !transaction?.is_hidden ? (
					<UnreconcileContainer>
						<Button onClick={openUnreconcile}>
							<UnreconcileIcon src={UnReconcile} />
							Unreconcile
						</Button>
					</UnreconcileContainer>
				) : (
					<UnreconcileContainer></UnreconcileContainer>
				)}

				{!transaction?.is_hidden && !transaction?.meta?.custom && transaction?.partitions?.length === 0 ? (
					<ControlContainer>
						<Button onClick={hideTransaction.bind(null, true)}>
							{' '}
							<ControlIcon src={Hide} />
							Hide
						</Button>
					</ControlContainer>
				) : (
					<ControlContainer></ControlContainer>
				)}
				{!(transaction?.amount - transaction?.balance) && !transaction?.is_hidden && transaction?.meta?.custom ? (
					<ControlContainer>
						<DeleteButton onClick={openDeleteTransaction}>
							<DeleteIcon src={Delete} />
							Delete
						</DeleteButton>
					</ControlContainer>
				) : (
					<ControlContainer></ControlContainer>
				)}
				{transaction?.is_hidden && <Button onClick={hideTransaction.bind(null, false)}>Unhide Transaction</Button>}
				<BackContainer>
					<Button onClick={setShowButtons?.bind(null, null)}>
						{' '}
						<BackIcon src={Back} />
						Back
					</Button>
				</BackContainer>
			</Buttons>
		)
	}, [transaction])

	if (!transaction) {
		return null
	}

	return (
		<>
			<Transaction className={reconcileClassName} onClick={setShowButtons?.bind(null, transaction?.id)}>
				<TransactionStatus>
					{transaction.in_use || transaction.is_hidden ? <TransactionIcon src={Lock} /> : <TransactionIcon src={Key} />}
				</TransactionStatus>
				<TransactionAmount>
					<Decimal price={transaction.amount} />
				</TransactionAmount>
				<TransactionBalance>
					<Decimal price={transaction.balance} />
				</TransactionBalance>
				<TransactionDate>{dateFormatter(transaction.timestamp.toString())}</TransactionDate>
				<TransactionReference>
					<span>{transaction?.description}</span>
				</TransactionReference>
			</Transaction>
			{showButtons && showButtons === transaction.id ? (
				<BtnContainer onClick={unShowTransaction.bind(null, true)}>{currentButtons}</BtnContainer>
			) : (
				false
			)}
			<ConfirmationModal
				isOpen={isDeleteModal}
				currentObject={typeModal}
				onClose={triggerDeleteModal}
				deleteObject={deleteFunc}
			/>
		</>
	)
}
