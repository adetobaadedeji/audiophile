import styled from 'styled-components'
import { screenSize } from '../../globalStyles'
import { Link } from 'react-router-dom'

export const CheckoutModalWrapper = styled.div``

export const CheckoutModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 2500;
	display: ${({ isCheckoutOpen }) => (isCheckoutOpen ? 'block' : 'none')};
`
export const CheckoutModalContainer = styled.aside`
	transition: var(--transition);
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2501;
	width: 87%;
	max-width: 320px;

	/* ${screenSize.md`
		top: 0;
		right: 0;
		transform: translate(-50%, 25%);
	`}
	${screenSize.xmd`
		transform: translate(50%, 25%);
		
	`}
	${screenSize.xl`
		transform: translate(70%, 25%);
		
	`} */
`
export const CheckoutModalContent = styled.div`
	background-color: var(--color-white);
	width: 100%;
	padding: 30px 25px;
	min-height: 420px;
	height: 420px;
	max-height: 420px;
	overflow: auto;
	border-radius: var(--radius);
	display: ${({ isCheckoutOpen }) => (isCheckoutOpen ? 'flex' : 'none')};
	flex-direction: column;
`
export const CheckoutModalHeader = styled.h1`
	width: 100%;
	/* display: flex;
	justify-content: space-between;
	font-size: 15px; */
`
export const CheckoutModalLogo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
`
export const CheckoutModalMessage = styled.p``

export const CheckoutModalMain = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px 0 15px;
	gap: 13px;
	height: 250px;
	max-height: 250px;
	overflow: auto;

  ${screenSize.xmd`
    flex-direction: row;
  `}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--color-gray-300);
    padding: 1.5rem 2rem;

		p {
			font-size: 15px;
			text-align: center;
			font-weight: 500;
			border-top: 2px solid var(--color-gray-600);
		}
	}
`
export const TotalAmount = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
	font-weight: 600;
	background-color: var(--color-black);
	padding: 2.5rem 2rem;
`
export const Total = styled.span`
	font-size: 15px;
	color: var(--color-gray-600);
	letter-spacing: 1px;
	text-transform: uppercase;
`
export const Amount = styled.span`
	font-size: 18px;
	color: var(--color-white);
	letter-spacing: 1px;
	font-weight: 700;
`

export const CheckoutModalFooter = styled.footer`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: auto;
`

export const CheckoutModalButton = styled(Link)`
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
	text-decoration: none;
	font-family: Manrope;
`
