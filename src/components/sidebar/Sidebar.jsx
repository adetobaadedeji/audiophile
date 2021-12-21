import React from 'react'
import { useSelector } from 'react-redux'
import { toggleStateSelector } from '../../redux/slices/menuToggleSlice'
import CategorySection from '../categorySection/CategorySection'
import { SidebarContainer } from './Sidebar.styles'

const Sidebar = () => {
  const toggleState = useSelector(toggleStateSelector)

  return (
    <SidebarContainer toggleState={toggleState}>
      <CategorySection />
    </SidebarContainer>
  )
}

export default Sidebar

