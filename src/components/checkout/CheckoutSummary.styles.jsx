import styled from 'styled-components'
import { screenSize } from '../../globalStyles'
// import { Link } from 'react-router-dom'

export const SummaryContainer = styled.section`
	width: 100%;
	background-color: var(--color-white);
	padding: 3rem 2.5rem;
	border-radius: var(--radius);
	display: flex;
	flex-direction: column;
	gap: 2.5rem;

	${screenSize.sm`
		gap: 2rem;
	`}
	${screenSize.xmd`
    padding: 2rem 2rem;
		gap: 1.8rem;
    min-width: 20rem;
    
  `}
`
export const SummaryHeader = styled.h1`
	font-size: 1.8rem;
	text-transform: Uppercase;
	letter-spacing: 0.1rem;

	${screenSize.sm`
		font-size: 1.3rem;
	`}

	${screenSize.md`
		font-size: 1.2rem;
	`}

  ${screenSize.xmd`
		font-size: 1.12rem;
	`}
`

export const SummaryMain = styled.main`
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;
	gap: 1.2rem;
	min-height: 15rem;

	${screenSize.sm`
			min-height: 10rem;
	`}

  span {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`

export const SummaryCosts = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	${screenSize.sm`
			gap: 0.7rem;
	`}

	${screenSize.xmd`
			gap: 0.5rem;
	`}
`

export const TitleTotal = styled.div`
	display: flex;
	flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.p`
	font-size: 1.3rem;
	color: var(--color-gray-500);
	text-transform: Uppercase;
	font-weight: 600;
	letter-spacing: 0.05rem;

	${screenSize.sm`
		font-size: 1rem;
	`}

	${screenSize.md`
		font-size: 0.9rem;
	`}

  ${screenSize.xmd`
		font-size: 0.8rem;
	`}
`
export const Amount = styled.p`
	font-size: 1.5rem;
	font-weight: 700;
	color: ${({ colored }) =>
		colored ? 'var(--color-main-normal)' : 'var(--color-black)'};

	${screenSize.sm`
		font-size: 1.09rem;
	`}

	${screenSize.md`
		font-size: 1rem;
	`}

  ${screenSize.xmd`
		font-size: 0.95rem;
	`}
`

export const SummaryFooter = styled.footer`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 25px;
`

export const SummaryButton = styled.button`
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
