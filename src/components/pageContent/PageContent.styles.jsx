import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

export const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;

	${screenSize.xmd`
		width: 50%;
		text-align: left;
		align-items: flex-start;			
  `}
`

export const TopHeading = styled.h6`
	text-transform: uppercase;
	/* font-size: 1.3rem; */
	font-size: 1.6rem;
	line-height: 1.5625rem;
	letter-spacing: 0.625rem;
	font-weight: 300;
	color: var(--color-gray-500);
	${screenSize.md`
		font-size: 1.1rem;
		letter-spacing: 0.6rem;
  `}
`
export const MainHeading = styled.h1`
	text-transform: uppercase;
	max-width: ${({ zx9 }) => (zx9 ? '15rem' : '25rem')};
	margin: 1.5rem 0rem;
	font-size: 3.9rem;
	line-height: 3.6rem;
	font-weight: 600;
	color: var(--color-gray-200);

	${screenSize.md`
		font-size: ${({ zx9 }) => (zx9 ? '3.5rem' : '3.9rem')};
		line-height: ${({ zx9 }) => (zx9 ? '3.5rem' : '4rem')};
		font-weight: 700;
  `};

	${screenSize.xmd`
		font-size: ${({ zx9 }) => (zx9 ? '3rem' : '3.9rem')};
		line-height: ${({ zx9 }) => (zx9 ? '3rem' : '4rem')};
		
  `};
`
export const Description = styled.p`
	font-size: 1.5rem;
	line-height: 2.4rem;
	max-width: 27rem;
	margin: 0 0 30px;
	color: ${({ zx9 }) =>
		zx9 ? 'var(--color-gray-400)' : 'var(--color-gray-500)'};
	letter-spacing: 0.02rem;
	font-weight: 400;

	${screenSize.md`
		max-width: 26rem;
		font-size: 1.1rem;
		line-height: 2rem;
  `}

	${screenSize.xmd`
		width: 25rem;
		font-size: 1rem;
		line-height: 2rem;
  `}
`
