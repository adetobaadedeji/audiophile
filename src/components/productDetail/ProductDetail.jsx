import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProductToCount } from '../../redux/cart/cartSelectors'
import {
	addToCart,
	decreaseQuantity,
	increaseQuantity,
} from '../../redux/cart/cartSlice'
import CustomButton from '../customButton/CustomButton'
import SectionContainer from '../sectionContainer/SectionContainer'
import {
	ButtonsContainer,
	CartValue,
	ControlButton,
	ControlButtonsContainer,
	Description,
	Image,
	ImageContainer,
	MainHeading,
	ProductDetailContainer,
	ProductDetailContent,
	ProductPrice,
	TopHeading,
} from './ProductDetail.styles'

const ProductDetail = ({ product, index }) => {
	const dispatch = useDispatch()
	
	const singleProductCount = useSelector(selectProductToCount(product.id))

	const handleAddToCart = () => dispatch(addToCart(product))

	const handledecreaseQuantity = () => dispatch(decreaseQuantity(product))

	const handleIncreaseQuantity = () => dispatch(increaseQuantity(product))

	const width = window.innerWidth
	const {
		description,
		name,
		price,
		new_product,
		categoryImage: { mobile, tablet, desktop },
	} = product

	return (
		<SectionContainer>
			<ProductDetailContainer index={index}>
				<ImageContainer>
					<Image
						src={width >= 980 ? desktop : width >= 768 ? tablet : mobile}
						alt={name}
					/>
				</ImageContainer>
				<ProductDetailContent>
					{new_product && <TopHeading>New Product</TopHeading>}
					<MainHeading>{name}</MainHeading>
					<Description>{description}</Description>
					<ProductPrice>$ {price.toLocaleString('en-US')}</ProductPrice>
					<ButtonsContainer>
						<ControlButtonsContainer>
							<ControlButton onClick={handledecreaseQuantity}>-</ControlButton>
							<CartValue>
								{singleProductCount ? singleProductCount.quantity : '0'}
							</CartValue>
							<ControlButton onClick={handleIncreaseQuantity}>+</ControlButton>
						</ControlButtonsContainer>
						<CustomButton as='button' onClick={handleAddToCart}>
							Add To Cart
						</CustomButton>
					</ButtonsContainer>
				</ProductDetailContent>
			</ProductDetailContainer>
		</SectionContainer>
	)
}

export default ProductDetail
