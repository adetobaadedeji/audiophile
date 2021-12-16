import React from 'react'
import SectionContainer from '../sectionContainer/SectionContainer'
import { homeData } from '../../utils/homeData'
import { SpeakerContainer, SpeakerHeading, ButtonContainer } from './ZX7SpeakerSection.styles'
import CustomButton from '../custom-button/CustomButton.jsx'

const ZX7SpeakerSection = () => {
	const { sectionThree : {mainHeading, button} } = homeData

	return (
		<SectionContainer>
			<SpeakerContainer>
				<SpeakerHeading>{mainHeading}</SpeakerHeading>
				<ButtonContainer>
					<CustomButton to={button.link} inverted={button.inverted}>
						{button.title}
					</CustomButton>
				</ButtonContainer>
			</SpeakerContainer>
		</SectionContainer>
	)
}

export default ZX7SpeakerSection
