import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

export const CategorySectionContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6rem;
	margin: 5rem 0 11rem;
	padding-top: 5rem;

	${screenSize.md`
    flex-direction: row;
		padding-top: 3rem;
		margin: 4rem 0 7rem;
		gap: 0.5rem;
  `}

	${screenSize.xmd`
		padding-top: 4rem;
		gap: 1.2rem;
  `}

		${screenSize.xl`
		padding-top: 5rem;
		margin: 5rem 0 8rem;
		gap: 1.2rem;
  `}
`