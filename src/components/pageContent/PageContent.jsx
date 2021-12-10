import React from 'react'
import CustomButton from '../customButton/CustomButton'
import {
	ContentContainer,
	Description,
	TopHeading,
	MainHeading,
} from './PageContent.styles'

const PageContent = ({ data: { hero } }) => {
	const { topHeading, mainHeading, description, button } = hero
	return (
		<ContentContainer>
			<TopHeading>{topHeading}</TopHeading>
			<MainHeading>{mainHeading}</MainHeading>
			<Description>{description}</Description>
			<CustomButton>{button.title}</CustomButton>
		</ContentContainer>
	)
}

export default PageContent
