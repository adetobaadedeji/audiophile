import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu, toggleStateSelector } from '../../redux/slices/menuToggleSlice'
import { HambugerContainer, Hamburger } from './MenuHamburger.styles'

const MenuHamburger = () => {
	const toggleState = useSelector(toggleStateSelector)
	const dispatch = useDispatch()

	const handleMenuToggle = () => {
		dispatch(toggleMenu(!toggleState))
	}

	return (
		<HambugerContainer onClick={handleMenuToggle}>
			<Hamburger toggleState={toggleState} />
		</HambugerContainer>
	)
}

export default MenuHamburger
