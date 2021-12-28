import { toast } from 'react-toastify'

const toastAction = {
	position: 'top-left',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
}

export const addProductToCart = (cartProducts, productToAdd) => {
	const productExist = cartProducts.find(
		(product) => product.id === productToAdd.id
	)

	if (productExist) {
		return cartProducts.map((product) =>
			product.id === productToAdd.id
				? { ...product, quantity: product.quantity + 1 }
				: product
		)
	} else {
		toast.success(`${productToAdd.name} added to cart `, toastAction)
		return [...cartProducts, { ...productToAdd, quantity: 1 }]
	}
}

export const increaseProductQuantity = (cartProducts, productToAdd) => {
	const productExist = cartProducts.find(
		(product) => product.id === productToAdd.id
	)

	if (productExist) {
		return cartProducts.map((product) =>
			product.id === productToAdd.id
				? { ...product, quantity: product.quantity + 1 }
				: product
		)
	} else {
		toast.info('click on "ADD TO CART" ', toastAction)
		return [...cartProducts]
	}
}

export const removeProductFromCart = (cartProducts, productToAdd) => {
	const productExist = cartProducts.find(
		(product) => product.id === productToAdd.id
	)

	if (productExist.quantity === 1) {
		toast.error(`${productToAdd.name} removed to cart `, toastAction)
		return cartProducts.filter((product) => product.id !== productToAdd.id)
	} else {
		return cartProducts.map((product) =>
			product.id === productToAdd.id
				? { ...product, quantity: product.quantity - 1 }
				: product
		)
	}
}

export const decreaseProductQuantity = (cartProducts, productToAdd) => {
	const productExist = cartProducts.find(
		(product) => product.id === productToAdd.id
	)

	if (productExist && productExist.quantity > 1) {
		return cartProducts.map((product) =>
			product.id === productToAdd.id
				? { ...product, quantity: product.quantity - 1 }
				: product
		)
	}	else if (productExist && productExist.quantity === 1) {
		return [...cartProducts]
	} else {
		toast.error('Product not found in cart!', toastAction)
		return [...cartProducts]
	}
}

export const clearCart = (cartProducts) => {
  toast.error('Your cart is cleared', toastAction)
  return  cartProducts = []
}