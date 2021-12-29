import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	toggleCart,
	toggleMenu,
	isMenuOpenSelector,
	isCartOpenSelector,
} from '../../redux/uiToggle/uiToggleSlice'
import { HambugerContainer, Hamburger } from './MenuHamburger.styles'

const MenuHamburger = () => {
	const isMenuOpen = useSelector(isMenuOpenSelector)
	const isCartOpen = useSelector(isCartOpenSelector)

	const dispatch = useDispatch()

	const handleMenuToggle = () => {
		// This will close the cartModal if open before opening the sideMenu
		if (isCartOpen) {
			dispatch(toggleCart())
		}

		// This will open/close the sideMenu
		dispatch(toggleMenu())

		// scroll back to top if the Hambuger is closed
		if (isMenuOpen) {
			window.scrollTo(0, 0)
		}
	}

	return (
		<HambugerContainer onClick={handleMenuToggle}>
			<Hamburger isMenuOpen={isMenuOpen} />
		</HambugerContainer>
	)
}

export default MenuHamburger
