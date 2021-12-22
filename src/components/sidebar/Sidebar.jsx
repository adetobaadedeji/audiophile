import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	toggleMenu,
	toggleStateSelector,
} from '../../redux/slices/menuToggleSlice'
import CategorySection from '../categorySection/CategorySection'
import {
	SidebarContainer,
	SidebarOverlay,
	SidebarWrapper,
} from './Sidebar.styles'

const Sidebar = () => {
	const toggleState = useSelector(toggleStateSelector)
	const dispatch = useDispatch()

	const handleOverlayToggle = () => {
		dispatch(toggleMenu())
	}

	return (
		<SidebarWrapper>
			<SidebarOverlay toggleState={toggleState} onClick={handleOverlayToggle} />
			<SidebarContainer toggleState={toggleState}>
				<CategorySection />
			</SidebarContainer>
		</SidebarWrapper>
	)
}

export default Sidebar
