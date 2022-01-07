import React from 'react'
import ControlButtons from '../contolButtons/ControlButtons'

import {
	CartItemContainer,
	ControlButtonsContainer,
	Image,
	ImageContainer,
	ItemQuantity,
	ProductNamePrice,
	ProductName,
	ProductPrice,
} from './CartItem.styles'

const CartItem = ({ product, showButtons }) => {
	const { cartImage, shortName, price, name, quantity } = product

	return (
		<CartItemContainer>
			<ImageContainer>
				<Image src={cartImage} alt={name} />
			</ImageContainer>
			<ProductNamePrice>
				<ProductName>{shortName}</ProductName>
				<ProductPrice>$ {price.toLocaleString('en-US')}</ProductPrice>
			</ProductNamePrice>
			{showButtons ? (
				<ControlButtonsContainer>
					<ControlButtons product={product} small='true' />
				</ControlButtonsContainer>
			) : (
				<ItemQuantity>x{quantity}</ItemQuantity>
			)}
		</CartItemContainer>
	)
}

export default CartItem
