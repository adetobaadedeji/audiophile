import React from 'react'
import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

const CategoryHero = ({ title }) => {
	return (
		<CategoryHeroContainer>
			<Title>{title}</Title>
		</CategoryHeroContainer>
	)
}

export default CategoryHero

const CategoryHeroContainer = styled.section`
	width: 100%;
	height: 10rem;
	background-color: var(--color-gray-700);
	display: flex;
	justify-content: center;
	align-items: center;

	${screenSize.sm`
    height: 8rem;
  `}
	${screenSize.md`
    height: 10rem;
  `}
	${screenSize.xmd`
    height: 12rem;
  `}
`

const Title = styled.h1`
	text-align: center;
	font-size: 2.8rem;
	color: var(--color-white);
	text-transform: uppercase;

	${screenSize.xmd`
    font-size: 2.5rem;
  `}
`
