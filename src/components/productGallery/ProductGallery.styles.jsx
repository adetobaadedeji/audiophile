import styled, { css } from 'styled-components'
import { screenSize } from '../../globalStyles'

const defaultStyles = css`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	${screenSize.sm`
    gap: 1rem;
  `}

	${screenSize.xmd`
    gap: 1.5rem;
  `}
`

export const GalleryContainer = styled.section`
	${defaultStyles}
	margin-bottom: 5rem;

	${screenSize.sm`
    flex-direction: row;
    max-height: 25rem;
  `}

	${screenSize.xmd`
    max-height: 40rem;
  `}


	& > * {
		${defaultStyles}
	}
`
export const LeftImageContainer = styled.div`
	${screenSize.sm`
      width: 40%;
  `}

	& > * {
		width: 100%;
		height: 100%;
		border-radius: var(--radius);

		${screenSize.sm`
      min-height: 12rem;
  `}
	}
`

export const RightImageContainer = styled.div`
	${screenSize.sm`
      width: 60%;
  `}

	& > * {
		width: 100%;
		height: 100%;
		border-radius: var(--radius);
	}
`

export const FirstImage = styled.img`
	object-fit: cover;
`
export const SecondImage = styled.img`
	object-fit: cover;
`
export const ThirdImage = styled.img`
	object-fit: cover;
`
