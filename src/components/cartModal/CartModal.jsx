import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearAllFromCart } from '../../redux/cart/cartSlice'
import {
	isCartOpenSelector,
	toggleCart,
} from '../../redux/uiToggle/uiToggleSlice'
import {
	selectCartQuantity,
	selectCartProducts,
	selectCartTotal,
} from '../../redux/cart/cartSelectors'

import {
	Amount,
	CartQuantity,
	CartModalButton,
	CartModalContainer,
	CartModalContent,
	CartModalFooter,
	CartModalHeader,
	CartModalMain,
	CartModalOverlay,
	CartModalWrapper,
	RemoveButton,
	Total,
	TotalAmount,
} from './CartModal.styles'
import CartItem from '../cartItem/CartItem'

const CartModal = () => {
	const dispatch = useDispatch()
	const isCartOpen = useSelector(isCartOpenSelector)
	const cartQuantity = useSelector(selectCartQuantity)
	const products = useSelector(selectCartProducts)
	const total = useSelector(selectCartTotal)

	const handleCartToggle = () => {
		dispatch(toggleCart())
	}

	const handleClearAllFromCart = () => {
		dispatch(clearAllFromCart())
	}

	return (
		<CartModalWrapper>
			<CartModalOverlay isCartOpen={isCartOpen} onClick={handleCartToggle} />
			<CartModalContainer>
				<CartModalContent isCartOpen={isCartOpen}>
					<CartModalHeader>
						<CartQuantity>Cart ({cartQuantity})</CartQuantity>
						<RemoveButton onClick={handleClearAllFromCart}>
							Remove All
						</RemoveButton>
					</CartModalHeader>
					<CartModalMain products={products}>
						{products.length > 0 ? (
							products.map((product, index) => (
								<CartItem key={index} product={product} />
							))
						) : (
							<span>Your cart is empty!</span>
						)}
					</CartModalMain>
					<CartModalFooter>
						<TotalAmount>
							<Total>Total</Total>
							<Amount>$ {total.toLocaleString('en-US')}</Amount>
						</TotalAmount>
						<CartModalButton to='/checkout' onClick={handleCartToggle}>
							Checkout
						</CartModalButton>
					</CartModalFooter>
				</CartModalContent>
			</CartModalContainer>
		</CartModalWrapper>
	)
}

export default CartModal
