import React from 'react'
import SectionContainer from '../sectionContainer/SectionContainer'
import {
	FeatureContainer,
	FeatureInfoContainer,
	FeatureListContainer,
	FeatureList,
	FeatureListItem,
	FeatureListQty,
	FeatureListQtyText,
	FeatureHeader,
	FeatureInfo,
	// FeatureInfoTwo,
} from './ProductFeature.styles'

const ProductFeature = ({product}) => {
  const {features, includedItems} = product
	return (
		<SectionContainer>
			<FeatureContainer>
				<FeatureInfoContainer>
					<FeatureHeader>Features</FeatureHeader>
					<FeatureInfo>{features}</FeatureInfo>
					{/* <FeatureInfoTwo></FeatureInfoTwo> */}
				</FeatureInfoContainer>
				<FeatureListContainer>
					<FeatureHeader>In the box</FeatureHeader>
					<FeatureList>
						{includedItems.map((item, index) => (
							<FeatureListItem key={index}>
								<FeatureListQty>{item.quantity}x</FeatureListQty>
								<FeatureListQtyText>{item.item}</FeatureListQtyText>
							</FeatureListItem>
						))}
					</FeatureList>
				</FeatureListContainer>
			</FeatureContainer>
		</SectionContainer>
	)
}

export default ProductFeature
