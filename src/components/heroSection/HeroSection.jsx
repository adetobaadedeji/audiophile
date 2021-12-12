import React from 'react'
import PageContent from '../pageContent/PageContent'
import { HeroContainer, HeroContent } from './HeroSection.styles'
import { homeData } from '../../utils/homeData'
import SectionContainer from '../sectionContainer/SectionContainer'

const HeroSection = () => {
	const { hero } = homeData
  return (
		<HeroContainer>
			<HeroContent>
				<SectionContainer>
					<PageContent data={hero} />
				</SectionContainer>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection