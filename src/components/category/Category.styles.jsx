import styled from 'styled-components'
import { screenSize } from '../../globalStyles'
import { Link } from 'react-router-dom'
import Arrow_Right from '../../assets/shared/desktop/icon-arrow-right.svg'

export const CategoryContainer = styled.div`
	width: 100%;
	text-align: center;
	${screenSize.sm`
    max-width: 25rem;
  `}

  &:hover {
    .image{
      transform: translateY(-5%);
    }
  }
`

export const CategoryWrapper = styled.div`
	width: 100%;
	min-height: 16rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	background-color: var(--color-gray-300);
	border-radius: var(--radius);
	padding-bottom: 25px;
	z-index: 2000;
	${screenSize.md`
    height: 9.25rem;
		border-radius: var(--radius-2);
  `}
	${screenSize.xmd`
    height: 11.25rem;
		border-radius: var(--radius);
  `}
	${screenSize.xl`
    height: 12.25rem;
  `}
`

export const CategoryImage = styled.img`
	max-height: 12rem;
	margin-bottom: -30%;
	transition: var(--transition);
	${screenSize.md`
    margin-bottom: -33%;
		max-height: 8rem;
  `}
	@media (min-width: 900px) {
		margin-bottom: -30%;
	}
	${screenSize.xmd`
    margin-bottom: -39%;
		max-height: 12rem;
  `}
	@media (min-width: 1100px) {
		margin-bottom: -37%;
	}
	@media (min-width: 1160px) {
		margin-bottom: -36%;
	}
	${screenSize.xl`
    margin-bottom: -35%;
  `}
`

export const CategoryHeader = styled.h2`
	text-transform: uppercase;
	font-size: 1.5rem;
	letter-spacing: 0.1rem;
	margin: 15px 0;
	${screenSize.md`
   font-size: 0.92rem;
  `}
	${screenSize.lg`
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
	${screenSize.md`
  font-size: 0.85rem;
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