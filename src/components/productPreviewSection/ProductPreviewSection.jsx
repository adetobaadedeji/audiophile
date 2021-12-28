import React from 'react'
import styled from 'styled-components'
import ProductPreview from '../productPreview/ProductPreview'
// import { productsSelector } from '../../redux/slices/productsSlice'
import { useSelector } from 'react-redux'
import { selectProductsForPreview } from '../../redux/products/productsSelector'

const ProductPreviewSection = ({ category }) => {
	// const productItems = useSelector(productsSelector)
	// const products = Object.keys(productItems).map((item) => productItems[item])

	
	const products = useSelector(selectProductsForPreview)

	return (
		<ProductPreviewSectionContainer>
			{products
				.filter((product) => product.category === category)
				.sort((a, b) => b.new_product - a.new_product)
				.map((product, index) => (
					<ProductPreview key={product.id} index={index} product={product} />
				))}
		</ProductPreviewSectionContainer>
	)
}

export default ProductPreviewSection

const ProductPreviewSectionContainer = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`
