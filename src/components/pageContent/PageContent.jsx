import React from 'react'
import customButton from '../customButton/customButton'
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
			<customButton>{button.title}</customButton>
		</ContentContainer>
	)
}

export default PageContent
