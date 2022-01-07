import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

export const CartItemContainer = styled.main`
	width: 100%;
	display: flex;
	align-items: center;
`
export const ImageContainer = styled.div`
	max-width: 64px;
	margin-right: 10px;
`
export const Image = styled.img`
	width: 100%;
	border-radius: var(--radius);
`
export const ProductNamePrice = styled.div`
	margin-right: auto;
`
export const ProductName = styled.p`
	font-size: 13.4px;
	font-weight: 700;
	margin-bottom: 5px;
`
export const ProductPrice = styled.p`
	font-size: 12.8px;
	font-weight: 600;
	color: var(--color-gray-600);
`
export const ControlButtonsContainer = styled.div``

export const ItemQuantity = styled.p`
	font-size: 1.4rem;
	color: var(--color-gray-500);
	font-weight: 600;

	${screenSize.sm`
		font-size: 1.07rem;
	`}

	${screenSize.md`
		font-size: 1rem;
	`}

	${screenSize.md`
		font-size: 0.937rem;
	`}
`
