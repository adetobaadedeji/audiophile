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
	if (props.black) {
		return blackButtonStyles
	}

	return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled(Link)`
	cursor: pointer;
	${getButtonStyles};
	text-transform: uppercase;
	text-decoration: none;
	font-size: 1.3rem;
	letter-spacing: 0.1rem;
	font-weight: 600;
	padding: 1.4rem 2.4rem;
	transition: var(--transition);

	${screenSize.sm`
		font-size: 1rem;
		padding: 1.2rem 2.2rem;
  `}

	${screenSize.md`
		font-size: 0.86rem;
		padding: ${({ inverted }) => (inverted ? '0.8rem 1.8rem' : '1rem 2rem')};
  `}

	${screenSize.xmd`
		font-size: 0.85rem;
		padding: ${({ inverted }) => (inverted ? '0.8rem 1.8rem' : '1rem 2rem')};
  `}
`
