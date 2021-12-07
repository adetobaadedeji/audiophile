import React from 'react'
import { CustomButtonContainer } from './customButton.styles'

const customButton = ({ children, ...props }) => {
	return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
}

export default customButton
