import React from 'react'
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
						<ControlButtonsContainer>
							<ControlButton>-</ControlButton>
							<CartValue>0</CartValue>
							<ControlButton>+</ControlButton>
						</ControlButtonsContainer>
						<CustomButton as='div'>Add To Cart</CustomButton>
					</ButtonsContainer>
				</ProductDetailContent>
			</ProductDetailContainer>
		</SectionContainer>
	)
}

export default ProductDetail
