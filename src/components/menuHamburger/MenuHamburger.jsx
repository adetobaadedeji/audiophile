import React, { useState } from 'react'
import { HambugerContainer, Hamburger } from './MenuHamburger.styles'

const MenuHamburger = () => {
	const [menuToggle, setMenuToggle] = useState(false)

	const handleMenuToggle = () => {
		setMenuToggle(!menuToggle)
	}

	return (
		<HambugerContainer onClick={handleMenuToggle}>
			<Hamburger menuToggle={menuToggle}/>
		</HambugerContainer>
	)
}

export default MenuHamburger
