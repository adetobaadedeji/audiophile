import React from 'react'
import AboutSection from '../../components/aboutSection/AboutSection'
import CategorySection from '../../components/categorySection/CategorySection'
import CategoryHero from '../../components/heroSection/CategoryHero'
import ProductPreviewSection from '../../components/productPreviewSection/ProductPreviewSection'
import { SpeakersPageContainer } from './SpeakersPage.styles'

const SpeakersPage = () => {
  return (
		<SpeakersPageContainer>
			<CategoryHero title='speakers' />
			<ProductPreviewSection category='speakers' />
			<CategorySection />
			<AboutSection />
		</SpeakersPageContainer>
	)
}

export default SpeakersPage
