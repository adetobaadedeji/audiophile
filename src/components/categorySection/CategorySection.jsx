import React from 'react'
import Category from '../category/Category'
import SectionContainer from '../sectionContainer/SectionContainer'
import { categoryData } from '../../utils/categoryData'
import { CategorySectionContainer } from './CategorySection.styles'

const CategorySection = () => {
	const { category } = categoryData
	return (
		<SectionContainer>
			<CategorySectionContainer>
				{category.slice(1, 4).map((item, index) => (
					<Category key={index} item={item} />
				))}
			</CategorySectionContainer>
		</SectionContainer>
	)
}

export default CategorySection
