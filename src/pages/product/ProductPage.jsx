import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { productsSelector } from '../../redux/slices/productsSlice'
import ProductPreview from '../../components/productPreview/ProductPreview'
import ProductFeature from '../../components/productFeature/ProductFeature'
import ProductGallery from '../../components/productGallery/ProductGallery'
import ProductRelated from '../../components/productRelated/ProductRelated'
import CategorySection from '../../components/categorySection/CategorySection'
import AboutSection from '../../components/aboutSection/AboutSection'


const ProductPage = () => {
	const productItems = useSelector(productsSelector)
	const { productId } = useParams()
	const product = productItems[productId]

	// this was when productItems was still an array before normalizing the data
	// const product = productItems.find((product) => product.slug === productId)

	return (
		<div>
			<ProductPreview product={product} />
			<ProductFeature product={product} />
			<ProductGallery product={product} />
			<ProductRelated product={product} />
			<CategorySection />
			<AboutSection />
		</div>
	)
}

export default ProductPage
