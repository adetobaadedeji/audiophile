import { configureStore } from '@reduxjs/toolkit'
import menuToggleReducer from './slices/menuToggleSlice'
import productsReducer from './slices/productsSlice'

export const store = configureStore({
	reducer: {
		menuToggle: menuToggleReducer,
		products: productsReducer,
	},
})
