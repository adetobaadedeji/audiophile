import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

export const ControlButtonsContainer = styled.span`
	font-weight: bold;
	display: flex;
`

export const ControlButton = styled.button`
	font-size: 1.5rem;
	display: block;
	padding: ${({ small }) => (small ? '7px 12px' : '1rem 1.5rem')};
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
    padding: ${({ small }) => (small ? '7px 12px' : '0.5rem 1rem')};

  `}
`
export const CartValue = styled.span`
	text-align: center;
	display: flex;
	align-items: center;
	padding: ${({ small }) => (small ? '7px 10px' : '0.1rem 1rem')};
	font-size: ${({ small }) => (small ? '13px !important' : '1.3rem')};
	background-color: var(--color-gray-200);

	${screenSize.sm`
		font-size: ${({ small }) => (small ? '13px !important' : '0.9rem')};
    padding: ${({ small }) => (small ? '7px 10px' : '0.5rem 1rem')};

  `}
`