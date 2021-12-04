import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { screenSize } from '../../globalStyles'

export const HeaderContainer = styled.section`
	width: 100%;
	height: 6rem;
	background-color: var(--color-black);
	color: var(--color-gray-200);
	${screenSize.md`
			height: 6rem;
	`}
`
export const HeaderContent = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 1.25rem;
	margin: 0 auto;
	border-bottom: 0.1rem solid var(--color-gray-700);
	display: flex;
	justify-content: space-between;
	align-items: center;

	${screenSize.sm`
		justify-content: flex-start;
		padding: 0 40px;

		.first-child {
			margin-right: 45px;
		}
		.last-child {
			margin-left: auto;
		}
	`}
	${screenSize.md`
		justify-content: space-between;
	
		.last-child {
			margin-left: 40px;
		}
	`}
	${screenSize.lg`
		width: 90%;
	`}
	${screenSize.xl`
		width: 77%;
	`}
`

export const MenuHamburgerContainer = styled.div`
	${screenSize.md`
		display: none;
	`}
`
export const LogoContainer = styled.div`
	margin-right: 30px;
	display: flex;
`
export const Image = styled.img``

export const MenuContainer = styled.div`
	display: none;

	${screenSize.md`
		display: flex;
		text-transform: uppercase;
	`}
`
export const CartLogoContainer = styled.div`
	display: flex;
`
export const MenuLink = styled(NavLink)`
	text-decoration: none;
	color: var(--color-gray-200);
	font-size: 0.8125rem;
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
	${screenSize.md`
		margin-right: 30px;
	`}
	${screenSize.xl`
		margin-right: 40px;
	`}
`
