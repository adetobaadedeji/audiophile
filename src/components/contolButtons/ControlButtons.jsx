import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSingleProductToCount } from '../../redux/cart/cartSelectors'
import {
	decreaseQuantity,
	increaseQuantity,
	removeFromCart,
} from '../../redux/cart/cartSlice'
import {
	CartValue,
	ControlButton,
	ControlButtonsContainer,
} from './ControlButtons.styles'

const ControlButtons = ({ product, preventDelete, small }) => {
	const dispatch = useDispatch()

	const singleProductCount = useSelector(selectSingleProductToCount(product.id))

	const handledecreaseQuantity = () => {
		if (preventDelete) {
			dispatch(decreaseQuantity(product))
		} else {
			dispatch(removeFromCart(product))
		}
	}

	const handleIncreaseQuantity = () => dispatch(increaseQuantity(product))

	return (
		<ControlButtonsContainer small={small}>
			<ControlButton onClick={handledecreaseQuantity} small={small}>
				-
			</ControlButton>
			<CartValue small={small}>
				{singleProductCount ? singleProductCount.quantity : '0'}
			</CartValue>
			<ControlButton onClick={handleIncreaseQuantity} small={small}>
				+
			</ControlButton>
		</ControlButtonsContainer>
	)
}

export default ControlButtons
