import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel2 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel2'

import uiToggleReducer from './uiToggle/uiToggleSlice'
import productsReducer from './products/productsSlice'
import cartReducer from './cart/cartSlice'
import formDataReducer from './formData/formDataSlice'

const persistConfig = {
	key: 'root',
	storage: storage,
	version: 0,
	whitelist: ['cart'],
	stateReconciler: autoMergeLevel2,
}

const reducers = combineReducers({
	uiToggle: uiToggleReducer,
	products: productsReducer,
	cart: cartReducer,
	formData: formDataReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
