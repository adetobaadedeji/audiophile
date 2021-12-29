import { createSlice } from '@reduxjs/toolkit'

export const uiToggleSlice = createSlice({
	name: 'uiToggle',
	initialState: {
		isMenuOpen: false,
		isCartOpen: false,
	},
	reducers: {
		toggleMenu: (state) => {
			state.isMenuOpen = !state.isMenuOpen
		},
		toggleCart: (state) => {
			state.isCartOpen = !state.isCartOpen
		},
	},
})

export const { toggleMenu, toggleCart } = uiToggleSlice.actions

export const isMenuOpenSelector = (state) => state.uiToggle.isMenuOpen
export const isCartOpenSelector = (state) => state.uiToggle.isCartOpen

export default uiToggleSlice.reducer

