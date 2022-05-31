import { combineReducers } from '@reduxjs/toolkit'

import { authReducer } from './auth/reducers'
import { bankReducer } from './bank/reducers'
import { commonReducer } from './common/reducers'
import { dashboardReducer } from './dashboard/reducers'
import { discountReducer } from './discount/reducers'
import { invoiceReducer } from './invoice/reducers'
import { propertyReducer } from './property/reducers'
import { requestsReducer } from './requests/reducers'
import { tenancyReducer } from './tenancy/reducers'
import { tenantReducer } from './tenant/reducers'
import { transactionReducer } from './transaction/reducers'
import { userReducer } from './user/reducers'

export type RootReducerType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
	transactionReducer,
	dashboardReducer,
	requestsReducer,
	discountReducer,
	propertyReducer,
	tenancyReducer,
	invoiceReducer,
	commonReducer,
	tenantReducer,
	bankReducer,
	userReducer,
	authReducer,
})
