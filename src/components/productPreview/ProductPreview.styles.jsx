import styled, { css } from 'styled-components'
import { screenSize } from '../../globalStyles'

const defaultStyles = css`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;

	${screenSize.xmd`
		align-items: start;		
	`}

	${screenSize.xmd`
		gap: 5rem;
	`}
`

export const ProductPreviewContainer = styled.section`
	${defaultStyles}
	margin: 5rem 0;
	& > * {
		${defaultStyles}
	}

	${screenSize.md`
   margin: 3.5rem 0;
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
`
export const ProductPreviewContent = styled.div`
	gap: 2rem;

	${screenSize.md`
    gap: 1.5rem;
	`}
`

export const TopHeading = styled.h6`
	text-transform: uppercase;
	font-size: 1.4rem;
	line-height: 1.5625rem;
	letter-spacing: 1rem;
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
	text-align: center;
	line-height: 3rem;
	font-weight: 700;
	color: var(--color-gray-700);
	max-width: 75%;

	${screenSize.sm`
		font-size: 2.5rem;
		line-height: 2.4rem;	
		max-width: 60%;

  `}

	${screenSize.md`
    font-size: 2.3rem;
		line-height: 2.3rem;	

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
	text-align: center;
	margin: 0 0 10px;
	color: var(--color-gray-800);
	opacity: 0.65;
	letter-spacing: 0.02rem;
	font-weight: 400;

	${screenSize.sm`
		font-size: 1.1rem;
		line-height: 1.6rem;
    max-width: 29rem;
  `}

	${screenSize.md`
		max-width: 26rem;
		font-size: 1rem;
		line-height: 1.56rem;
  `}

	${screenSize.xmd`
		max-width: 30rem;
		font-size: 0.95rem;
		line-height: 1.5rem;
    text-align: left;
		font-weight: 500;
  `}
`