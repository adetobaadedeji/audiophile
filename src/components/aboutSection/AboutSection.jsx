import React from 'react'
import SectionContainer from '../sectionContainer/SectionContainer'
import { aboutData } from '../../utils/aboutData'
import {
	AboutSectionContainer,
	ContentContainer,
	ContentDescription,
	ContentHeading,
	ImageContainer,
} from './AboutSection.styles'

const AboutSection = () => {
	// const width = window.innerWidth
	const { heading, description } = aboutData
	return (
		<SectionContainer>
			<AboutSectionContainer>
				<ImageContainer />
				<ContentContainer>
					<ContentHeading>
						{heading.prefix} <span>{heading.highlight}</span> {heading.suffix}
					</ContentHeading>
					<ContentDescription>{description}</ContentDescription>
				</ContentContainer>
			</AboutSectionContainer>
		</SectionContainer>
	)
}

export default AboutSection
