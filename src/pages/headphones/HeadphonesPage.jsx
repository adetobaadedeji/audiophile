import React from 'react'
import AboutSection from '../../components/aboutSection/AboutSection'
import CategorySection from '../../components/categorySection/CategorySection'
import CategoryHero from '../../components/heroSection/CategoryHero'
import ProductPreviewSection from '../../components/productPreviewSection/ProductPreviewSection'
import { HeadphonesPageContainer } from './HeadphonesPage.styles'

const HeadphonesPage = () => {
  return (
		<HeadphonesPageContainer>
			<CategoryHero title='headphones' />
			<ProductPreviewSection category='headphones' />
			<CategorySection />
			<AboutSection />
		</HeadphonesPageContainer>
	)
}

export default HeadphonesPage
