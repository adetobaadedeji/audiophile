import React from 'react'
import CustomButton from '../customButton/CustomButton'
import SectionContainer from '../sectionContainer/SectionContainer'
import {
	Description,
	Image,
	ImageContainer,
	MainHeading,
	ProductPreviewContainer,
	ProductPreviewContent,
	TopHeading,
} from './ProductPreview.styles'

const ProductPreview = ({ product, index }) => {
  const width = window.innerWidth
	const {
		description,
		name,
    new_product,
    slug,
		categoryImage: { mobile, tablet, desktop },
	} = product
	return (
		<div>
			<SectionContainer>
				<ProductPreviewContainer index={index}>
					<ImageContainer>
						<Image
							src={width >= 980 ? desktop : width >= 768 ? tablet : mobile}
							alt={name}
						/>
					</ImageContainer>
					<ProductPreviewContent>
						{new_product && <TopHeading>New Product</TopHeading>}
						<MainHeading>{name}</MainHeading>
						<Description>{description}</Description>
						<CustomButton
							to={{
								pathname: `/product/${slug}`,
							}}
						>
							See Product
						</CustomButton>
					</ProductPreviewContent>
				</ProductPreviewContainer>
			</SectionContainer>
		</div>
	)
}

export default ProductPreview
