import { createSelector } from '@reduxjs/toolkit'

// getting products from the store
const selectProducts = (state) => state.products

// selecting productItems from the state (products state)
export const selectProductItems = createSelector(
	[selectProducts],
	(products) => products.productItems
)

export const selectProductsForPreview = createSelector(
	[selectProductItems],
	(productItems) =>
		productItems ? Object.keys(productItems).map((item) => productItems[item]) : []
)

export const selectSingleProduct = (productId) =>
 createSelector([selectProductItems], (productItems ) => 
	productItems ? productItems[productId] : null
)

