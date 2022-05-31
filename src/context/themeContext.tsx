import React, { createContext, FC, useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { useSelector } from '@hooks/index'
import { LocalStorage } from '@utils/index'

import { commonActionCreators } from 'src/store/rootAction'
import { themeSelector } from 'src/store/selectors'

export const ThemeContext = createContext(null)
const ls = LocalStorage.getInstance()

export const ThemeProvider: FC = ({ children }) => {
	const dispatch = useDispatch()
	const themeDefault = useSelector(themeSelector)

	const [theme, setTheme] = useState(ls.get('theme') ? ls.get('theme') : themeDefault)

	const toggleTheme = () => setTheme((prev: any) => (prev === 'light' ? 'dark' : 'light'))

	useEffect(() => {
		dispatch(commonActionCreators.setTheme(theme))
		ls.set('theme', theme)
	}, [theme])

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
