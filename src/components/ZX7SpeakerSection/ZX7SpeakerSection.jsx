import React from 'react'
import SectionContainer from '../sectionContainer/SectionContainer'
// import PageContent from '../pageContent/PageContent'
import { homeData } from '../../utils/homeData'
import { SpeakerContainer, SpeakerHeading, ButtonContainer } from './ZX7SpeakerSection.styles'
import CustomButton from '../customButton/CustomButton'

const ZX7SpeakerSection = () => {
	const { sectionThree } = homeData

	return (
		<SectionContainer>
			<SpeakerContainer>
				<SpeakerHeading>{sectionThree.mainHeading}</SpeakerHeading>
				<ButtonContainer>
					<CustomButton to={sectionThree.button.link} inverted>
						{sectionThree.button.title}
					</CustomButton>
				</ButtonContainer>
			</SpeakerContainer>
		</SectionContainer>
	)
}

export default ZX7SpeakerSection
