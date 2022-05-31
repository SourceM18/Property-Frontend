import React, { useEffect, useState } from 'react'

import classNames from 'classnames'

import SVG from 'react-inlinesvg'

import { Widgets } from '@components/index'

import { HeadingPage, WrapperPage } from '@ui/index'

import styles from './styles.module.scss'

import BackUpIcon from '@assets/icons/back-up-icon.svg'

export const FAQ = (): JSX.Element => {
	const [activeSectionKey, setActiveSectionKey] = useState(0)
	const [activeQuestionKey, setActiveQuestionKey] = useState(null)
	const [isQuestionVisible, setIsQuestionVisible] = useState(false)

	const [isVisibleQuestionsChange, setIsVisibleQuestionsChange] = useState(true)
	const [isVisibleSectionsChange, setIsVisibleSectionsChange] = useState(true)
	const [isMobileWidth, setIsMobileWidth] = useState(false)
	const [activeNameSection, setActiveNameSection] = useState('')

	const onActiveSectionChange = (index: number, name: string) => {
		setActiveSectionKey(index)
		setIsQuestionVisible(false)
		setActiveQuestionKey(null)
		if (isMobileWidth) {
			setIsVisibleQuestionsChange(true)
			setIsVisibleSectionsChange(false)
			setActiveNameSection(name)
		}
	}

	const onActiveQuestionChange = (index: number) => {
		setActiveQuestionKey(index)
		setIsQuestionVisible(true)
	}

	const isQuestionVisibleChange = () => {
		setIsQuestionVisible(false)
		setActiveQuestionKey(null)
	}

	const handleResize = () => {
		if (window.innerWidth > 1200) {
			setIsVisibleQuestionsChange(true)
			setIsMobileWidth(false)
			setIsVisibleSectionsChange(true)
		} else {
			setIsVisibleQuestionsChange(false)
			setIsMobileWidth(true)
		}
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const faqData = [
		{
			name: 'Section 1',
			questions: [
				{
					id: 1,
					question: 'Question 1',
					text: '',
				},
				{
					id: 2,
					question: 'Question 2',
					text: '',
				},
				{
					id: 3,
					question: 'Question 3',
					text: '',
				},
				{
					id: 4,
					question: 'Question 4',
					text: '',
				},
				{
					id: 5,
					question: 'Question 5',
					text: '',
				},
				{
					id: 6,
					question: 'Question 6',
					text: '',
				},
			],
		},
		{
			name: 'Section 2',
			questions: [
				{
					id: 1,
					question: 'Question 1',
					text: '',
				},
				{
					id: 2,
					question: 'Question 2',
					text: '',
				},
				{
					id: 3,
					question: 'Question 3',
					text: '',
				},
				{
					id: 4,
					question: 'Question 4',
					text: '',
				},
				{
					id: 5,
					question: 'Question 5',
					text: '',
				},
				{
					id: 6,
					question: 'Question 6',
					text: '',
				},
			],
		},
		{
			name: 'Section 3',
			questions: [
				{
					id: 1,
					question: 'Question 1',
					text: '',
				},
				{
					id: 2,
					question: 'Question 2',
					text: '',
				},
				{
					id: 3,
					question: 'Question 3',
					text: '',
				},
				{
					id: 4,
					question: 'Question 4',
					text: '',
				},
				{
					id: 5,
					question: 'Question 5',
					text: '',
				},
				{
					id: 6,
					question: 'Question 6',
					text: '',
				},
			],
		},
		{
			name: 'Section 4',
			questions: [
				{
					id: 1,
					question: 'Question 1',
					text: '',
				},
				{
					id: 2,
					question: 'Question 2',
					text: '',
				},
				{
					id: 3,
					question: 'Question 3',
					text: '',
				},
				{
					id: 4,
					question: 'Question 4',
					text: '',
				},
				{
					id: 5,
					question: 'Question 5',
					text: '',
				},
				{
					id: 6,
					question: 'Question 6',
					text: '',
				},
			],
		},
		{
			name: 'Section 5',
			questions: [
				{
					id: 1,
					question: 'Question 1',
					text: '',
				},
				{
					id: 2,
					question: 'Question 2',
					text: '',
				},
				{
					id: 3,
					question: 'Question 3',
					text: '',
				},
				{
					id: 4,
					question: 'Question 4',
					text: '',
				},
				{
					id: 5,
					question: 'Question 5',
					text: '',
				},
				{
					id: 6,
					question: 'Question 6',
					text: '',
				},
			],
		},
	]

	return (
		<WrapperPage>
			<div
				className={classNames(
					styles.faq,
					{ [styles['faq-width']]: isMobileWidth },
					{ [styles['faq-reverse']]: !isVisibleSectionsChange || !isVisibleQuestionsChange },
				)}
			>
				{isVisibleSectionsChange && (
					<div className={styles['faq-sections']}>
						<div className={styles['faq-sections-title']}>Sections</div>
						<div className={styles['faq-sections-list']}>
							{faqData.map((section, index) => {
								return (
									<div
										key={section.name}
										className={classNames(styles['faq-sections-item'], { [styles.active]: index === activeSectionKey })}
										onClick={() => onActiveSectionChange(index, section.name)}
									>
										{section.name}
									</div>
								)
							})}
						</div>
					</div>
				)}

				{isVisibleQuestionsChange && (
					<div className={styles['faq-questions']}>
						<div className={classNames(styles['faq-questions-list'], { [styles.active]: isQuestionVisible })}>
							{faqData
								.filter((value, index) => index === activeSectionKey)
								.map((item, index) => {
									return item.questions.map((item, index) => {
										return (
											<div
												key={item.id}
												className={classNames(styles['faq-questions-item'], {
													[styles.active]: index === activeQuestionKey,
												})}
												onClick={() => !isQuestionVisible && onActiveQuestionChange(index)}
											>
												<h3>{item.question}</h3>
												<div className={styles['faq-questions-item-text']}>{item.text}</div>
												<div className={styles['faq-questions-back']}>
													<SVG src={BackUpIcon} onClick={isQuestionVisibleChange} />
												</div>
											</div>
										)
									})
								})}
						</div>
					</div>
				)}
			</div>
			<Widgets
				setIsVisibleSectionsChange={setIsVisibleSectionsChange}
				isVisibleSectionsChange={isVisibleSectionsChange}
				setIsVisibleQuestionsChange={setIsVisibleQuestionsChange}
				isVisibleQuestionsChange={isVisibleQuestionsChange}
				activeNameSection={activeNameSection}
			/>
			<HeadingPage text="FAQ" />
		</WrapperPage>
	)
}
