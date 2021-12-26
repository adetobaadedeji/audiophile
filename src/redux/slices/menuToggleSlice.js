import { createSlice } from '@reduxjs/toolkit'

export const menuToggleSlice = createSlice({
	name: 'menuToggle',
	initialState: {
		isMenuOpen: false,
	},
	reducers: {
		toggleMenu: (state, action) => {
			// state.isMenuOpen = action.payload
			state.isMenuOpen = !state.isMenuOpen
		},
	},
})

export const { toggleMenu } = menuToggleSlice.actions

export const isMenuOpenSelector = (state) => state.menuToggle.isMenuOpen

export default menuToggleSlice.reducer
