import styled, { css } from 'styled-components'
// import { NavLink, Link } from 'react-router-dom'
import { screenSize } from '../../globalStyles'

const defaultStyles = css`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 2rem;

	${screenSize.sm`
		gap: 1.4rem;
	`}

	${screenSize.md`
		gap: 1.5rem;
	`}
`
const fontStyles = css`
	font-size: 1.5rem;
	line-height: 2.4rem;
	color: var(--color-gray-800);
	font-weight: 400;
	letter-spacing: 0.05rem;
	opacity: 0.65;

	${screenSize.sm`
		font-size: 1.1rem;
		line-height: 1.6rem;
  `}

	${screenSize.md`
		font-size: 1rem;
    line-height: 1.3rem;
	`}
`

export const FeatureContainer = styled.section`
	${defaultStyles}
	padding: 5rem 0;
	margin-bottom: 3rem;

	${screenSize.sm`
				padding: 3rem 0;
	`}
	${screenSize.xmd`
			flex-direction: row;
	`}

	& > * {
		${defaultStyles}
	}
`
export const FeatureInfoContainer = styled.div`
	${screenSize.xmd`
     		width: 60%;
  `}
`

export const FeatureHeader = styled.h2`
	font-size: 2.4rem;
	text-transform: uppercase;

	${screenSize.sm`
		font-size: 1.8rem;
  `}

	${screenSize.md`
		font-size: 2.1rem;
  `}

	${screenSize.xmd`
		font-size: 2rem;
  `}
`

export const FeatureInfo = styled.p`
	${fontStyles}
	white-space: pre-line;

	${screenSize.md`
		font-size: 1rem;
		line-height: 1.56rem;

  `}

	${screenSize.xmd`
		font-size: 0.95rem;
		line-height: 1.5rem;
		font-weight: 500;
		max-width: 95%;
  `}
`
export const FeatureListContainer = styled.div`
	margin-top: 6rem;

	${screenSize.sm`
     	margin-top: 4rem;
  `}
	${screenSize.xmd`
			width: 40%;
			margin: 0;
			padding-left: 8%;	
  `}
`
export const FeatureList = styled.ul`
	${defaultStyles}
	gap: 0.8rem;

	${screenSize.sm`
     		gap: 0.6rem;
  `}

	${screenSize.md`
     		gap: 0.8rem;
  `}
`
export const FeatureListItem = styled.li`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: start;
	gap: 2rem;
	list-style: none;
`

export const FeatureListQty = styled.p`
	${fontStyles}
	font-weight: 600;
	color: var(--color-main-normal);
	opacity: 1;
`

export const FeatureListQtyText = styled.p`
	${fontStyles}
`
