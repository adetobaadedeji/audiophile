import { products } from "./productData";

export const getProductsByCategory = (category) => {
	products
    .filter((product) => product.category === category)
		.map((product) => {
			return {
				id: product.id,
				slug: product.slug,
				name: product.name,
				shortName: product.shortName,
				price: product.price,
				cartImage: product.cartImage,
				description: product.description,
				new: product.new,
				category: product.category,
				categoryImage: product.categoryImage,
			}
		})
		.sort((a, b) => (b.new) - (a.new))
}