import React from 'react'
import SectionContainer from '../sectionContainer/SectionContainer'
import PageContent from '../pageContent/PageContent'
import { homeData } from '../../utils/homeData'
import {
	SpeakerContainer,
	SpeakerImage,
	ImageContainer,
	PageContainer,
} from './ZX9SpeakerSection.styles'

const ZX9SpeakerSection = () => {
	const { sectionTwo } = homeData
	const { image: {mobile, tablet, desktop, alt}} = sectionTwo
	const width = window.innerWidth
	return (
		<SectionContainer>
			<SpeakerContainer>
				<ImageContainer>
					<SpeakerImage
						src={`${width >= 1280 ? desktop : width >= 768 ? tablet : mobile}`}
						alt={alt}
					/>
				</ImageContainer>
				<PageContainer>
					<PageContent data={sectionTwo} />
				</PageContainer>
			</SpeakerContainer>
		</SectionContainer>
	)
}

export default ZX9SpeakerSection
