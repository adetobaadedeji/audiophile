import React from 'react'
import { useDispatch } from 'react-redux'
import {
	addToCart,
} from '../../redux/cart/cartSlice'
import CustomButton from '../customButton/CustomButton'
import SectionContainer from '../sectionContainer/SectionContainer'
import ControlButtons from '../contolButtons/ControlButtons'
import {
	ButtonsContainer,
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
	const handleAddToCart = () => dispatch(addToCart(product))

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
					<ProductPrice>${' '}{price.toLocaleString('en-US')}</ProductPrice>
					<ButtonsContainer>
						<ControlButtons product={product} preventDelete='true' />
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
