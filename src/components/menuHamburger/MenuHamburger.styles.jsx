import styled, { css } from 'styled-components'

export const HambugerContainer = styled.div`
	width: 18px;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: var(--burger-transition);
`
const HamburgerStyles = css`
	width: 100%;
	height: 3px;
	border-radius: 1px;
	background-color: var(--color-white);
	transition: var(--burger-transition);
`
export const Hamburger = styled.div`
	position: relative;
	${HamburgerStyles}
	&::after,
  ::before {
		content: '';
		position: absolute;
		${HamburgerStyles}
	}
	&::after {
		transform: translateY(-7px);
	}
	&::before {
		transform: translateY(7px);
	}
	${({ isMenuOpen }) =>
		isMenuOpen &&
		css`
			transform: translateX(-21px);
			background: transparent;
			&::after {
				transform: rotate(45deg) translate(15px, -15px);
			}
			&::before {
				transform: rotate(-45deg) translate(15px, 15px);
			}
		`}
`
