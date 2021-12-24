import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { productsSelector } from '../../redux/slices/productsSlice'
import ProductPreview from '../../components/productPreview/ProductPreview'
import ProductFeature from '../../components/productFeature/ProductFeature'
import ProductGallery from '../../components/productGallery/ProductGallery'

const ProductPage = () => {
	const productItems = useSelector(productsSelector)
	let { productId } = useParams()

	// const product = productItems.find((product) => product.slug === productId)
  const product = productItems[productId]

	return (
		<div>
			<ProductPreview product={product} />
			<ProductFeature product={product} />
			<ProductGallery product={product} />
		</div>
	)
}

export default ProductPage
