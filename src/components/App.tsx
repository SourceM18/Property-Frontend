import React, { useEffect, useCallback, FC, useMemo } from 'react'

import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { ThemeProvider } from '@context/index'
import { useSelector } from '@hooks/index'
import { Routes } from '@routes/index'
import { lightTheme, darkTheme } from '@themes/index'

import { Toast, CookiesAccept } from '@ui/index'
import { LocalStorage } from '@utils/index'

import { commonActionCreators } from 'src/store/common/reducers'
import { authActions } from 'src/store/rootAction'
import { themeSelector } from 'src/store/selectors'

const ls = LocalStorage.getInstance()

export const App: FC = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const theme = useSelector(themeSelector)
	const beforeInstallPrompt = useCallback((e: Event) => {
		e.preventDefault()
		dispatch(commonActionCreators.setPwaEvent(e))
	}, [])

	const homePage = location.pathname === '/'

	const currentTheme = useMemo(() => {
		return theme === 'light' ? lightTheme : darkTheme
	}, [theme])

	useEffect(() => {
		if (ls.get('refreshToken')) {
			dispatch(authActions.checkAuth())
		} else {
			dispatch(authActions.logout())
		}

		window.addEventListener('beforeinstallprompt', beforeInstallPrompt)
		return () => {
			window.removeEventListener('beforeinstallprompt', beforeInstallPrompt)
		}
	}, [])

	return (
		<StyledThemeProvider theme={homePage ? lightTheme : currentTheme}>
			<Toast />
			<CookiesAccept />
			<ThemeProvider>
				<Routes />
			</ThemeProvider>
		</StyledThemeProvider>
	)
}
