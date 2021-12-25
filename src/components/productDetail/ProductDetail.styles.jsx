import styled, { css } from 'styled-components'
import { screenSize } from '../../globalStyles'

const defaultStyles = css`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 4rem;

	${screenSize.sm`
		align-items: center;		
	`}

	${screenSize.md`
		align-items: start;		
	`}

	${screenSize.xmd`
		gap: 5rem;
	`}
`

export const ProductDetailContainer = styled.section`
	${defaultStyles}
	margin: 3rem 0  5rem 0;
	& > * {
		${defaultStyles}
	}

	${screenSize.md`
   margin: 2rem 0 3.5rem 0;
  `}

	${screenSize.xmd`
		flex-direction: ${({ index }) => (index % 2 === 0 ? 'row' : 'row-reverse')};
		flex-direction: ${({ index }) => !index && 'row'};
		align-items: center;
		margin: 4rem 0;
		gap: 7rem;
	`}
`
export const ImageContainer = styled.div`
	width: 100%;

	${screenSize.sm`
    width: 60%;
  `}

	${screenSize.md`
    width: 100%;
  `}
`
export const Image = styled.img`
	width: 100%;
  border-radius: var(--radius-2);
`
export const ProductDetailContent = styled.div`
	gap: 2rem;

	${screenSize.md`
    gap: 1.5rem;
	`}
`

export const TopHeading = styled.h6`
	text-transform: uppercase;
	font-size: 1.4rem;
	line-height: 1.5625rem;
	letter-spacing: 0.95rem;
	font-weight: 500;
	color: var(--color-main-normal);

	${screenSize.sm`
		font-size: 1rem;
	letter-spacing: 0.7rem;
		margin-bottom: -0.5rem;
  `}
	${screenSize.md`
		font-size: 1rem;
		letter-spacing: 0.6rem;
  `}
	${screenSize.xmd`
		font-size: 0.9rem;
		letter-spacing: 0.5rem;
  `}
`
export const MainHeading = styled.h1`
	text-transform: uppercase;
	font-size: 2.8rem;
	letter-spacing: 0.125rem;
	line-height: 3rem;
	font-weight: 700;
	color: var(--color-gray-700);
	max-width: 75%;

	${screenSize.sm`
		font-size: 2.1rem;
		line-height: 2.2rem;	
		max-width: 60%;
    text-align: center;
  `}

	${screenSize.md`
    font-size: 2.1rem;
		line-height: 2.2rem;	
    text-align: left;
    max-width: 45%;
  `};

	${screenSize.xmd`
    max-width: 65%;
		text-align: left;
		font-size: 2.3rem;
		line-height: 2.4rem;
  `};
`
export const Description = styled.p`
	font-size: 1.5rem;
	line-height: 2.4rem;
	margin: 0 0 5px;
	color: var(--color-gray-800);
	opacity: 0.65;
	letter-spacing: 0.02rem;
	font-weight: 400;

	${screenSize.sm`
		font-size: 1.1rem;
		line-height: 1.6rem;
    max-width: 29rem;
    text-align: center;
  `}

	${screenSize.md`
		max-width: 36rem;
		font-size: 1rem;
		line-height: 1.56rem;
    text-align: left;

  `}

	${screenSize.xmd`
		max-width: 30rem;
		font-size: 0.95rem;
		line-height: 1.5rem;
    text-align: left;
		font-weight: 500;
  `}
`
export const ProductPrice = styled.p`
	font-size: 1.8rem;
	font-weight: 700;
	margin: 0 0 5px;

	${screenSize.sm`
		font-size: 1.2rem;
  `}
`

export const ButtonsContainer = styled.div`
display: flex;
gap: 1.5rem;
`

export const ControlButtonsContainer = styled.span`
	font-weight: bold;
	display: flex;
`

export const ControlButton = styled.button`
	font-size: 1.5rem;
	display: block;
	padding: 1rem 1.8rem;
	cursor: pointer;
	border: none;
	outline-style: none;
	background-color: var(--color-gray-200);

	&:hover {
		background-color: var(--color-gray-300);
		color: var(--color-main-normal);
	}

	${screenSize.sm`
		font-size: 1.1rem;
    padding: 0.5rem 1rem;

  `}
`
export const CartValue = styled.span`
	text-align: center;
	display: flex;
	align-items: center;
	padding: 0.1rem 1rem;
	font-size: 1.3rem;
	background-color: var(--color-gray-200);

	${screenSize.sm`
		font-size: 0.95rem;
    padding: 0.5rem 1rem;

  `}
`
