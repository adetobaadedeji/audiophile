import React from 'react'
import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

const SectionContainer = ({children}) => {
	return <Section>{children}</Section>
}

export default SectionContainer

const Section = styled.section`
	width: 100%;
	margin: 0 auto;

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
