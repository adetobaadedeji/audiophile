import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	toggleMenu,
	toggleStateSelector,
} from '../../redux/slices/menuToggleSlice'
import logo from '../../assets/shared/desktop/logo.svg'
import icon_cart from '../../assets/shared/desktop/icon-cart.svg'
import {
	CartLogoContainer,
	HeaderContainer,
	HeaderContent,
	Image,
	LogoContainer,
	MenuContainer,
	MenuHamburgerContainer,
	MenuLink
} from './Header.styles'
import { links } from '../../utils/routeData'
import MenuHamburger from '../menuHamburger/MenuHamburger'

const Header = () => {
		const toggleState = useSelector(toggleStateSelector)
		const dispatch = useDispatch()

		const handleToggle = () => {
			if (toggleState) {
				dispatch(toggleMenu())
			}
		}

	return (
		<div>
			<HeaderContainer>
				<HeaderContent>
					<MenuHamburgerContainer className='first-child'>
						<MenuHamburger />
					</MenuHamburgerContainer>
					<LogoContainer to='/' onClick={handleToggle}>
						<Image src={logo} alt='audiphile logo' />
					</LogoContainer>
					<MenuContainer>
						{links.map(({ id, text, url }) => (
							<MenuLink exact key={id} to={url} activeClassName='active'>
								{text}
							</MenuLink>
						))}
					</MenuContainer>
					<CartLogoContainer className='last-child'>
						<Image src={icon_cart} alt='cart icon' />
					</CartLogoContainer>
				</HeaderContent>
			</HeaderContainer>
		</div>
	)
}

export default Header