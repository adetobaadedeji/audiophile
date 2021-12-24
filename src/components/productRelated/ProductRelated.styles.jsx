import styled, { css } from 'styled-components'
import { screenSize } from '../../globalStyles'

const defaultStyles = css`
	width: 100%;
	display: flex;
	flex-direction: column;
  align-items: center;
	gap: 5rem;
`

const headerStyles = css`
	font-size: 2.4rem;
	text-transform: uppercase;
	letter-spacing: 0.05rem;

	${screenSize.sm`
		font-size: 1.8rem;
  `}

	${screenSize.md`
		font-size: 1.6rem;
  `}

  ${screenSize.xmd`
		font-size: ${({ size }) => (size ? '2rem' : '1.5rem')};
  `}
`

export const ProductRelatedWrapper = styled.section`
	${defaultStyles}
	padding: 5rem 0;

	${screenSize.sm`
    gap: 3rem;
    padding: 3rem 0;
  `}

	& > * {
		${defaultStyles}
	}
`
export const Header = styled.h2`
	${headerStyles}
`

export const Main = styled.div`
	gap: 5rem;

	${screenSize.sm`
    gap: 4rem;
  `}

	${screenSize.md`
		flex-direction: row;
     gap: 1rem;
  `}

	${screenSize.xmd`
     gap: 2rem;
  `}
`

export const ProductRelatedContainer = styled.section`
	${defaultStyles}
	gap: 2rem;

	${screenSize.sm`
    gap: 1.5rem;
  `}

	${screenSize.xmd`
    gap: 1.8rem;
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

	${screenSize.md`
			border-radius: var(--radius);
  `}
`
export const TitleHeader = styled.h2`
	${headerStyles}
`

