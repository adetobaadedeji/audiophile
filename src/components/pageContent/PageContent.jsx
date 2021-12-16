import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import {
	ContentContainer,
	Description,
	TopHeading,
	MainHeading,
} from './PageContent.styles'

const PageContent = ({ data }) => {
	const { topHeading, mainHeading, description, button, zx9 } = data
	return (
		<ContentContainer>
			<TopHeading>{topHeading}</TopHeading>
			<MainHeading zx9={zx9}>{mainHeading}</MainHeading>
			<Description zx9={zx9}>{description}</Description>
			<CustomButton
				to={button.link}
				black={button.black}
				inverted={button.inverted}
			>
			{button.title}
			</CustomButton>
		</ContentContainer>
	)
}

export default PageContent
