import React from 'react'
import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

// const SectionContainer = (WrappedComponent) => {
// 	return (props) => {
// 		return (
// 			<Section>
// 				<WrappedComponent {...props}/>
// 			</Section>
// 		)
// 	}
// }
// export default SectionContainer

const SectionContainer = ({ children }) => {
	return <Section>{children}</Section>
}

export default SectionContainer

const Section = styled.section`
	width: 87%;
	margin: 0 auto;

	${screenSize.sm`
		width: 90%;
	`}

	${screenSize.lg`
		width: 95%;
	`}

	${screenSize.xl`
		width: 85%;	
	`}

	@media (min-width: 1366px) {
		width: 72%;
	}
`
