import React from 'react'

import classNames from 'classnames'

import styles from '@components/Widgets/styles.module.scss'

export const WidgetItem = ({ children, classes }: any): JSX.Element => {
	return <div className={classNames(styles.widget, classes)}>{children}</div>
}
