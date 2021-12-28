import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isCartOpenSelector, toggleCart } from '../../redux/cart/cartSlice'
// import SectionContainer from '../sectionContainer/SectionContainer'
import {
  Amount,
  CartItems,
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

const CartModal = () => {
  const dispatch = useDispatch() 
  const isCartOpen = useSelector(isCartOpenSelector);

  const handleOverlayToggle = () => {
		dispatch(toggleCart())
	}

  return (
		<CartModalWrapper>
			<CartModalOverlay isCartOpen={isCartOpen} onClick={handleOverlayToggle} />
			<CartModalContainer>
				<CartModalContent isCartOpen={isCartOpen}>
					<CartModalHeader>
						<CartItems>Cart (0)</CartItems>
						<RemoveButton>Remove All</RemoveButton>
          </CartModalHeader>
					<CartModalMain></CartModalMain>
					<CartModalFooter>
            <TotalAmount>
              <Total>Total</Total>
              <Amount>$ 2,999</Amount>
            </TotalAmount>
            <CartModalButton>Checkout</CartModalButton>
          </CartModalFooter>
				</CartModalContent>
			</CartModalContainer>
		</CartModalWrapper>
	)
}

export default CartModal
