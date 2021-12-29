import { createSlice } from '@reduxjs/toolkit'
import {
	addProductToCart,
	clearCart,
	decreaseProductQuantity,
	increaseProductQuantity,
	removeProductFromCart,
} from './cartUtils'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartProducts: [],
	},
	reducers: {
		addToCart: (state, action) => {
			state.cartProducts = addProductToCart(state.cartProducts, action.payload)
		},
		increaseQuantity: (state, action) => {
			state.cartProducts = increaseProductQuantity(
				state.cartProducts,
				action.payload
			)
		},
		decreaseQuantity: (state, action) => {
			state.cartProducts = decreaseProductQuantity(
				state.cartProducts,
				action.payload
			)
		},
		removeFromCart: (state, action) => {
			state.cartProducts = removeProductFromCart(
				state.cartProducts,
				action.payload
			)
		},
		clearAllFromCart: (state) => {
			state.cartProducts = clearCart(state.cartProducts)
		},
	},
})

export const {
	addToCart,
	increaseQuantity,
	decreaseQuantity,
	removeFromCart,
	clearAllFromCart,
} = cartSlice.actions

export default cartSlice.reducer
