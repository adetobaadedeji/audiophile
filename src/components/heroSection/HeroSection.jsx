import React from 'react'
import PageContent from '../pageContent/PageContent'
import { HeroContainer, HeroContent } from './HeroSection.styles'
// import { homeData } from '../../utils/homeData'

const HeroSection = ({data}) => {
	
  return (
		<HeroContainer >
			<HeroContent>
				<PageContent data={data}/>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection