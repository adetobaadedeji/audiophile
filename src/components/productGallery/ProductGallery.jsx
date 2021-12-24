import React from 'react'
import SectionContainer from '../sectionContainer/SectionContainer'
import {
	GalleryContainer,
	LeftImageContainer,
	RightImageContainer,
	FirstImage,
	SecondImage,
	ThirdImage,
} from './ProductGallery.styles'

const ProductGallery = ({product}) => {
  const { first, second, third } = product.gallery
  const width = window.innerWidth
	return (
		<div>
			<SectionContainer>
				<GalleryContainer>
					<LeftImageContainer>
						<FirstImage
							src={
								width < 768
									? first.mobile
									: width < 980
									? first.tablet
									: first.desktop
							}
							alt={product.name}
						/>
						<SecondImage
							src={
								width < 768
									? second.mobile
									: width < 980
									? second.tablet
									: second.desktop
							}
							alt={product.name}
						/>
					</LeftImageContainer>
					<RightImageContainer>
						<ThirdImage
							src={
								width < 768
									? third.mobile
									: width < 980
									? third.tablet
									: third.desktop
							}
							alt={product.name}
						/>
					</RightImageContainer>
				</GalleryContainer>
			</SectionContainer>
		</div>
	)
}

export default ProductGallery
