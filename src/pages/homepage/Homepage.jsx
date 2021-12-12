import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import CategorySection from '../../components/categorySection/CategorySection'
import ZX9SpeakerSection from '../../components/ZX9SpeakerSection/ZX9SpeakerSection'
import ZX7SpeakerSection from '../../components/ZX7SpeakerSection/ZX7SpeakerSection'
import XY1EarphonesSection from '../../components/XY1EarphonesSection/XY1EarphonesSection'

const Homepage = () => {
	return (
		<div>
			<HeroSection />
			<CategorySection />
			<ZX9SpeakerSection />
			<ZX7SpeakerSection />
			<XY1EarphonesSection />
		</div>
	)
}

export default Homepage
