import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearAllFromCart } from '../../redux/cart/cartSlice'
import {
	isCheckoutOpenSelector,
	toggleCheckout,
} from '../../redux/uiToggle/uiToggleSlice'
import {
	selectCartProducts,
	selectCartTotal,
} from '../../redux/cart/cartSelectors'

import {
	Amount,
	CheckoutModalLogo,
	CheckoutModalMessage,
	CheckoutModalButton,
	CheckoutModalContainer,
	CheckoutModalContent,
	// CheckoutModalFooter,
	CheckoutModalHeader,
	CheckoutModalMain,
	CheckoutModalOverlay,
	CheckoutModalWrapper,
	Total,
	TotalAmount,
} from './CheckoutModal.styles'
import CartItem from '../cartItem/CartItem'

const CheckoutModal = () => {
	const dispatch = useDispatch()
	const isCheckoutOpen = useSelector(isCheckoutOpenSelector)
	const products = useSelector(selectCartProducts)
	const total = useSelector(selectCartTotal)

	const handleCheckoutToggle = () => {
		dispatch(toggleCheckout())
		dispatch(clearAllFromCart())
	}

	return (
		<CheckoutModalWrapper>
			<CheckoutModalOverlay
				isCheckoutOpen={isCheckoutOpen}
				// onClick={handleCheckoutToggle}
			/>
			<CheckoutModalContainer>
				<CheckoutModalContent isCheckoutOpen={isCheckoutOpen}>
					<CheckoutModalLogo></CheckoutModalLogo>
					<CheckoutModalHeader>
						{' '}
						thank you
						<br /> for your order
					</CheckoutModalHeader>
					<CheckoutModalMessage>
						{/* {username}, you will receive an email confirmation shortly. */}
					</CheckoutModalMessage>
					<CheckoutModalMain >
						<div>
							{products.length > 0 &&
								products
									.map((product, index) => (
										<CartItem key={index} product={product} />
									))
									.slice(0, 1)}
							{products.length > 1 && (
								<p>
									and {products.length - 1} other item
									{products.length > 2 && 's'}
								</p>
							)}
						</div>

						<TotalAmount>
							<Total>Grand Total</Total>
							<Amount>$ {total.toLocaleString('en-US')}</Amount>
						</TotalAmount>
					</CheckoutModalMain>
					{/* <CheckoutModalFooter> */}
					<CheckoutModalButton to='/' onClick={handleCheckoutToggle}>
						Back to Home
					</CheckoutModalButton>
					{/* </CheckoutModalFooter> */}
				</CheckoutModalContent>
			</CheckoutModalContainer>
		</CheckoutModalWrapper>
	)
}

export default CheckoutModal
