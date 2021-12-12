import React from 'react'
import SectionContainer from '../sectionContainer/SectionContainer'
import { homeData } from '../../utils/homeData'
import CustomButton from '../customButton/CustomButton'
import {
	ButtonContainer,
	ContentContainer,
	EarphoneContainer,
	EarphoneHeading,
	ImageContainer,
} from './XY1EarphonesSection.styles'

const XY1EarphonesSection = () => {
	const { sectionFour } = homeData
	return (
		<div>
			<SectionContainer>
				<EarphoneContainer>
					<ImageContainer></ImageContainer>
					<ContentContainer>
						<EarphoneHeading>{sectionFour.mainHeading}</EarphoneHeading>
						<ButtonContainer>
							<CustomButton to={sectionFour.button.link} inverted>
								{sectionFour.button.title}
							</CustomButton>
						</ButtonContainer>
					</ContentContainer>
				</EarphoneContainer>
			</SectionContainer>
		</div>
	)
}

export default XY1EarphonesSection
