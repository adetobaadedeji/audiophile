import React from 'react'
import logo from '../../assets/shared/desktop/logo.svg'
import icon_cart from '../../assets/shared/desktop/icon-cart.svg'
import {
	CartLogoContainer,
	HeaderContainer,
	HeaderContent,
	LogoContainer,
	MenuContainer,
	MenuLink
} from './Header.styles'
import { links } from '../../utils/datas'

const Header = () => {
	return (
		<div>
			<HeaderContainer>
				<HeaderContent>
					{/* <CartLogoContainer className='first-child'>
						<img src={icon_cart} alt='cart icon' />
					</CartLogoContainer> */}
					<LogoContainer>
						<img src={logo} alt='audiphile logo' />
					</LogoContainer>
					<MenuContainer>
						{links.map(({ id, text, url }) => (
							<MenuLink key={id} to={url} activeClassName='active'>
								{text}
							</MenuLink>
						))}
					</MenuContainer>
					<CartLogoContainer className='last-child'>
						<img src={icon_cart} alt='cart icon' />
					</CartLogoContainer>
				</HeaderContent>
			</HeaderContainer>
		</div>
	)
}

export default Header