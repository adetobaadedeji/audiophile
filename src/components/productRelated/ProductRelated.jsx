import React from 'react'
import CustomButton from '../customButton/CustomButton'
import SectionContainer from '../sectionContainer/SectionContainer'
import {
	Header,
	Image,
	ImageContainer,
  Main,
	ProductRelatedContainer,
	ProductRelatedWrapper,
	TitleHeader,
} from './ProductRelated.styles'

const ProductRelated = ({ product }) => {
	const { others } = product
  const width = window.innerWidth

	return (
		<SectionContainer>
			<ProductRelatedWrapper>
				<Header size='large'>you may also like</Header>
				<Main>
					{others.map((item, index) => {
						const {
							slug,
							name,
							image: { mobile, tablet, desktop },
						} = item
						return (
							<ProductRelatedContainer key={index}>
								<ImageContainer>
									<Image
										src={width < 768 ? mobile : width < 980 ? tablet : desktop}
										alt={name}
									/>
								</ImageContainer>
								<TitleHeader>{name}</TitleHeader>
								<CustomButton to={slug}>see product</CustomButton>
							</ProductRelatedContainer>
						)
					})}
				</Main>
			</ProductRelatedWrapper>
		</SectionContainer>
	)
}

export default ProductRelated
