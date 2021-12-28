import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	toggleMenu,
	isMenuOpenSelector,
} from '../../redux/menuToggle/menuToggleSlice'
import { HambugerContainer, Hamburger } from './MenuHamburger.styles'

const MenuHamburger = () => {
	const isMenuOpen = useSelector(isMenuOpenSelector)
	const dispatch = useDispatch()

	const handleMenuToggle = () => {
		// dispatch(toggleMenu(!isMenuOpen))
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
