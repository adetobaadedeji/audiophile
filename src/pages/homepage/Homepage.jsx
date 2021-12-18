import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import CategorySection from '../../components/categorySection/CategorySection'
import ZX9SpeakerSection from '../../components/ZX9SpeakerSection/ZX9SpeakerSection'
import ZX7SpeakerSection from '../../components/ZX7SpeakerSection/ZX7SpeakerSection'
import XY1EarphonesSection from '../../components/XY1EarphonesSection/XY1EarphonesSection'
import AboutSection from '../../components/aboutSection/AboutSection'
import { HomepageContainer } from './Homepage.styles'

const Homepage = () => {
	return (
		<HomepageContainer>
			<HeroSection />
			<CategorySection />
			<ZX9SpeakerSection />
			<ZX7SpeakerSection />
			<XY1EarphonesSection />
			<AboutSection />
		</HomepageContainer>
	)
}

export default Homepage
