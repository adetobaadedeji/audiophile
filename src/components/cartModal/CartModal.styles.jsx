import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

export const CartModalWrapper = styled.div``

export const CartModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 1000;
	display: ${({ isCartOpen }) => (isCartOpen ? 'block' : 'none')};
`
export const CartModalContainer = styled.aside`
	transition: var(--transition);
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1001;
	width: 87%;
	max-width: 320px;

	${screenSize.md`
		transform: translate(10%, -100%);
		
	`}

	@media (min-width: 765px) {
		transform: translate(10%, -65%);
	}

	${screenSize.xmd`
		transform: translate(40%, -65%);
		
	`}
	${screenSize.lg`
		transform: translate(50%, -68%);
		
	`}
	${screenSize.xl`
		transform: translate(70%, -65%);
		
	`}
`
export const CartModalContent = styled.div`
	background-color: var(--color-white);
	width: 100%;
	padding: 30px 25px;
	min-height: 420px;
	height: 420px;
	max-height: 420px;
	overflow: auto;
	border-radius: var(--radius);
	display: ${({ isCartOpen }) => (isCartOpen ? 'flex' : 'none')};
	flex-direction: column;

`
export const CartModalHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-size: 15px;
`
export const CartQuantity = styled.span`
	font-weight: 600;
	letter-spacing: 1px;
	text-transform: uppercase;
`
export const RemoveButton = styled.button`
	background-color: var(--color-white);
	letter-spacing: 1px;
	font-weight: 600;
	color: var(--color-gray-600);
	text-decoration: underline;
	font-family: Manrope;
	cursor: pointer;
	border: none;
	outline-style: none;
	text-underline-offset: 1.5px;

	&:hover {
		color: var(--color-main-normal);
	}
`
export const CartModalMain = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: ${({ products }) =>
		products.length > 0 ? 'start' : 'center'};
	align-items: center;
	margin: 20px 0 15px;
	gap: 13px;
	height: 250px;
	max-height: 250px;
	overflow: auto;


	span {
		font-size: 15px;
		text-align: center;
		font-weight: 500;
	}
`
export const CartModalMainWrapper = styled.main`
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
export const ProductNamePrice = styled.div``
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
export const ControlButtonsContainer = styled.div`
	margin-left: auto;
`

export const CartModalFooter = styled.footer`
	width: 100%;
	display: flex;
  flex-direction: column;
  margin-top: auto;
`
export const TotalAmount = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
	font-weight: 600;
`
export const Total = styled.span`
	font-size: 13px;
	color: var(--color-gray-600);
	letter-spacing: 1px;
	text-transform: uppercase;
`
export const Amount = styled.span`
	font-size: 15px;
`
export const CartModalButton = styled.button`
	width: 100%;
	font-size: 13px;
	font-weight: 600;
	letter-spacing: 1px;
	padding: 15px 0;
	text-align: center;
	color: var(--color-white);
	background-color: var(--color-main-normal);
	border: none;
	outline-style: none;
	text-transform: uppercase;
	font-family: Manrope;
`
