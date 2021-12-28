import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	toggleMenu,
	isMenuOpenSelector,
} from '../../redux/menuToggle/menuToggleSlice'
import {
	CategoryContainer,
	CategoryHeader,
	CategoryImage,
	CategoryWrapper,
	ButtonLink,
} from './Category.styles'

const Category = ({ item }) => {
	const isMenuOpen = useSelector(isMenuOpenSelector)
	const dispatch = useDispatch()

	const handleToggle = () => {
		if (isMenuOpen) {
			dispatch(toggleMenu())
		}
	}

	const { title, link, image } = item
	return (
		<CategoryContainer>
			<CategoryImage className='image' src={image.src} alt={image.alt} />
			<CategoryWrapper>
				<CategoryHeader>{title}</CategoryHeader>
				<ButtonLink to={link} onClick={handleToggle}>
					Shop
				</ButtonLink>
			</CategoryWrapper>
		</CategoryContainer>
	)
}
export default Category
