import React from 'react'
import {
	CategoryContainer,
	CategoryHeader,
	CategoryImage,
  CategoryWrapper,
	ButtonLink,
} from './Category.styles'

const Category = ({ item }) => {
	const { title, link, image } = item
	return (
		<CategoryContainer>
			<CategoryImage className='image' src={image.src} alt={image.alt} />
			<CategoryWrapper>
				<CategoryHeader>{title}</CategoryHeader>
				<ButtonLink to={link}>Shop</ButtonLink>
			</CategoryWrapper>
		</CategoryContainer>
	)
}
export default Category
