import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux'

import { RootReducerType } from 'src/store/rootReducer'

export const useSelector: TypedUseSelectorHook<RootReducerType> = useReduxSelector
