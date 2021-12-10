import styled from 'styled-components'
import { screenSize } from '../../globalStyles'

export const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	padding-top: 80px;

	${screenSize.xmd`
		width: 50%;
		text-align: left;
		align-items: flex-start;
			// justify-content: flex-start;
			
  `}/* & > * {
		display: flex;
		align-items: center;
		justify-content: center;

		${screenSize.xmd`
      align-items: flex-start;
			justify-content: flex-start;
			
    `}
	} */
`

export const TopHeading = styled.h6`
	text-transform: uppercase;
	font-size: 1.3rem;
	line-height: 1.5625rem;
	letter-spacing: 0.625rem;
	font-weight: 300;
	color: var(--color-gray-500);
	${screenSize.md`
		font-size: 1.1rem;
		
  `}
`
export const MainHeading = styled.h1`
	text-transform: uppercase;
	max-width: 25rem;
	margin: 1.5rem 0rem;
	font-size: 3.4rem;
	line-height: 3.6rem;
	font-weight: 600;

	${screenSize.md`
		font-size: 3.9rem;
		line-height: 4rem;
		font-weight: 700;
  `}
`
export const Description = styled.p`
	font-size: 1.3rem;
	line-height: 2.2rem;
	max-width: 25rem;
	margin: 0 0 30px;
	color: var(--color-gray-500);
	letter-spacing: 0.01rem;
	font-weight: 400;

	${screenSize.md`
		max-width: 26rem;
		font-size: 1.1rem;
		line-height: 2rem;
  `}

	${screenSize.xmd`
		max-width: 25rem;
		font-size: 1rem;
		line-height: 2rem;
  `}
`
