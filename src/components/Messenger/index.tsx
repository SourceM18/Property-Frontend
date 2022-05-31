import React, { useState } from 'react'

import SVG from 'react-inlinesvg'
import { useDispatch } from 'react-redux'

import { useSelector } from '@hooks/index'

import { commonActionCreators, commonActions } from 'src/store/rootAction'
import { isFullWidthEmailSelector } from 'src/store/selectors'

import styles from './styles.module.scss'

import FullWidthActiveIcon from '@assets/icons/fullWidth-active.svg'
import FullWidthIcon from '@assets/icons/fullWidth-icon.svg'

export const Messenger = (): JSX.Element => {
	const isFullWidthEmail = useSelector(isFullWidthEmailSelector)
	const [mail, setMail] = useState({ message: '', subject: '' })
	const [isDisabledSendForm, setIsDisabledSendForm] = useState(true)
	const dispatch = useDispatch()

	const isEmptyField = () => {
		if (mail.message.length && mail.subject.length) {
			setIsDisabledSendForm(false)
		} else {
			setIsDisabledSendForm(true)
		}
	}

	const fullWidthEmailToggle = () => {
		dispatch(commonActionCreators.setIsFullWidthEmail(!isFullWidthEmail))
	}

	const onMessengerFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setMail({ ...mail, [e.target.name]: e.target.value })
	}

	const onSubmitFormClick = () => {
		dispatch(commonActions.sendEmail(mail))
	}

	return (
		<div className={styles.messenger}>
			<div className={styles['messenger-title']}>
				<p>Send email</p>
				<SVG src={isFullWidthEmail ? FullWidthActiveIcon : FullWidthIcon} onClick={fullWidthEmailToggle} />
			</div>
			<form className={styles['messenger-form']}>
				<label>
					Subject:
					<input type="text" name={'subject'} onKeyUp={isEmptyField} onChange={onMessengerFieldChange} />
				</label>
				<textarea
					className={styles['messenger-textarea']}
					onKeyUp={isEmptyField}
					name={'message'}
					onChange={onMessengerFieldChange}
				/>
			</form>
			<button className={styles['messenger-button']} onClick={onSubmitFormClick} disabled={isDisabledSendForm}>
				Send
			</button>
		</div>
	)
}
