import React from 'react'
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
	return (
		<div>
			<HeaderContainer>
				<HeaderContent>
					<MenuHamburgerContainer className='first-child'>
						<MenuHamburger />
					</MenuHamburgerContainer>
					<LogoContainer>
						<Image src={logo} alt='audiphile logo' />
					</LogoContainer>
					<MenuContainer>
						{links.map(({ id, text, url }) => (
							<MenuLink key={id} to={url} activeClassName='active'>
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