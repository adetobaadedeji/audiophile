import styled from 'styled-components'
// import { screenSize } from '../../globalStyles'

export const CartModalWrapper = styled.div``

export const CartModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
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
`

export const CartModalContent = styled.div`
	background-color: var(--color-white);
	width: 100%;
	padding: 3rem 2.5rem;
	min-height: 40rem;
	max-height: 40rem;
  overflow: auto;
	border-radius: var(--radius);
	display: ${({ isCartOpen }) => (isCartOpen ? 'block' : 'none')};
`