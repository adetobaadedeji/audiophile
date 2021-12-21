import React from 'react'
import AboutSection from '../../components/aboutSection/AboutSection'
import CategorySection from '../../components/categorySection/CategorySection'
import CategoryHero from '../../components/heroSection/CategoryHero'
import ProductPreviewSection from '../../components/productPreviewSection/ProductPreviewSection'
import { EarphonesPageContainer } from './EarphonesPage.styles'

const EarphonesPage = () => {
  return (
		<EarphonesPageContainer>
			<CategoryHero title='earphones' />
			<ProductPreviewSection category='earphones' />
			<CategorySection />
			<AboutSection />
		</EarphonesPageContainer>
	)
}

export default EarphonesPage
