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

import menuToggleReducer from './menuToggle/menuToggleSlice'
import productsReducer from './products/productsSlice'
import cartSlice from './cart/cartSlice'

const persistConfig = {
	key: 'root',
	storage: storage,
	stateReconciler: autoMergeLevel2,
}

const reducers = combineReducers({
	menuToggle: menuToggleReducer,
	products: productsReducer,
	cart: cartSlice,
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
