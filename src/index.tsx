import React from 'react'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import { history } from '@utils/index'
import { App } from 'src/components'

import { store } from 'src/store'

import './styles/index.scss'

console.log('Work!')

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
)
