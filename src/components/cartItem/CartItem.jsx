import React from 'react'
import ControlButtons from '../contolButtons/ControlButtons'

import {
	CartItemContainer,
	ControlButtonsContainer,
	Image,
	ImageContainer,
	ProductNamePrice,
	ProductName,
	ProductPrice,
} from './CartItem.styles'

const CartItem = ({ product }) => {
	const { cartImage, shortName, price, name } = product

	return (
		<CartItemContainer>
			<ImageContainer>
				<Image src={cartImage} alt={name} />
			</ImageContainer>
			<ProductNamePrice>
				<ProductName>{shortName}</ProductName>
				<ProductPrice>$ {price.toLocaleString('en-US')}</ProductPrice>
			</ProductNamePrice>
			<ControlButtonsContainer>
				<ControlButtons product={product} small='true' />
			</ControlButtonsContainer>
		</CartItemContainer>
	)
}

export default CartItem
