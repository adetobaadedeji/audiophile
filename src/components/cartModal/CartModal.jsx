import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isCartOpenSelector, toggleCart } from '../../redux/slices/cartSlice'
// import SectionContainer from '../sectionContainer/SectionContainer'
import {
	CartModalContainer,
  CartModalContent,
	CartModalOverlay, 
  CartModalWrapper,
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
				{/* <SectionContainer> */}
					<CartModalContent isCartOpen={isCartOpen}>
						This is a modal
					</CartModalContent>
				{/* </SectionContainer> */}
			</CartModalContainer>
		</CartModalWrapper>
	)
}

export default CartModal
