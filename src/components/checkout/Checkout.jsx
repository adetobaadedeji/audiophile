import React from 'react'
import CheckoutForm from './CheckoutForm'
import CheckoutSummary from './CheckoutSummary'
import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

const Checkout = () => {
	return (
		<CheckoutContainer>
			<CheckoutForm />
			<CheckoutSummary />
		</CheckoutContainer>
	)
}

export default Checkout

const CheckoutContainer = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin: 3rem 0;

	${screenSize.xmd`
    flex-direction: row;
  `}
`
