import { createSelector } from '@reduxjs/toolkit'

const selectCart = state => state.cart

export const selectCartProducts = createSelector(
	[selectCart],
	(cart) => cart.cartProducts
)

export const selectCartQuantity = createSelector(
	[selectCartProducts],
	(cartProducts) => cartProducts.length
)

export const selectSingleProductToCount = (productId) =>
	createSelector([selectCartProducts], (cartProducts) =>
		cartProducts.find((product) => product.id === productId)
	)

export const selectCartProductsCount = createSelector(
	[selectCartProducts],
	(cartProducts) => 
    cartProducts.reduce((accumulatedQuantity, cartProduct) =>
      accumulatedQuantity + cartProduct.quantity,
      0
  )
)

export const selectCartTotal = createSelector(
   [selectCartProducts],
    cartProducts =>
      cartProducts.reduce(
        (accumalatedQuantity, cartProduct) =>
          accumalatedQuantity + cartProduct.quantity * cartProduct.price,
        0
    )
)

export const selectShippingFee = createSelector(
  [selectCartTotal],
  (total) => total * 0.01
)

export const selectVatFee = createSelector(
	[selectCartTotal],
	(total) => total * 0.2
)

export const selectGrandTotal = createSelector(
	[selectCartTotal, selectShippingFee, selectVatFee],
	(total, shipping, vat) => total + shipping + vat
)