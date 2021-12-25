import React from 'react'
import styled from 'styled-components'
import { screenSize } from '../../globalStyles'
import { useHistory } from 'react-router-dom'
import SectionContainer from '../sectionContainer/SectionContainer'

const GoBackBtn = () => {
	const history = useHistory()
	const goToPreviousPath = () => history.goBack()
	return (
		<SectionContainer>
			<Button onClick={goToPreviousPath}>Go Back</Button>
		</SectionContainer>
	)
}

const Button = styled.button`
	font-size: 1.5rem;
	color: var(--color-gray-800);
	background-color: white;
	opacity: 0.8;
	border: none;
	outline-style: none;
	font-weight: 500;
	margin-top: 2rem;
	letter-spacing: 0.05rem;
	text-align: left;
  transition: var(--transition);

	&:hover {
		color: var(--color-main-normal);
	}

	${screenSize.sm`
		font-size: 1.1rem;
  `}

	${screenSize.xmd`
    margin-top: 4rem;
  `}
`

export default GoBackBtn
