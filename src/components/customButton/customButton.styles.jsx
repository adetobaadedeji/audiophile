import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { screenSize } from '../../globalStyles'

const buttonStyles = css`
	background-color: var(--color-main-normal);
	color: var(--color-white);
	border: none;
`
const invertedButtonStyles = css`
	background-color: transparent;
	color: var(--color-black);
	border: 2px solid var(--color-black);
`
const blackButtonStyles = css`
	background-color: var(--color-black);
	color: var(--color-white);
	border: none;
`

const getButtonStyles = (props) => {
	if (props.isBlack) {
		return blackButtonStyles
	}

	return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled(Link)`
	cursor: pointer;
	${getButtonStyles}
	text-transform: uppercase;
	text-decoration: none;
	font-size: 1.125rem;
	letter-spacing: 0.05rem;
	font-weight: 600;
	padding: 1.25rem 2.2rem;
	transition: var(--transition);
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