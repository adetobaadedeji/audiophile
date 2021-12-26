import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		isCartOpen: false,
	},
	reducers: {
		toggleCart: (state, action) => {
			state.isCartOpen = !state.isCartOpen
		},
	},
})

export const { toggleCart } = cartSlice.actions

export const isCartOpenSelector = (state) => state.cart.isCartOpen

export default cartSlice.reducer
