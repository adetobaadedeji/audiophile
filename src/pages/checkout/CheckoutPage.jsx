import React from 'react'
import Checkout from '../../components/checkout/Checkout'
import SectionContainer from '../../components/sectionContainer/SectionContainer'
import GoBackBtn from '../../components/goBackBtn/GoBackBtn'

const CheckoutPage = () => {
	return (
		<>
			<GoBackBtn />
			<SectionContainer>
				<Checkout />
			</SectionContainer>
		</>
	)
}

export default CheckoutPage
