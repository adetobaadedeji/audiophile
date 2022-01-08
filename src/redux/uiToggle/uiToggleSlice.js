import { createSlice } from '@reduxjs/toolkit'

export const uiToggleSlice = createSlice({
	name: 'uiToggle',
	initialState: {
		isMenuOpen: false,
		isCartOpen: false,
		isCheckoutOpen: false,
	},
	reducers: {
		toggleMenu: (state) => {
			state.isMenuOpen = !state.isMenuOpen
		},
		toggleCart: (state) => {
			state.isCartOpen = !state.isCartOpen
		},
		toggleCheckout: (state) => {
			state.isCheckoutOpen = !state.isCheckoutOpen
		},
	},
})

export const { toggleMenu, toggleCart, toggleCheckout } = uiToggleSlice.actions

export const isMenuOpenSelector = (state) => state.uiToggle.isMenuOpen
export const isCartOpenSelector = (state) => state.uiToggle.isCartOpen
export const isCheckoutOpenSelector = (state) => state.uiToggle.isCheckoutOpen

export default uiToggleSlice.reducer
