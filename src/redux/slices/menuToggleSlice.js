import { createSlice } from '@reduxjs/toolkit'

export const menuToggleSlice = createSlice({
	name: 'menuToggle',
	initialState: {
		toggleState: false,
	},
	reducers: {
		toggleMenu: (state, action) => {
			// state.toggleState = action.payload
			state.toggleState = !state.toggleState
		},
	},
})

export const { toggleMenu } = menuToggleSlice.actions

export const toggleStateSelector = (state) => state.menuToggle.toggleState

export default menuToggleSlice.reducer
