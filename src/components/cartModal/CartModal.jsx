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
import ControlButtons from '../contolButtons/ControlButtons'
import {
	Amount,
	CartQuantity,
	CartModalButton,
	CartModalContainer,
	CartModalContent,
	CartModalFooter,
	CartModalHeader,
	CartModalMain,
	CartModalMainWrapper,
	CartModalOverlay,
	CartModalWrapper,
	ControlButtonsContainer,
	Image,
	ImageContainer,
	ProductNamePrice,
	ProductName,
	ProductPrice,
	RemoveButton,
	Total,
	TotalAmount,
} from './CartModal.styles'

const CartModal = () => {
	const dispatch = useDispatch()
	const isCartOpen = useSelector(isCartOpenSelector)
	const cartQuantity = useSelector(selectCartQuantity)
	const products = useSelector(selectCartProducts)
	const total = useSelector(selectCartTotal)


	const handleOverlayToggle = () => {
		dispatch(toggleCart())
	}

	const handleClearAllFromCart = () => {
		dispatch(clearAllFromCart())
	}

	return (
		<CartModalWrapper>
			<CartModalOverlay isCartOpen={isCartOpen} onClick={handleOverlayToggle} />
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
							products.map((product, index) => {
								const { cartImage, shortName, price } = product
								return (
									<CartModalMainWrapper key={index}>
										<ImageContainer>
											<Image src={cartImage} />
										</ImageContainer>
										<ProductNamePrice>
											<ProductName>{shortName}</ProductName>
											<ProductPrice>
												$ {price.toLocaleString('en-US')}
											</ProductPrice>
										</ProductNamePrice>
										<ControlButtonsContainer>
											<ControlButtons product={product} small='true'/>
										</ControlButtonsContainer>
									</CartModalMainWrapper>
								)
							})
						) : (
							<span>Your cart is empty!</span>
						)}
					</CartModalMain>
					<CartModalFooter>
						<TotalAmount>
							<Total>Total</Total>
							<Amount>${' '}{total.toLocaleString('en-US')}</Amount>
						</TotalAmount>
						<CartModalButton>Checkout</CartModalButton>
					</CartModalFooter>
				</CartModalContent>
			</CartModalContainer>
		</CartModalWrapper>
	)
}

export default CartModal
