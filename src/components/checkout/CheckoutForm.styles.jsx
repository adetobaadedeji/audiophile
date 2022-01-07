import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

export const FormWrapper = styled.div`
	width: 100%;
	background-color: var(--color-white);
	padding: 3rem 2.5rem;
	border-radius: var(--radius);
	display: flex;
	flex-direction: column;
	gap: 30px;

	${screenSize.md`
    	padding: 2rem 2rem;
  `}
`
export const FormContainer = styled.form`
	width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

	${screenSize.sm`
    font-size: 2rem;
  `}
	${screenSize.md`
    font-size: 1.86rem;
  `}
`
export const FormSectionHeader = styled.h3`
	text-transform: uppercase;
	font-size: 1.3rem;
	letter-spacing: 0.1rem;
	color: var(--color-main-normal);

	${screenSize.sm`
    font-size: 0.93rem;
  `}
	${screenSize.md`
    font-size: 0.88rem;
  `}
`
export const InputsWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	${screenSize.md`
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 0px;
	`}

	h4 {
		text-transform: capitalize;
		font-size: 1.2rem;
		font-weight: 700;
		margin-bottom: 12px;

		${screenSize.sm`
			font-size: 0.858rem;
			margin-bottom: 12px;
			width: 49%;
		`}
		${screenSize.md`
    font-size: 0.8rem;
  `}
	}

	section {
		${screenSize.md`
			width: 49%;
		`}
	}
`
export const CashOnDelivery = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	${screenSize.md`
			flex-direction: row;
		`}
`
export const Image = styled.img`
  /* max-width: 6rem; */
`
export const Description = styled.p`
	font-size: 1.5rem;
	line-height: 2.3rem;
	color: var(--color-gray-800);
	opacity: 0.6;

	${screenSize.sm`
			font-size: 1rem;
			line-height: 1.8rem;
	`}
`

