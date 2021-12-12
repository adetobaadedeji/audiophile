import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import CategorySection from '../../components/categorySection/CategorySection'
import ZX9SpeakerSection from '../../components/ZX9SpeakerSection/ZX9SpeakerSection'
import ZX7SpeakerSection from '../../components/ZX7SpeakerSection/ZX7SpeakerSection'

const Homepage = () => {
	return (
		<div>
			<HeroSection />
			<CategorySection />
			<ZX9SpeakerSection />
			<ZX7SpeakerSection />
		</div>
	)
}

export default Homepage
