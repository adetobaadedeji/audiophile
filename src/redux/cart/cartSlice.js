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
		isCartOpen: false,
		cartProducts: [],
	},
	reducers: {
		toggleCart: (state) => {
			state.isCartOpen = !state.isCartOpen
		},
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
	toggleCart,
	addToCart,
	increaseQuantity,
	decreaseQuantity,
	removeFromCart,
	clearAllFromCart,
} = cartSlice.actions

export const isCartOpenSelector = (state) => state.cart.isCartOpen

export default cartSlice.reducer
