import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

export const CustomButtonContainer = styled.button`
	cursor: pointer;
	background-color: var(--color-main-normal);
	color: var(--color-white);
	text-transform: uppercase;
	font-size: 1.125rem;
	letter-spacing: 0.05rem;
	font-weight: 500;
	padding: 1.25rem 2.2rem;
	transition: var(--transition);
	border: none;
	border-radius: 2px;
	/* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
		0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
		0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07); */

	${screenSize.md`
			font-size: 1rem;
  `}

	${screenSize.xmd`
			font-size: 0.9rem;
		padding: 1rem 2rem;
  `}
`