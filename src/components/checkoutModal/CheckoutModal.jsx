import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearAllFromCart } from '../../redux/cart/cartSlice'
import {
	isCheckoutOpenSelector,
	toggleCheckout,
} from '../../redux/uiToggle/uiToggleSlice'
import {
	selectCartProducts,
	selectGrandTotal,
} from '../../redux/cart/cartSelectors'
import Mark from '../../assets/shared/success.svg'
import {
	Amount,
	CheckoutModalLogo,
	CheckoutModalMessage,
	CheckoutModalButton,
	CheckoutModalContainer,
	CheckoutModalContent,
	CheckoutModalHeader,
	CheckoutModalMain,
	CheckoutModalOverlay,
	CheckoutModalWrapper,
	Total,
	TotalAmount,
	Summary,
} from './CheckoutModal.styles'
import CartItem from '../cartItem/CartItem'
import { formDataSelector } from '../../redux/formData/formDataSlice'

const CheckoutModal = () => {
	const dispatch = useDispatch()
	const isCheckoutOpen = useSelector(isCheckoutOpenSelector)
	const formData = useSelector(formDataSelector)
	const products = useSelector(selectCartProducts)
	const grandTotal = useSelector(selectGrandTotal)

	const handleCheckoutToggle = () => {
		dispatch(toggleCheckout())
		dispatch(clearAllFromCart())
	}

	return (
		<CheckoutModalWrapper>
			<CheckoutModalOverlay isCheckoutOpen={isCheckoutOpen} />
			<CheckoutModalContainer>
				<CheckoutModalContent isCheckoutOpen={isCheckoutOpen}>
					<CheckoutModalLogo>
						<img src={Mark} alt='Mark Logo' />
					</CheckoutModalLogo>
					<CheckoutModalHeader>
						{' '}
						thank you
						<br /> for your order
					</CheckoutModalHeader>
					<CheckoutModalMessage>
						{formData && <span>{formData.name}</span>}, you will receive an email confirmation
						shortly.
					</CheckoutModalMessage>
					<CheckoutModalMain>
						<Summary>
							{products.length > 0 &&
								products
									.map((product, index) => (
										<CartItem key={index} product={product} />
									))
									.slice(0, 1)}
							{products.length > 1 && (
								<span>
									and {products.length - 1} other item
									{products.length > 2 && 's'}
								</span>
							)}
						</Summary>
						<TotalAmount>
							<Total>Grand Total</Total>
							<Amount>$ {grandTotal.toLocaleString('en-US')}</Amount>
						</TotalAmount>
					</CheckoutModalMain>
					<CheckoutModalButton to='/' onClick={handleCheckoutToggle}>
						Back to Home
					</CheckoutModalButton>
				</CheckoutModalContent>
			</CheckoutModalContainer>
		</CheckoutModalWrapper>
	)
}

export default CheckoutModal
