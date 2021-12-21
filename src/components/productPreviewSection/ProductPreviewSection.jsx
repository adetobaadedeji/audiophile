import React from 'react'
import styled from 'styled-components'
import ProductPreview from '../productPreview/ProductPreview'
import { products } from '../../utils/productData'

const productPreviewSection = ({ category }) => {
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

export default productPreviewSection

const ProductPreviewSectionContainer = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`
