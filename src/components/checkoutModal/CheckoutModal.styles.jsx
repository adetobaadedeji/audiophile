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
	/* max-width: 520px; */
	max-width: 33.75rem;
`
export const CheckoutModalContent = styled.div`
	background-color: var(--color-white);
	width: 100%;
	padding: 30px 20px;
	min-height: 420px;
	overflow: auto;
	border-radius: var(--radius);
	display: ${({ isCheckoutOpen }) => (isCheckoutOpen ? 'flex' : 'none')};
	flex-direction: column;
	gap: 20px;

	${screenSize.md`
		gap: 30px;
	`}
`
export const CheckoutModalHeader = styled.h1`
	width: 100%;
	font-size: 2.5rem;
	text-transform: uppercase;
	letter-spacing: 0.1rem;

	${screenSize.sm`
		font-size: 24px;
	`}

	${screenSize.md`
		font-size: 2rem;
		line-height: 2.4rem;
	`}
`
export const CheckoutModalLogo = styled.div`
display: flex;

img {
	object-fit: contain;
}
`
export const CheckoutModalMessage = styled.p`
	font-size: 1.5rem;
	font-weight: 400;
	letter-spacing: 0.05rem;
	color: var(--color-gray-600);

	span {
		color: var(--color-main-normal);
	}
	${screenSize.sm`
		font-size: 16px;
	`}
`

export const CheckoutModalMain = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: var(--radius);
	background-color: var(--color-gray-300);

${screenSize.xmd`
    flex-direction: row;
  `}
`
export const Summary = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: var(--color-gray-300);
	padding: 1.5rem 2rem;
	border-radius: var(--radius);

	${screenSize.xmd`
		padding: 1rem 1.5rem;
	`}

	span {
		text-align: center;
		font-size: 13px;
		font-weight: 500;
		color: var(--color-gray-600);
		margin-top: 5px;
		padding-top: 5px;
		border-top: 1px solid var(--color-gray-500);
	}
`

export const TotalAmount = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: start;
	background-color: var(--color-black);
	padding: 2rem 2rem;
	border-bottom-left-radius: var(--radius);
	border-bottom-right-radius: var(--radius);

	${screenSize.xmd`
		min-height: 137px;
		padding: 2.5rem 2rem;
		border-bottom-left-radius: 0;
		border-top-right-radius: var(--radius);
	`}
`
export const Total = styled.span`
	font-size: 15px;
	font-weight: 600;
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
