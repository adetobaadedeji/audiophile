import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

export const CategorySectionContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding: 50px 0;

	${screenSize.md`
    flex-direction: row;
		padding: 5rem 0;
		gap: 0.5rem;
  `}

	${screenSize.xmd`
		gap: 1.2rem;
  `}
`