import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { productsSelector } from '../../redux/slices/productsSlice'
import ProductDetail from '../../components/productDetail/ProductDetail'
import ProductFeature from '../../components/productFeature/ProductFeature'
import ProductGallery from '../../components/productGallery/ProductGallery'
import ProductRelated from '../../components/productRelated/ProductRelated'
import CategorySection from '../../components/categorySection/CategorySection'
import AboutSection from '../../components/aboutSection/AboutSection'
import { selectSingleProduct } from '../../redux/products/productsSelector'
import GoBackBtn from '../../components/goBackBtn/GoBackBtn'


const ProductPage = () => {
	const { productId } = useParams()
	const product = useSelector(selectSingleProduct(productId))

	// const product = useSelector((state) => productsSelector(state, productId))

	return (
		<div>
			<GoBackBtn />
			<ProductDetail product={product} />
			<ProductFeature product={product} />
			<ProductGallery product={product} />
			<ProductRelated product={product} />
			<CategorySection />
			<AboutSection />
		</div>
	)
}

export default ProductPage
