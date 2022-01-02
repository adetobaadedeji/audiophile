import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

export const FormWrapper = styled.div`
	width: 100%;
	background-color: var(--color-white);
	padding: 3rem 2.5rem;
	margin: 3rem 0;
	border-radius: var(--radius);
	display: flex;
	flex-direction: column;
	gap: 30px;

	${screenSize.xmd`
    width: 100%;
  `}
`
export const FormContainer = styled.form`
	width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

	/* padding: 3rem 2.5rem; */
`

export const FormSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 15px;
`
export const FormHeader = styled.h1`
	text-transform: uppercase;
	font-size: 2.8rem;
	letter-spacing: 0.1rem;
`
export const FormSectionHeader = styled.h3`
	text-transform: uppercase;
	font-size: 1.3rem;
	letter-spacing: 0.1rem;
  color: var(--color-main-normal);
`
export const InputsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
`
export const CashOnDelivery = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;
  gap: 2rem;
`
export const Image = styled.img`
  /* max-width: 6rem; */
`
export const Description = styled.p`
  font-size: 1.5rem;
  line-height: 2.3rem;
  color: var(--color-gray-800);
  opacity: 0.6;
`

