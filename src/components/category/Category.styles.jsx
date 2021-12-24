import styled from 'styled-components'
import { screenSize } from '../../globalStyles'
import { Link } from 'react-router-dom'
import Arrow_Right from '../../assets/shared/desktop/icon-arrow-right.svg'

export const CategoryContainer = styled.div`
	width: 100%;
	text-align: center;
	position: relative;

	${screenSize.sm`
    max-width: 25rem;
  `}

	&:hover {
		.image {
			top: -40%;
		}
	}
`

export const CategoryWrapper = styled.div`
	width: 100%;
	min-height: 16.25rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	background-color: var(--color-gray-300);
	border-radius: var(--radius);
	padding-bottom: 25px;

	${screenSize.sm`
    min-height: 13.25rem;
  `}
	${screenSize.md`
    min-height: 9.25rem;
		border-radius: var(--radius-2);
  `}
	${screenSize.xmd`
    min-height: 11.25rem;
		border-radius: var(--radius);
  `}
	${screenSize.xl`
    min-height: 12.25rem;
  `}
`

export const CategoryImage = styled.img`
	max-height: 13.5rem;
	max-width: 50%;
	position: absolute;
	top: -30%;
	left: 50%;
	transform: translateX(-50%);
	margin-bottom: -30%;
	transition: var(--transition);

	${screenSize.md`
  	max-width: 55%;
		top: -32%;
  `}

	${screenSize.xl`
		max-width: 60%;
		top: -35%;
  `}
`

export const CategoryHeader = styled.h2`
	text-transform: uppercase;
	font-size: 1.5rem;
	letter-spacing: 0.1rem;
	margin: 25px 0 15px;
	${screenSize.sm`
	font-size: 1.1rem;
  `}
	${screenSize.md`
   font-size: 1rem;
  `}
`
export const ButtonLink = styled(Link)`
	position: relative;
	margin: 0 auto;
	padding: 1px 0;
	color: var(--color-gray-600);
	font-size: 1.3rem;
	font-weight: 700;
	text-transform: uppercase;
	text-decoration: none;
	letter-spacing: 0.1rem;
	transition: var(--transition);

	${screenSize.sm`
	font-size: 0.95rem;
  `}
	${screenSize.md`
  font-size: 0.86rem;
  `}

	&::after {
		content: url(${Arrow_Right});
		position: absolute;
		bottom: 0;
		right: 5;
		background: none;
		margin-left: 5px;
		transition: var(--transition);
		${screenSize.xmd`
      bottom: 1%;
  `}
	}

	&:hover {
		color: var(--color-main-normal);

		&::after {
			margin-left: 8px;
		}
	}
`