import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	toggleMenu,
	isMenuOpenSelector,
} from '../../redux/menuToggle/menuToggleSlice'
import CategorySection from '../categorySection/CategorySection'
import {
	SideMenuContainer,
	SideMenuOverlay,
	SideMenuWrapper,
} from './SideMenu.styles'

const SideMenu = () => {
	const isMenuOpen = useSelector(isMenuOpenSelector)
	const dispatch = useDispatch()

	const handleOverlayToggle = () => {
		dispatch(toggleMenu())
	}

	return (
		<SideMenuWrapper>
			<SideMenuOverlay isMenuOpen={isMenuOpen} onClick={handleOverlayToggle} />
			<SideMenuContainer isMenuOpen={isMenuOpen}>
				<CategorySection />
			</SideMenuContainer>
		</SideMenuWrapper>
	)
}

export default SideMenu
