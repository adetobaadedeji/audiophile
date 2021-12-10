import React from 'react'
import PageContent from '../pageContent/PageContent'
import { HeroContainer, HeroContent } from './HeroSection.styles'
import { homeData } from '../../utils/homeData'
import SectionContainer from '../sectionContainer/SectionContainer'

const HeroSection = () => {
	
  return (
		<HeroContainer>
			<HeroContent>
				<SectionContainer>
					<PageContent data={homeData} />
				</SectionContainer>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection