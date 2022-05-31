import React, { FC, useEffect, useMemo, useState } from 'react'

import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { Documents } from '@components/FAQ/Documents'
import { Calendar, DashboardTotal, Messenger } from '@components/index'
import { BanksFeed } from '@components/Settings/BanksFeed'

import { usePathSplitter, useSelector } from '@hooks/index'

import { BigButton } from '@ui/index'
import { history } from '@utils/index'
import { PaymentType } from '@utils/Types/instances'

import { commonActionCreators } from 'src/store/rootAction'
import {
	bigOverdueSelector,
	invoicesSelector,
	paidSelector,
	permissionsSelector,
	plannedSelector,
	propertiesSelector,
	smallOverdueSelector,
	totalSelector,
} from 'src/store/selectors'

import styles from './styles.module.scss'

import { WidgetItem } from './WidgetItem'

import Plus from '@assets/icons/circle-plus.svg'
import Download from '@assets/icons/download-icon.svg'
import Return from '@assets/icons/return.svg'

export const Widgets: FC<{
	active?: string
	setActiveTab?: (tab: string) => void
	setIsVisibleSectionsChange?: (key: boolean) => void
	setIsVisibleQuestionsChange?: (key: boolean) => void
	isVisibleSectionsChange?: boolean
	isVisibleQuestionsChange?: boolean
	activeNameSection?: string
	showContactsFeed?: boolean
	handleShowSendForm?: () => void
}> = ({
	active,
	setActiveTab,
	setIsVisibleSectionsChange,
	isVisibleSectionsChange,
	setIsVisibleQuestionsChange,
	isVisibleQuestionsChange,
	activeNameSection,
	handleShowSendForm,
	showContactsFeed,
}) => {
	// const { bankAccounts } = useSelector(state => state.bankReducer);
	const permissions = useSelector(permissionsSelector)
	const properties = useSelector(propertiesSelector)
	const invoices = useSelector(invoicesSelector)
	const total = useSelector(totalSelector)
	const bigOverdue = useSelector(bigOverdueSelector)
	const smallOverdue = useSelector(smallOverdueSelector)
	const paid = useSelector(paidSelector)
	const planned = useSelector(plannedSelector)
	const { pathSplitter, path, pathTail } = usePathSplitter()
	const [showBankFeeds, setShowBanksFeed] = useState(true)
	const [showSendForm, setShowSendForm] = useState(true)
	const [isDocumentsListVisible, setIsDocumentsListVisible] = useState(true)
	const [isDocumentButtonVisible, setIsDocumentButtonVisible] = useState(false)
	const [isSectionButtonVisible, setIsSectionButtonVisible] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	const { pathname } = useLocation()
	const dispatch = useDispatch()

	const pathIncludes = (link: string) => pathSplitter().includes(link)

	const handleResize = () => {
		if (window.innerWidth > 1200) {
			setShowBanksFeed(true)
			setShowSendForm(true)
			setIsDocumentsListVisible(true)
			setIsDocumentButtonVisible(false)
			setIsMobile(false)
		} else {
			setIsMobile(true)
			setShowBanksFeed(false)
			setIsDocumentsListVisible(false)
			setIsSectionButtonVisible(true)
			setShowSendForm(false)
		}
	}

	useEffect(() => {
		if (pathIncludes('/settings') || pathIncludes('/faq') || pathIncludes('/contacts')) {
			handleResize()
			window.addEventListener('resize', handleResize)

			return () => {
				window.removeEventListener('resize', handleResize)
			}
		}
	}, [])

	const currentInvoices = useMemo(() => {
		if (invoices && total === PaymentType.bigOverdue) {
			return bigOverdue
		}

		if (invoices && total === PaymentType.smallOverdue) {
			return smallOverdue
		}

		if (invoices && total === PaymentType.paid) {
			return paid
		}

		if (invoices && total === PaymentType.planned) {
			return planned
		}

		if (invoices && total === PaymentType.all) {
			return invoices
		}

		return []
	}, [total, invoices])

	// const removeBankHandler = (id: Bank['id']) => {
	// dispatch( banksActions.deleteBankByID( id ) )
	// Logger.warning('This features is not supported yet!');
	// }

	const handleAddNewTransaction = () => {
		history.push('/dashboard/transactions/new')
	}

	const handleAddNewProperty = () => {
		history.push('/properties/new')
	}

	const handleAddNewTenant = () => {
		history.push('/tenants/new')
	}

	const showDocumentsFeed = () => {
		setIsDocumentsListVisible(true)
		setIsSectionButtonVisible(false)
		setIsVisibleSectionsChange(false)
		setIsDocumentButtonVisible(true)
		setIsVisibleQuestionsChange(false)
	}

	const showSectionFeed = () => {
		setIsDocumentsListVisible(false)
		setIsVisibleSectionsChange(true)
		setIsSectionButtonVisible(true)
		setIsDocumentButtonVisible(false)
	}

	const backToSectionList = () => {
		setIsVisibleQuestionsChange(false)
		setIsVisibleSectionsChange(true)
	}

	const handleDownload = () => {
		dispatch(
			commonActionCreators.addToast({
				message: 'Downloading is not supported yet!',
				isSocialMediaShowed: false,
				doAfterClosed: null,
				type: 'error',
			}),
		)
	}

	const settingsTabMobileVisible = (tab: string, title: string) => {
		return (
			active !== tab && (
				<button className={styles.button} onClick={setActiveTab.bind(this, tab)}>
					{title}
				</button>
			)
		)
	}

	const flexStyle = !isVisibleSectionsChange && !(pathIncludes('/dashboard') || pathIncludes('/properties'))

	return (
		<div
			className={classNames(
				styles.widgets,
				{ [styles.banks]: pathIncludes('/settings') },
				{ [styles.flex]: flexStyle },
				{ [styles['all-height']]: pathIncludes('/contacts') },
			)}
		>
			{!(path === '/tenants' || path === '/accounts' || path === '/contacts' || path === '/faq') &&
				((path === '/properties' && properties && properties.length > 0) ||
					path === '/settings' ||
					path === '/dashboard') &&
				permissions && (
					<WidgetItem>
						<Calendar />
					</WidgetItem>
				)}

			{path === '/contacts' && (showSendForm || !showContactsFeed) && (
				<WidgetItem classes={{ [styles.visible]: !showContactsFeed }}>
					<Messenger />
				</WidgetItem>
			)}

			{pathname === '/contacts' && !showContactsFeed && (
				<WidgetItem>
					<BigButton onClick={handleShowSendForm} icon={Return} text={'Back'} />
				</WidgetItem>
			)}

			{pathname === '/contacts' && showContactsFeed && (
				<WidgetItem classes={styles.mobile}>
					<BigButton onClick={handleShowSendForm} text={'Send email'} />
				</WidgetItem>
			)}

			{pathIncludes('/dashboard') && (
				<WidgetItem>
					<BigButton onClick={handleDownload} icon={Download} text={'Download'} />
				</WidgetItem>
			)}

			{(pathIncludes('/paid') ||
				pathIncludes('/planned') ||
				pathIncludes('/smallOverdue') ||
				pathIncludes('/bigOverdue') ||
				pathIncludes('/all')) && (
				<WidgetItem>
					<DashboardTotal invoices={currentInvoices} type={total} />
				</WidgetItem>
			)}

			{path === '/faq' && isDocumentsListVisible && (
				<WidgetItem slasses={styles['widget-alone']}>
					<Documents />
				</WidgetItem>
			)}

			{path === '/faq' && isSectionButtonVisible && !isVisibleQuestionsChange && (
				<WidgetItem>
					<BigButton onClick={showDocumentsFeed} text={'Documents'} />
				</WidgetItem>
			)}

			{path === '/faq' && isDocumentButtonVisible && (
				<WidgetItem>
					<BigButton onClick={showSectionFeed} text={'Sections'} />
				</WidgetItem>
			)}

			{pathname === '/faq' && isMobile && isVisibleQuestionsChange && (
				<div className={styles['widget-change']}>
					<WidgetItem>
						<BigButton onClick={backToSectionList} text={activeNameSection} />
					</WidgetItem>

					<WidgetItem>
						<BigButton onClick={showDocumentsFeed} text={'Documents'} />
					</WidgetItem>
				</div>
			)}

			{pathSplitter().length < 3 && pathIncludes('/transactions') && (
				<WidgetItem>
					<BigButton onClick={handleAddNewTransaction} icon={Plus} text={'Add New Transaction'} />
				</WidgetItem>
			)}

			{path === '/properties' && path === pathTail && (
				<WidgetItem>
					<BigButton onClick={handleAddNewProperty} icon={Plus} text={'Add New Property'} />
				</WidgetItem>
			)}

			{pathIncludes('/tenancy') && (
				<WidgetItem>
					<BigButton onClick={handleAddNewProperty} icon={Plus} text={'Add New Property'} />
				</WidgetItem>
			)}

			{path === '/tenants' && path === pathTail && (
				<WidgetItem>
					<BigButton onClick={handleAddNewTenant} icon={Plus} text={'Add New Tenant'} />
				</WidgetItem>
			)}

			{(pathname === '/properties/new' ||
				pathname === '/tenants/new' ||
				(pathSplitter().length >= 3 && !pathIncludes('/tenancy'))) && (
				<WidgetItem>
					<BigButton onClick={history.goBack} icon={Return} text={'Back'} />
				</WidgetItem>
			)}

			{pathname === '/settings' && !showBankFeeds && (
				<div className={styles['button-widget']}>
					{settingsTabMobileVisible('payee', 'Payee Center')}
					{settingsTabMobileVisible('banks', 'Bank Feeds')}
					{settingsTabMobileVisible('subs', 'Subscription')}
				</div>
			)}

			{pathname === '/settings' && showBankFeeds && (
				<>
					{permissions && permissions.includes('bank feeds') ? (
						<BanksFeed />
					) : (
						<div className={styles['access-denied']}>
							Please, subscribe to plan "Smart" or "Advanced" to connect Bank Feeds
						</div>
					)}
				</>
			)}
		</div>
	)
}
