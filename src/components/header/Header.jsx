import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	toggleCart,
	toggleMenu,
	isMenuOpenSelector,
} from '../../redux/uiToggle/uiToggleSlice'
import { selectCartProductsCount } from '../../redux/cart/cartSelectors'
import logo from '../../assets/shared/desktop/logo.svg'
import icon_cart from '../../assets/shared/desktop/icon-cart.svg'
import {
	CartLogoContainer,
	CartQuantity,
	HeaderContainer,
	HeaderContent,
	Image,
	LogoContainer,
	MenuContainer,
	MenuHamburgerContainer,
	MenuLink,
} from './Header.styles'
import { links } from '../../utils/routeData'
import MenuHamburger from '../menuHamburger/MenuHamburger'

const Header = () => {
	const dispatch = useDispatch()
	const isMenuOpen = useSelector(isMenuOpenSelector)
	const productsCount = useSelector(selectCartProductsCount)

	const handleMenuToggle = () => {
		if (isMenuOpen) {
			dispatch(toggleMenu())
			window.scrollTo(0, 0)
		}
	}

	const handleCartToggle = () => {
		// This will close the SideMenu if open before opening the cartModal
		if (isMenuOpen) {
			dispatch(toggleMenu())
		}

		// This will open/close the cartModal
		dispatch(toggleCart())
	}

	return (
		<div>
			<HeaderContainer>
				<HeaderContent>
					<MenuHamburgerContainer className='first-child'>
						<MenuHamburger />
					</MenuHamburgerContainer>
					<LogoContainer to='/' onClick={handleMenuToggle}>
						<Image src={logo} alt='audiphile logo' />
					</LogoContainer>
					<MenuContainer>
						{links.map(({ id, text, url }) => (
							<MenuLink exact key={id} to={url} activeClassName='active'>
								{text}
							</MenuLink>
						))}
					</MenuContainer>
					<CartLogoContainer
						// isCartOpen={isCartOpen}
						onClick={handleCartToggle}
						className='last-child'
					>
						<Image src={icon_cart} alt='cart icon' />
						{!!productsCount && (
							<CartQuantity productsCount>{productsCount}</CartQuantity>
						)}
					</CartLogoContainer>
				</HeaderContent>
			</HeaderContainer>
		</div>
	)
}

export default Header
