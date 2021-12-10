import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

export const CategorySectionContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
  align-items: center;
	gap: 20px;
	padding: 50px 0;

	${screenSize.xmd`
    flex-direction: row;
  `}

`