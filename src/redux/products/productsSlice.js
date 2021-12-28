import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../utils/productData'

export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		productItems: products,
	},
	reducers: {
		getProducts: (state, action) => {
			state.products = action.payload
		},
	},
})

export const { getProducts } = productsSlice.actions

// export const productsSelector = (state, productId) => state.products.productItems[productId]

export default productsSlice.reducer