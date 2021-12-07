import { configureStore } from '@reduxjs/toolkit'
import menuToggleReducer from './slices/menuToggleSlice'

export const store = configureStore({
	reducer: {
		menuToggle: menuToggleReducer,
	},
})
