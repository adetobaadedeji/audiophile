import { configureStore } from '@reduxjs/toolkit'
import menuToggleReducer from './menuToggle/menuToggleSlice'
import productsReducer from './products/productsSlice'
import cartSlice from './cart/cartSlice'

export const store = configureStore({
	reducer: {
		menuToggle: menuToggleReducer,
		products: productsReducer,
		cart: cartSlice,
	},
})
