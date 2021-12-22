import styled, { css } from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { screenSize } from '../../globalStyles'

const defaultStyles = css`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;

	${screenSize.md`
		align-items: start;
		gap: 2.5rem;
	`}

	${screenSize.xmd`
		gap: 2rem;
	`}
`

export const FooterContainer = styled.section`
	width: 100%;
	background-color: var(--color-gray-700);
`
export const FooterContent = styled.div`
	${defaultStyles}
	padding: 4rem 0;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		display: block;
		width: 7.5rem;
		height: 0.35rem;
		background-color: var(--color-main-normal);

		${screenSize.md`
			left: 0;
      transform: translateX(0);
			width: 6.5rem;
	`}
	}

	& > * {
		${defaultStyles}
	}
`
export const FooterNav = styled.div`
	${screenSize.xmd`
		flex-direction: row;
		gap: 0rem;
	`}
	
	& > * {
		${defaultStyles}
	}
`
export const LogoContainer = styled(Link)``
export const Image = styled.img``

export const FooterMenuContainer = styled.div`
	gap: 3rem;

	${screenSize.md`
		flex-direction: row;
	`}
	${screenSize.xmd`
		justify-content: flex-end;
	`}
`
export const MenuLink = styled(NavLink)`
	text-decoration: none;
	text-transform: uppercase;
	color: var(--color-gray-200);
	font-size: 1.3rem;
	font-weight: 700;
	line-height: 1.5625rem;
	letter-spacing: 0.1rem;
	transition: var(--transition);

	&:hover {
		transition: var(--transition);
		color: var(--color-main-normal);
	}
	&.active {
		transition: var(--transition);
		color: var(--color-main-normal);
	}

	${screenSize.sm`

		font-size: 1.1rem;
  `}
	${screenSize.md`
		font-size: 0.95rem;
	`}
	${screenSize.xmd`
		font-size: 0.8125rem;
	`}
`

export const FooterMain = styled.div``
export const FooterDescription = styled.p`
	width: 100%;
	text-align: center;
	color: var(--color-gray-500);
	font-size: 1.5rem;
	line-height: 2.3rem;
	font-weight: 400;

	${screenSize.sm`
		font-size: 1.2rem;
  `}
	${screenSize.md`
		text-align: justify;
		font-size: 1rem;
	`}

	${screenSize.xmd`
		max-width: 50%;
		font-size: 0.9rem;
		line-height: 1.35rem;
		text-align: left;
	`}

	${screenSize.xl`
		font-size: 0.95rem;
		line-height: 1.5rem;
	
	`}
`

export const FooterBottom = styled.div`
	${screenSize.md`
		flex-direction: row;
		gap: 0rem;
		margin-top: 2.5rem;
	`}
	${screenSize.xmd`
		margin-top: 0.5rem;
	`}

	& > * {
		${defaultStyles}
	}
`

export const SocialsContainer = styled.div`
	flex-direction: row;
	gap: 1.5rem;
	justify-content: center;

	${screenSize.md`
		justify-content: flex-end;
	`}

	${screenSize.xmd`
		transform: translateY(-4rem);
	`}
`
export const SocialLink = styled.a`
	transition: var(--transiton);
	.social-icon:hover {
		fill: var(--color-main-normal);
	}
`

export const CopyrightContainer = styled.p`
	width: 100%;
	text-align: center;
	color: var(--color-gray-500);
	font-size: 1.5rem;
	line-height: 1.9rem;
	font-weight: 500;

	${screenSize.sm`
		font-size: 1.2rem;
  `}
	${screenSize.md`
		font-size: 1.05rem;
	`}
	${screenSize.xmd`
		font-size: 0.9rem;
	`}
	${screenSize.xl`
		font-size: 0.95rem;
	`}
`
