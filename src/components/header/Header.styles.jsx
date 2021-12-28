import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { screenSize } from '../../globalStyles'

export const HeaderContainer = styled.section`
	width: 100%;
	height: 7rem;
	background-color: var(--color-gray-700);
	color: var(--color-gray-200);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 2000;

	${screenSize.md`
		height: 5.5rem;
		padding: 0 40px;
	`}
	${screenSize.lg`
		padding: 0;
	`}
`
export const HeaderContent = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 20px;
	margin: 0 auto;
	border-bottom: 2px solid var(--color-gray-650);
	display: flex;
	justify-content: space-between;
	align-items: center;

	${screenSize.sm`
		justify-content: flex-start;
			
		.first-child {
			margin-right: 45px;
		}
		.last-child {
			margin-left: auto;
		}
	`}
	${screenSize.md`
			padding: 0;
	`}
	${screenSize.xmd`
		justify-content: space-between;
		
		.last-child {
			margin-left: 40px;
		}
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

export const MenuHamburgerContainer = styled.div`
	${screenSize.xmd`
		display: none;
	`}
`
export const LogoContainer = styled(Link)`
	display: flex;
	${screenSize.md`
		margin-right: 30px;
	`}
`
export const Image = styled.img``

export const MenuContainer = styled.div`
	display: none;

	${screenSize.xmd`
		display: flex;
		text-transform: uppercase;
	`}
`
export const CartLogoContainer = styled.div`
	display: flex;
	position: relative;
`

export const CartQuantity = styled.span`
position: absolute;
top: -50%;
right: -50%;
background-color: var(--color-main-normal);
color: var(--color-white);
width: 1.2rem;
height: 1.2rem;
border-radius: 50%;
display: ${({productsCount}) => productsCount >= 1  ? 'flex' : 'none' };
align-items: center;
justify-content: center;
font-size: 0.8rem;
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
