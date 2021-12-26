import styled from 'styled-components'
// import { screenSize } from '../../globalStyles'

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
	/* min-height: 42rem;
	height: 42rem;
	max-height: 42rem; */
`

export const CartModalContent = styled.div`
	background-color: var(--color-white);
	width: 100%;
	/* height: 100%; */
	padding: 3rem 2.5rem;
	min-height: 42rem;
	height: 42rem;
	max-height: 42rem;
	overflow: auto;
	border-radius: var(--radius);
	display: ${({ isCartOpen }) => (isCartOpen ? 'flex' : 'none')};
	flex-direction: column;
	/* font-family: Manrope; */
`
export const CartModalHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-size: 1.5rem;
`
export const CartItems = styled.span`
	font-weight: 600;
	letter-spacing: 0.1rem;
	text-transform: uppercase;
`
export const RemoveButton = styled.button`
	background-color: var(--color-white);
	letter-spacing: 0.1rem;
	font-weight: 600;
	color: var(--color-gray-600);
	text-decoration: underline;
	font-family: Manrope;
	cursor: pointer;
	border: none;
	outline-style: none;
	text-underline-offset: 0.15rem;

	&:hover {
		color: var(--color-main-normal);
	}
`
export const CartModalMain = styled.main`
	width: 100%;
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
	font-size: 1.3rem;
	color: var(--color-gray-600);
	letter-spacing: 0.1rem;
	text-transform: uppercase;
`
export const Amount = styled.span`
	font-size: 1.5rem;
`

export const CartModalButton = styled.button`
	width: 100%;
	font-size: 1.3rem;
	font-weight: 600;
	letter-spacing: 0.1rem;
	padding: 1.5rem 0;
	text-align: center;
	color: var(--color-white);
	background-color: var(--color-main-normal);
	border: none;
	outline-style: none;
	text-transform: uppercase;
	font-family: Manrope;
`
