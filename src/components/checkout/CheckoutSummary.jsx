import React from 'react'
import { useSelector } from 'react-redux'
import {
	// selectCartQuantity,
	selectCartProducts,
	selectCartTotal,
	selectShippingFee,
	selectVatFee,
	selectGrandTotal,
} from '../../redux/cart/cartSelectors'
import CartItem from '../cartItem/CartItem'

import {
	SummaryContainer,
	SummaryCosts,
	SummaryFooter,
	SummaryHeader,
	SummaryMain,
  Title,
  TitleTotal,
  Amount,
  SummaryButton,
} from './CheckoutSummary.styles'

const CheckoutSummary = () => {
  // const transform = (value) => Number.parseInt(value).toFixed(0)

  const total = useSelector(selectCartTotal)
  const shipping = (useSelector(selectShippingFee))
  const vat = useSelector(selectVatFee)
  const grandTotal = useSelector(selectGrandTotal)

  const products = useSelector(selectCartProducts)

	return (
		<div>
			<SummaryContainer>
				<SummaryHeader>Summary</SummaryHeader>
				<SummaryMain>
					{products.length > 0 ? (
						products.map((product, index) => (
							<CartItem key={index} product={product} />
						))
					) : (
						<span>
              No summary to display. 
              <br/>
              Your cart is empty.
            </span>
					)}
				</SummaryMain>
				<SummaryCosts>
					<TitleTotal>
						<Title>Total</Title>
						<Amount>$ {total.toLocaleString('en-US')}</Amount>
					</TitleTotal>
					<TitleTotal>
						<Title>shipping</Title>
						<Amount>$ {shipping.toLocaleString('en-US')}</Amount>
					</TitleTotal>
					<TitleTotal>
						<Title>vat (included)</Title>
						<Amount>$ {vat.toLocaleString('en-US')}</Amount>
					</TitleTotal>
				</SummaryCosts>
				<SummaryFooter>
					<TitleTotal>
						<Title>Grand Total</Title>
						<Amount colored='true'>$ {grandTotal.toLocaleString('en-US')}</Amount>
					</TitleTotal >
          <SummaryButton to=''>Continue & Pay</SummaryButton>
				</SummaryFooter>
			</SummaryContainer>
		</div>
	)
}

export default CheckoutSummary
