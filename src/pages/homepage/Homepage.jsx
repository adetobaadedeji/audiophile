import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import { homeData } from '../../utils/homeData'

const Homepage = () => {
	return (
		<div>
			<HeroSection data={homeData}/>
			<span style={{color: 'red', fontSize: '20px'}}>This is a span</span>
		</div>
	)
}

export default Homepage
