import React from 'react'
import Checkout from '../../components/checkout/Checkout'
import SectionContainer from '../../components/sectionContainer/SectionContainer'
import GoBackBtn from '../../components/goBackBtn/GoBackBtn'
import styled from 'styled-components'


const CheckoutPage = () => {
	return (
		<CheckoutPageWrapper>
			<GoBackBtn />
			<SectionContainer>
				<Checkout />
			</SectionContainer>
		</CheckoutPageWrapper>
	)
}

export default CheckoutPage

const CheckoutPageWrapper = styled.section`
	width: 100%;
	background-color: var(--color-gray-300);
`